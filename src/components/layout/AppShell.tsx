"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";
import MobileNav from "./MobileNav";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import SplashScreen from "./SplashScreen";

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isChatPage = pathname === "/chat";

  const [showSplash, setShowSplash] = useState(!isChatPage);

  useEffect(() => {
    if (isChatPage) {
      setShowSplash(false);
    }
  }, [isChatPage]);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0b]">
      {!isChatPage && <Sidebar />}

      {!isChatPage && <MobileHeader />}

      <main
        className={
          !isChatPage
            ? "min-h-screen pb-20 transition-[margin] duration-300 lg:ml-[var(--workspace-sidebar-width)] lg:pb-0"
            : "min-h-screen"
        }
      >
        {children}

        {!isChatPage && <Footer />}
      </main>

      {!isChatPage && <MobileNav />}

      {!isChatPage && <WhatsAppButton />}

      {showSplash && !isChatPage && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}
    </div>
  );
}
