import Link from "next/link";
import type { NavigationItem } from "@/config/navigation";

type SidebarItemProps = {
  item: NavigationItem;
  active: boolean;
  expanded: boolean;
  ai?: boolean;
};

export default function SidebarItem({
  item,
  active,
  expanded,
  ai = false,
}: SidebarItemProps) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className={`group relative flex h-10 items-center rounded-lg px-3 transition-all duration-200 ${active ? (ai ? "bg-sky-500/15 text-sky-400" : "bg-sky-500/10 text-sky-500") : ai ? "text-sky-500 hover:bg-sky-500/10" : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-white/45 dark:hover:bg-white/5 dark:hover:text-white"}`}
    >
      <Icon size={18} strokeWidth={active ? 2.3 : 1.8} className="shrink-0" />

      {expanded && (
        <span className="ml-3 whitespace-nowrap text-xs font-medium">
          {item.label}
        </span>
      )}

      {!expanded && (
        <span className="pointer-events-none absolute left-15 hidden whitespace-nowrap rounded-md bg-zinc-900 px-2.5 py-1.5 text-xs text-white shadow-lg group-hover:block dark:bg-white dark:text-black">
          {item.label}
        </span>
      )}
    </Link>
  );
}
