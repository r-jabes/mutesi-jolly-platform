import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { JollyNow } from "@/components/sections/JollyNow";
import { StorySection } from "@/components/sections/StorySection";
import { WorkSection } from "@/components/sections/WorkSection";
import { VoiceSection } from "@/components/sections/VoiceSection";
import { StyleSection } from "@/components/sections/StyleSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { RecognitionSection } from "@/components/sections/RecognitionSection";
import { JournalSection } from "@/components/sections/JournalSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { site } from "@/content/site";
import { getHeroImage } from "@/content/jolly-images";

const heroImage = getHeroImage();

export const metadata: Metadata = {
  title: `${site.name} — Influence. Identity. Impact.`,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — Influence. Identity. Impact.`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: heroImage.src,
        alt: heroImage.alt,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Influence. Identity. Impact.`,
    description: site.description,
    images: [heroImage.src],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <JollyNow />
      <StorySection />
      <WorkSection />
      <VoiceSection />
      <StyleSection />
      <ImpactSection />
      <RecognitionSection />
      <JournalSection />
      <FinalCTA />
    </>
  );
}
