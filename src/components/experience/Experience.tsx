import Link from "next/link";
import {
	ArrowRight,
	BriefcaseBusiness,
	Check,
	Database,
	Layers3,
	Users,
} from "lucide-react";

import { experience } from "@/data/experience";

const highlights = [
	{ value: "100+", label: "Employees served", icon: Users },
	{ value: "3", label: "Product environments", icon: Layers3 },
	{ value: "End-to-end", label: "Full-stack ownership", icon: Database },
];

export default function Experience() {
	return (
		<div className="mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 lg:pt-24">
			<header className="grid gap-10 border-b border-zinc-200 pb-16 dark:border-white/10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
				<div>
					<div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
						<BriefcaseBusiness className="h-3.5 w-3.5" />
						Experience
					</div>
					<h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-zinc-950 sm:text-5xl dark:text-white">
						Building systems
						<br />
						that do the work.
					</h1>
				</div>
				<div className="max-w-2xl">
					<p className="text-xl font-semibold leading-8 tracking-tight text-zinc-900 sm:text-2xl sm:leading-9 dark:text-zinc-100">
						From employee operations to manufacturing workflows, Abdul builds
						software around how teams actually work.
					</p>
					<p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
						His experience spans internship and freelance environments, with
						ownership across database design, APIs, React interfaces,
						automation, authentication, and reporting.
					</p>
				</div>
			</header>

			<section className="grid gap-4 border-b border-zinc-200 py-10 dark:border-white/10 sm:grid-cols-3">
				{highlights.map((item) => {
					const Icon = item.icon;

					return (
						<div key={item.label} className="flex items-center gap-4 rounded-xl bg-zinc-100/70 p-5 dark:bg-white/5">
							<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
								<Icon className="h-5 w-5" />
							</span>
							<div>
								<p className="text-lg font-bold tracking-tight text-zinc-950 dark:text-white">{item.value}</p>
								<p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">{item.label}</p>
							</div>
						</div>
					);
				})}
			</section>

			<main className="relative py-16">
				<div className="absolute bottom-16 left-[7px] top-16 hidden w-px bg-zinc-200 dark:bg-white/10 sm:block" />
				<div className="grid gap-12">
					{experience.map((item, index) => (
						<article key={`${item.company}-${item.period}`} className="relative grid gap-8 sm:grid-cols-[24px_1fr] sm:gap-8">
							<div className="relative z-10 mt-2 hidden h-4 w-4 rounded-full border-4 border-white bg-sky-500 shadow-[0_0_0_1px] shadow-sky-500/30 dark:border-[#0a0a0b] sm:block" />
							<div className="rounded-2xl border border-zinc-200 bg-white/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-900/5 dark:border-white/10 dark:bg-white/5 dark:hover:border-sky-500/30 sm:p-8">
								<div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
									<div>
										<p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-600 dark:text-sky-400">{item.period}</p>
										<h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-zinc-950 dark:text-white">{item.role}</h2>
										<p className="mt-1 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
											{item.company}{item.context && ` / ${item.context}`}
										</p>
									</div>
									<span className="w-fit rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-500 dark:border-white/10 dark:text-zinc-400">
										0{index + 1}
									</span>
								</div>

								<p className="mt-8 max-w-3xl text-base leading-7 text-zinc-700 dark:text-zinc-300">{item.summary}</p>
								<ul className="mt-6 grid gap-3 md:grid-cols-2">
									{item.highlights.map((highlight) => (
										<li key={highlight} className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
											<Check className="mt-1 h-4 w-4 shrink-0 text-sky-500" />
											<span>{highlight}</span>
										</li>
									))}
								</ul>
							</div>
						</article>
					))}
				</div>
			</main>

			<div className="border-t border-zinc-200 pt-8 dark:border-white/10">
				<Link href="/projects" className="group inline-flex items-center gap-2 text-sm font-bold text-zinc-900 transition-colors hover:text-sky-600 dark:text-white dark:hover:text-sky-400">
					See what I&apos;ve built
					<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
				</Link>
			</div>
		</div>
	);
}
