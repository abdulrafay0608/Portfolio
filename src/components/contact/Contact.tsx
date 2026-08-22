"use client";

import Link from "next/link";
import { ArrowUpRight, Link2, Mail, MapPin, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";

import { siteData } from "@/data/site";

export default function Contact() {
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const subject = encodeURIComponent(`Project inquiry from ${name || "a visitor"}`);
		const body = encodeURIComponent(message);
		window.location.href = `mailto:${siteData.email}?subject=${subject}&body=${body}`;
	}

	return (
		<div className="mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 lg:pt-24">
			<header className="grid gap-10 border-b border-zinc-200 pb-16 dark:border-white/10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
				<div>
					<div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
						<Mail className="h-3.5 w-3.5" />
						Contact
					</div>
					<h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-zinc-950 sm:text-5xl dark:text-white">
						Let&apos;s make something
						<br />
						useful together.
					</h1>
				</div>
				<div className="max-w-2xl">
					<p className="text-xl font-semibold leading-8 tracking-tight text-zinc-900 sm:text-2xl sm:leading-9 dark:text-zinc-100">
						Have a product idea, a team opportunity, or a problem worth solving?
					</p>
					<p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
						Share a little context and Abdul will get back to you. For a quick
						conversation, you can also reach him directly through the links below.
					</p>
				</div>
			</header>

			<main className="grid gap-12 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
				<section>
					<p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">Direct line</p>
					<div className="mt-6 grid gap-3">
						<a href={`mailto:${siteData.email}`} className="group flex items-center justify-between rounded-xl border border-zinc-200 p-4 transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-900/5 dark:border-white/10 dark:hover:border-sky-500/30">
							<span className="flex min-w-0 items-center gap-3"><Mail className="h-5 w-5 shrink-0 text-sky-500" /><span className="truncate text-sm font-semibold text-zinc-800 dark:text-zinc-200">{siteData.email}</span></span>
							<ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
						</a>
						<a href={`tel:${siteData.phone}`} className="group flex items-center justify-between rounded-xl border border-zinc-200 p-4 transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-900/5 dark:border-white/10 dark:hover:border-sky-500/30">
							<span className="flex items-center gap-3"><Phone className="h-5 w-5 text-sky-500" /><span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{siteData.phone}</span></span>
							<ArrowUpRight className="h-4 w-4 text-zinc-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
						</a>
						<a href={siteData.linkedin} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-xl border border-zinc-200 p-4 transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-900/5 dark:border-white/10 dark:hover:border-sky-500/30">
							<span className="flex items-center gap-3"><Link2 className="h-5 w-5 text-sky-500" /><span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">LinkedIn profile</span></span>
							<ArrowUpRight className="h-4 w-4 text-zinc-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
						</a>
					</div>
					<div className="mt-8 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400"><MapPin className="h-4 w-4 text-sky-500" />{siteData.location}</div>
					<p className="mt-8 max-w-sm text-sm leading-6 text-zinc-500 dark:text-zinc-500">Currently open to junior/mid-level opportunities and freelance product work.</p>
				</section>

				<section className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 dark:border-white/10 dark:bg-white/5 sm:p-8">
					<div className="flex items-start justify-between gap-5">
						<div><p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-400">Start here</p><h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-zinc-950 dark:text-white">Tell me what you&apos;re building.</h2></div>
						<Send className="h-5 w-5 text-sky-500" />
					</div>
					<form onSubmit={handleSubmit} className="mt-8 grid gap-5">
						<label className="grid gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">Your name<input value={name} onChange={(event) => setName(event.target.value)} required placeholder="Your name" className="rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-normal text-zinc-900 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-500/10 dark:border-white/10 dark:bg-zinc-950 dark:text-white" /></label>
						<label className="grid gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">Project context<textarea value={message} onChange={(event) => setMessage(event.target.value)} required rows={6} placeholder="What are you working on, and where can I help?" className="resize-y rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-normal leading-6 text-zinc-900 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-500/10 dark:border-white/10 dark:bg-zinc-950 dark:text-white" /></label>
						<button type="submit" className="group inline-flex w-fit items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-zinc-950">Open email draft<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></button>
					</form>
				</section>
			</main>

			<div className="border-t border-zinc-200 pt-8 dark:border-white/10"><Link href="/" className="group inline-flex items-center gap-2 text-sm font-bold text-zinc-900 transition-colors hover:text-sky-600 dark:text-white dark:hover:text-sky-400">Back to portfolio<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link></div>
		</div>
	);
}
