import type { Metadata } from "next";
import { story } from "@/content/story";
import { site } from "@/content/site";
import { StoryHero } from "@/components/story/StoryHero";
import { StoryOpening } from "@/components/story/StoryOpening";
import { StoryBeginning } from "@/components/story/StoryBeginning";
import { StoryMissRwanda } from "@/components/story/StoryMissRwanda";
import { StoryBeyondCrown } from "@/components/story/StoryBeyondCrown";
import { StoryBusiness } from "@/components/story/StoryBusiness";
import { StoryVoice } from "@/components/story/StoryVoice";
import { StoryCultureStyle } from "@/components/story/StoryCultureStyle";
import { StoryImpact } from "@/components/story/StoryImpact";
import { StoryToday } from "@/components/story/StoryToday";
import { CTASection } from "@/components/editorial/CTASection";

export const metadata: Metadata = {
  title: story.seo.title,
  description: story.seo.description,
  alternates: { canonical: "/story" },
  openGraph: {
    title: story.seo.title,
    description: story.seo.description,
    url: `${site.url}/story`,
    siteName: site.name,
    type: "profile",
    images: [
      {
        url: story.hero.media.src,
        alt: story.hero.media.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: story.seo.title,
    description: story.seo.description,
    images: [story.hero.media.src],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: site.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Story",
      item: `${site.url}/story`,
    },
  ],
};

export default function StoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <StoryHero />
      <StoryOpening />
      <StoryBeginning />
      <StoryMissRwanda />
      <StoryBeyondCrown />
      <StoryBusiness />
      <StoryVoice />
      <StoryCultureStyle />
      <StoryImpact />
      <StoryToday />
      <CTASection
        lines={[...story.closingCta.headlineLines]}
        supporting={story.closingCta.supporting}
        cta={story.closingCta.cta}
      />
    </>
  );
}
