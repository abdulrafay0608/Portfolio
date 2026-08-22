"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { navItems, aiNavigation } from "@/config/navigation";
import SidebarItem from "./SidebarItem";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
  const pathname = usePathname();

  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("workspace-sidebar-expanded");

    if (saved !== null) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setExpanded(saved === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("workspace-sidebar-expanded", String(expanded));

    document.documentElement.style.setProperty(
      "--workspace-sidebar-width",
      expanded ? "220px" : "72px",
    );
  }, [expanded]);

  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-50
        hidden lg:flex
        flex-col
        border-r border-zinc-200
        bg-white
        dark:border-white/10
        dark:bg-[#0d0d0f]
        transition-[width]
        duration-300
        overflow-hidden
        ${expanded ? "w-55" : "w-18"}
      `}
    >
      {/* Header */}
      <div className="text-right px-4 py-2">
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
          className="
            rounded-md p-1.5
            text-zinc-500
            hover:bg-zinc-100
            hover:text-zinc-900
            dark:hover:bg-white/10
            dark:hover:text-white
          "
        >
          {expanded ? (
            <PanelLeftClose size={18} />
          ) : (
            <PanelLeftOpen size={18} />
          )}
        </button>
      </div>
      <div className="flex items-center justify-between p-4">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-900 text-xs font-bold text-white dark:bg-white dark:text-black">
            AR
          </div>

          {expanded && (
            <div className="overflow-hidden whitespace-nowrap">
              <p className="text-sm font-semibold">Abdul Rafay</p>

              <p className="text-[10px] text-zinc-500">AI-Powered Full-Stack</p>
            </div>
          )}
        </Link>
      </div>
      <div className="mx-4 h-px bg-zinc-200 dark:bg-white/10" />
      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-1 p-3">
        {navItems.map((item) => (
          <SidebarItem
            key={item.href}
            item={item}
            active={pathname === item.href}
            expanded={expanded}
          />
        ))}

        <div className="my-3 h-px bg-zinc-200 dark:bg-white/10" />

        <SidebarItem
          item={aiNavigation}
          active={pathname === aiNavigation.href}
          expanded={expanded}
          ai
        />
        <a
          href="/cv-abdulrafay.pdf"
          target="_blank"
          rel="noreferrer"
          title="View CV"
          aria-label="View Abdul Rafay CV"
          className={`group flex items-center gap-3 rounded-lg p-3 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:hover:bg-white/10 dark:hover:text-white ${expanded ? "justify-start" : "justify-center"}`}
        >
          <FileText className="h-5 w-5 shrink-0" />
          {expanded && <span className="whitespace-nowrap text-sm font-semibold">View CV</span>}
        </a>
      </nav>
      {/* Theme */}
      <div className="border-t border-zinc-200 p-3 dark:border-white/10">
        <ThemeToggle compact />
      </div>
    </aside>
  );
}
