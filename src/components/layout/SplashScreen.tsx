"use client";

import { useEffect, useState } from "react";

import { profile } from "@/data/profile";

const SPLASH_DURATION = 1000;
const EXIT_DURATION = 300;

type SplashScreenProps = {
  onComplete: () => void;
};

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, SPLASH_DURATION);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, SPLASH_DURATION + EXIT_DURATION);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-100 flex items-center justify-center bg-white text-zinc-950 transition-opacity duration-300 dark:bg-[#0a0a0b] dark:text-white ${
        exiting ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex w-full flex-col items-center px-6 text-center">
        {/* Monogram */}
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-950 text-xs font-bold text-white transition-all duration-500 dark:bg-white dark:text-black ${
            exiting ? "-translate-y-1.5 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          {initials}
        </div>

        {/* Identity */}
        <div
          className={`mt-5 transition-all delay-100 duration-500 ${
            exiting ? "-translate-y-1.5 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
            {profile.name}
          </p>

          <h1 className="mt-2 text-lg font-bold tracking-[-0.03em] sm:text-xl">
            AI-Powered Web &amp; App Developer
          </h1>
        </div>

        {/* Minimal progress line */}
        <div className="mt-8 h-px w-32 overflow-hidden bg-zinc-200 dark:bg-white/10">
          <div
            className={`h-full bg-sky-500 transition-[width] ease-out ${
              exiting ? "w-full duration-200" : "w-full duration-900"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
