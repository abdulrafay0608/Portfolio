import { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";

import { Providers } from "./providers";
import AppShell from "@/components/layout/AppShell";
import { profile } from "@/data/profile";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: `${profile.name} is an ${profile.role} building intelligent web applications and digital products.`,
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={geist.variable}>
      <body className="bg-white text-zinc-900 dark:bg-[#0a0a0b] dark:text-zinc-100">
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
