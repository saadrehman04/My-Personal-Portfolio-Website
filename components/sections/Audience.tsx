"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Linkedin, Youtube, Mail, ArrowUpRight } from "lucide-react";

const platforms = [
  {
    icon: Linkedin,
    name: "LinkedIn",
    handle: "@saadrehman",
    stat: "10k+ Followers",
    description: "Daily insights on AI, automation, and building tech products",
    color: "#0077b5",
    href: "https://www.linkedin.com/in/saad-rehman-8b42282b3"
  },
  {
    icon: Youtube,
    name: "YouTube",
    handle: "@SaadRehman.",
    stat: "10k+ Subscribers",
    description: "In-depth tutorials on LangChain, n8n, and AI product building",
    color: "#ff0000",
    href: "https://youtube.com/@SaadRehman.",
  },
  {
    icon: Mail,
    name: "Newsletter",
    handle: "AI & Automation Weekly",
    stat: "20k+ Subscribers",
    description: "Weekly deep dives on AI tools, automation stacks, and real case studies",
    color: "#3b82f6",
    href: "#contact",
  },
];

export function Audience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Content & Community
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Join 150,000+ Professionals
            <br />
            <span className="gradient-text">Learning AI & Automation</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Every week I share actionable insights, real case studies, and
            practical tutorials to help professionals stay ahead in the age of AI.
          </p>
        </motion.div>

        {/* Platform cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {platforms.map((platform, i) => (
            <motion.a
              key={platform.name}
              href={platform.href}
              target={platform.href.startsWith("http") ? "_blank" : undefined}
              rel={platform.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-border bg-card/50 p-6 overflow-hidden cursor-pointer"
            >
              {/* Gradient bg on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at top left, ${platform.color}10, transparent 60%)`,
                }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${platform.color}20` }}
                >
                  <platform.icon
                    className="w-6 h-6"
                    style={{ color: platform.color }}
                  />
                </div>

                {/* Name + stat */}
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-display font-semibold text-foreground text-lg">
                      {platform.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{platform.handle}</p>
                  </div>
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-lg"
                    style={{
                      background: `${platform.color}15`,
                      color: platform.color,
                    }}
                  >
                    {platform.stat}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {platform.description}
                </p>

                <div
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5"
                  style={{ color: platform.color }}
                >
                  Follow for Free
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
