import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";
import MobileNav from "./MobileNav";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0b]">
      <Sidebar />
      <MobileHeader />
      <main
        className="
          min-h-screen
          pb-20
          lg:pb-0
          lg:ml-(--workspace-sidebar-width)
          transition-[margin]
          duration-300
        "
      >
        {children}
        <Footer />
      </main>
      <MobileNav />
      <WhatsAppButton />
    </div>
  );
}
