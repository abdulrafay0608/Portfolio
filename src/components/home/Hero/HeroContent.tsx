import { ChatComposer } from "@/components/chat/ChatComposer";
// import HeroChat from "./HeroChat";

type HeroContentProps = {
  suggestions: string[];
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
        Abdul Rafay
      </p>

      {/* Main heading */}
      <h1 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.035em] text-zinc-950 sm:text-5xl dark:text-white">
        AI-Powered Full-Stack Developer
      </h1>

      {/* Description */}
      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
        I build intelligent web applications and scalable digital products
        powered by modern AI and full-stack technologies.
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
          placeholder="Ask anything about Abdul Rafay..."
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
      </div>

      {/* <HeroChat draft={draft} onDraftChange={onDraftChange} onAsk={onAsk} /> */}
    </div>
  );
}
