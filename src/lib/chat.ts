import { chatAnswers, chatFallback } from "@/data/chat";

export function getMockAssistantResponse(question: string) {
  const normalizedQuestion = question.toLowerCase();
  const match = chatAnswers.find(({ question }) =>
    normalizedQuestion.includes(question),
  );

  return match?.answer ?? chatFallback;
}
