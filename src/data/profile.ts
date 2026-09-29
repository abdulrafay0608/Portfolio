export type Profile = {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  eyebrow: string;
};

export const profile: Profile = {
  name: "Abdul Rafay",
  role: "AI-Powered Full-Stack Developer",
  tagline: "I build intelligent web applications and scalable digital products powered by modern AI and full-stack technologies.",
  bio: "I build scalable web applications, modern digital products, and AI-powered experiences using JavaScript technologies.",
  eyebrow: "Software Engineer • AI Enthusiast",
};

export const heroSuggestions = [
  "Tell me about Abdul",
  "Show me his best projects",
  "What technologies does he use?",
  "Why should I work with him?",
] as const;

export type AboutData = {
  summary: string;
  approach: string;
  strengths: string[];
  education: Array<{ title: string; institution: string; period: string }>;
  certification: string;
  certificates: Array<{ title: string; image: string }>;
};

export const aboutData: AboutData = {
  summary:
    "MERN Stack Developer with hands-on experience building HRMS, payroll, CRM, ticketing, and ERP systems. I work across the full development cycle, from database design and REST APIs to React interfaces and reporting.",
  approach:
    "I start with the people and process behind a product. Then I turn that understanding into clear interfaces, dependable server-side logic, and systems that are practical to maintain and extend.",
  strengths: [
    "End-to-end product development",
    "Workflow automation and reporting",
    "User-focused interface design",
    "Secure APIs and role-based access",
  ],
  education: [
    {
      title: "Bachelor's in Software Engineering",
      institution: "Sindh Madressatul Islam University",
      period: "2025 - 2029",
    },
    {
      title: "CIT - Computer Information Technology",
      institution: "Government Polytechnic Institute, Karachi",
      period: "2022 - 2025",
    },
    {
      title: "Intermediate - Pre-Engineering",
      institution: "Government Superior Science College, Karachi",
      period: "2021 - 2023",
    },
  ],
  certification:
    "MERN Stack Development - SMIT (Saylani Mass IT Training), Karachi",
  certificates: [
    {
      title: "Web And App Development",
      image: "/certificate/Web And App Development.webp",
    },
    {
      title: "IBM iOS and Android Mobile App Development",
      image: "/certificate/IBM iOS and Android Mobile.webp",
    },
    // {
    //   title: "Introduction to Software Engineering",
    //   image: "/certificate/Introduction to Software Engineering.webp",
    // },
    // {
    //   title: "HTML, CSS, and Javascript for Web Developers",
    //   image: "/certificate/HTML, CSS, and Javascript for Web Developers.webp",
    // },
    // {
    //   title: "Introduction to Mobile App Development",
    //   image: "/certificate/Introduction to Mobile App Development.webp",
    // },
    // {
    //   title: "Get Started with Android App Development",
    //   image: "/certificate/Get Started with Android App Development.webp",
    // },
  ],
};
