import type { Metadata } from "next";
import { journal } from "@/content/journal";
import { site } from "@/content/site";
import { JournalHero } from "@/components/journal/JournalHero";
import { JournalFeatured } from "@/components/journal/JournalFeatured";
import { JournalIndex } from "@/components/journal/JournalIndex";
import { JournalPerspective } from "@/components/journal/JournalPerspective";
import { JournalMedia } from "@/components/journal/JournalMedia";
import { JournalNewsletter } from "@/components/journal/JournalNewsletter";
import { CTASection } from "@/components/editorial/CTASection";

export const metadata: Metadata = {
  title: {
    absolute: journal.seo.title,
  },
  description: journal.seo.description,
  alternates: { canonical: "/journal" },
  openGraph: {
    title: journal.seo.title,
    description: journal.seo.description,
    url: `${site.url}/journal`,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: journal.hero.media.src,
        alt: journal.hero.media.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: journal.seo.title,
    description: journal.seo.description,
    images: [journal.hero.media.src],
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
      name: "Journal",
      item: `${site.url}/journal`,
    },
  ],
};

export default function JournalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <JournalHero />
      <JournalFeatured />
      <JournalIndex />
      <JournalPerspective />
      <JournalMedia />
      <JournalNewsletter />
      <CTASection
        lines={[...journal.finalCta.headlineLines]}
        supporting={journal.finalCta.supporting}
        cta={journal.finalCta.cta}
        secondaryCta={journal.finalCta.secondaryCta}
      />
    </>
  );
}
