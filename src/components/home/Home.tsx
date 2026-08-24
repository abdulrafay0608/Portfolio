"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import Hero from "@/components/home/Hero/Hero";
import AboutPreview from "./AboutPreview/AboutPreview";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";
import ExperiencePreview from "./ExperiencePreview/ExperiencePreview";
import SkillsPreview from "./SkillsPreview/SkillsPreview";
import ContactCTA from "./ContactCTA/ContactCTA";
import { heroSuggestions } from "@/data/profile";

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
        suggestions={heroSuggestions}
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
