import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";

import { skillGroups } from "@/data/skills";
import SkillGroup from "./SkillGroup";

export default function SkillsPreview() {
	return (
		<section
			id="skills"
			className="relative mx-auto max-w-7xl border-b border-zinc-200 px-5 pb-10 pt-20 dark:border-white/10 sm:px-8"
		>
			<div className="mx-auto max-w-7xl">
				<div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
					<div>
						<div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
							<Wrench className="h-3.5 w-3.5" />
							Capabilities
						</div>
						<h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-zinc-950 sm:text-4xl dark:text-white">
							What can he
							<br />
							build?
						</h2>
					</div>

					<div className="max-w-3xl">
						<p className="text-xl font-semibold leading-8 tracking-tight text-zinc-900 sm:text-2xl sm:leading-9 dark:text-zinc-100">
							The right mix of product thinking and engineering depth for the
							job.
						</p>
						<p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
							Abdul works across the stack, choosing technology around the
							problem and the people who will use the finished product.
						</p>
					</div>
				</div>

				<div className="mt-12 grid gap-x-8 md:grid-cols-3">
					{skillGroups.map((skillGroup) => (
						<SkillGroup key={skillGroup.number} skillGroup={skillGroup} />
					))}
				</div>

				<Link
					href="/skills"
					className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-zinc-900 transition-colors hover:text-sky-600 dark:text-white dark:hover:text-sky-400"
				>
					Explore the full toolkit
					<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
				</Link>
			</div>
		</section>
	);
}
