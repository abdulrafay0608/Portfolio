import { ChatComposer } from "@/components/chat/ChatComposer";
import { profile } from "@/data/profile";
import { siteData } from "@/data/site";
import { Download, GitBranch, Link2 } from "lucide-react";

type HeroContentProps = {
  suggestions: readonly string[];
  draft: string;
  onDraftChange: (value: string) => void;
  onAsk: (question: string) => void;
};

export default function HeroContent({
  suggestions,
  draft,
  onDraftChange,
  onAsk,
}: HeroContentProps) {
  return (
    <div className="flex w-full flex-col items-center">
      {/* Eyebrow */}
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
        {profile.name}
      </p>

      {/* Main heading */}
      <h1 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.035em] text-zinc-950 sm:text-5xl dark:text-white">
        {profile.role}
      </h1>

      {/* Description */}
      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
        {profile.tagline}
      </p>

      {/* AI interaction */}
      <div className="max-w-3xl">
        <ChatComposer
          inputId="home-assistant-input"
          value={draft}
          onChange={onDraftChange}
          onSubmit={(event) => {
            event.preventDefault();
            onAsk(draft);
          }}
          placeholder={`Ask anything about ${profile.name}...`}
        />
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => onAsk(suggestion)}
              className="rounded-full border border-zinc-200 bg-white/70 px-3 py-1.5 text-xs font-semibold text-zinc-600 transition hover:border-sky-300 hover:text-sky-600 dark:border-white/10 dark:bg-zinc-900/70 dark:text-zinc-300 dark:hover:border-sky-500/50 dark:hover:text-sky-300"
            >
              {suggestion}
            </button>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href={siteData.cv}
            download
            className="group inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-4 py-2.5 text-xs font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-sky-600 dark:bg-white dark:text-zinc-950 dark:hover:bg-sky-400"
          >
            <Download className="h-3.5 w-3.5" />
            Download Resume
          </a>
          <a
            href={siteData.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-4 py-2.5 text-xs font-semibold text-zinc-600 transition duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600 dark:border-white/10 dark:text-zinc-300 dark:hover:border-sky-500/50 dark:hover:text-sky-300"
          >
            <GitBranch className="h-3.5 w-3.5" />
            GitHub
          </a>
          <a
            href={siteData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-4 py-2.5 text-xs font-semibold text-zinc-600 transition duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600 dark:border-white/10 dark:text-zinc-300 dark:hover:border-sky-500/50 dark:hover:text-sky-300"
          >
            <Link2 className="h-3.5 w-3.5" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
