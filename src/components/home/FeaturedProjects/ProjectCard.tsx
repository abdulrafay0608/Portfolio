import { ArrowUpRight, Bot, LayoutDashboard } from "lucide-react";

import type { Project } from "@/data/projects";
import Tag from "@/components/ui/Tag";

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
        rounded-lg
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
      <div
        className={`relative flex h-36 items-end justify-between overflow-hidden border-b border-zinc-200 p-5 dark:border-white/10 ${
          project.accent === "sky"
            ? "bg-sky-50 dark:bg-sky-950/30"
            : "bg-lime-50 dark:bg-lime-950/20"
        }`}
      >
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-size-[24px_24px] text-zinc-400/30 dark:text-white/10" />
        <div className="relative flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg ${accentStyles}`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
            Case study preview
          </span>
        </div>
        <span className="relative text-xs font-semibold tabular-nums text-zinc-500 dark:text-zinc-400">
          0{index + 1}
        </span>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
        <span>{project.category}</span>
        <span className="text-right">{project.year}</span>
      </div>

      <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-zinc-950 dark:text-white">
        {project.title}
      </h3>
      <p className="mt-3 max-w-md text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>

      <div className="mt-7 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500">
        {project.status}
      </p>

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
