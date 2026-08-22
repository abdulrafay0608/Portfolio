import { ArrowUpRight } from "lucide-react";

import type { SkillGroup as SkillGroupData } from "@/data/skills";

type SkillGroupProps = {
	skillGroup: SkillGroupData;
};

export default function SkillGroup({ skillGroup }: SkillGroupProps) {
	return (
		<article className="group border-t border-zinc-200 py-6 transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 sm:py-7">
			<div className="flex items-start justify-between gap-6">
				<span className="text-xs font-semibold tabular-nums text-zinc-400 dark:text-zinc-500">
					{skillGroup.number}
				</span>
				<ArrowUpRight className="h-5 w-5 text-zinc-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-500" />
			</div>

			<h3 className="mt-8 text-xl font-bold tracking-[-0.02em] text-zinc-950 transition-colors group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400">
				{skillGroup.title}
			</h3>
			<p className="mt-3 max-w-md text-sm leading-6 text-zinc-600 dark:text-zinc-400">
				{skillGroup.description}
			</p>

			<div className="mt-6 flex flex-wrap gap-2">
				{skillGroup.technologies.map((technology) => (
					<span
						key={technology}
						className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600 dark:bg-white/10 dark:text-zinc-300"
					>
						{technology}
					</span>
				))}
			</div>
		</article>
	);
}
