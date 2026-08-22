import { ArrowUpRight, Bot, Boxes, Headphones } from "lucide-react";

import type { Project } from "@/data/projects";

type ProjectCardProps = {
	project: Project;
	index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
	const Icon = index === 0 ? Boxes : index === 1 ? Headphones : Bot;
	const external = project.href.startsWith("http");

	return (
		<article className="group grid gap-8 rounded-2xl border border-zinc-200 bg-white/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-900/5 dark:border-white/10 dark:bg-white/5 dark:hover:border-sky-500/30 sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
			<div className="flex min-h-48 flex-col justify-between rounded-xl bg-zinc-950 p-5 text-white dark:bg-white/10">
				<div className="flex items-start justify-between">
					<span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/15 text-sky-300">
						<Icon className="h-5 w-5" />
					</span>
					<span className="text-xs font-semibold text-zinc-400">0{index + 1}</span>
				</div>
				<div>
					<p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-300">{project.status}</p>
					<p className="mt-2 text-sm text-zinc-400">{project.year}</p>
				</div>
			</div>

			<div className="flex flex-col">
				<p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">{project.category}</p>
				<h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-zinc-950 dark:text-white sm:text-3xl">{project.title}</h2>
				<p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">{project.description}</p>
				<div className="mt-7 flex flex-wrap gap-2">
					{project.tags.map((tag) => (
						<span key={tag} className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600 dark:border-white/10 dark:text-zinc-300">{tag}</span>
					))}
				</div>
				<a href={project.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="group/link mt-8 inline-flex items-center gap-2 text-sm font-bold text-zinc-900 transition-colors hover:text-sky-600 focus-visible:outline-2 focus-visible:outline-sky-500 dark:text-white dark:hover:text-sky-400">
					{external ? "View live project" : "Discuss this project"}
					<ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
				</a>
			</div>
		</article>
	);
}
