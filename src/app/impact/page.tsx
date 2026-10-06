import type { Metadata } from "next";
import { impact } from "@/content/impact";
import { site } from "@/content/site";
import { ImpactHero } from "@/components/impact/ImpactHero";
import { ImpactOpening } from "@/components/impact/ImpactOpening";
import { ImpactPhilosophy } from "@/components/impact/ImpactPhilosophy";
import { ImpactAreas } from "@/components/impact/ImpactAreas";
import { ImpactFeatured } from "@/components/impact/ImpactFeatured";
import { ImpactArchive } from "@/components/impact/ImpactArchive";
import { ImpactFuture } from "@/components/impact/ImpactFuture";
import { CTASection } from "@/components/editorial/CTASection";

export const metadata: Metadata = {
  title: {
    absolute: impact.seo.title,
  },
  description: impact.seo.description,
  alternates: { canonical: "/impact" },
  openGraph: {
    title: impact.seo.title,
    description: impact.seo.description,
    url: `${site.url}/impact`,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: impact.hero.media.src,
        alt: impact.hero.media.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: impact.seo.title,
    description: impact.seo.description,
    images: [impact.hero.media.src],
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
      name: "Impact",
      item: `${site.url}/impact`,
    },
  ],
};

export default function ImpactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ImpactHero />
      <ImpactOpening />
      <ImpactPhilosophy />
      <ImpactAreas />
      <ImpactFeatured />
      <ImpactArchive />
      <ImpactFuture />
      <CTASection
        lines={[...impact.finalCta.headlineLines]}
        supporting={impact.finalCta.supporting}
        cta={impact.finalCta.cta}
      />
    </>
  );
}
