"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { ChatWorkspace } from "@/components/chat/ChatWorkspace";
import type { Message } from "@/components/chat/types";
import { getMockAssistantResponse } from "@/lib/chat";

export default function ChatPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [draft, setDraft] = useState("");
  const [isResponding, setIsResponding] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const initialQuestion = searchParams.get("question");

  useEffect(() => {
    if (!initialQuestion || messages.length > 0) return;

    askQuestion(initialQuestion);
    // The URL question is consumed once when the route opens.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialQuestion, messages.length]);

  useEffect(() => {
    if (messages.length === 0 && !isResponding) return;

    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isResponding]);

  function askQuestion(question: string) {
    const cleanQuestion = question.trim();

    if (!cleanQuestion || isResponding) return;

    setMessages((current) => [
      ...current,
      { role: "user", content: cleanQuestion },
    ]);
    setDraft("");
    setIsResponding(true);

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        { role: "assistant", content: getMockAssistantResponse(cleanQuestion) },
      ]);
      setIsResponding(false);
    }, 700);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    askQuestion(draft);
  }

  function goHome() {
    router.push("/");
  }

  return (
    <ChatWorkspace
      messages={messages}
      draft={draft}
      isResponding={isResponding}
      chatEndRef={chatEndRef}
      onDraftChange={setDraft}
      onSubmit={handleSubmit}
      onBack={goHome}
    />
  );
}
