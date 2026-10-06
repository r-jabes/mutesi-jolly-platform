import type { Metadata } from "next";
import { Suspense } from "react";
import { workWithJolly } from "@/content/work-with-jolly";
import { site } from "@/content/site";
import { WorkWithJollyExperience } from "@/components/work-with-jolly/WorkWithJollyExperience";

export const metadata: Metadata = {
  title: {
    absolute: workWithJolly.seo.title,
  },
  description: workWithJolly.seo.description,
  alternates: { canonical: "/work-with-jolly" },
  openGraph: {
    title: workWithJolly.seo.title,
    description: workWithJolly.seo.description,
    url: `${site.url}/work-with-jolly`,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: workWithJolly.hero.media.src,
        alt: workWithJolly.hero.media.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: workWithJolly.seo.title,
    description: workWithJolly.seo.description,
    images: [workWithJolly.hero.media.src],
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
      name: "Work With Jolly",
      item: `${site.url}/work-with-jolly`,
    },
  ],
};

function InquiryFallback() {
  return (
    <div className="editorial-container py-32">
      <p className="font-sans text-[11px] uppercase tracking-[0.16em] text-muted">
        Loading inquiry…
      </p>
    </div>
  );
}

export default function WorkWithJollyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Suspense fallback={<InquiryFallback />}>
        <WorkWithJollyExperience />
      </Suspense>
    </>
  );
}
