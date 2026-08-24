import Link from "next/link";
import { ArrowUpRight, Link2, Mail, MapPin, Phone } from "lucide-react";

import { siteData } from "@/data/site";

export default function ContactCTA() {
	return (
		<section
			id="contact"
			className="relative mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8"
		>
			<div className="relative grid gap-10 overflow-hidden rounded-lg border border-zinc-200 bg-zinc-950 p-6 text-white shadow-2xl shadow-zinc-900/10 dark:border-white/10 dark:bg-white/6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:p-12">
				<div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full border border-sky-400/20" />
				<div>
					<div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
						<Mail className="h-3.5 w-3.5" />
						Start a conversation
					</div>
					<h2 className="mt-5 max-w-xl text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
						Have a product in mind?
						<br />
						Let&apos;s build it well.
					</h2>
					<p className="mt-5 max-w-lg text-base leading-7 text-zinc-300">
						Whether you are hiring, exploring an idea, or need a dependable
						full-stack partner, Abdul would be glad to hear what you are
						working on.
					</p>

					<a
						href={`mailto:${siteData.email}`}
						className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-zinc-950 transition-transform duration-200 hover:-translate-y-0.5"
					>
						Email Abdul
						<ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
					</a>
				</div>

				<div className="flex flex-col justify-end gap-4 border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
					<a
						href={`mailto:${siteData.email}`}
						className="flex items-center gap-3 text-sm text-zinc-200 transition-colors hover:text-sky-300"
					>
						<Mail className="h-4 w-4 text-sky-300" />
						{siteData.email}
					</a>
					<a
						href={`tel:${siteData.phone}`}
						className="flex items-center gap-3 text-sm text-zinc-200 transition-colors hover:text-sky-300"
					>
						<Phone className="h-4 w-4 text-sky-300" />
						{siteData.phone}
					</a>
					<div className="flex items-center gap-3 text-sm text-zinc-400">
						<MapPin className="h-4 w-4 text-sky-300" />
						{siteData.location}
					</div>
					<a
						href={siteData.linkedin}
						target="_blank"
						rel="noreferrer"
						className="flex items-center gap-3 text-sm text-zinc-200 transition-colors hover:text-sky-300"
					>
						<Link2 className="h-4 w-4 text-sky-300" />
						LinkedIn profile
					</a>

					<Link
						href="/contact"
						className="group mt-4 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-sky-300"
					>
						Open contact page
						<ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
					</Link>
				</div>
			</div>
		</section>
	);
}
