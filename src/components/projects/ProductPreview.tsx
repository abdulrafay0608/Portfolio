import {
  BarChart3,
  Boxes,
  Bot,
  Headphones,
  LayoutDashboard,
} from "lucide-react";

import type { Project } from "@/data/projects";

type ProductPreviewProps = {
  project: Project;
  featured?: boolean;
};

export default function ProductPreview({
  project,
  featured = false,
}: ProductPreviewProps) {
  const Icon =
    project.slug === "manufacturing-erp"
      ? Boxes
      : project.slug === "crm-ticketing-system"
        ? Headphones
        : Bot;
  const accent = project.accent === "sky" ? "text-sky-300" : "text-lime-300";

  return (
    <div
      className={`relative overflow-hidden border border-white/10 bg-zinc-950 text-white ${featured ? "min-h-72 p-6 sm:min-h-96 sm:p-8" : "min-h-52 p-5"}`}
    >
      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-size-[28px_28px] text-white/10" />
      <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-md bg-white/10 ${accent}`}
          >
            <Icon className="h-4 w-4" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400">
            Product workspace
          </span>
        </div>
        <span className="h-2 w-2 rounded-full bg-lime-300" />
      </div>

      <div
        className={`relative grid gap-3 ${featured ? "mt-8 sm:grid-cols-[1.3fr_0.7fr]" : "mt-6"}`}
      >
        <div className="rounded-md border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
            <span>
              {project.slug === "manufacturing-erp"
                ? "Operations overview"
                : project.category}
            </span>
            <BarChart3 className="h-4 w-4 text-sky-300" />
          </div>
          <div
            className={`mt-5 grid gap-2 ${featured ? "grid-cols-3" : "grid-cols-2"}`}
          >
            {(featured
              ? ["Inventory", "Production", "Reports"]
              : ["Active", "In progress", "Resolved"]
            ).map((label, index) => (
              <div
                key={label}
                className="border border-white/10 bg-black/20 p-3"
              >
                <div
                  className={`h-1.5 w-2/3 ${index === 1 ? "bg-lime-300/70" : "bg-sky-300/70"}`}
                />
                <p className="mt-3 text-[10px] text-zinc-500">{label}</p>
                <p className="mt-1 text-sm font-semibold text-zinc-200">
                  {index === 0 ? "24" : index === 1 ? "08" : "12"}
                </p>
              </div>
            ))}
          </div>
        </div>
        {featured && (
          <div className="hidden rounded-md border border-white/10 bg-white/5 p-4 sm:block">
            <LayoutDashboard className="h-4 w-4 text-sky-300" />
            <div className="mt-8 space-y-3">
              <div className="h-2 w-full bg-white/10" />
              <div className="h-2 w-4/5 bg-white/10" />
              <div className="h-2 w-3/5 bg-lime-300/50" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
