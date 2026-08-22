"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function MobileHeader() {
  return (
    <header
      className="
        fixed inset-x-0 top-0 z-40
        flex items-center justify-between
        border-b border-zinc-200
        bg-white/90
        px-4 py-3
        backdrop-blur-xl
        dark:border-white/10
        dark:bg-[#0d0d0f]/90
        lg:hidden
      "
    >
      <Link href="/" className="flex items-center gap-2">
        <span
          className="
            flex h-8 w-8
            items-center justify-center
            rounded-lg
            bg-zinc-900
            text-[10px]
            font-bold
            text-white
            dark:bg-white
            dark:text-black
          "
        >
          AR
        </span>

        <span className="text-xs font-semibold">Abdul Rafay</span>
      </Link>

      <ThemeToggle compact />
    </header>
  );
}
