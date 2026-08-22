"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import Hero from "@/components/home/Hero/Hero";
import AboutPreview from "./AboutPreview/AboutPreview";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";
import ExperiencePreview from "./ExperiencePreview/ExperiencePreview";
import SkillsPreview from "./SkillsPreview/SkillsPreview";
import ContactCTA from "./ContactCTA/ContactCTA";

const suggestions = [
  "Tell me about Abdul",
  "Show me his best projects",
  "What technologies does he use?",
  "Why should I work with him?",
];

export default function Home() {
  const [homeDraft, setHomeDraft] = useState("");
  const router = useRouter();

  function openChat(question: string) {
    const cleanQuestion = question.trim();

    if (!cleanQuestion) return;
    setHomeDraft("");
    router.push(`/chat?question=${encodeURIComponent(cleanQuestion)}`);
  }

  return (
    <>
      <Hero
        suggestions={suggestions}
        draft={homeDraft}
        onDraftChange={setHomeDraft}
        onAsk={openChat}
      />
      <AboutPreview />
      <FeaturedProjects />
      <ExperiencePreview />
      <SkillsPreview />
      <ContactCTA />
    </>
  );
}
