import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Check, Code2 } from "lucide-react";

import { experience } from "@/data/experience";
import {
  engineeringPrinciples,
  experienceHighlights,
  experienceTechnologyGroups,
} from "@/data/experience";
import ActionLink from "@/components/ui/ActionLink";
import PageContainer from "@/components/ui/PageContainer";
import StatItem from "@/components/ui/StatItem";

export default function Experience() {
  return (
    <PageContainer>
      <header className="grid gap-8 border-b border-zinc-200 pb-10 dark:border-white/10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
            <BriefcaseBusiness className="h-3.5 w-3.5" />
            Experience
          </div>
          <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-zinc-950 sm:text-5xl dark:text-white">
            Building systems
            <br />
            that do the work.
          </h1>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          My experience spans full-stack development, business systems,
          automation, and real-world product workflows.
        </p>
      </header>

      <section className="grid border-b border-zinc-200 py-8 dark:border-white/10 sm:grid-cols-3">
        {experienceHighlights.map((item) => (
          <div
            key={item.label}
            className="border-zinc-200 py-3 first:pt-0 last:pb-0 sm:border-l sm:px-6 sm:first:border-l-0 sm:first:pl-0 sm:last:pr-0 dark:border-white/10"
          >
            <StatItem value={item.value} label={item.label} />
          </div>
        ))}
      </section>

      <main className="relative py-16">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-8 bg-sky-500" />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Engineering records
          </p>
        </div>
        <div className="relative before:absolute before:bottom-0 before:left-3 before:top-0 before:w-px before:bg-zinc-200 dark:before:bg-white/10">
          {experience.map((item, index) => (
            <article
              key={`${item.company}-${item.period}`}
              className="group relative grid gap-6 pb-14 pl-12 last:pb-0 lg:grid-cols-[190px_1fr] lg:gap-12 lg:pl-0"
            >
              <div className="absolute left-0 top-1 z-10 flex h-6 w-6 items-center justify-center rounded-full border-4 border-white bg-sky-500 text-[8px] font-bold text-white shadow-[0_0_0_1px_rgba(14,165,233,0.35)] dark:border-[#0a0a0b] lg:left-45.5">
                {index + 1}
              </div>
              <div className="pt-1 lg:pr-8">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky-600 dark:text-sky-400">
                  {item.period}
                </p>
                {item.current && (
                  <p className="mt-3 inline-flex border border-lime-500/30 bg-lime-500/10 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-lime-700 dark:text-lime-400">
                    Current
                  </p>
                )}
              </div>
              <div className="border-b border-zinc-200 pb-10 transition-colors group-hover:border-sky-300 dark:border-white/10 dark:group-hover:border-sky-500/30">
                <h2 className="text-2xl font-bold tracking-[-0.03em] text-zinc-950 dark:text-white">
                  {item.role}
                </h2>
                <p className="mt-2 text-sm font-semibold text-sky-600 dark:text-sky-400">
                  {item.company} <span className="text-zinc-400">·</span>{" "}
                  {item.context}
                </p>
                <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
                  {item.summary}
                </p>
                <div className="mt-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
                    Key work
                  </p>
                  <ul className="mt-4 grid gap-3 md:grid-cols-2">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400"
                      >
                        <Check className="mt-1 h-4 w-4 shrink-0 text-sky-500" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <section className="border-t border-zinc-200 py-16 dark:border-white/10">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-zinc-950 dark:text-white">
            How I approach engineering
          </h2>
          <div className="grid gap-0 sm:grid-cols-2">
            {engineeringPrinciples.map(([number, title, description]) => (
              <div
                key={number}
                className="border-t border-zinc-200 py-5 sm:px-5 first:sm:pl-0 dark:border-white/10"
              >
                <p className="text-xs font-semibold text-sky-600 dark:text-sky-400">
                  {number}
                </p>
                <h3 className="mt-3 text-base font-bold text-zinc-950 dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 py-12 dark:border-white/10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
              <Code2 className="h-3.5 w-3.5" />
              Skills connection
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-zinc-950 dark:text-white">
              What I work with <span className="text-sky-500">→</span>
            </h2>
          </div>
          <ActionLink href="/skills">Explore the toolkit</ActionLink>
        </div>
        <div className="mt-8 grid border-y border-zinc-200 sm:grid-cols-2 lg:grid-cols-4 dark:border-white/10">
          {experienceTechnologyGroups.map(([label, technologies]) => (
            <div
              key={label}
              className="border-b border-zinc-200 py-5 last:border-b-0 sm:px-5 sm:even:border-l lg:border-b-0 lg:border-l lg:first:border-l-0 dark:border-white/10"
            >
              <p className="text-xs font-bold text-zinc-950 dark:text-white">
                {label}
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {technologies}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-zinc-200 pt-8 dark:border-white/10">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm font-bold text-zinc-900 transition-colors hover:text-sky-600 dark:text-white dark:hover:text-sky-400"
        >
          See what I&apos;ve built{" "}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </PageContainer>
  );
}
