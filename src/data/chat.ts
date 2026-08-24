export type ChatAnswer = { question: string; answer: string };

export const chatSuggestions = [
  "Tell me about Abdul",
  "Show me his best projects",
  "What technologies does he use?",
  "Why should I work with him?",
] as const;

export const chatAnswers: ChatAnswer[] = [
  { question: "tell me about abdul", answer: "Abdul Rafay is a product-minded full-stack developer who builds thoughtful web experiences and AI-powered tools. He cares about making complex technology feel clear, useful, and easy to trust." },
  { question: "show me his best projects", answer: "His selected work includes AI Assistant, a conversational portfolio platform, and Commerce Dashboard, an operations workspace for products, orders, and customer signals." },
  { question: "what technologies does he use?", answer: "He works with JavaScript, TypeScript, React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, REST APIs, and Git. He chooses tools around product requirements." },
  { question: "why should i work with him?", answer: "Abdul brings product thinking and dependable full-stack execution together. He communicates clearly, pays attention to interface details, and builds scalable systems." },
  { question: "how does he build products?", answer: "Abdul starts with the user problem, simplifies the experience, then builds in testable steps with clean architecture and careful interface details." },
];

export const chatFallback = "I can help you explore Abdul's projects, skills, experience, technologies, and development approach.";