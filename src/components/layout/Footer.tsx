import Link from "next/link";
import { ArrowUpRight, FileText, Link2, Mail } from "lucide-react";

import { navItems } from "@/config/navigation";
import { siteData } from "@/data/site";

export default function Footer() {
	return (
		<footer className="border-t border-zinc-200 dark:border-white/10">
			<div className="mx-auto grid max-w-7xl gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:py-16">
				<div>
					<Link href="/" className="inline-flex items-center gap-3">
						<span className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-xs font-bold text-white dark:bg-white dark:text-black">
							AR
						</span>
						<span className="text-sm font-bold text-zinc-950 dark:text-white">
							{siteData.name}
						</span>
					</Link>
					<p className="mt-5 max-w-sm text-sm leading-6 text-zinc-600 dark:text-zinc-400">
						{siteData.role} building useful web applications, business systems,
						and AI-powered experiences.
					</p>
					<a
						href={`mailto:${siteData.email}`}
						className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-zinc-900 transition-colors hover:text-sky-600 dark:text-white dark:hover:text-sky-400"
					>
						Let&apos;s work together
						<ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
					</a>
				</div>

				<div>
					<p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
						Explore
					</p>
					<nav aria-label="Footer navigation" className="mt-5 grid gap-3">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="text-sm text-zinc-600 transition-colors hover:text-sky-600 dark:text-zinc-400 dark:hover:text-sky-400"
							>
								{item.label}
							</Link>
						))}
					</nav>
				</div>

				<div>
					<p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
						Connect
					</p>
					<div className="mt-5 grid gap-3">
						<a
							href={`mailto:${siteData.email}`}
							className="flex items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-sky-600 dark:text-zinc-400 dark:hover:text-sky-400"
						>
							<Mail className="h-4 w-4" />
							Email
						</a>
						<a
							href={siteData.linkedin}
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-sky-600 dark:text-zinc-400 dark:hover:text-sky-400"
						>
							<Link2 className="h-4 w-4" />
							LinkedIn
						</a>
						<a
							href="/cv-abdulrafay.pdf"
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-sky-600 dark:text-zinc-400 dark:hover:text-sky-400"
						>
							<FileText className="h-4 w-4" />
							View CV
						</a>
						<span className="text-sm text-zinc-500 dark:text-zinc-500">
							{siteData.location}
						</span>
					</div>
				</div>
			</div>

			<div className="border-t border-zinc-200 dark:border-white/10">
				<div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
					<span>© {new Date().getFullYear()} {siteData.name}</span>
					<span>Designed and built with care.</span>
				</div>
			</div>
		</footer>
	);
}
