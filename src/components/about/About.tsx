import {
	ArrowRight,
	Award,
	BookOpen,
	Check,
	Code2,
	GraduationCap,
	Mail,
	MapPin,
	Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { aboutData, profile } from "@/data/profile";
import CertificateCarousel from "./CertificateCarousel";
import SectionLabel from "./SectionLabel";

export default function About() {
	return (
		<div className="mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 lg:pt-24">
			<header className="grid gap-10 border-b border-zinc-200 pb-16 dark:border-white/10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
				<div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 p-3 dark:border-white/10 dark:bg-white/5">
					<div className="relative aspect-4/5 overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
						<Image
							src="/images/profile.png"
							alt="Portrait of Abdul Rafay"
							fill
							priority
							className="object-cover object-top"
							sizes="(max-width: 1024px) 100vw, 35vw"
						/>
					</div>
					<div className="absolute bottom-7 left-7 rounded-lg border border-white/20 bg-zinc-950/85 px-4 py-3 text-white backdrop-blur-sm">
						<p className="text-xs font-bold">Available for opportunities</p>
						<p className="mt-1 text-[10px] text-zinc-300">Karachi, Pakistan</p>
					</div>
				</div>

				<div className="flex flex-col justify-center">
					<SectionLabel icon={Sparkles}>About Abdul</SectionLabel>
					<h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-zinc-950 sm:text-5xl dark:text-white">
						A developer who turns complex ideas into useful products.
					</h1>
					<div className="mt-8 max-w-3xl">
						<p className="text-xl font-semibold leading-8 tracking-tight text-zinc-900 sm:text-2xl sm:leading-9 dark:text-zinc-100">
						I&apos;m {profile.name}, a {profile.role} focused on creating
						products that are clear, useful, and built to last.
						</p>
						<p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
						{aboutData.summary}
						</p>
						<div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-zinc-600 dark:text-zinc-400">
							<span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-sky-500" />Karachi, Pakistan</span>
							<a className="inline-flex items-center gap-2 transition-colors hover:text-sky-600 dark:hover:text-sky-400" href="mailto:abdulrafay0608@gmail.com"><Mail className="h-4 w-4 text-sky-500" />Get in touch</a>
						</div>
					</div>
				</div>
			</header>

			<section className="grid gap-10 border-b border-zinc-200 py-16 dark:border-white/10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
				<div>
					<SectionLabel icon={Code2}>How I work</SectionLabel>
					<h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-zinc-950 dark:text-white">
						Product thinking,
						<br />
						technical foundation.
					</h2>
				</div>
				<div>
					<p className="max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
						{aboutData.approach}
					</p>
					<ul className="mt-8 grid gap-3 sm:grid-cols-2">
						{aboutData.strengths.map((strength) => (
							<li
								key={strength}
								className="flex items-center gap-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300"
							>
								<span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400">
									<Check className="h-3.5 w-3.5" />
								</span>
								{strength}
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className="grid gap-10 py-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
				<div>
					<SectionLabel icon={GraduationCap}>Background</SectionLabel>
					<h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-zinc-950 dark:text-white">
						Learning by building,
						<br />
						growing through practice.
					</h2>
				</div>

				<div className="grid gap-12 sm:grid-cols-2">
					<div>
						<div className="flex items-center gap-2 text-sm font-bold text-zinc-950 dark:text-white">
							<BookOpen className="h-4 w-4 text-sky-500" />
							Education
						</div>
						<div className="mt-6 divide-y divide-zinc-200 dark:divide-white/10">
							{aboutData.education.map((item) => (
								<article key={item.title} className="py-4 first:pt-0">
									<p className="text-sm font-bold text-zinc-900 dark:text-white">
										{item.title}
									</p>
									<p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
										{item.institution}
									</p>
									<p className="mt-1 text-xs font-semibold text-zinc-400 dark:text-zinc-500">
										{item.period}
									</p>
								</article>
							))}
						</div>
					</div>

					<div>
						<div className="flex items-center gap-2 text-sm font-bold text-zinc-950 dark:text-white">
							<ArrowRight className="h-4 w-4 text-sky-500" />
							Certification
						</div>
						<p className="mt-6 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
							{aboutData.certification}
						</p>
					</div>
				</div>
			</section>

			{/* <section className="border-t border-zinc-200 pt-16 dark:border-white/10">
				<div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
					<div>
						<SectionLabel icon={Award}>Certificates</SectionLabel>
						<h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-zinc-950 dark:text-white">
							Always learning,
							<br />
							always shipping.
						</h2>
					</div>
					<p className="max-w-md text-sm leading-6 text-zinc-600 dark:text-zinc-400">
						A selection of certificates from Abdul&apos;s web, app, and software
						development learning journey.
					</p>
				</div>

				<CertificateCarousel certificates={aboutData.certificates} />
			</section> */}

			<div className="mt-16 flex flex-wrap items-center gap-5 border-t border-zinc-200 pt-8 dark:border-white/10">
				<Link href="/experience" className="group inline-flex items-center gap-2 text-sm font-bold text-zinc-900 transition-colors hover:text-sky-600 dark:text-white dark:hover:text-sky-400">
					See my experience
					<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
				</Link>
				<Link href="/contact" className="text-sm font-bold text-zinc-500 transition-colors hover:text-sky-600 dark:text-zinc-400 dark:hover:text-sky-400">
					Get in touch
				</Link>
			</div>
		</div>
	);
}
