import { Link2, Mail, MapPin, Phone } from "lucide-react";

import { siteData } from "./site";

export type ContactConnection = {
  label: string;
  value: string;
  href?: string;
  icon: typeof Mail;
  external?: boolean;
};

export const contactConnections: ContactConnection[] = [
  { label: "Email", value: siteData.email, href: `mailto:${siteData.email}`, icon: Mail },
  { label: "Phone", value: siteData.phone, href: `tel:${siteData.phone}`, icon: Phone },
  { label: "LinkedIn", value: "LinkedIn profile", href: siteData.linkedin, icon: Link2, external: true },
  { label: "Location", value: siteData.location, href: undefined, icon: MapPin },
];

export const contactOpenTo = [
  "Freelance projects",
  "Full-stack development",
  "AI-powered products",
  "Junior / mid-level opportunities",
];
