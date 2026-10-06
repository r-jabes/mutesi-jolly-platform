/**
 * Journal page — curated archive for her voice, appearances and public moments.
 */

import { jollyImages } from "@/content/jolly-images";

export const journalCategories = [
  "Business",
  "Culture",
  "Style",
  "Leadership",
  "Media",
  "Perspective",
] as const;

export type JournalCategory = (typeof journalCategories)[number];

export type JournalEntry = {
  id: string;
  slug: string;
  title: string;
  category: JournalCategory;
  excerpt: string;
  date?: string;
  readTime?: string;
  image?: {
    src: string;
    alt: string;
    objectPosition?: string;
    aspect?: "portrait" | "landscape" | "square" | "cinema" | "wide";
  };
  featured?: boolean;
  published?: boolean;
  externalUrl?: string;
  body?: string;
  href?: string;
};

export type JournalAppearance = {
  id: string;
  label: "In Conversation" | "On Stage" | "In the Media" | "At Work";
  title: string;
  year?: string;
  outlet?: string;
  href?: string;
  image?: {
    src: string;
    alt: string;
    objectPosition?: string;
    aspect?: "portrait" | "landscape" | "square" | "cinema" | "wide";
  };
};

export const journal = {
  seo: {
    title: "Journal — Mutesi Jolly",
    description:
      "Appearances, conversations and perspectives from Jolly Mutesi — Miss Rwanda 2016, speaker and entrepreneur.",
  },

  hero: {
    eyebrow: "The Journal",
    headlineLines: ["Her voice,", "in public."],
    supporting:
      "Stages, interviews and ideas from Jolly’s journey — Miss Rwanda, Miss World, speaking, business and advocacy.",
    media: {
      src: jollyImages.personality[0].src,
      alt: jollyImages.personality[0].alt,
      aspect: "portrait" as const,
      objectPosition: jollyImages.personality[0].objectPosition,
    },
  },

  featuredPlaceholder: {
    label: "Featured",
    headline: "Longer essays are on the way.",
    excerpt:
      "When she publishes reflections and interviews here, they will appear in this space — carefully, and in her own words.",
    media: {
      src: jollyImages.culture[0].src,
      alt: jollyImages.culture[0].alt,
      aspect: "wide" as const,
      objectPosition: jollyImages.culture[0].objectPosition ?? "center 25%",
    },
  },

  entries: [] as JournalEntry[],

  filters: ["All", ...journalCategories] as const,

  perspective: {
    label: "Perspective",
    headlineLines: ["What she", "speaks about."],
    body: "Women and girls. Youth. Rwandan identity. Leadership after the spotlight. Building a life in business without abandoning service. These are the themes she returns to on stage and in public.",
    media: {
      src: jollyImages.portrait[0].src,
      alt: jollyImages.portrait[0].alt,
      aspect: "portrait" as const,
      objectPosition: jollyImages.portrait[0].objectPosition,
    },
  },

  appearances: {
    label: "Appearances",
    headline: "Public moments.",
    supporting:
      "Verified stages and roles from her path — updated as more are cleared for the archive.",
    emptyNote:
      "More appearances will be added here as they are documented for the site.",
    labels: [
      "In Conversation",
      "On Stage",
      "In the Media",
      "At Work",
    ] as const,
    items: [
      {
        id: "oxford-2024",
        label: "On Stage",
        title: "Oxford Africa Conference",
        year: "2024",
        outlet: "Rhodes House, Oxford",
        image: {
          src: jollyImages.speaking[0].src,
          alt: jollyImages.speaking[0].alt,
          aspect: "square" as const,
          objectPosition: jollyImages.speaking[0].objectPosition,
        },
      },
      {
        id: "miss-world-2016",
        label: "On Stage",
        title: "Miss World — Rwanda’s first",
        year: "2016",
        outlet: "Miss World",
        image: {
          src: jollyImages.hero[0].src,
          alt: jollyImages.hero[0].alt,
          aspect: "portrait" as const,
          objectPosition: jollyImages.hero[0].objectPosition,
        },
      },
      {
        id: "zikomo-2023",
        label: "In the Media",
        title: "Best Motivational Speaker of the Year",
        year: "2023",
        outlet: "Zikomo Awards",
      },
      {
        id: "miss-ea-2021",
        label: "At Work",
        title: "Vice President, Miss East Africa",
        year: "2021",
        outlet: "Regional pageant leadership",
        image: {
          src: jollyImages.style[0].src,
          alt: jollyImages.style[0].alt,
          aspect: "portrait" as const,
          objectPosition: jollyImages.style[0].objectPosition,
        },
      },
    ] as JournalAppearance[],
  },

  newsletter: {
    headline: "Stay close to the work.",
    supporting:
      "Occasional notes on speaking, projects and public moments — when the list is ready.",
    placeholder: "Email address",
    cta: "Notify me",
    note: "The mailing list is not live yet. Your interest helps us open it properly.",
  },

  finalCta: {
    headlineLines: ["Let's build", "something", "that matters."],
    supporting:
      "From her public story to a concrete invitation — speaking, partnership, media or business.",
    cta: { label: "Work With Jolly", href: "/work-with-jolly" },
    secondaryCta: { label: "Explore Her Story", href: "/story" },
  },
} as const;

export function getJournalEntryHref(entry: JournalEntry): string {
  if (entry.href) return entry.href;
  if (entry.externalUrl) return entry.externalUrl;
  return `/journal/${entry.slug}`;
}

export function getFeaturedEntry(
  entries: readonly JournalEntry[] = journal.entries,
): JournalEntry | null {
  const published = entries.filter((e) => e.published !== false);
  return published.find((e) => e.featured) ?? published[0] ?? null;
}
