"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  LoaderCircle,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import BackgroundSplash from "@/components/BackgroundSplash";
import Sidebar from "@/components/Sidebar";

const sectionIds = [
  "home",
  "about",
  "experience",
  "projects",
  "skills",
  "contact",
];
const suggestions = [
  "Tell me about Abdul",
  "Show me his best projects",
  "What technologies does he use?",
  "Why should I work with him?",
];

const answers: Record<string, string> = {
  "tell me about abdul":
    "Abdul Rafay is a product-minded full-stack developer who builds thoughtful web experiences and AI-powered tools. He cares about making complex technology feel clear, useful, and easy to trust.",
  "show me his best projects":
    "His selected work includes AI Assistant, a conversational portfolio platform, and Commerce Dashboard, an operations workspace for products, orders, and customer signals.",
  "what technologies does he use?":
    "He works with JavaScript, TypeScript, React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, REST APIs, and Git. He chooses tools around product requirements.",
  "why should i work with him?":
    "Abdul brings product thinking and dependable full-stack execution together. He communicates clearly, pays attention to interface details, and builds scalable systems.",
  "how does he build products?":
    "Abdul starts with the user problem, simplifies the experience, then builds in testable steps with clean architecture and careful interface details.",
};

type Message = { role: "user" | "assistant"; content: string };

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [messages, setMessages] = useState<Message[]>([]);
  const [draft, setDraft] = useState("");
  const [homeDraft, setHomeDraft] = useState("");
  const [isResponding, setIsResponding] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const chatStarted = messages.length > 0;

  // Auto-scroll inside chat workspace
  useEffect(() => {
    if (chatStarted) {
      const timeout = setTimeout(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [messages, isResponding, chatStarted]);

  // Section Observer for scroll navigation
  useEffect(() => {
    if (chatStarted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) setActiveSection(visibleEntry.target.id);
      },
      { rootMargin: "-35% 0px -55%", threshold: 0 },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [chatStarted]);

  function handleNavigate(href: string) {
    const target = href.slice(1);
    if (target === "home") {
      setMessages([]);
      setDraft("");
      setHomeDraft("");
    }
    setActiveSection(target);
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  }

  function askQuestion(question: string) {
    const cleanQuestion = question.trim();
    if (!cleanQuestion || isResponding) return;

    setMessages((current) => [
      ...current,
      { role: "user", content: cleanQuestion },
    ]);
    setDraft("");
    setHomeDraft("");
    setIsResponding(true);

    window.setTimeout(() => {
      const match = Object.entries(answers).find(([key]) =>
        cleanQuestion.toLowerCase().includes(key),
      );
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            match?.[1] ??
            "I can help you explore Abdul's projects, skills, experience, technologies, and development approach. Try asking about one of those areas.",
        },
      ]);
      setIsResponding(false);
    }, 700);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    askQuestion(draft);
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white pb-24 text-zinc-900 dark:bg-zinc-950 dark:text-white lg:pb-0">
      <BackgroundSplash />
      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Content Container aligned smoothly with dynamic sidebar width */}
      <div className="relative z-10 pl-0 transition-all duration-300 ease-in-out lg:pl-[var(--workspace-sidebar-width,80px)]">
        {chatStarted ? (
          <ChatWorkspace
            messages={messages}
            draft={draft}
            isResponding={isResponding}
            chatEndRef={chatEndRef}
            onDraftChange={setDraft}
            onSubmit={handleSubmit}
          />
        ) : (
          <PortfolioHome
            draft={homeDraft}
            onDraftChange={setHomeDraft}
            onAsk={askQuestion}
          />
        )}
      </div>
    </main>
  );
}

function PortfolioHome({
  draft,
  onDraftChange,
  onAsk,
}: {
  draft: string;
  onDraftChange: (value: string) => void;
  onAsk: (question: string) => void;
}) {
  return (
    <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 lg:px-12 lg:pt-0">
      <section
        id="home"
        className="border-b border-zinc-200 py-12 dark:border-white/10 lg:py-16"
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="relative mx-auto mb-5 h-36 w-36 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-sm dark:border-white/10 dark:bg-zinc-800">
            <Image
              src="/images/profile.png"
              alt="Abdul Rafay"
              fill
              sizes="144px"
              className="object-cover object-top"
              priority
            />
            {/* <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-zinc-100 dark:ring-zinc-800" /> */}
          </div>

          <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
            Abdul Rafay · AI-Powered Full-Stack Developer
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.035em] text-zinc-950 sm:text-5xl dark:text-white">
            AI-Powered Full-Stack Developer
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            I build intelligent web applications and digital products powered by
            modern AI and full-stack technologies.
          </p>

          <ChatComposer
            inputId="home-assistant-input"
            value={draft}
            onChange={onDraftChange}
            onSubmit={(event) => {
              event.preventDefault();
              onAsk(draft);
            }}
            placeholder="Ask anything about Abdul Rafay..."
          />

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => onAsk(suggestion)}
                className="rounded-full border border-zinc-200 bg-white/70 px-3 py-1.5 text-xs font-semibold text-zinc-600 transition hover:border-sky-300 hover:text-sky-600 dark:border-white/10 dark:bg-zinc-900/70 dark:text-zinc-300 dark:hover:border-sky-500/50 dark:hover:text-sky-300"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </section>

      <WorkspaceOverview />
      <HomeSections />
    </div>
  );
}

function WorkspaceOverview() {
  const cards = [
    ["About", "Product-minded engineering with a human center."],
    ["Projects", "AI tools, dashboards, and useful digital products."],
    [
      "Experience / Skills",
      "React, Next.js, Node, MongoDB, and product thinking.",
    ],
    ["Contact", "Have a thoughtful product to build together?"],
  ];

  return (
    <section className="grid gap-3 border-b border-zinc-200 py-8 dark:border-white/10 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map(([title, description]) => (
        <article
          key={title}
          className="rounded-xl border border-zinc-200 bg-white/50 p-4 dark:border-white/10 dark:bg-white/[0.03]"
        >
          <p className="text-sm font-bold">{title}</p>
          <p className="mt-2 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
            {description}
          </p>
        </article>
      ))}
    </section>
  );
}

function ChatWorkspace({
  messages,
  draft,
  isResponding,
  chatEndRef,
  onDraftChange,
  onSubmit,
}: {
  messages: Message[];
  draft: string;
  isResponding: boolean;
  chatEndRef: React.RefObject<HTMLDivElement | null>;
  onDraftChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <section className="flex min-h-screen flex-col px-5 pt-16 sm:px-8 lg:px-12 lg:pt-0">
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col">
        <div className="flex-1 space-y-8 py-10 sm:py-16">
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={
                message.role === "user" ? "flex justify-end" : "flex gap-3"
              }
            >
              {message.role === "assistant" && (
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-500">
                  <Sparkles className="h-4 w-4" />
                </span>
              )}
              <div
                className={
                  message.role === "user"
                    ? "max-w-[85%] rounded-2xl rounded-br-sm bg-zinc-900 px-4 py-3 text-sm leading-6 text-white dark:bg-white dark:text-zinc-950"
                    : "max-w-[85%] pt-1 text-[15px] leading-7 text-zinc-700 dark:text-zinc-300"
                }
              >
                {message.content}
              </div>
            </div>
          ))}

          {isResponding && (
            <div className="flex items-center gap-3 text-sm text-zinc-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 text-sky-500">
                <LoaderCircle className="h-4 w-4 animate-spin" />
              </span>
              Thinking about Abdul&apos;s work...
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="sticky bottom-0 bg-white/90 py-4 backdrop-blur-md dark:bg-zinc-950/90">
          <ChatComposer
            inputId="chat-assistant-input"
            value={draft}
            onChange={onDraftChange}
            onSubmit={onSubmit}
            placeholder="Ask anything about Abdul Rafay..."
          />
        </div>
      </div>
    </section>
  );
}

function ChatComposer({
  inputId,
  value,
  onChange,
  onSubmit,
  placeholder,
}: {
  inputId: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  placeholder: string;
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="mt-9 rounded-2xl border border-zinc-200 bg-white/80 p-2 shadow-xl shadow-zinc-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/75"
    >
      <label className="sr-only" htmlFor={inputId}>
        Ask anything about Abdul Rafay
      </label>
      <div className="flex items-center gap-2">
        <input
          id={inputId}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-zinc-400"
        />
        <button
          type="submit"
          aria-label="Send question"
          className="rounded-xl bg-sky-500 p-3 text-white transition hover:bg-sky-600 shrink-0"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}

function HomeSections() {
  return (
    <>
      <section
        id="about"
        className="grid scroll-mt-8 gap-8 border-t border-zinc-200 py-24 dark:border-white/10 lg:grid-cols-[0.7fr_1.3fr]"
      >
        <SectionLabel number="01" title="About me" />
        <div className="max-w-2xl">
          <p className="text-2xl font-semibold leading-9 tracking-tight sm:text-3xl">
            I build interfaces that make complex technology feel simple.
          </p>
          <p className="mt-6 leading-7 text-zinc-600 dark:text-zinc-400">
            My work sits at the intersection of clean engineering, useful
            design, and genuine curiosity. I enjoy shipping full-stack products
            where every detail has a reason to exist.
          </p>
        </div>
      </section>

      <section
        id="projects"
        className="scroll-mt-8 border-t border-zinc-200 py-24 dark:border-white/10"
      >
        <SectionLabel number="02" title="Selected work" />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <ProjectCard
            title="AI Assistant"
            type="Personal platform"
            description="A conversational portfolio experience that connects personal brand, work, and an intelligent interface."
          />
          <ProjectCard
            title="Commerce Dashboard"
            type="Full-stack product"
            description="A focused operations workspace for managing products, orders, and customer signals in one place."
          />
        </div>
      </section>

      <section
        id="experience"
        className="scroll-mt-8 border-t border-zinc-200 py-24 dark:border-white/10"
      >
        <SectionLabel number="03" title="Experience" />
        <div className="mt-12 grid gap-6 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="font-semibold">Full Stack Developer</p>
            <p className="mt-1 text-sm text-zinc-500">
              Independent - 2023 - Present
            </p>
          </div>
          <p className="leading-7 text-zinc-600 dark:text-zinc-400">
            Designing and developing production-ready web experiences with
            React, Next.js, Node.js, and MongoDB, from first sketch to
            deployment.
          </p>
        </div>
      </section>

      <section
        id="skills"
        className="scroll-mt-8 border-t border-zinc-200 py-24 dark:border-white/10"
      >
        <SectionLabel number="04" title="Skills & tools" />
        <div className="mt-12 grid grid-cols-2 gap-y-5 text-sm font-semibold text-zinc-600 sm:grid-cols-4 dark:text-zinc-300">
          {[
            "JavaScript / TypeScript",
            "React / Next.js",
            "Node / Express",
            "MongoDB",
            "Tailwind CSS",
            "REST APIs",
            "Git / GitHub",
            "Product thinking",
          ].map((skill) => (
            <p key={skill} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-sky-500 shrink-0" />
              {skill}
            </p>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-8 border-t border-zinc-200 py-24 dark:border-white/10"
      >
        <SectionLabel number="05" title="Let's work together" />
        <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-xl text-3xl font-bold tracking-tight sm:text-5xl">
            Have a product in mind?
            <br />
            <span className="text-sky-500">Let&apos;s make it real.</span>
          </p>
          <a
            href="mailto:hello@abdulrafay.dev"
            className="inline-flex items-center gap-2 text-sm font-bold hover:text-sky-600 transition-colors"
          >
            hello@abdulrafay.dev <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="flex flex-col justify-between gap-3 border-t border-zinc-200 py-6 text-xs text-zinc-400 sm:flex-row dark:border-white/10">
        <span>© 2026 Abdul Rafay</span>
        <span className="flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" /> Built with intention
        </span>
      </footer>
    </>
  );
}

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div>
      <p className="text-xs font-bold tracking-[0.2em] text-sky-600 dark:text-sky-400">
        {number}
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

function ProjectCard({
  title,
  type,
  description,
}: {
  title: string;
  type: string;
  description: string;
}) {
  return (
    <article className="group rounded-2xl border border-zinc-200 bg-white/60 p-6 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-900/5 dark:border-white/10 dark:bg-zinc-900/50">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-600 dark:text-sky-400">
            {type}
          </p>
          <h3 className="mt-3 text-xl font-bold">{title}</h3>
        </div>
        <ArrowUpRight className="h-5 w-5 text-zinc-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-500" />
      </div>
      <p className="mt-12 max-w-sm text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </article>
  );
}
