import { FormEvent } from "react";
import { ArrowUp, Sparkles } from "lucide-react";

type HeroChatProps = {
  draft: string;
  onDraftChange: (value: string) => void;
  onAsk: (question: string) => void;
};

const suggestions = [
  "Tell me about Abdul",
  "Show me his best projects",
  "What technologies does he use?",
  "Why should I work with him?",
];

export default function HeroChat({
  draft,
  onDraftChange,
  onAsk,
}: HeroChatProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onAsk(draft);
  }

  return (
    <div className="mt-9 w-full max-w-2xl">
      {/* AI Composer */}
      <form
        onSubmit={handleSubmit}
        className="
          group
          rounded-2xl
          border
          border-zinc-200
          bg-white/80
          p-2
          shadow-xl
          shadow-zinc-900/5
          backdrop-blur-xl
          transition
          focus-within:border-sky-400
          focus-within:shadow-sky-500/10
          dark:border-white/10
          dark:bg-zinc-900/75
          dark:focus-within:border-sky-500/50
        "
      >
        <div className="flex items-center gap-3">
          {/* AI icon */}
          <div
            className="
              hidden
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-sky-500/10
              text-sky-500
              sm:flex
            "
          >
            <Sparkles className="h-4 w-4" />
          </div>

          <input
            id="home-assistant-input"
            value={draft}
            onChange={(event) => onDraftChange(event.target.value)}
            placeholder="Ask anything about Abdul Rafay..."
            className="
              min-w-0
              flex-1
              bg-transparent
              px-2
              py-3
              text-sm
              outline-none
              placeholder:text-zinc-400
            "
          />

          <button
            type="submit"
            aria-label="Ask AI"
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-zinc-900
              text-white
              transition
              hover:scale-105
              hover:bg-sky-500
              dark:bg-white
              dark:text-zinc-950
              dark:hover:bg-sky-500
              dark:hover:text-white
            "
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </form>

      {/* Suggestions */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            type="button"
            onClick={() => onAsk(suggestion)}
            className="
              rounded-full
              border
              border-zinc-200
              bg-white/70
              px-3
              py-1.5
              text-xs
              font-medium
              text-zinc-600
              transition
              hover:-translate-y-0.5
              hover:border-sky-300
              hover:text-sky-600
              dark:border-white/10
              dark:bg-zinc-900/70
              dark:text-zinc-300
              dark:hover:border-sky-500/50
              dark:hover:text-sky-300
            "
          >
            {suggestion}
          </button>
        ))}
      </div>

      <p className="mt-5 text-[11px] text-zinc-400 dark:text-zinc-500">
        Ask AI about my experience, projects, skills or development approach.
      </p>
    </div>
  );
}