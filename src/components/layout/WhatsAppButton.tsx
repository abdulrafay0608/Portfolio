"use client";

import { MessageCircle } from "lucide-react";

import { siteData } from "@/data/site";
import { usePathname } from "next/navigation";

export default function WhatsAppButton() {
  const pathname = usePathname();

  if (pathname === "/chat") return null;

  const whatsappNumber = siteData.phone.replace(/^0/, "92");
  const message = encodeURIComponent(
    "Hi Abdul, I would like to discuss a project with you.",
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Abdul on WhatsApp"
      title="Chat on WhatsApp"
      className="group fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1fbd5b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] sm:right-6 lg:bottom-8 lg:right-8"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 motion-safe:animate-ping" />
      <span className="absolute inset-0 rounded-full border-2 border-[#25D366] opacity-40 transition-transform duration-500 group-hover:scale-125 group-hover:opacity-0" />
      <MessageCircle className="relative h-6 w-6 fill-white/15" />
    </a>
  );
}
