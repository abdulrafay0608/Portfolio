export type AboutCard = readonly [string, string, string];

export const aboutPreview = {
  title: ["Building with code,", "thinking beyond code."],
  intro:
    "I'm Abdul Rafay, a Full-Stack Developer focused on building modern web applications, digital products, and AI-powered experiences.",
  description:
    "My work combines full-stack engineering with product thinking. I enjoy turning ideas and real-world problems into interfaces and systems that are useful, scalable, and easy to understand.",
  linkLabel: "Explore my journey",
  highlights: [
    { label: "Full-Stack", title: "Web Applications", description: "Building complete applications across frontend, backend, APIs, authentication, databases, and deployment." },
    { label: "Product", title: "Web & Mobile", description: "Creating responsive web experiences and mobile applications with a strong focus on usability and interface quality." },
    { label: "AI Engineering", title: "Intelligent Products", description: "Exploring AI assistants, RAG systems, embeddings, vector databases, and AI-powered product experiences." },
  ],
};

export const aboutBuildAreas: AboutCard[] = [
  ["01", "Web Applications", "Clear, responsive and useful digital experiences."],
  ["02", "Business Systems", "ERP, CRM, inventory and workflow-driven software."],
  ["03", "AI-Powered Experiences", "AI-assisted interfaces and intelligent product experiences."],
] as const;

export const aboutApproachSteps: AboutCard[] = [
  ["01", "Understand", "Understand the real workflow and problem."],
  ["02", "Design", "Structure the data, architecture and experience."],
  ["03", "Build", "Turn the system into maintainable software."],
  ["04", "Ship", "Test, iterate and improve through real usage."],
] as const;

export const aboutCurrentFocus = [
  "Full-stack application development",
  "Business systems",
  "AI-powered product experiences",
  "Software engineering fundamentals",
];
