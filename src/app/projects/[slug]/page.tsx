import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { notFound } from "next/navigation";

import ProductPreview from "@/components/projects/ProductPreview";
import { projects } from "@/data/projects";

type ProjectDetailPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-5xl px-5 pb-20 pt-16 sm:px-8 lg:pt-20">
      <Link href="/projects" className="group inline-flex items-center gap-2 text-sm font-bold text-zinc-900 transition-colors hover:text-sky-600 dark:text-white dark:hover:text-sky-400"><ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Projects</Link>
      <header className="mt-12 border-b border-zinc-200 pb-10 dark:border-white/10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">{project.category} · {project.year}</p>
        <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.04em] text-zinc-950 sm:text-6xl dark:text-white">{project.slug === "manufacturing-erp" ? "Manufacturing ERP" : project.title}</h1>
        <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-600 dark:text-zinc-400">{project.overview ?? project.description}</p>
      </header>

      <div className="mt-10"><ProductPreview project={project} featured /></div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.7fr]">
        <div className="space-y-10">
          {(["problem", "solution"] as const).map((section) => project[section] && <section key={section}><h2 className="text-xl font-bold capitalize text-zinc-950 dark:text-white">{section}</h2><p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-400">{project[section]}</p></section>)}
          {project.features && <section><h2 className="text-xl font-bold text-zinc-950 dark:text-white">Key Features</h2><ul className="mt-4 space-y-3">{project.features.map((feature) => <li key={feature} className="flex gap-3 text-base leading-7 text-zinc-600 dark:text-zinc-400"><Check className="mt-1 h-4 w-4 shrink-0 text-sky-500" />{feature}</li>)}</ul></section>}
          {project.architecture && <section><h2 className="text-xl font-bold text-zinc-950 dark:text-white">Architecture</h2><p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-400">{project.architecture}</p></section>}
        </div>
        <aside className="h-fit border-t border-zinc-200 pt-6 dark:border-white/10">
          {([["Role", project.role], ["Stack", project.tags.join(" · ")], ["Type", project.type], ["Status", project.status]] as const).filter(([, value]) => value).map(([label, value]) => <div key={label} className="border-b border-zinc-200 py-5 first:pt-0 last:border-b-0 dark:border-white/10"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">{label}</p><p className="mt-2 text-sm font-semibold text-zinc-900 dark:text-white">{value}</p></div>)}
          <a href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel={project.href.startsWith("http") ? "noreferrer" : undefined} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-zinc-900 hover:text-sky-600 dark:text-white dark:hover:text-sky-400">{project.href.startsWith("http") ? "View live project" : "Discuss this project"} <ArrowUpRight className="h-4 w-4" /></a>
        </aside>
      </div>
    </article>
  );
}
