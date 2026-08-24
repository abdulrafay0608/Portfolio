import {
  ArrowRight,
  BookOpen,
  Check,
  Code2,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { aboutData, profile } from "@/data/profile";
import { aboutApproachSteps, aboutBuildAreas, aboutCurrentFocus } from "@/data/about";
import { siteData } from "@/data/site";
import CertificateCarousel from "./CertificateCarousel";
import PageContainer from "@/components/ui/PageContainer";
import SectionLabel from "@/components/ui/SectionLabel";

export default function About() {
  return (
    <PageContainer>
      <header className="grid gap-10 border-b border-zinc-200 pb-12 dark:border-white/10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div className="flex items-start gap-5">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 dark:border-white/10 dark:bg-zinc-900 sm:h-28 sm:w-28">
            <Image
              src="/images/profile.png"
              alt="Portrait of Abdul Rafay"
              fill
              priority
              className="object-cover object-top"
              sizes="112px"
            />
          </div>
          <div className="pt-1">
            <SectionLabel icon={Sparkles}>About Abdul</SectionLabel>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-zinc-400 dark:text-zinc-500">
              Engineering profile
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-[-0.04em] text-zinc-950 sm:text-5xl dark:text-white">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-semibold text-sky-600 dark:text-sky-400">
            {profile.role}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {aboutData.summary}
          </p>
          <div className="mt-7 grid gap-4 border-t border-zinc-200 pt-5 sm:grid-cols-3 dark:border-white/10">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500">
                Based in
              </p>
              <p className="mt-2 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                {siteData.location}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500">
                Focus
              </p>
              <p className="mt-2 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                Web · Business Systems · AI
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500">
                Education
              </p>
              <p className="mt-2 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                Software Engineering
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="border-b border-zinc-200 py-14 dark:border-white/10">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <SectionLabel icon={Code2}>What I build</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-zinc-950 dark:text-white">
              Products shaped
              <br />
              around real use.
            </h2>
          </div>
          <div className="grid gap-0 md:grid-cols-3">
            {aboutBuildAreas.map(([number, title, description]) => (
              <article
                key={number}
                className="border-t border-zinc-200 py-5 md:px-5 md:first:pl-0 dark:border-white/10"
              >
                <p className="text-xs font-semibold text-sky-600 dark:text-sky-400">
                  {number}
                </p>
                <h3 className="mt-4 text-lg font-bold text-zinc-950 dark:text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 py-14 dark:border-white/10">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <SectionLabel icon={Sparkles}>Engineering approach</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-zinc-950 dark:text-white">
              From workflow
              <br />
              to working software.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {aboutData.approach}
            </p>
          </div>
          <div>
            <div className="grid border-y border-zinc-200 sm:grid-cols-2 dark:border-white/10">
              {aboutApproachSteps.map(([number, title, description], index) => (
                <div
                  key={number}
                  className={`border-b border-zinc-200 py-6 sm:px-6 dark:border-white/10 ${index % 2 === 1 ? "sm:border-l" : "sm:pl-0"} ${index > 1 ? "sm:border-b-0" : ""}`}
                >
                  <p className="text-xs font-semibold text-sky-600 dark:text-sky-400">
                    {number}
                  </p>
                  <h3 className="mt-3 text-lg font-bold text-zinc-950 dark:text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              {aboutData.strengths.map((strength) => (
                <span
                  key={strength}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400"
                >
                  <Check className="h-3.5 w-3.5 text-sky-500" />
                  {strength}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 py-14 dark:border-white/10">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <SectionLabel icon={GraduationCap}>Background</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-zinc-950 dark:text-white">
              Learning by building.
            </h2>
          </div>
          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-zinc-950 dark:text-white">
                <BookOpen className="h-4 w-4 text-sky-500" />
                Education
              </div>
              <div className="relative mt-6 border-l border-zinc-200 dark:border-white/10">
                {aboutData.education.map((item) => (
                  <article
                    key={`${item.title}-${item.period}`}
                    className="relative pb-7 pl-6 last:pb-0"
                  >
                    <span className="absolute -left-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-sky-500 ring-4 ring-white dark:ring-[#0a0a0b]" />
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky-600 dark:text-sky-400">
                      {item.period}
                    </p>
                    <h3 className="mt-2 text-sm font-bold text-zinc-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {item.institution}
                    </p>
                  </article>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-zinc-950 dark:text-white">
                Current focus
              </p>
              <ul className="mt-6 space-y-3">
                {aboutCurrentFocus.map((focus) => (
                  <li
                    key={focus}
                    className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-sky-500" />
                    {focus}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 py-14 dark:border-white/10">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <SectionLabel icon={GraduationCap}>
              Continuous learning
            </SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-zinc-950 dark:text-white">
              Always learning,
              <br />
              always building.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            These certifications represent Abdul&apos;s ongoing technical
            learning across web, app, and software development.
          </p>
        </div>
        <CertificateCarousel certificates={aboutData.certificates} />
      </section>

      <div className="mt-14 flex flex-wrap items-center gap-6 border-t border-zinc-200 pt-8 dark:border-white/10">
        <Link
          href="/experience"
          className="group inline-flex items-center gap-2 text-sm font-bold text-zinc-900 transition-colors hover:text-sky-600 dark:text-white dark:hover:text-sky-400"
        >
          See my experience
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm font-bold text-zinc-500 transition-colors hover:text-sky-600 dark:text-zinc-400 dark:hover:text-sky-400"
        >
          Explore my projects
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </PageContainer>
  );
}
