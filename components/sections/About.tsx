"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Linkedin,
  Github,
  Twitter,
  Youtube,
  Download,
  MapPin,
} from "lucide-react";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/saadrehman", color: "#0077b5" },
  { icon: Github, label: "GitHub", href: "https://github.com/saadrehman", color: "#6e5494" },
  { icon: Twitter, label: "Twitter / X", href: "https://twitter.com/saadrehman", color: "#1da1f2" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@saadrehman", color: "#ff0000" },
];

export function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left — Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center lg:items-start"
          >
            {/* Profile image with glow */}
            <div className="relative mb-8">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-2xl opacity-30 scale-110" />
              {/* Ring border */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
                <div className="w-full h-full rounded-full bg-muted overflow-hidden flex items-center justify-center">
                  {/* Placeholder avatar — replace with next/image when headshot is available */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                    <span className="font-display text-6xl font-bold gradient-text">
                      SR
                    </span>
                  </div>
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-2 -right-2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-green-400">Open to Work</span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <MapPin className="w-4 h-4" />
              <span>Lahore, Pakistan · Available Worldwide</span>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group w-10 h-10 rounded-xl border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-opacity-60 transition-all duration-200 hover:-translate-y-0.5"
                  style={{ "--hover-color": color } as React.CSSProperties}
                >
                  <Icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4">
                About Me
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Building AI-First Systems That Move Businesses Forward
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m Saad Rehman — an AI & ML Engineer and Full Stack Developer with
                3–5 years of experience turning complex technical challenges into
                clean, scalable solutions. I specialize in building autonomous AI agents,
                intelligent automation pipelines, and full-stack SaaS products that
                deliver measurable ROI.
              </p>
              <p>
                Beyond client work, I&apos;ve built a community of 150,000+ professionals
                across LinkedIn, YouTube, and my newsletter — where I share practical
                insights on AI adoption, automation strategy, and the future of work.
              </p>
              <p>
                My approach is simple: understand the business first, then engineer
                the most effective solution. No over-engineering, no bloat — just
                systems that work reliably at scale.
              </p>
            </div>

            {/* Key stats inline */}
            <div className="grid grid-cols-2 gap-4 py-2">
              {[
                { value: "150k+", label: "Community Members" },
                { value: "50+", label: "Projects Delivered" },
                { value: "3–5 Yrs", label: "Industry Experience" },
                { value: "10+", label: "Tech Integrations" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="p-4 rounded-xl border border-border bg-card/50"
                >
                  <div className="font-display text-2xl font-bold gradient-text mb-0.5">
                    {value}
                  </div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>

            {/* Download CV button */}
            <a
              href="/saad-rehman-cv.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-card/50 hover:bg-muted/50 text-foreground font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
