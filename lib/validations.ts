import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  budget: z.enum(
    ["under-500", "500-1000", "1k-plus", "5k-plus", "not-sure"],
    { required_error: "Please select a budget range" }
  ),
  projectType: z.enum(
    ["ai-agents", "automation", "full-stack", "saas", "consulting", "other"],
    { required_error: "Please select a project type" }
  ),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(2000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const budgetLabels: Record<ContactFormData["budget"], string> = {
  "under-500": "Under $500",
  "500-1000": "$500 – $1000",
  "1k-plus": "$1000+",
  "5k-plus": "$5000+",
  "not-sure": "Not sure yet",
};

export const projectTypeLabels: Record<ContactFormData["projectType"], string> = {
  "ai-agents": "AI Agent Development",
  "automation": "Workflow Automation",
  "full-stack": "Full Stack Development",
  "saas": "SaaS Product Building",
  "consulting": "Consulting & Strategy",
  "other": "Something else",
};
