import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, CheckCircle } from "lucide-react";
import { projects } from "@/data/projects";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: { title: project.title, description: project.description },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Hero gradient header */}
      <div className={`relative bg-gradient-to-br ${project.gradient} border-b border-border py-20`}>
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Work
          </Link>

          <div className="mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/20 text-white/80 border border-white/10">
              {project.categoryLabel}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {project.title}
          </h1>

          {/* Result highlight */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-semibold mb-6">
            <CheckCircle className="w-4 h-4" />
            Result: {project.result}
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Problem */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center text-sm font-bold text-red-400">
                  01
                </div>
                <h2 className="font-display text-xl font-bold text-foreground">
                  The Problem
                </h2>
              </div>
              <div className="pl-11">
                <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
              </div>
            </section>

            {/* Divider */}
            <div className="h-px bg-border" />

            {/* Solution */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-sm font-bold text-blue-400">
                  02
                </div>
                <h2 className="font-display text-xl font-bold text-foreground">
                  The Solution
                </h2>
              </div>
              <div className="pl-11">
                <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>
            </section>

            <div className="h-px bg-border" />

            {/* Outcome */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center text-sm font-bold text-green-400">
                  03
                </div>
                <h2 className="font-display text-xl font-bold text-foreground">
                  The Outcome
                </h2>
              </div>
              <div className="pl-11">
                <p className="text-muted-foreground leading-relaxed">{project.outcome}</p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Tech stack */}
            <div className="rounded-2xl border border-border bg-card/50 p-5">
              <h3 className="font-display font-semibold text-foreground text-sm mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-muted border border-border text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-5 text-center">
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Want a similar solution for your business?
              </p>
              <a
                href="https://calendly.com/saadrehman"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/25"
              >
                Book a Free Call
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Other projects */}
            <div className="rounded-2xl border border-border bg-card/50 p-5">
              <h3 className="font-display font-semibold text-foreground text-sm mb-3">
                More Case Studies
              </h3>
              <div className="space-y-2">
                {projects
                  .filter((p) => p.slug !== project.slug)
                  .slice(0, 3)
                  .map((p) => (
                    <Link
                      key={p.slug}
                      href={`/work/${p.slug}`}
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1.5 border-b border-border last:border-0"
                    >
                      {p.title}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
