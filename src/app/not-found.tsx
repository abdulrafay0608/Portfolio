import Link from "next/link";
import { ArrowLeft, ArrowRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center px-5 py-20 sm:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
          <Compass className="h-6 w-6" />
        </div>

        <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
          404 / Page not found
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-[-0.04em] text-zinc-950 sm:text-6xl dark:text-white">
          This page took a wrong turn.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
          The page you are looking for does not exist or may have moved. Head
          back to Abdul&apos;s portfolio to explore his work.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-5">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 dark:bg-white dark:text-zinc-950"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back home
          </Link>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-bold text-zinc-900 transition-colors hover:text-sky-600 dark:text-white dark:hover:text-sky-400"
          >
            Explore projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
