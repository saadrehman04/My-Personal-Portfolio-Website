"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PhoneCall, Hammer, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Discovery Call",
    description:
      "We start with a focused 30-minute call to understand your goals, pain points, and the specific outcomes you need. No fluff — just clarity.",
    color: "#3b82f6",
    details: ["Define success metrics", "Map current workflow gaps", "Assess technical feasibility"],
  },
  {
    number: "02",
    icon: Hammer,
    title: "Build & Automate",
    description:
      "I design, develop, and rigorously test the solution — keeping you in the loop with weekly updates and a clear milestone plan.",
    color: "#8b5cf6",
    details: ["Architecture design", "Iterative development sprints", "Testing & quality assurance"],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Scale",
    description:
      "Your solution goes live with full documentation, team training, and my direct support for 30 days post-launch to ensure everything scales smoothly.",
    color: "#10b981",
    details: ["Smooth deployment", "Team training & handover", "30-day post-launch support"],
  },
];

export function Process() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="process" className="py-24 bg-muted/20 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold uppercase tracking-widest mb-4">
            How It Works
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            From Idea to Working System
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground text-lg">
            A streamlined 3-step process designed to deliver fast, without cutting corners.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-1/6 right-1/6 h-px bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-emerald-500/50" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step number + icon circle */}
                <div className="relative mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-0 relative z-10 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${step.color}20`,
                      border: `2px solid ${step.color}40`,
                      boxShadow: `0 0 30px ${step.color}20`,
                    }}
                  >
                    <step.icon className="w-7 h-7" style={{ color: step.color }} />
                  </div>
                  {/* Step number badge */}
                  <div
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: step.color }}
                  >
                    {i + 1}
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-xs">
                  {step.description}
                </p>

                {/* Detail bullets */}
                <ul className="space-y-2 w-full max-w-xs">
                  {step.details.map((d) => (
                    <li
                      key={d}
                      className="flex items-center justify-center gap-2 text-xs text-muted-foreground py-1.5 px-3 rounded-lg bg-muted/40 border border-border"
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: step.color }}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="https://calendly.com/saadrehman"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
          >
            Start With a Discovery Call
            <Rocket className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
