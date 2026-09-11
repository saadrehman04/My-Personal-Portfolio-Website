import {
  Bot,
  Zap,
  Code2,
  Brain,
  Layers,
  Lightbulb,
} from "lucide-react";

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  bullets: string[];
  gradient: string;
  accentColor: string;
}

export const services: Service[] = [
  {
    id: "ai-agents",
    icon: "Bot",
    title: "AI Agent Development",
    description:
      "Autonomous agents and LLM-powered workflows that make decisions, take actions, and deliver results — with minimal human input.",
    bullets: [
      "Custom LangChain & LangGraph agents",
      "Multi-agent orchestration systems",
      "Tool-use & function calling",
      "RAG-powered knowledge bases",
    ],
    gradient: "from-blue-500/10 to-purple-500/10",
    accentColor: "#3b82f6",
  },
  {
    id: "automation",
    icon: "Zap",
    title: "Workflow Automation",
    description:
      "Connect your tools, eliminate repetitive work, and build scalable pipelines using Make, Zapier, n8n, and custom API integrations.",
    bullets: [
      "n8n & Make.com workflows",
      "Cross-platform data sync",
      "Custom webhook pipelines",
      "CRM & marketing automation",
    ],
    gradient: "from-emerald-500/10 to-blue-500/10",
    accentColor: "#10b981",
  },
  {
    id: "full-stack",
    icon: "Code2",
    title: "Full Stack Development",
    description:
      "Production-grade SaaS apps, web platforms, and APIs built with modern frameworks — designed to scale from day one.",
    bullets: [
      "Next.js & React applications",
      "FastAPI & Node.js backends",
      "Supabase & PostgreSQL",
      "REST & GraphQL APIs",
    ],
    gradient: "from-purple-500/10 to-pink-500/10",
    accentColor: "#8b5cf6",
  },
  {
    id: "ml-engineering",
    icon: "Brain",
    title: "AI & ML Engineering",
    description:
      "Integrate cutting-edge AI models into your product — from NLP pipelines and fine-tuned models to computer vision and data pipelines.",
    bullets: [
      "OpenAI & HuggingFace integration",
      "Model fine-tuning & evaluation",
      "NLP & text classification",
      "ML data pipelines",
    ],
    gradient: "from-orange-500/10 to-red-500/10",
    accentColor: "#f97316",
  },
  {
    id: "saas",
    icon: "Layers",
    title: "SaaS Product Building",
    description:
      "End-to-end SaaS product development — from architecture and design to auth, billing, multi-tenancy, and deployment.",
    bullets: [
      "MVP to production-ready",
      "Stripe billing integration",
      "Multi-tenant architecture",
      "Auth & role-based access",
    ],
    gradient: "from-cyan-500/10 to-blue-500/10",
    accentColor: "#06b6d4",
  },
  {
    id: "consulting",
    icon: "Lightbulb",
    title: "Consulting & Strategy",
    description:
      "AI adoption roadmaps, automation audits, and technical strategy for businesses ready to unlock their next stage of growth.",
    bullets: [
      "AI readiness assessment",
      "Automation opportunity audit",
      "Tech stack recommendations",
      "Fractional CTO advisory",
    ],
    gradient: "from-yellow-500/10 to-orange-500/10",
    accentColor: "#eab308",
  },
];
