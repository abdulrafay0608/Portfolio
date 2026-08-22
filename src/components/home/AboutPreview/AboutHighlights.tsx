import { BrainCircuit, Layers3, Smartphone } from "lucide-react";

const highlights = [
  {
    icon: Layers3,
    label: "Full-Stack",
    title: "Web Applications",
    description:
      "Building complete applications across frontend, backend, APIs, authentication, databases, and deployment.",
  },
  {
    icon: Smartphone,
    label: "Product",
    title: "Web & Mobile",
    description:
      "Creating responsive web experiences and mobile applications with a strong focus on usability and interface quality.",
  },
  {
    icon: BrainCircuit,
    label: "AI Engineering",
    title: "Intelligent Products",
    description:
      "Exploring AI assistants, RAG systems, embeddings, vector databases, and AI-powered product experiences.",
  },
];

export default function AboutHighlights() {
  return (
    <div className="mt-16 grid gap-4 md:grid-cols-3">
      {highlights.map((item) => {
        const Icon = item.icon;

        return (
          <article
            key={item.title}
            className="
              group
              rounded-2xl
              border
              border-zinc-200
              bg-white/50
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-sky-300
              hover:shadow-xl
              hover:shadow-sky-900/5
              dark:border-white/10
              dark:bg-white/3
              dark:hover:border-sky-500/30
              dark:hover:bg-white/5
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-sky-500/10
                text-sky-600
                dark:text-sky-400
                transition-transform
                duration-300
                group-hover:rotate-6
              "
            >
              <Icon className="h-5 w-5" />
            </div>

            <p
              className="
                mt-6
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-zinc-400
                dark:text-zinc-500
              "
            >
              {item.label}
            </p>

            <h3 className="mt-2 text-lg font-bold text-zinc-900 dark:text-white">
              {item.title}
            </h3>

            <p
              className="
                mt-3
                text-sm
                leading-6
                text-zinc-600
                dark:text-zinc-400
              "
            >
              {item.description}
            </p>
          </article>
        );
      })}
    </div>
  );
}
