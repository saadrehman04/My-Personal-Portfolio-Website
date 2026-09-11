"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

const tabs = [
  { id: "all", label: "All" },
  { id: "ai-agents", label: "AI Agents" },
  { id: "automation", label: "Automation" },
  { id: "full-stack", label: "Full Stack" },
  { id: "saas", label: "SaaS" },
] as const;

export function Work() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filtered =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="work" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Case Studies
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Work That Speaks for Itself
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground text-lg">
            Real projects. Real results. Each case study covers the problem,
            solution, and measurable outcome.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                  : "border border-border bg-card/50 text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} inView={inView} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: Project;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="group relative rounded-2xl border border-border bg-card/50 overflow-hidden card-hover"
    >
      {/* Gradient header */}
     <div className="h-40 relative overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
  />

  {/* overlay */}
  <div className="absolute inset-0 bg-black/40" />

  {/* category tag */}
  <div className="absolute top-4 left-4">
    <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-black/40 text-white backdrop-blur-sm border border-white/10">
      {project.categoryLabel}
    </span>
  </div>
</div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-semibold text-foreground text-lg mb-1.5 group-hover:text-blue-500 transition-colors">
          {project.title}
        </h3>

        {/* Result pill */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          {project.result}
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-xs bg-muted border border-border text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-0.5 rounded text-xs bg-muted border border-border text-muted-foreground">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* CTA */}
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-500 hover:text-blue-400 transition-colors group/link"
        >
          View Case Study
          <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
