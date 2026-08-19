"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Download,
  GitBranch,
  Link as LinkIcon,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import AssistantWidget from "@/components/AssistantWidget";
import BackgroundSplash from "@/components/BackgroundSplash";
import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";
const sectionIds = [
  "home",
  "about",
  "experience",
  "projects",
  "skills",
  "contact",
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) setActiveSection(visibleEntry.target.id);
      },
      { rootMargin: "-35% 0px -55%", threshold: 0 },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  function handleNavigate(href: string) {
    setActiveSection(href.slice(1));
    setIsMobileMenuOpen(false);
  }
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white">
      <BackgroundSplash />
      <Sidebar
        activeSection={activeSection}
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuToggle={() => setIsMobileMenuOpen((open) => !open)}
        onNavigate={handleNavigate}
      />

      <div className="relative z-10 lg:pl-[84px]">
        <header className="mx-auto flex max-w-7xl items-center justify-end px-5 pb-4 pt-20 sm:px-8 lg:px-12 lg:pt-7">
          <ThemeToggle />
        </header>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <section
            id="home"
            className="grid min-h-[calc(100vh-100px)] items-center gap-12 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-20"
          >
            <div className="max-w-3xl">
              <p className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />{" "}
                Available for select opportunities
              </p>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.055em] text-zinc-950 sm:text-7xl lg:text-[clamp(4.5rem,8vw,7.5rem)] dark:text-white">
                Full Stack
                <br />
                <span className="text-sky-500">MERN Developer</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg dark:text-zinc-400">
                I&apos;m Abdul Rafay, a developer who turns thoughtful ideas
                into fast, resilient, and intuitive digital products.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  onClick={() => handleNavigate("#contact")}
                  className="inline-flex items-center gap-2 rounded-xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-600 dark:bg-white dark:text-zinc-950 dark:hover:bg-sky-400"
                >
                  Hire me <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#projects"
                  onClick={() => handleNavigate("#projects")}
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white/70 px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600 dark:border-white/10 dark:bg-zinc-900/60 dark:text-zinc-200"
                >
                  View projects <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#experience"
                  onClick={() => handleNavigate("#experience")}
                  className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-zinc-500 transition hover:text-sky-600 dark:text-zinc-400"
                >
                  <Download className="h-4 w-4" /> Resume
                </a>
              </div>
              <div className="mt-12 flex items-center gap-5 text-zinc-400">
                <a
                  href="#contact"
                  aria-label="GitHub"
                  className="transition hover:text-zinc-950 dark:hover:text-white"
                >
                  <GitBranch className="h-5 w-5" />
                </a>
                <a
                  href="#contact"
                  aria-label="LinkedIn"
                  className="transition hover:text-sky-600"
                >
                  <LinkIcon className="h-5 w-5" />
                </a>
                <span className="h-px w-16 bg-zinc-200 dark:bg-white/10" />
                <span className="text-xs font-medium tracking-wide">
                  Lahore, Pakistan
                </span>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md lg:ml-auto">
              <div className="absolute -inset-5 rounded-[2rem] border border-sky-200/60 bg-sky-100/30 blur-2xl dark:border-sky-900/50 dark:bg-sky-950/20" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-3 shadow-2xl shadow-sky-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/70">
                <div className="relative aspect-[0.86] overflow-hidden rounded-[1.5rem] bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src="/images/profile.png?v=2"
                    alt="Abdul Rafay"
                    fill
                    sizes="(max-width: 1024px) 80vw, 28rem"
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="flex items-end justify-between px-3 pb-2 pt-5">
                  <div>
                    <p className="text-lg font-bold">Abdul Rafay</p>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                      Product-minded developer
                    </p>
                  </div>
                  <span className="rounded-lg bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
                    01 / 06
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section
            id="about"
            className="grid scroll-mt-8 gap-8 border-t border-zinc-200 py-24 dark:border-white/10 lg:grid-cols-[0.7fr_1.3fr]"
          >
            <SectionLabel number="01" title="About me" />
            <div className="max-w-2xl">
              <p className="text-2xl font-semibold leading-9 tracking-tight sm:text-3xl">
                I build interfaces that make complex technology feel simple.
              </p>
              <p className="mt-6 leading-7 text-zinc-600 dark:text-zinc-400">
                My work sits at the intersection of clean engineering, useful
                design, and genuine curiosity. I enjoy shipping full-stack
                products where every detail has a reason to exist.
              </p>
            </div>
          </section>

          <section
            id="experience"
            className="scroll-mt-8 border-t border-zinc-200 py-24 dark:border-white/10"
          >
            <SectionLabel number="02" title="Experience" />
            <div className="mt-12 grid gap-6 md:grid-cols-[1fr_2fr]">
              <div>
                <p className="font-semibold">Full Stack Developer</p>
                <p className="mt-1 text-sm text-zinc-500">
                  Independent · 2023 — Present
                </p>
              </div>
              <div>
                <p className="leading-7 text-zinc-600 dark:text-zinc-400">
                  Designing and developing production-ready web experiences with
                  React, Next.js, Node.js, and MongoDB, from first sketch to
                  deployment.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["React", "Next.js", "Node.js", "MongoDB"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            id="projects"
            className="scroll-mt-8 border-t border-zinc-200 py-24 dark:border-white/10"
          >
            <SectionLabel number="03" title="Selected projects" />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <ProjectCard
                title="AI Assistant"
                type="Personal platform"
                description="A conversational portfolio experience that connects personal brand, work, and an intelligent interface."
              />
              <ProjectCard
                title="Commerce Dashboard"
                type="Full-stack product"
                description="A focused operations workspace for managing products, orders, and customer signals in one place."
              />
            </div>
          </section>

          <section
            id="skills"
            className="scroll-mt-8 border-t border-zinc-200 py-24 dark:border-white/10"
          >
            <SectionLabel number="04" title="Skills & tools" />
            <div className="mt-12 grid grid-cols-2 gap-y-5 text-sm font-semibold text-zinc-600 sm:grid-cols-4 dark:text-zinc-300">
              {[
                "JavaScript / TypeScript",
                "React / Next.js",
                "Node / Express",
                "MongoDB",
                "Tailwind CSS",
                "REST APIs",
                "Git / GitHub",
                "Product thinking",
              ].map((skill) => (
                <p key={skill} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-sky-500" />
                  {skill}
                </p>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="scroll-mt-8 border-t border-zinc-200 py-24 dark:border-white/10"
          >
            <SectionLabel number="05" title="Let's work together" />
            <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <p className="max-w-xl text-3xl font-bold tracking-tight sm:text-5xl">
                Have a product in mind?
                <br />
                <span className="text-sky-500">Let&apos;s make it real.</span>
              </p>
              <a
                href="mailto:hello@abdulrafay.dev"
                className="inline-flex items-center gap-2 text-sm font-bold text-zinc-800 transition hover:text-sky-600 dark:text-white"
              >
                hello@abdulrafay.dev <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </section>

          <footer className="flex flex-col justify-between gap-3 border-t border-zinc-200 py-6 text-xs text-zinc-400 sm:flex-row dark:border-white/10">
            <span>© 2026 Abdul Rafay</span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" /> Built with intention
            </span>
          </footer>
        </div>
      </div>
      <AssistantWidget />
    </main>
  );
}

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div>
      <p className="text-xs font-bold tracking-[0.2em] text-sky-600 dark:text-sky-400">
        {number}
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

function ProjectCard({
  title,
  type,
  description,
}: {
  title: string;
  type: string;
  description: string;
}) {
  return (
    <article className="group rounded-2xl border border-zinc-200 bg-white/60 p-6 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-900/5 dark:border-white/10 dark:bg-zinc-900/50">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-600 dark:text-sky-400">
            {type}
          </p>
          <h3 className="mt-3 text-xl font-bold">{title}</h3>
        </div>
        <ArrowUpRight className="h-5 w-5 text-zinc-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-500" />
      </div>
      <p className="mt-12 max-w-sm text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </article>
  );
}
