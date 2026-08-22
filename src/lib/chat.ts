const answers: Record<string, string> = {
  "tell me about abdul":
    "Abdul Rafay is a product-minded full-stack developer who builds thoughtful web experiences and AI-powered tools. He cares about making complex technology feel clear, useful, and easy to trust.",
  "show me his best projects":
    "His selected work includes AI Assistant, a conversational portfolio platform, and Commerce Dashboard, an operations workspace for products, orders, and customer signals.",
  "what technologies does he use?":
    "He works with JavaScript, TypeScript, React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, REST APIs, and Git. He chooses tools around product requirements.",
  "why should i work with him?":
    "Abdul brings product thinking and dependable full-stack execution together. He communicates clearly, pays attention to interface details, and builds scalable systems.",
  "how does he build products?":
    "Abdul starts with the user problem, simplifies the experience, then builds in testable steps with clean architecture and careful interface details.",
};

export function getMockAssistantResponse(question: string) {
  const normalizedQuestion = question.toLowerCase();
  const match = Object.entries(answers).find(([key]) =>
    normalizedQuestion.includes(key),
  );

  return (
    match?.[1] ??
    "I can help you explore Abdul's projects, skills, experience, technologies, and development approach."
  );
}
