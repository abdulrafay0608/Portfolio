import React, { FormEvent } from "react";
import { ChatComposer } from "./ChatComposer";
import { ArrowLeft, RotateCcw } from "lucide-react";
import ChatMessage from "./ChatMessage";
import ChatTypingIndicator from "./ChatTypingIndicator";
import type { Message } from "./types";
import { profile } from "@/data/profile";

export const ChatWorkspace = ({
  messages,
  draft,
  isResponding,
  chatEndRef,
  onDraftChange,
  onSubmit,
  onBack,
}: {
  messages: Message[];
  draft: string;
  isResponding: boolean;
  chatEndRef: React.RefObject<HTMLDivElement | null>;
  onDraftChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onBack: () => void;
}) => {
  return (
    <section className="flex min-h-screen flex-col px-5 pt-16 sm:px-8 lg:px-12 lg:pt-0">
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-zinc-200 py-5 dark:border-white/10">
          <button
            type="button"
            onClick={onBack}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to portfolio
          </button>
          <button
            type="button"
            onClick={onBack}
            aria-label="Start a new conversation"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-colors hover:border-sky-300 hover:text-sky-600 dark:border-white/10 dark:text-zinc-400 dark:hover:border-sky-500/50 dark:hover:text-sky-400"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </header>
        <div className="flex-1 space-y-8 py-10 sm:py-16">
          {messages.map((message, index) => (
            <ChatMessage key={`${message.role}-${index}`} message={message} />
          ))}

          {isResponding && <ChatTypingIndicator />}
          <div ref={chatEndRef} />
        </div>

        <div className="sticky bottom-0 bg-white/90 py-4 backdrop-blur-md dark:bg-zinc-950/90">
          <ChatComposer
            inputId="chat-assistant-input"
            value={draft}
            onChange={onDraftChange}
            onSubmit={onSubmit}
            placeholder={`Ask anything about ${profile.name}...`}
          />
        </div>
      </div>
    </section>
  );
};
