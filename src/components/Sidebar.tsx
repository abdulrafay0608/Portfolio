"use client";

import {
  BriefcaseBusiness,
  Code2,
  FolderKanban,
  House,
  Mail,
  Menu,
  UserRound,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home", icon: House },
  { label: "About", href: "#about", icon: UserRound },
  { label: "Experience", href: "#experience", icon: BriefcaseBusiness },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Contact", href: "#contact", icon: Mail },
];

type SidebarProps = {
  activeSection: string;
  isMobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
  onNavigate: (href: string) => void;
};

export default function Sidebar({
  activeSection,
  isMobileMenuOpen,
  onMobileMenuToggle,
  onNavigate,
}: SidebarProps) {
  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[84px] flex-col items-center border-r border-zinc-200/80 bg-white/75 py-5 shadow-[8px_0_30px_-28px_rgba(15,23,42,0.5)] backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/75 lg:flex">
        <a href="#home" aria-label="Abdul Rafay home" className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-950 text-xs font-black tracking-tight text-white shadow-lg dark:bg-white dark:text-zinc-950">
          AR
        </a>
        <nav aria-label="Portfolio sections" className="mt-16 flex flex-1 flex-col items-center gap-3">
          {navItems.map((item) => (
            <SidebarLink key={item.href} item={item} activeSection={activeSection} onNavigate={onNavigate} />
          ))}
        </nav>
        <span className="mb-1 h-1.5 w-1.5 rounded-full bg-sky-500 shadow-[0_0_12px_rgba(14,165,233,0.8)]" aria-label="Available for work" />
      </aside>

      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-zinc-200/80 bg-white/80 px-4 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/80 lg:hidden">
        <a href="#home" aria-label="Abdul Rafay home" className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 text-[11px] font-black text-white dark:bg-white dark:text-zinc-950">AR</a>
        <button type="button" onClick={onMobileMenuToggle} aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"} className="rounded-xl border border-zinc-200 p-2 text-zinc-700 transition hover:bg-zinc-100 dark:border-white/10 dark:text-zinc-200 dark:hover:bg-zinc-800">
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={`fixed inset-x-0 top-[61px] z-30 border-b border-zinc-200/80 bg-white/95 p-3 shadow-xl backdrop-blur-xl transition-transform dark:border-white/10 dark:bg-zinc-950/95 lg:hidden ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-[130%]"}`}>
        <nav aria-label="Mobile portfolio sections" className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {navItems.map((item) => (
            <SidebarLink key={item.href} item={item} activeSection={activeSection} onNavigate={onNavigate} mobile />
          ))}
        </nav>
      </div>
    </>
  );
}

function SidebarLink({ item, activeSection, onNavigate, mobile = false }: { item: NavItem; activeSection: string; onNavigate: (href: string) => void; mobile?: boolean }) {
  const Icon = item.icon;
  const isActive = activeSection === item.href.slice(1);

  return (
    <a
      href={item.href}
      onClick={() => onNavigate(item.href)}
      aria-label={item.label}
      className={mobile
        ? `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${isActive ? "bg-sky-50 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300" : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"}`
        : `group relative flex h-11 w-11 items-center justify-center rounded-xl transition ${isActive ? "bg-sky-50 text-sky-600 shadow-sm dark:bg-sky-950/60 dark:text-sky-300" : "text-zinc-400 hover:bg-zinc-100 hover:text-zinc-800 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-white"}`}
    >
      <Icon className="h-[18px] w-[18px]" strokeWidth={isActive ? 2.4 : 1.8} />
      {mobile && <span>{item.label}</span>}
      {!mobile && <span className="pointer-events-none absolute left-14 z-50 hidden whitespace-nowrap rounded-lg bg-zinc-950 px-2.5 py-1.5 text-xs font-semibold text-white shadow-lg group-hover:block dark:bg-white dark:text-zinc-950">{item.label}</span>}
    </a>
  );
}
