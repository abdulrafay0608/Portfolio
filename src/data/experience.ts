export type Experience = {
	role: string;
	company: string;
	context?: string;
	period: string;
	summary: string;
	highlights: string[];
	current?: boolean;
};

export const experience: Experience[] = [
	{
		role: "Full Stack Developer",
		company: "Freelance",
		context: "ERP System",
		period: "Sep 2025 - Present",
		summary:
			"Developing an inventory and production management ERP for a manufacturing client.",
		highlights: [
			"Database schema design, REST APIs, React frontend, and reporting",
			"Stock tracking, multi-stage production monitoring, and automated reports",
		],
		current: true,
	},
	{
		role: "Full Stack Developer",
		company: "Freelance",
		context: "CRM & Ticketing System",
		period: "Dec 2024 - Jan 2025",
		summary:
			"Designed and delivered a CRM and ticketing system for customer support operations.",
		highlights: [
			"Ticket lifecycle management with status, priority, and assignment workflows",
			"JWT authentication with role-based access control for multiple user types",
		],
	},
	{
		role: "MERN Stack Developer",
		company: "Jafferjees Pvt Ltd",
		context: "Internship",
		period: "Aug 2024 - Dec 2024",
		summary:
			"Built core HRMS and payroll modules serving more than 100 employees.",
		highlights: [
			"Employee onboarding, salary management, and automated payroll generation",
			"Integrated ZKTeco biometric attendance and delivered Excel and print reports",
		],
	},
];
