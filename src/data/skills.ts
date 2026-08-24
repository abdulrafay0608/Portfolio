import type { LucideIcon } from "lucide-react";
import { Code2, Database, GitBranch, Server } from "lucide-react";

export type SkillGroup = {
  number: string;
  title: string;
  description: string;
  technologies: string[];
};

export type TechCategory = "frontend" | "backend" | "db" | "tools";

export type TechSkill = {
  name: string;
  cat: TechCategory;
};

export type SkillCategory = {
  key: TechCategory;
  label: string;
  description: string;
  position: string;
  icon: LucideIcon;
};

export const techSkills: TechSkill[] = [
  { name: "React", cat: "frontend" },
  { name: "Next.js", cat: "frontend" },
  { name: "TypeScript", cat: "frontend" },
  { name: "JavaScript", cat: "frontend" },
  { name: "Tailwind", cat: "frontend" },
  { name: "React Native", cat: "frontend" },
  { name: "Redux", cat: "frontend" },
  { name: "Node.js", cat: "backend" },
  { name: "Express", cat: "backend" },
  { name: "REST API", cat: "backend" },
  { name: "JWT", cat: "backend" },
  { name: "Firebase", cat: "backend" },
  { name: "MongoDB", cat: "db" },
  { name: "MySQL", cat: "db" },
  { name: "Mongoose", cat: "db" },
  { name: "Git", cat: "tools" },
  { name: "Postman", cat: "tools" },
  { name: "Figma", cat: "tools" },
];

export const skillGroups: SkillGroup[] = [
  {
    number: "01",
    title: "Full-stack web applications",
    description:
      "Complete products with thoughtful interfaces, secure APIs, authentication, databases, and deployment-ready foundations.",
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
  },
  {
    number: "02",
    title: "AI-powered experiences",
    description:
      "Useful AI features that make products easier to explore, operate, and understand instead of adding complexity for its own sake.",
    technologies: ["AI Assistants", "RAG", "Embeddings", "Vector DBs", "AI UX"],
  },
  {
    number: "03",
    title: "Business systems",
    description:
      "Operational tools for teams: HRMS, CRM, ERP, dashboards, workflow automation, and reports built around real processes.",
    technologies: [
      "REST APIs",
      "RBAC",
      "Automation",
      "Reporting",
      "TypeScript",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  { key: "frontend", label: "Frontend", description: "Shape the experience", icon: Code2, position: "lg:left-8 lg:top-8" },
  { key: "backend", label: "Backend", description: "Power the product", icon: Server, position: "lg:right-8 lg:top-8" },
  { key: "db", label: "Data", description: "Keep it dependable", icon: Database, position: "lg:bottom-8 lg:left-8" },
  { key: "tools", label: "Tools & Engineering", description: "Ship with confidence", icon: GitBranch, position: "lg:bottom-8 lg:right-8" },
];

export type SkillCapability = {
  number: string;
  title: string;
  description: string;
  technologies: string[];
};

export const skillCapabilities: SkillCapability[] = [
  { number: "01", title: "Full-Stack Applications", description: "Building complete web applications from frontend interfaces to APIs, databases, authentication, and deployment.", technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB"] },
  { number: "02", title: "AI-Powered Experiences", description: "AI assistants, AI integrations, and intelligent interfaces where they make products easier to explore and use.", technologies: ["AI Assistants", "RAG", "Embeddings", "AI UX"] },
  { number: "03", title: "Business Systems", description: "ERP, CRM, inventory, production workflows, reporting, authentication, and operational systems.", technologies: ["REST API", "JWT", "RBAC", "Reporting"] },
];
