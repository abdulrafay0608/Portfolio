import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  className?: string;
};

export default function Tag({ children, className = "" }: TagProps) {
  return <span className={`rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600 dark:border-white/10 dark:text-zinc-300 ${className}`}>{children}</span>;
}
