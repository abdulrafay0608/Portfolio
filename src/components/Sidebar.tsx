"use client";

import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  Code2,
  FolderKanban,
  House,
  Mail,
  UserRound,
  PanelLeftOpen,
  PanelRightOpen,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home", icon: House },
  { label: "About", href: "#about", icon: UserRound },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Experience", href: "#experience", icon: BriefcaseBusiness },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Contact", href: "#contact", icon: Mail },
];

type SidebarProps = {
  activeSection: string;
  onNavigate: (href: string) => void;
};

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const savedState = localStorage.getItem("workspace-sidebar-expanded");
    if (savedState !== null) {
      setExpanded(savedState === "true");
    }
  }, []);

  // Main content space dynamically Sync karne ke liye CSS variable update
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--workspace-sidebar-width",
      expanded ? "200px" : "70px",
    );
  }, [expanded]);

  const handleToggle = () => {
    const nextState = !expanded;
    setExpanded(nextState);
    localStorage.setItem("workspace-sidebar-expanded", String(nextState));
  };

  return (
    <>
      <aside
        className={`fixed inset-y-0 left-0 z-30 hidden flex-col border-r border-zinc-200 bg-zinc-50 py-4 text-zinc-900 transition-[width] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] dark:border-white/10 dark:bg-[#111111] dark:text-white lg:flex overflow-hidden ${
          expanded ? "w-[200px]" : "w-[70px]"
        }`}
      >
        <div className="flex flex-col gap-3 w-full px-3">
          {/* 1. Toggle Button */}
          <div
            className={`flex w-full ${expanded ? "justify-end" : "justify-center"}`}
          >
            <button
              type="button"
              onClick={handleToggle}
              aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
              className="rounded-md p-1.5 text-zinc-400 transition-colors duration-200 hover:bg-zinc-200 hover:text-zinc-900 dark:text-white/45 dark:hover:bg-white/10 dark:hover:text-white shrink-0"
            >
              {expanded ? (
                <PanelLeftOpen className="h-4 w-4" />
              ) : (
                <PanelRightOpen className="h-4 w-4" />
              )}
            </button>
          </div>

          {/* 2. Profile Info Section */}
          <div className="flex items-center px-1">
            <a
              href="#home"
              aria-label="Abdul Rafay home"
              className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-300 bg-zinc-100 text-xs font-black tracking-tight text-[#161616] dark:border-white/15 dark:bg-[#e9e9e9]"
            >
              AR
              {/* <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-zinc-50 dark:ring-[#111111]" /> */}
            </a>

            <div
              className={`ml-3 flex flex-col transition-all duration-300 ease-in-out whitespace-nowrap overflow-hidden ${
                expanded ? "opacity-100 max-w-[150px]" : "opacity-0 max-w-0"
              }`}
            >
              <p className="truncate text-xs font-semibold text-zinc-900 dark:text-white">
                Abdul Rafay
              </p>
              <p className="mt-0.5 truncate text-[10px] text-zinc-500 dark:text-white/45">
                AI-Powered Full-Stack
              </p>
            </div>
          </div>
        </div>

        <div
          className={`my-5 h-px bg-zinc-200 dark:bg-white/10 transition-all duration-300 ${expanded ? "mx-4" : "mx-auto w-10"}`}
        />

        {/* Navigation Items */}
        <nav
          aria-label="Portfolio sections"
          className="flex flex-1 flex-col gap-1.5 px-3 overflow-hidden"
        >
          {navItems.map((item) => (
            <SidebarLink
              key={item.href}
              item={item}
              activeSection={activeSection}
              onNavigate={onNavigate}
              expanded={expanded}
            />
          ))}
        </nav>

        {/* Bottom Section */}
        <div
          className={`flex items-center border-t border-zinc-200 pt-3 dark:border-white/10 transition-all duration-300 ${
            expanded ? "justify-end px-3" : "justify-center"
          }`}
        >
          <ThemeToggle compact />
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-zinc-200 bg-zinc-50/95 px-4 py-3 text-zinc-900 backdrop-blur-xl dark:border-white/10 dark:bg-[#111111]/95 dark:text-white lg:hidden">
        <div className="flex items-center gap-2 text-xs font-semibold">
          <span className="relative flex h-7 w-7 items-center justify-center rounded-md bg-zinc-100 text-[10px] text-[#161616] dark:bg-[#e9e9e9]">
            AR
            {/* <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-emerald-400" /> */}
          </span>
          <span>Abdul Rafay</span>
        </div>
        <ThemeToggle compact />
      </div>

      {/* Mobile Bottom Navigation */}
      <nav
        aria-label="Mobile portfolio sections"
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-6 border-t border-zinc-200 bg-zinc-50/95 px-1 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 text-zinc-900 shadow-[0_-12px_30px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl dark:border-white/10 dark:bg-[#111111]/95 dark:text-white lg:hidden"
      >
        {navItems.map((item) => (
          <SidebarLink
            key={item.href}
            item={item}
            activeSection={activeSection}
            onNavigate={onNavigate}
            mobile
          />
        ))}
      </nav>
    </>
  );
}

function SidebarLink({
  item,
  activeSection,
  onNavigate,
  mobile = false,
  expanded = false,
}: {
  item: NavItem;
  activeSection: string;
  onNavigate: (href: string) => void;
  mobile?: boolean;
  expanded?: boolean;
}) {
  const Icon = item.icon;
  const isActive = activeSection === item.href.slice(1);

  return (
    <a
      href={item.href}
      onClick={() => onNavigate(item.href)}
      aria-label={item.label}
      className={
        mobile
          ? `flex min-w-0 flex-col items-center gap-1 rounded-lg px-1 py-1.5 text-[9px] font-medium transition-colors ${
              isActive
                ? "bg-sky-100 text-sky-700 dark:bg-white/10 dark:text-white"
                : "text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900 dark:text-white/45 dark:hover:bg-white/5 dark:hover:text-white/80"
            }`
          : `group relative flex h-10 items-center rounded-lg transition-colors duration-200 ${
              isActive
                ? "bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300"
                : "text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900 dark:text-white/35 dark:hover:bg-white/5 dark:hover:text-white/80"
            } px-3`
      }
    >
      <Icon
        className="h-[18px] w-[18px] shrink-0"
        strokeWidth={isActive ? 2.4 : 1.8}
      />

      <span
        className={`ml-3 text-xs font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${
          expanded ? "opacity-100 max-w-[120px]" : "opacity-0 max-w-0"
        }`}
      >
        {item.label}
      </span>

      {!mobile && !expanded && (
        <span className="pointer-events-none absolute left-14 z-50 hidden whitespace-nowrap rounded-lg bg-zinc-950 px-2.5 py-1.5 text-xs font-semibold text-white shadow-lg group-hover:block dark:bg-white dark:text-zinc-950">
          {item.label}
        </span>
      )}
    </a>
  );
}
