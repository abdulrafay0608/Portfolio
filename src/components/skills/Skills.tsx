"use client";

import Link from "next/link";
import { ArrowRight, Boxes, Code2, Database, GitBranch, Server } from "lucide-react";
import { useState } from "react";

import { techSkills, type TechCategory } from "@/data/skills";

const categories: Array<{
  key: TechCategory;
  label: string;
  description: string;
  icon: typeof Code2;
  position: string;
}> = [
  { key: "frontend", label: "Frontend", description: "Shape the experience", icon: Code2, position: "lg:left-8 lg:top-8" },
  { key: "backend", label: "Backend", description: "Power the product", icon: Server, position: "lg:right-8 lg:top-8" },
  { key: "db", label: "Data", description: "Keep it dependable", icon: Database, position: "lg:bottom-8 lg:left-8" },
  { key: "tools", label: "Tools", description: "Ship with confidence", icon: GitBranch, position: "lg:bottom-8 lg:right-8" },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<TechCategory | "all">("all");

  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 lg:pt-24">
      <header className="grid gap-10 border-b border-zinc-200 pb-16 dark:border-white/10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
            <Boxes className="h-3.5 w-3.5" />
            Toolkit
          </div>
          <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-zinc-950 sm:text-5xl dark:text-white">
            A connected toolkit
            <br />
            for useful products.
          </h1>
        </div>
        <div className="max-w-2xl">
          <p className="text-xl font-semibold leading-8 tracking-tight text-zinc-900 sm:text-2xl sm:leading-9 dark:text-zinc-100">
            Not just a list of technologies. A system of tools that work together.
          </p>
          <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Explore the technologies Abdul uses to shape interfaces, power APIs, manage data, and turn ideas into software that ships.
          </p>
        </div>
      </header>

      <section className="py-12 sm:py-16">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">The constellation</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Focus a discipline to see its connections.</p>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter technologies">
            <button type="button" onClick={() => setActiveCategory("all")} className={`rounded-full border px-3 py-1.5 text-xs font-bold transition-all ${activeCategory === "all" ? "border-sky-500 bg-sky-500 text-white shadow-lg shadow-sky-500/20" : "border-zinc-200 text-zinc-600 hover:border-sky-300 dark:border-white/10 dark:text-zinc-300"}`}>All</button>
            {categories.map((category) => (
              <button key={category.key} type="button" onClick={() => setActiveCategory(category.key)} className={`rounded-full border px-3 py-1.5 text-xs font-bold transition-all ${activeCategory === category.key ? "border-sky-500 bg-sky-500 text-white shadow-lg shadow-sky-500/20" : "border-zinc-200 text-zinc-600 hover:border-sky-300 dark:border-white/10 dark:text-zinc-300"}`}>{category.label}</button>
            ))}
          </div>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-[#f7fafc] dark:border-white/10 dark:bg-[#0d1217]">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.06)_1px,transparent_1px)] bg-size-[32px_32px] opacity-60" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-107.5 w-107.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-500/10 lg:block" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-70 w-70 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-500/15 lg:block" />
          <div className="relative min-h-180 p-5 sm:p-8 lg:min-h-162.5">
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-px w-[58%] -translate-x-1/2 bg-sky-500/20 lg:block" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[58%] w-px -translate-y-1/2 bg-sky-500/20 lg:block" />

            <div className="absolute left-1/2 top-1/2 z-20 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-sky-400/50 bg-zinc-950 text-center text-white shadow-[0_0_0_14px_rgba(14,165,233,0.08),0_0_70px_rgba(14,165,233,0.25)] dark:bg-white dark:text-zinc-950">
              <Code2 className="h-7 w-7 text-sky-400 dark:text-sky-600" />
              <span className="mt-2 text-sm font-bold">Abdul Rafay</span>
              <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] opacity-60">Full-stack core</span>
            </div>

            <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:block lg:h-146">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === "all" || activeCategory === category.key;
                const skills = techSkills.filter((skill) => skill.cat === category.key);

                return (
                  <div key={category.key} className={`rounded-2xl border bg-white/95 p-4 transition-all duration-500 dark:bg-zinc-950/95 lg:absolute lg:w-72 ${category.position} ${isActive ? "border-sky-300 shadow-xl shadow-sky-900/10 dark:border-sky-500/40" : "border-zinc-200 opacity-25 dark:border-white/10"}`}>
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400"><Icon className="h-5 w-5" /></span>
                      <div><h2 className="text-sm font-bold text-zinc-950 dark:text-white">{category.label}</h2><p className="mt-1 text-[10px] text-zinc-500 dark:text-zinc-400">{category.description}</p></div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1.5">{skills.map((skill) => <span key={skill.name} className="rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] font-semibold text-zinc-700 dark:bg-white/10 dark:text-zinc-300">{skill.name}</span>)}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap items-center gap-5 border-t border-zinc-200 pt-8 dark:border-white/10">
        <Link href="/projects" className="group inline-flex items-center gap-2 text-sm font-bold text-zinc-900 transition-colors hover:text-sky-600 dark:text-white dark:hover:text-sky-400">See the technology in action<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
        <Link href="/contact" className="text-sm font-bold text-zinc-500 transition-colors hover:text-sky-600 dark:text-zinc-400 dark:hover:text-sky-400">Start a project</Link>
      </div>
    </div>
  );
}
