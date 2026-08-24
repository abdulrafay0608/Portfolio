import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  direction?: "right" | "up";
  className?: string;
};

export default function ActionLink({ href, children, external = false, direction = "right", className = "" }: ActionLinkProps) {
  const Icon = direction === "up" ? ArrowUpRight : ArrowRight;
  const classes = `group inline-flex items-center gap-2 text-sm font-bold text-zinc-900 transition-colors hover:text-sky-600 dark:text-white dark:hover:text-sky-400 ${className}`;
  const content = <>{children}<Icon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" /></>;

  return external ? <a href={href} target="_blank" rel="noreferrer" className={classes}>{content}</a> : <Link href={href} className={classes}>{content}</Link>;
}
