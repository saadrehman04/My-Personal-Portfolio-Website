"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Users, Briefcase, Clock, Wrench } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 150000,
    suffix: "+",
    label: "Audience Reached",
    description: "Across LinkedIn, YouTube & Newsletter",
    color: "#3b82f6",
  },
  {
    icon: Briefcase,
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
    description: "AI agents, automations & full-stack apps",
    color: "#8b5cf6",
  },
  {
    icon: Clock,
    value: 5,
    prefix: "3–",
    suffix: " Yrs",
    label: "Experience",
    description: "Building AI & automation systems",
    color: "#10b981",
  },
  {
    icon: Wrench,
    value: 10,
    suffix: "+",
    label: "Tools & Integrations",
    description: "From LangChain to n8n to Supabase",
    color: "#f97316",
  },
];

export function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 relative">
      {/* Subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm card-hover"
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${stat.color}20` }}
              >
                <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
              </div>

              {/* Number */}
              <div className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-1">
                {stat.prefix && (
                  <span className="text-2xl lg:text-3xl">{stat.prefix}</span>
                )}
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    delay={i * 0.15}
                    separator=","
                  />
                ) : (
                  "0"
                )}
                <span className="text-2xl lg:text-3xl">{stat.suffix}</span>
              </div>

              {/* Label */}
              <p className="font-semibold text-foreground text-sm mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {stat.description}
              </p>

              {/* Accent bottom border on hover */}
              <div
                className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ background: stat.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
