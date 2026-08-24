import Link from "next/link";
import { Bot } from "lucide-react";

export default function AskAIButton() {
  return (
    <Link
      href="/chat"
      aria-label="Ask AI about Abdul"
      title="Ask AI"
      className="group flex h-9 w-9 items-center justify-center rounded-lg border border-sky-200 text-sky-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-400 hover:bg-sky-50 dark:border-sky-500/30 dark:text-sky-400 dark:hover:border-sky-400/60 dark:hover:bg-sky-500/10"
    >
      <Bot className="h-4 w-4" />
    </Link>
  );
}