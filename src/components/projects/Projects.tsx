import Link from "next/link";
import { ArrowRight, FolderKanban } from "lucide-react";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
	return (
		<div className="mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 lg:pt-24">
			<header className="grid gap-10 border-b border-zinc-200 pb-16 dark:border-white/10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
				<div>
					<div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
						<FolderKanban className="h-3.5 w-3.5" />
						Selected work
					</div>
					<h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-zinc-950 sm:text-5xl dark:text-white">
						Products built for
						<br />
						real problems.
					</h1>
				</div>
				<div className="max-w-2xl">
					<p className="text-xl font-semibold leading-8 tracking-tight text-zinc-900 sm:text-2xl sm:leading-9 dark:text-zinc-100">
						A closer look at the systems, platforms, and experiences Abdul has
						built.
					</p>
					<p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
						Each project brings together product thinking, full-stack execution,
						and a focus on making complex workflows easier to use.
					</p>
				</div>
			</header>

			<main className="grid gap-5 py-16">
				{projects.map((project, index) => (
					<ProjectCard key={project.title} project={project} index={index} />
				))}
			</main>

			<div className="border-t border-zinc-200 pt-8 dark:border-white/10">
				<Link href="/contact" className="group inline-flex items-center gap-2 text-sm font-bold text-zinc-900 transition-colors hover:text-sky-600 dark:text-white dark:hover:text-sky-400">
					Have a project in mind?
					<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
				</Link>
			</div>
		</div>
	);
}
