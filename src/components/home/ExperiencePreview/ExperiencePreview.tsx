import { BriefcaseBusiness, Check } from "lucide-react";

import { experience } from "@/data/experience";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ExperiencePreview() {
	return (
		<section
			id="experience"
			className="relative mx-auto max-w-7xl border-b border-zinc-200 px-5 pb-10 pt-20 dark:border-white/10 sm:px-8"
		>
			<div className="mx-auto max-w-7xl">
				<div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
					<div>
						<SectionLabel icon={BriefcaseBusiness}>Experience</SectionLabel>
						<h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-zinc-950 sm:text-4xl dark:text-white">
							Where the work
							<br />
							got real.
						</h2>
					</div>

					<div className="max-w-3xl">
						<p className="text-xl font-semibold leading-8 tracking-tight text-zinc-900 sm:text-2xl sm:leading-9 dark:text-zinc-100">
							Building products that have to work for real teams and real
							workflows.
						</p>
						<p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
							From HRMS and payroll automation to CRM systems and manufacturing
							operations, Abdul has worked across the full product lifecycle.
						</p>
					</div>
				</div>

				<div className="mt-12 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-white/10 dark:border-white/10">
					{experience.map((item) => (
						<article
							key={`${item.company}-${item.period}`}
							className="group relative grid gap-6 py-7 transition-colors duration-300 hover:bg-sky-500/3 lg:grid-cols-[1fr_1.5fr] lg:gap-16 lg:px-5"
						>
							<span className="absolute bottom-0 left-0 top-0 w-0.5 origin-bottom scale-y-0 bg-sky-500 transition-transform duration-300 group-hover:scale-y-100" />
							<div>
								<div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500">
									<span>{item.period}</span>
									{item.current && (
										<span className="rounded-full bg-lime-500/10 px-2 py-1 text-[9px] text-lime-700 dark:text-lime-400">
											Current
										</span>
									)}
								</div>
								<h3 className="mt-3 text-xl font-bold tracking-[-0.02em] text-zinc-950 dark:text-white">
									{item.role}
								</h3>
								<p className="mt-1 text-sm font-semibold text-sky-600 dark:text-sky-400">
									{item.company}
									{item.context && ` / ${item.context}`}
								</p>
							</div>

							<div>
								<p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
									{item.summary}
								</p>
								<ul className="mt-4 space-y-2">
									{item.highlights.map((highlight) => (
										<li
											key={highlight}
											className="flex gap-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400"
										>
											<Check className="mt-1 h-4 w-4 shrink-0 text-sky-500" />
											<span>{highlight}</span>
										</li>
									))}
								</ul>
							</div>
						</article>
					))}
				</div>

				<ActionLink href="/experience" className="mt-8">View full experience</ActionLink>
			</div>
		</section>
	);
}
