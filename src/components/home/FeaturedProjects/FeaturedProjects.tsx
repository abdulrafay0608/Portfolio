import Link from "next/link";
import { ArrowRight, FolderKanban } from "lucide-react";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl border-b border-zinc-200 px-5 pb-10 pt-20 dark:border-white/10 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
              <FolderKanban className="h-3.5 w-3.5" />
              Selected work
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-zinc-950 sm:text-4xl dark:text-white">
              What has he built?
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-xl font-semibold leading-8 tracking-tight text-zinc-900 sm:text-2xl sm:leading-9 dark:text-zinc-100">
              A few products where engineering meets a clear, useful idea.
            </p>
            <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              From AI-powered interfaces to operational dashboards, these
              projects show how Abdul turns product problems into working
              systems.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {projects.filter((project) => project.featured).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <Link
          href="/projects"
          className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-zinc-900 transition-colors hover:text-sky-600 dark:text-white dark:hover:text-sky-400"
        >
          View all projects
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
