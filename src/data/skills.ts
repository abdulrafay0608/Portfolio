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
		technologies: ["REST APIs", "RBAC", "Automation", "Reporting", "TypeScript"],
	},
];
