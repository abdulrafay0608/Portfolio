import { ArrowUpRight, Bot, LayoutDashboard } from "lucide-react";

import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = index === 0 ? Bot : LayoutDashboard;
  const accentStyles =
    project.accent === "sky"
      ? "bg-sky-500/10 text-sky-600 dark:text-sky-400"
      : "bg-lime-500/10 text-lime-700 dark:text-lime-400";

  return (
    <article
      className="
        group 
        relative 
        overflow-hidden 
        rounded-2xl 
        border 
        border-zinc-200 
        bg-white/50 
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-sky-300
        hover:shadow-xl
        hover:shadow-sky-900/5
        dark:border-white/10
        dark:bg-white/3
        dark:hover:border-sky-500/30
        dark:hover:bg-white/5"
    >
      <div className="flex items-start justify-between gap-5">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${accentStyles}`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <span className="text-xs font-semibold tabular-nums text-zinc-400 dark:text-zinc-500">
          0{index + 1}
        </span>
      </div>

      <div className="mt-12 flex items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
        <span>{project.category}</span>
        <span>{project.year}</span>
      </div>

      <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-zinc-950 dark:text-white">
        {project.title}
      </h3>
      <p className="mt-3 max-w-md text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>

      <div className="mt-7 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600 dark:border-white/10 dark:text-zinc-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={project.href}
        target={project.href.startsWith("http") ? "_blank" : undefined}
        rel={project.href.startsWith("http") ? "noreferrer" : undefined}
        className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-zinc-900 transition-colors hover:text-sky-600 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 dark:text-white dark:hover:text-sky-400"
      >
        View project
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </article>
  );
}
