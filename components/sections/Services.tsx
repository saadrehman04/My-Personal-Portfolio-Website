"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Bot,
  Zap,
  Code2,
  Brain,
  Layers,
  Lightbulb,
  ArrowRight,
  Check,
} from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bot,
  Zap,
  Code2,
  Brain,
  Layers,
  Lightbulb,
};

export function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Services
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What I Can Build For You
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            From autonomous AI agents to full-stack SaaS products — I deliver
            end-to-end solutions that create real business impact.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl border border-border bg-card/50 p-6 card-hover overflow-hidden cursor-pointer"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: `${service.accentColor}20`,
                      border: `1px solid ${service.accentColor}30`,
                    }}
                  >
                    {Icon && (
                      <Icon
                        className="w-6 h-6"
                        {...({ style: { color: service.accentColor } } as any)}
                      />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-6">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <Check
                          className="w-3.5 h-3.5 flex-shrink-0"
                          style={{ color: service.accentColor }}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Learn more */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 group-hover:gap-2.5"
                    style={{ color: service.accentColor }}
                  >
                    Get Started
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
