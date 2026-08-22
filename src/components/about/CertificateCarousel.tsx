"use client";

import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Certificate = {
  title: string;
  image: string;
};

type CertificateCarouselProps = {
  certificates: Certificate[];
};

export default function CertificateCarousel({
  certificates,
}: CertificateCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCertificate = certificates[activeIndex];

  function showPrevious() {
    setActiveIndex((current) =>
      current === 0 ? certificates.length - 1 : current - 1,
    );
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % certificates.length);
  }

  if (!activeCertificate) return null;

  return (
    <div className="mt-10 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-white/5">
        <a
          href={activeCertificate.image}
          target="_blank"
          rel="noreferrer"
          className="group block"
        >
          <div className="relative aspect-16/10 overflow-hidden bg-zinc-100 dark:bg-zinc-900">
            <Image
              key={activeCertificate.image}
              src={activeCertificate.image}
              alt={`${activeCertificate.title} certificate`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
            <span className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-zinc-950/85 px-3 py-2 text-xs font-bold text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
              Open certificate
              <ExternalLink className="h-3.5 w-3.5" />
            </span>
          </div>
          <div className="flex items-center justify-between gap-5 p-5 sm:p-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-400">
                Certificate {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(certificates.length).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-lg font-bold text-zinc-950 dark:text-white sm:text-xl">
                {activeCertificate.title}
              </h3>
            </div>
            <ExternalLink className="hidden h-5 w-5 shrink-0 text-zinc-400 sm:block" />
          </div>
        </a>

        <div className="flex items-center justify-between border-t border-zinc-200 px-5 py-4 dark:border-white/10 sm:px-6">
          <div className="flex gap-1.5" aria-label="Certificate slides">
            {certificates.map((certificate, index) => (
              <button
                key={certificate.image}
                type="button"
                aria-label={`Show ${certificate.title}`}
                aria-current={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 rounded-full transition-all ${index === activeIndex ? "w-7 bg-sky-500" : "w-1.5 bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-700 dark:hover:bg-zinc-500"}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous certificate"
              onClick={showPrevious}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:border-sky-300 hover:text-sky-600 dark:border-white/10 dark:text-zinc-300 dark:hover:border-sky-500/50 dark:hover:text-sky-400"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next certificate"
              onClick={showNext}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:border-sky-300 hover:text-sky-600 dark:border-white/10 dark:text-zinc-300 dark:hover:border-sky-500/50 dark:hover:text-sky-400"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="hidden gap-3 lg:grid lg:grid-rows-3">
        {certificates
          .map((certificate, index) => ({ certificate, index }))
          .filter(({ index }) => index !== activeIndex)
          .slice(0, 3)
          .map(({ certificate, index }) => (
            <button
              key={certificate.image}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group grid grid-cols-[112px_1fr] items-center gap-4 rounded-xl border border-zinc-200 bg-white p-2 text-left transition-all hover:border-sky-300 dark:border-white/10 dark:bg-white/5 dark:hover:border-sky-500/30"
            >
              <span className="relative aspect-4/3 overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src={certificate.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="112px"
                />
              </span>
              <span className="pr-2 text-sm font-bold leading-5 text-zinc-800 dark:text-zinc-200">
                {certificate.title}
              </span>
            </button>
          ))}
      </div>
    </div>
  );
}
