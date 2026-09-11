"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Clock, Linkedin, ArrowUpRight, Send, CheckCircle } from "lucide-react";
import {
  contactSchema,
  type ContactFormData,
  budgetLabels,
  projectTypeLabels,
} from "@/lib/validations";

export function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send message");
      setSubmitted(true);
      reset();
    } catch (e) {
      setError("Something went wrong. Please email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Contact
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground text-lg">
            Have a project in mind? Drop me a message and I&apos;ll get back to
            you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-border bg-card/50 p-6 sm:p-8 backdrop-blur-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
                  <CheckCircle className="w-16 h-16 text-green-500" />
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground max-w-sm">
                    Thanks for reaching out. I&apos;ll review your project details
                    and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-sm text-blue-500 hover:text-blue-400 font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Full Name
                      </label>
                      <input
                        {...register("name")}
                        placeholder="John Smith"
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Email Address
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Budget + Project type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Budget Range
                      </label>
                      <select
                        {...register("budget")}
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      >
                        <option value="">Select budget</option>
                        {Object.entries(budgetLabels).map(([val, label]) => (
                          <option key={val} value={val}>
                            {label}
                          </option>
                        ))}
                      </select>
                      {errors.budget && (
                        <p className="text-xs text-red-400 mt-1">{errors.budget.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Project Type
                      </label>
                      <select
                        {...register("projectType")}
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      >
                        <option value="">Select type</option>
                        {Object.entries(projectTypeLabels).map(([val, label]) => (
                          <option key={val} value={val}>
                            {label}
                          </option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <p className="text-xs text-red-400 mt-1">{errors.projectType.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Message
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {error && (
                    <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-2.5">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right — Contact info — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Info cards */}
            <div className="rounded-2xl border border-border bg-card/50 p-6 space-y-5">
              <h3 className="font-display font-semibold text-foreground text-lg">
                Direct Contact
              </h3>

              <a
                href="mailto:saadrehman034@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-blue-500" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">Email</div>
                  <div className="text-foreground font-medium">saadrehman034@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-3 text-sm">
                <div className="w-9 h-9 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-green-500" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">Response Time</div>
                  <div className="text-foreground font-medium">Usually within 24 hours</div>
                </div>
              </div>

              <a
                href="https://linkedin.com/in/saadrehman"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/20 transition-colors">
                  <Linkedin className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">LinkedIn</div>
                  <div className="text-foreground font-medium">linkedin.com/in/saadrehman</div>
                </div>
              </a>
            </div>

            {/* Calendly CTA */}
            <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-6 text-center">
              <div className="text-4xl mb-3">📅</div>
              <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                Prefer a call?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Book a free 30-minute discovery call and we&apos;ll map out your project
                together.
              </p>
              <a
                href="https://calendly.com/saadrehman"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
              >
                Book a Free Call
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
