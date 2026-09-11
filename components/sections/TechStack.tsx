"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { techStack, techCategories } from "@/data/techStack";

export function TechStack() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="stack" className="py-24 bg-muted/20 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Tech Stack
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tools & Technologies I Work With
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground text-lg">
            A curated stack of battle-tested tools that power every project
            I deliver.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-10">
          {techCategories.map((cat, catIndex) => {
            const items = techStack.filter((t) => t.category === cat.id);
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                {/* Category label */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">{cat.emoji}</span>
                  <h3 className="font-display font-semibold text-foreground text-base">
                    {cat.label}
                  </h3>
                  <div className="flex-1 h-px bg-border" />
                </div>

                {/* Tech items */}
                <div className="flex flex-wrap gap-2.5">
                  {items.map((tech, i) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.35,
                        delay: catIndex * 0.1 + i * 0.05,
                      }}
                      whileHover={{ y: -2, scale: 1.03 }}
                      className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-border bg-card/60 backdrop-blur-sm hover:border-opacity-60 transition-all duration-200 cursor-default"
                      style={{
                        // On hover, tint the border with the tech's color
                      }}
                    >
                      {/* Color dot */}
                      <div
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ background: tech.color === "#000000"
                          ? "var(--foreground)"
                          : tech.color
                        }}
                      />
                      <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
