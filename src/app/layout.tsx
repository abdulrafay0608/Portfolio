import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Abdul Rafay | AI Engineer & Full Stack MERN Developer",
  description:
    "Portfolio of Abdul Rafay — AI Engineer and Full Stack MERN Developer building modern web applications and AI-powered solutions.",

};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", geist.variable)}
    >
      <body
        suppressHydrationWarning
        className="bg-white text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100"
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
