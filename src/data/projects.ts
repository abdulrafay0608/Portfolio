export type Project = {
  slug: string;
  title: string;
  category: string;
  filters: string[];
  year: string;
  description: string;
  tags: string[];
  accent: "sky" | "lime";
  href: string;
  featured: boolean;
  status: string;
  type?: string;
  role?: string;
  overview?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  architecture?: string;
};

export const projectFilters = [
  "All",
  "AI",
  "Full-Stack",
  "Business Systems",
  "Client Work",
  "Experiments",
] as const;

export const projects: Project[] = [
  {
    slug: "manufacturing-erp",
    title: "ERP - Inventory & Production Management",
    category: "Operations platform",
    filters: ["Full-Stack", "Business Systems", "Client Work"],
    year: "2025 - Present",
    description:
      "A full-scale ERP system for a slipper manufacturing factory, managing raw material, production stages, stock tracking, and operational reports.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    accent: "sky",
    href: "https://aero-style-erp.vercel.app",
    featured: true,
    status: "Ongoing",
    type: "Freelance / Client",
    role: "Full-Stack Developer",
    overview:
      "A full-stack manufacturing management system covering materials, inventory, production workflows, costing, and operational reporting.",
    problem:
      "Manufacturing operations needed one place to track raw materials, production stages, stock movement, and reports.",
    solution:
      "A connected ERP workflow that brings operational records, production progress, and reporting into a single system.",
    features: [
      "Raw material and stock tracking",
      "Multi-stage production monitoring",
      "Operational reports and costing workflows",
    ],
    architecture:
      "React frontend connected to REST APIs built with Node.js and Express, with MongoDB persistence and JWT authentication.",
  },
  {
    slug: "crm-ticketing-system",
    title: "CRM & Ticketing System",
    category: "Customer support",
    filters: ["Full-Stack", "Business Systems", "Client Work"],
    year: "2024 - 2025",
    description:
      "A private-client support platform with ticket creation, assignment, priority management, status tracking, and role-based access for agents and admins.",
    tags: ["React", "Node.js", "Express", "MongoDB", "RBAC"],
    accent: "lime",
    href: "/contact",
    featured: true,
    status: "Private client",
    type: "Freelance / Client",
    role: "Full-Stack Developer",
    overview:
      "A private-client support platform for managing customer tickets, assignments, priorities, statuses, and user access.",
    problem:
      "Support teams needed a clear workflow for routing customer issues and keeping ticket ownership visible.",
    solution:
      "A role-aware CRM and ticketing system with a structured lifecycle from ticket creation through resolution.",
    features: [
      "Ticket creation, assignment, and priority management",
      "Status tracking across the ticket lifecycle",
      "JWT authentication and role-based access control",
    ],
    architecture:
      "React frontend backed by Node.js and Express REST APIs, with MongoDB storage and JWT-based access control.",
  },
  {
    slug: "human-generated-prompts",
    title: "Human Generated Prompts",
    category: "AI community platform",
    filters: ["AI", "Full-Stack", "Experiments"],
    year: "2024",
    description:
      "A platform for sharing and discovering human-written AI prompts through user submissions, categorization, and search.",
    tags: ["Next.js", "Node.js", "MongoDB", "REST API"],
    accent: "sky",
    href: "https://humangeneratedprompts.netlify.app",
    featured: false,
    status: "Live product",
    type: "Personal",
    role: "Full-Stack Developer",
    overview:
      "A platform for sharing and discovering human-written AI prompts through submissions, categorization, and search.",
    problem:
      "People needed a focused way to discover useful prompts created by other people rather than sift through scattered examples.",
    solution:
      "A searchable community product that organizes prompt submissions into a browsable, categorized collection.",
    features: [
      "Prompt submissions",
      "Categorization and discovery",
      "Search across the prompt collection",
    ],
    architecture:
      "Next.js interface connected to Node.js REST APIs with MongoDB persistence.",
  },
];
