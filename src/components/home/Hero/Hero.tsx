import HeroProfile from "./HeroProfile";
import HeroContent from "./HeroContent";

type HeroProps = {
  suggestions: string[];
  draft: string;
  onDraftChange: (value: string) => void;
  onAsk: (question: string) => void;
};

export default function Hero({
  suggestions,
  draft,
  onDraftChange,
  onAsk,
}: HeroProps) {
  return (
    <section
      id="home"
      className="mx-auto max-w-7xl px-5 sm:px-8 pt-24 pb-14 relative border-b border-zinc-200 dark:border-white/10"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-size-[32px_32px]" />
          <div className="pointer-events-none absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-sky-400/15 blur-[120px] dark:bg-sky-500/15" />
          <HeroProfile />
        {/* Content */}
        <HeroContent
          suggestions={suggestions}
          draft={draft}
          onDraftChange={onDraftChange}
          onAsk={onAsk}
        />
      </div>
    </section>
  );
}
