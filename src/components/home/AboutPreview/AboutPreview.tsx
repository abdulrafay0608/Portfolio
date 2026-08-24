import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

import AboutHighlights from "./AboutHighlights";
import { aboutPreview } from "@/data/about";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-10 relative border-b border-zinc-200 dark:border-white/10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
              <Sparkles className="h-3.5 w-3.5" />
              About
            </div>

            <h2
              className="
                mt-4
                text-3xl
                font-bold
                tracking-[-0.03em]
                text-zinc-950
                sm:text-4xl
                dark:text-white
              "
            >
              {aboutPreview.title.map((line) => <span key={line} className="block">{line}</span>)}
            </h2>
          </div>

          {/* Main Introduction */}
          <div className="max-w-3xl">
            <p
              className="
                text-xl
                font-semibold
                leading-8
                tracking-tight
                text-zinc-900
                sm:text-2xl
                sm:leading-9
                dark:text-zinc-100
              "
            >
              {aboutPreview.intro}
            </p>

            <p
              className="
                mt-6
                text-base
                leading-7
                text-zinc-600
                dark:text-zinc-400
              "
            >
              {aboutPreview.description}
            </p>

            <Link
              href="/about"
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-2
                text-sm
                font-bold
                text-zinc-900
                transition-colors
                hover:text-sky-600
                dark:text-white
                dark:hover:text-sky-400
              "
            >
              {aboutPreview.linkLabel}
              <ArrowUpRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-200
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>
        </div>

        {/* Highlights */}
        <AboutHighlights />
      </div>
    </section>
  );
}
