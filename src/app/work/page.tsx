import type { Metadata } from "next";
import { work } from "@/content/work";
import { site } from "@/content/site";
import { WorkHero } from "@/components/work/WorkHero";
import { WorkIntroduction } from "@/components/work/WorkIntroduction";
import { WorkCategories } from "@/components/work/WorkCategories";
import { WorkProcess } from "@/components/work/WorkProcess";
import { WorkSelected } from "@/components/work/WorkSelected";
import { CTASection } from "@/components/editorial/CTASection";

export const metadata: Metadata = {
  title: work.seo.title,
  description: work.seo.description,
  alternates: { canonical: "/work" },
  openGraph: {
    title: work.seo.title,
    description: work.seo.description,
    url: `${site.url}/work`,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: work.hero.media.src,
        alt: work.hero.media.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: work.seo.title,
    description: work.seo.description,
    images: [work.hero.media.src],
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
      name: "Work",
      item: `${site.url}/work`,
    },
  ],
};

export default function WorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <WorkHero />
      <WorkIntroduction />
      <WorkCategories />
      <WorkProcess />
      <WorkSelected />
      <CTASection
        lines={[...work.finalCta.headlineLines]}
        supporting={work.finalCta.supporting}
        cta={work.finalCta.cta}
      />
    </>
  );
}
