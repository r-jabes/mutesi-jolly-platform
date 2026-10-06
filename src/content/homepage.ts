/**
 * Homepage content.
 * Copy grounded in verified public facts about Jolly Mutesi.
 */

import { getHeroImage, jollyImages } from "@/content/jolly-images";

export type MediaRef = {
  src?: string;
  alt: string;
  aspect?: "portrait" | "landscape" | "square" | "cinema" | "wide";
  objectPosition?: string;
};

const heroImage = getHeroImage();

export const hero = {
  eyebrow: "Jolly Mutesi",
  lines: ["More than", "a crown."],
  supporting:
    "Miss Rwanda 2016. Rwanda’s first Miss World representative. Speaker, entrepreneur and advocate — still building from Kigali.",
  primaryCta: { label: "Work With Jolly", href: "/work-with-jolly" },
  secondaryCta: { label: "Explore Her Story", href: "/story", arrow: "↓" as const },
  media: {
    src: heroImage.src,
    alt: heroImage.alt,
    aspect: "portrait" as const,
    objectPosition: heroImage.objectPosition ?? "center 12%",
  },
};

export const jollyNow = {
  label: "Jolly Now",
  headline: "Where she is now.",
  items: [
    {
      id: "current",
      category: "Work",
      title: "Business consulting & real estate in Kigali",
      href: "/work#business",
      media: {
        src: jollyImages.lifestyle[0].src,
        alt: jollyImages.lifestyle[0].alt,
        aspect: "portrait" as const,
        objectPosition: jollyImages.lifestyle[0].objectPosition,
      },
    },
    {
      id: "latest",
      category: "Speaking",
      title: "Oxford Africa Conference, 2024",
      href: "/work#speaking",
      media: {
        src: jollyImages.speaking[0].src,
        alt: jollyImages.speaking[0].alt,
        aspect: "square" as const,
        objectPosition: jollyImages.speaking[0].objectPosition,
      },
    },
    {
      id: "featured",
      category: "Advocacy",
      title: "A voice for women and girls",
      href: "/impact",
      media: {
        src: jollyImages.personality[0].src,
        alt: jollyImages.personality[0].alt,
        aspect: "portrait" as const,
        objectPosition: jollyImages.personality[0].objectPosition,
      },
    },
  ],
};

export const storyPreview = {
  label: "02 / Story",
  headline: "More than a title.",
  body: "From Miss Rwanda 2016 and Miss World to speaking, business and advocacy — a public life that kept growing after the crown.",
  cta: { label: "Read Her Story", href: "/story" },
  media: {
    src: jollyImages.portrait[0].src,
    alt: jollyImages.portrait[0].alt,
    aspect: "portrait" as const,
    objectPosition: jollyImages.portrait[0].objectPosition,
  },
};

export const workSection = {
  label: "03 / Work",
  headline: "Ways to work with her.",
  supporting:
    "Speaking, business, brand partnerships and media — for people who know clearly what they want to build.",
  categories: [
    {
      number: "01",
      title: "Speaking",
      href: "/work#speaking",
      cta: "Explore Speaking",
      description:
        "Keynotes, panels and conversations on leadership, women, youth and identity — including stages like Oxford Africa.",
      media: {
        src: jollyImages.speaking[0].src,
        alt: jollyImages.speaking[0].alt,
        objectPosition: jollyImages.speaking[0].objectPosition,
      },
    },
    {
      number: "02",
      title: "Business",
      href: "/work#business",
      cta: "Explore Business",
      description:
        "Business consulting, real estate and selected collaborations with founders and partners.",
      media: {
        src: jollyImages.lifestyle[0].src,
        alt: jollyImages.lifestyle[0].alt,
        objectPosition: jollyImages.lifestyle[0].objectPosition,
      },
    },
    {
      number: "03",
      title: "Partnerships",
      href: "/work#partnerships",
      cta: "Explore Partnerships",
      description:
        "Brand and cultural collaborations that fit her public presence and values.",
      media: {
        src: jollyImages.style[0].src,
        alt: jollyImages.style[0].alt,
        objectPosition: jollyImages.style[0].objectPosition,
      },
    },
    {
      number: "04",
      title: "Media",
      href: "/work#media",
      cta: "Explore Media",
      description:
        "Interviews, features and press for stories that deserve her voice.",
      media: {
        src: jollyImages.hero[1].src,
        alt: jollyImages.hero[1].alt,
        objectPosition: jollyImages.hero[1].objectPosition,
      },
    },
  ],
};

export const voiceSection = {
  label: "04 / Voice",
  headline: "What she speaks about.",
  intro:
    "Her public voice returns again and again to women and girls, youth, Rwandan identity, leadership and the courage to build after the spotlight moves on.",
  themes: [
    "Women & girls",
    "Youth",
    "Rwandan identity",
    "Leadership",
    "Entrepreneurship",
    "Self-worth",
    "Public service",
  ],
  featured: {
    category: "Journal",
    title: "Essays and reflections will live here.",
    note: "When she publishes longer thoughts — on identity, work, culture or leadership — they will appear in the Journal.",
  },
  cta: { label: "Visit the Journal", href: "/journal" },
};

export const styleSection = {
  label: "05 / Style",
  headline: "Presence with intention.",
  supporting:
    "Fashion and public image as part of how she shows up — not the whole story, but not an accident either.",
  cta: { label: "View Style", href: "#style" },
  items: [
    {
      id: "style-1",
      category: "Style",
      location: "Kigali",
      year: "Jolly Mutesi",
      media: {
        src: jollyImages.style[0].src,
        alt: jollyImages.style[0].alt,
        aspect: "portrait" as const,
        objectPosition: jollyImages.style[0].objectPosition,
      },
    },
    {
      id: "style-2",
      category: "Style",
      location: "Editorial",
      year: "Jolly Mutesi",
      media: {
        src: jollyImages.style[1].src,
        alt: jollyImages.style[1].alt,
        aspect: "portrait" as const,
        objectPosition: jollyImages.style[1].objectPosition,
      },
    },
    {
      id: "style-3",
      category: "Style",
      location: "Editorial",
      year: "Jolly Mutesi",
      media: {
        src: jollyImages.style[2].src,
        alt: jollyImages.style[2].alt,
        aspect: "portrait" as const,
        objectPosition: jollyImages.style[2].objectPosition,
      },
    },
  ],
};

export const impactSection = {
  label: "06 / Impact",
  headlineLines: [
    "The crown opened doors.",
    "Service gave them meaning.",
  ],
  supporting:
    "From Generation Dialogue to community work and advocacy for women and girls — impact is part of how she understands public life.",
  featured: {
    id: "generation-dialogue",
    year: "2016",
    initiative: "Generation Dialogue",
    description:
      "An intergenerational conversation she started during her Miss Rwanda year — bringing younger and older Rwandans together around values, unity and shared responsibility.",
    href: "/impact",
    media: {
      src: jollyImages.impact[0].src,
      alt: jollyImages.impact[0].alt,
      aspect: "wide" as const,
      objectPosition: jollyImages.impact[0].objectPosition,
    },
  },
  cta: { label: "Explore Impact", href: "/impact" },
};

/** Verified public credentials only */
export const recognition = {
  items: [
    { label: "Miss Rwanda 2016", verified: true },
    { label: "First Rwandan at Miss World", verified: true },
    { label: "Zikomo Awards 2023", verified: true },
    { label: "Oxford Africa 2024", verified: true },
  ],
};

export const journalSection = {
  label: "07 / Journal",
  headline: "From the Journal",
  supporting:
    "A home for longer thoughts — appearances, interviews and writing on work, culture, women and life in public.",
  cta: { label: "Open the Journal", href: "/journal" },
  featured: {
    id: "journal-featured",
    category: "Coming soon",
    title: "Her longer stories will live here.",
    date: null as string | null,
    readingTime: null as string | null,
    href: "/journal",
    excerpt:
      "Essays, interviews and reflections — published carefully, not invented for the page.",
    media: {
      src: jollyImages.culture[0].src,
      alt: jollyImages.culture[0].alt,
      aspect: "wide" as const,
      objectPosition: jollyImages.culture[0].objectPosition ?? "center 25%",
    },
  },
  items: [
    {
      id: "journal-2",
      category: "Speaking",
      title: "Stages and conversations",
      date: null as string | null,
      readingTime: null as string | null,
      href: "/journal",
      media: {
        src: jollyImages.speaking[0].src,
        alt: jollyImages.speaking[0].alt,
        aspect: "landscape" as const,
        objectPosition: jollyImages.speaking[0].objectPosition,
      },
    },
    {
      id: "journal-3",
      category: "Life",
      title: "Culture, style and everyday presence",
      date: null as string | null,
      readingTime: null as string | null,
      href: "/journal",
      media: {
        src: jollyImages.style[1].src,
        alt: jollyImages.style[1].alt,
        aspect: "landscape" as const,
        objectPosition: jollyImages.style[1].objectPosition,
      },
    },
  ],
};

export const finalCta = {
  headlineLines: ["Let's build", "something", "that matters."],
  supporting:
    "Speaking, partnerships, media, business and projects worth her time — and yours.",
  cta: { label: "Work With Jolly", href: "/work-with-jolly" },
};
