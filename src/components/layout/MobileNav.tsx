"use client";

import { usePathname } from "next/navigation";

import { navItems } from "@/config/navigation";
import SidebarItem from "./SidebarItem";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile portfolio navigation"
      className="
        fixed inset-x-0 bottom-0 z-40
        grid grid-cols-6
        border-t border-zinc-200
        bg-white/90
        px-1 py-2
        backdrop-blur-xl
        dark:border-white/10
        dark:bg-[#0d0d0f]/90
        lg:hidden
      "
    >
      {navItems.map((item) => (
        <SidebarItem
          key={item.href}
          item={item}
          active={pathname === item.href}
          expanded={false}
        />
      ))}
    </nav>
  );
}
