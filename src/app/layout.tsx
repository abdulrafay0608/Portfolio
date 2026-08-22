import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";

import { Providers } from "./providers";
import AppShell from "@/components/layout/AppShell";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Abdul Rafay | AI-Powered Full-Stack Developer",
  description:
    "Abdul Rafay is an AI-powered Full-Stack Developer building intelligent web applications and digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
