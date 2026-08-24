"use client";

import Link from "next/link";
import { ArrowRight, FolderKanban } from "lucide-react";
import { useState } from "react";

import { projectFilters, projects } from "@/data/projects";
import ActionLink from "@/components/ui/ActionLink";
import PageContainer from "@/components/ui/PageContainer";
import Tag from "@/components/ui/Tag";
import ProductPreview from "./ProductPreview";

export default function ProjectExplorer() {
  const [activeFilter, setActiveFilter] = useState<(typeof projectFilters)[number]>("All");
  const visibleProjects = projects.filter((project) => activeFilter === "All" || project.filters.includes(activeFilter));
  const featured = visibleProjects.find((project) => project.featured) ?? visibleProjects[0];
  const gridProjects = visibleProjects.filter((project) => project.slug !== featured?.slug);

  return (
    <PageContainer>
      <header className="grid gap-8 border-b border-zinc-200 pb-10 dark:border-white/10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
            <FolderKanban className="h-3.5 w-3.5" />
            Selected work
          </div>
          <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-zinc-950 sm:text-5xl dark:text-white">Things I&apos;ve built.</h1>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">A collection of full-stack applications, business systems, AI-powered experiences, and real-world products.</p>
      </header>

      <div className="flex flex-wrap gap-x-6 gap-y-3 border-b border-zinc-200 py-6 dark:border-white/10" role="tablist" aria-label="Filter projects">
        {projectFilters.map((filter) => (
          <button key={filter} type="button" role="tab" aria-selected={activeFilter === filter} onClick={() => setActiveFilter(filter)} className={`border-b-2 pb-2 text-sm font-semibold transition-colors ${activeFilter === filter ? "border-sky-500 text-sky-600 dark:text-sky-400" : "border-transparent text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"}`}>
            {filter}
          </button>
        ))}
      </div>

      {featured && (
        <Link href={`/projects/${featured.slug}`} className="group mt-12 block overflow-hidden rounded-lg border border-zinc-200 bg-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-900/5 dark:border-white/10 dark:bg-white/5 dark:hover:border-sky-500/30">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <ProductPreview project={featured} featured />
            <div className="flex flex-col p-6 sm:p-8 lg:p-10">
              <div className="flex items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-400"><span>Featured · Full-Stack</span><span>{featured.year}</span></div>
              <h2 className="mt-6 text-3xl font-bold tracking-[-0.03em] text-zinc-950 dark:text-white">{featured.slug === "manufacturing-erp" ? "Manufacturing ERP" : featured.title}</h2>
              <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">{featured.overview ?? featured.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">{featured.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
              <div className="mt-auto flex items-end justify-between gap-5 pt-10"><span className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500">{featured.status}</span><span className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white">View case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div>
            </div>
          </div>
        </Link>
      )}

      {gridProjects.length > 0 && <div className="mt-5 grid gap-5 md:grid-cols-2">{gridProjects.map((project, index) => <Link key={project.slug} href={`/projects/${project.slug}`} className="group overflow-hidden rounded-lg border border-zinc-200 bg-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-900/5 dark:border-white/10 dark:bg-white/5 dark:hover:border-sky-500/30"><ProductPreview project={project} /><div className="p-6"><div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500"><span>{project.category}</span><span>0{index + 2}</span></div><h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-zinc-950 dark:text-white">{project.title}</h2><p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div><div className="mt-7 flex items-center justify-between gap-4 text-xs font-semibold text-zinc-400 dark:text-zinc-500"><span>{project.year} · {project.status}</span><span className="inline-flex items-center gap-2 font-bold text-zinc-900 dark:text-white">View project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div></div></Link>)}</div>}

      {visibleProjects.length === 0 && <p className="py-20 text-center text-sm text-zinc-500">No projects in this collection yet.</p>}
      <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-white/10"><ActionLink href="/contact">Have a project in mind?</ActionLink></div>
    </PageContainer>
  );
}
