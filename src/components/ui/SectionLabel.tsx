import type { LucideIcon } from "lucide-react";

type SectionLabelProps = {
  icon: LucideIcon;
  children: string;
};

export default function SectionLabel({ icon: Icon, children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
      <Icon className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}
