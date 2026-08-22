import {
  BriefcaseBusiness,
  Code2,
  FolderKanban,
  House,
  Mail,
  MessageCircle,
  UserRound,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const navItems: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
    icon: House,
  },
  {
    label: "About",
    href: "/about",
    icon: UserRound,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    label: "Experience",
    href: "/experience",
    icon: BriefcaseBusiness,
  },
  {
    label: "Skills",
    href: "/skills",
    icon: Code2,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Mail,
  },
];

export const aiNavigation: NavigationItem = {
  label: "Ask AI",
  href: "/chat",
  icon: MessageCircle,
};