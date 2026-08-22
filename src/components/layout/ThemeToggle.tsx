// components/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle({
  compact = false,
}: {
  compact?: boolean;
}) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-hidden="true"
        disabled
        className={
          compact
            ? "rounded-md p-2"
            : "rounded-full border border-black/10 p-2.5"
        }
      >
        <Moon className="h-4 w-4 opacity-0" />
      </button>
    );
  }
  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`${compact ? "rounded-md p-2" : "rounded-full p-2.5"} border border-black/10 bg-white/70 shadow-sm backdrop-blur-md transition-all hover:scale-105 dark:border-white/10 dark:bg-zinc-800/70`}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4 text-amber-400" />
      ) : (
        <Moon className="h-4 w-4 text-zinc-700" />
      )}
    </button>
  );
}
