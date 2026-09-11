export interface TechItem {
  name: string;
  category: "ai-ml" | "automation" | "frontend" | "backend" | "devops";
  color: string;
}

export const techStack: TechItem[] = [
  // AI / ML
  { name: "OpenAI", category: "ai-ml", color: "#10a37f" },
  { name: "LangChain", category: "ai-ml", color: "#1c3c3c" },
  { name: "HuggingFace", category: "ai-ml", color: "#ff9d00" },
  { name: "Python", category: "ai-ml", color: "#3776ab" },
  { name: "TensorFlow", category: "ai-ml", color: "#ff6f00" },
  { name: "Pinecone", category: "ai-ml", color: "#1c3c3c" },

  // Automation
  { name: "n8n", category: "automation", color: "#ea4b71" },
  { name: "Make", category: "automation", color: "#9b59b6" },
  { name: "Zapier", category: "automation", color: "#ff4a00" },
  { name: "Airtable", category: "automation", color: "#18bfff" },
  { name: "Webhooks", category: "automation", color: "#6366f1" },

  // Frontend
  { name: "React", category: "frontend", color: "#61dafb" },
  { name: "Next.js", category: "frontend", color: "#000000" },
  { name: "TypeScript", category: "frontend", color: "#3178c6" },
  { name: "Tailwind CSS", category: "frontend", color: "#06b6d4" },

  // Backend
  { name: "Node.js", category: "backend", color: "#339933" },
  { name: "FastAPI", category: "backend", color: "#009688" },
  { name: "PostgreSQL", category: "backend", color: "#336791" },
  { name: "Supabase", category: "backend", color: "#3ecf8e" },

  // DevOps
  { name: "Vercel", category: "devops", color: "#000000" },
  { name: "Docker", category: "devops", color: "#2496ed" },
  { name: "GitHub Actions", category: "devops", color: "#2088ff" },
];

export const techCategories = [
  { id: "ai-ml", label: "AI / ML", emoji: "🤖" },
  { id: "automation", label: "Automation", emoji: "⚡" },
  { id: "frontend", label: "Frontend", emoji: "🎨" },
  { id: "backend", label: "Backend", emoji: "🔧" },
  { id: "devops", label: "DevOps", emoji: "🚀" },
] as const;
