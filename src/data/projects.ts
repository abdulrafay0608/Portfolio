export type Project = {
	title: string;
	category: string;
	year: string;
	description: string;
	tags: string[];
	accent: "sky" | "lime";
	href: string;
	featured: boolean;
	status: string;
};

export const projects: Project[] = [
	{
		title: "ERP - Inventory & Production Management",
		category: "Operations platform",
		year: "2025 - Present",
		description:
			"A full-scale ERP system for a slipper manufacturing factory, managing raw material, production stages, stock tracking, and operational reports.",
		tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
		accent: "sky",
		href: "https://aero-style-erp.vercel.app",
		featured: true,
		status: "Ongoing",
	},
	{
		title: "CRM & Ticketing System",
		category: "Customer support",
		year: "2024 - 2025",
		description:
			"A private-client support platform with ticket creation, assignment, priority management, status tracking, and role-based access for agents and admins.",
		tags: ["React", "Node.js", "Express", "MongoDB", "RBAC"],
		accent: "lime",
		href: "/contact",
		featured: true,
		status: "Private client",
	},
	{
		title: "Human Generated Prompts",
		category: "AI community platform",
		year: "2024",
		description:
			"A platform for sharing and discovering human-written AI prompts through user submissions, categorization, and search.",
		tags: ["Next.js", "Node.js", "MongoDB", "REST API"],
		accent: "sky",
		href: "https://humangeneratedprompts.netlify.app",
		featured: false,
		status: "Live product",
	},
];
