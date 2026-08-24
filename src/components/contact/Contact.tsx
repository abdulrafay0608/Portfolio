"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import { type FormEvent, useState } from "react";

import { contactConnections, contactOpenTo } from "@/data/contact";
import { siteData } from "@/data/site";
import PageContainer from "@/components/ui/PageContainer";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${siteData.email}?subject=${subject}&body=${body}`;
  }

  return (
    <PageContainer>
      <header className="grid gap-8 border-b border-zinc-200 pb-10 dark:border-white/10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400"><Mail className="h-3.5 w-3.5" />Contact</div>
          <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-zinc-950 sm:text-5xl dark:text-white">Let&apos;s build something useful.</h1>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">Have a product idea, a team opportunity, or a problem worth solving? Start a conversation and let&apos;s see where I can help.</p>
      </header>

      <main className="grid gap-12 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <section>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">Get in touch</p>
          <div className="mt-6 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-white/10 dark:border-white/10">
            {contactConnections.map((connection) => { const Icon = connection.icon; const content = <><span className="flex min-w-0 items-center gap-3"><Icon className="h-4 w-4 shrink-0 text-sky-500" /><span className="min-w-0"><span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500">{connection.label}</span><span className="mt-1 block truncate text-sm font-semibold text-zinc-800 dark:text-zinc-200">{connection.value}</span></span></span>{connection.href && <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}</>; return connection.href ? <a key={connection.label} href={connection.href} target={connection.external ? "_blank" : undefined} rel={connection.external ? "noreferrer" : undefined} className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-sky-600">{content}</a> : <div key={connection.label} className="flex items-center gap-3 py-5">{content}</div>; })}
          </div>
          <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300"><span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_0_4px_rgba(163,230,53,0.12)]" />Available for work</p>
          <Link href="/chat" className="group mt-8 flex w-fit items-center gap-2 text-sm font-bold text-zinc-900 transition-colors hover:text-sky-600 dark:text-white dark:hover:text-sky-400">Prefer to ask first? <span>Ask AI</span><ArrowRightIcon /></Link>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-zinc-50/70 p-6 dark:border-white/10 dark:bg-white/5 sm:p-8">
          <div className="flex items-start justify-between gap-5"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-400">Start a conversation</p><h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-zinc-950 dark:text-white">Have a project in mind?</h2><p className="mt-3 max-w-lg text-sm leading-6 text-zinc-600 dark:text-zinc-400">Tell me what you&apos;re building, what you&apos;re trying to solve, or where you need help.</p></div><Send className="h-5 w-5 shrink-0 text-sky-500" /></div>
          <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
            <label className="grid gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">Your name<input value={name} onChange={(event) => setName(event.target.value)} required placeholder="Your name" className="rounded-md border border-zinc-200 bg-white px-4 py-3 text-sm font-normal text-zinc-900 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-500/10 dark:border-white/10 dark:bg-zinc-950 dark:text-white" /></label>
            <label className="grid gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">Email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required placeholder="you@example.com" className="rounded-md border border-zinc-200 bg-white px-4 py-3 text-sm font-normal text-zinc-900 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-500/10 dark:border-white/10 dark:bg-zinc-950 dark:text-white" /></label>
            <label className="grid gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">What are you building?<textarea value={message} onChange={(event) => setMessage(event.target.value)} required rows={6} placeholder="What are you working on, and where can I help?" className="resize-y rounded-md border border-zinc-200 bg-white px-4 py-3 text-sm font-normal leading-6 text-zinc-900 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-500/10 dark:border-white/10 dark:bg-zinc-950 dark:text-white" /></label>
            <button type="submit" className="group inline-flex w-fit items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 dark:bg-white dark:text-zinc-950">Start the conversation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></button>
          </form>
        </section>
      </main>

      <section className="border-t border-zinc-200 py-10 dark:border-white/10"><div className="flex flex-wrap items-center gap-x-8 gap-y-4"><p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">Open to</p>{contactOpenTo.map((item) => <span key={item} className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">{item}</span>)}</div></section>
    </PageContainer>
  );
}

function ArrowRightIcon() {
  return <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />;
}
