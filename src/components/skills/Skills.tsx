"use client";

import Link from "next/link";
import { ArrowRight, Boxes, Code2 } from "lucide-react";
import { useState } from "react";

import { skillCapabilities, skillCategories as categories, techSkills, type TechCategory } from "@/data/skills";
import PageContainer from "@/components/ui/PageContainer";
import Tag from "@/components/ui/Tag";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<TechCategory | "all">("all");

  return (
    <PageContainer>
      <header className="grid gap-8 border-b border-zinc-200 pb-10 dark:border-white/10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400"><Boxes className="h-3.5 w-3.5" />Capabilities</div>
          <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-zinc-950 sm:text-5xl dark:text-white">The tools behind<br />the work.</h1>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">A connected toolkit for building intelligent web applications, business systems, APIs, and AI-powered experiences.</p>
      </header>

      <section className="py-12 sm:py-16">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">Capability map</p><p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Focus a discipline to see its connections.</p></div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter capabilities">
            {[{ key: "all", label: "All" }, ...categories.map(({ key, label }) => ({ key, label: label === "Tools & Engineering" ? "Tools" : label }))].map((filter) => <button key={filter.key} type="button" onClick={() => setActiveCategory(filter.key as TechCategory | "all")} className={`border-b-2 px-1 pb-2 text-xs font-bold transition-colors ${activeCategory === filter.key ? "border-sky-500 text-sky-600 dark:text-sky-400" : "border-transparent text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"}`}>{filter.label}</button>)}
          </div>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-lg border border-zinc-200 bg-[#f7fafc] dark:border-white/10 dark:bg-[#0d1217]">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.06)_1px,transparent_1px)] bg-size-[32px_32px]" />
          <div className="relative min-h-160 p-5 sm:p-8 lg:min-h-145">
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-px w-[58%] -translate-x-1/2 bg-sky-500/20 lg:block" /><div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[58%] w-px -translate-y-1/2 bg-sky-500/20 lg:block" />
            <div className="relative z-20 mx-auto flex h-28 w-28 flex-col items-center justify-center rounded-full border border-sky-400/50 bg-zinc-950 text-center text-white shadow-[0_0_0_10px_rgba(14,165,233,0.06)] dark:bg-white dark:text-zinc-950"><Code2 className="h-6 w-6 text-sky-400 dark:text-sky-600" /><span className="mt-2 text-sm font-bold">Abdul Rafay</span><span className="mt-1 text-[8px] font-bold uppercase tracking-[0.16em] opacity-60">Full-stack core</span></div>
            <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-2 lg:absolute lg:inset-8 lg:mt-0 lg:block">
              {categories.map((category) => { const Icon = category.icon; const isActive = activeCategory === "all" || activeCategory === category.key; const skills = techSkills.filter((skill) => skill.cat === category.key); return <div key={category.key} className={`border bg-white p-4 transition-all duration-300 dark:bg-zinc-950 ${category.position} lg:absolute lg:w-72 ${isActive ? "border-sky-300 shadow-lg shadow-sky-900/10 dark:border-sky-500/40" : "border-zinc-200 opacity-30 dark:border-white/10"}`}><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-md bg-sky-500/10 text-sky-600 dark:text-sky-400"><Icon className="h-4 w-4" /></span><div><h2 className="text-sm font-bold text-zinc-950 dark:text-white">{category.label}</h2><p className="mt-1 text-[10px] text-zinc-500 dark:text-zinc-400">{category.description}</p></div></div><div className="mt-4 flex flex-wrap gap-1.5">{skills.map((skill) => <Tag key={skill.name} className="rounded-none px-2.5 py-1 text-[11px]">{skill.name}</Tag>)}</div></div>; })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 py-14 dark:border-white/10"><div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-400">What I can build</p><h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-zinc-950 dark:text-white">Capabilities in practice.</h2></div><div className="grid gap-0 md:grid-cols-3">{skillCapabilities.map((capability) => <article key={capability.number} className="border-t border-zinc-200 py-6 md:px-5 md:first:pl-0 dark:border-white/10"><p className="text-xs font-semibold text-sky-600 dark:text-sky-400">{capability.number}</p><h3 className="mt-4 text-lg font-bold text-zinc-950 dark:text-white">{capability.title}</h3><p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{capability.description}</p><div className="mt-5 flex flex-wrap gap-1.5">{capability.technologies.map((technology) => <Tag key={technology} className="rounded-none px-2.5 py-1 text-[11px]">{technology}</Tag>)}</div></article>)}</div></div></section>

      <div className="flex flex-wrap items-center gap-5 border-t border-zinc-200 pt-8 dark:border-white/10"><Link href="/projects" className="group inline-flex items-center gap-2 text-sm font-bold text-zinc-900 transition-colors hover:text-sky-600 dark:text-white dark:hover:text-sky-400">See the technology in action <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link><Link href="/contact" className="text-sm font-bold text-zinc-500 transition-colors hover:text-sky-600 dark:text-zinc-400 dark:hover:text-sky-400">Start a project</Link></div>
    </PageContainer>
  );
}
