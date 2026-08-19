"use client";

import { Bot, MessageCircle, Send, X } from "lucide-react";
import { FormEvent, useState } from "react";

export default function AssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!message.trim()) return;
    setMessage("");
  }

  return (
    <div className="fixed bottom-5 right-5 z-40 sm:bottom-7 sm:right-7">
      {isOpen && (
        <section className="absolute bottom-16 right-0 w-[min(calc(100vw-2rem),360px)] overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-white/10 dark:bg-zinc-900" aria-label="AI assistant chat">
          <header className="flex items-center justify-between border-b border-zinc-100 px-4 py-3 dark:border-white/10">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600 dark:bg-sky-950/60 dark:text-sky-300"><Bot className="h-5 w-5" /></span>
              <div><p className="text-sm font-bold text-zinc-900 dark:text-white">Rafay&apos;s assistant</p><p className="text-[11px] text-emerald-600">Online now</p></div>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Close assistant" className="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"><X className="h-4 w-4" /></button>
          </header>
          <div className="space-y-3 px-4 py-5">
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-zinc-100 px-3.5 py-3 text-sm leading-5 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">Hi, I can help you explore Abdul&apos;s work, experience, and technical strengths.</div>
            <p className="text-xs text-zinc-400">Try asking about a project or his stack.</p>
          </div>
          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-zinc-100 p-3 dark:border-white/10">
            <input value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Ask about my work..." aria-label="Message the assistant" className="min-w-0 flex-1 rounded-xl bg-zinc-100 px-3 py-2 text-sm outline-none placeholder:text-zinc-400 dark:bg-zinc-800 dark:text-white" />
            <button type="submit" aria-label="Send message" className="rounded-xl bg-sky-500 p-2 text-white transition hover:bg-sky-600 disabled:opacity-50" disabled={!message.trim()}><Send className="h-4 w-4" /></button>
          </form>
        </section>
      )}
      <button type="button" onClick={() => setIsOpen((open) => !open)} aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"} className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-xl transition hover:-translate-y-1 ${isOpen ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950" : "bg-sky-500 text-white hover:bg-sky-600"}`}>
        {isOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>
    </div>
  );
}
