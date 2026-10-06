/**
 * Impact page — advocacy and service grounded in her documented public work.
 */

import { jollyImages } from "@/content/jolly-images";

export type ImpactFeatured = {
  id: string;
  slug: string;
  title: string;
  year?: string;
  location?: string;
  issue?: string;
  description?: string;
  action?: string;
  people?: string;
  result?: string;
  image?: {
    src: string;
    alt: string;
    objectPosition?: string;
    aspect?: "portrait" | "landscape" | "square" | "cinema" | "wide";
  };
  gallery?: Array<{
    src: string;
    alt: string;
    objectPosition?: string;
  }>;
  href?: string;
  externalHref?: string;
};

export type ImpactArchiveItem = {
  id: string;
  slug: string;
  title: string;
  year?: string;
  category: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
    objectPosition?: string;
    aspect?: "portrait" | "landscape" | "square" | "cinema" | "wide";
  };
  href?: string;
};

export const impact = {
  seo: {
    title: "Mutesi Jolly — Impact",
    description:
      "How Jolly Mutesi uses public visibility for service — Generation Dialogue, community work, and advocacy for women and girls.",
  },

  hero: {
    eyebrow: "Impact",
    /** Full-width lead line above the media row */
    headlinePrimary: "The crown opened doors.",
    /** Sits beside the landscape image */
    headlineSecondaryLines: ["Service gave them", "meaning."],
    supporting:
      "From Generation Dialogue to community work and advocacy for women and girls — impact is how she understands public life.",
    media: {
      src: jollyImages.impact[0].src,
      alt: jollyImages.impact[0].alt,
      aspect: "wide" as const,
      objectPosition: jollyImages.impact[0].objectPosition,
    },
  },

  opening: {
    headlineLines: ["Visibility is only", "useful if it serves."],
    body: "Jolly has been clear that a title alone is not enough. During Miss Rwanda and after, she used the platform for conversation, community support and advocacy — especially for women and girls navigating pressure in public.",
  },

  philosophy: {
    label: "What she cares about",
    headline: "Themes she returns to.",
    supporting:
      "These are the causes and conversations that show up again and again in her public work — not a list of invented programmes.",
    themes: [
      "Women",
      "Girls",
      "Youth",
      "Identity",
      "Community",
      "Leadership",
    ],
  },

  areas: [
    {
      id: "women",
      number: "01",
      title: "Women & girls",
      description:
        "Advocacy for women and girls — including young women facing public pressure, bullying and questions about self-worth — rooted in her own experience after the crown.",
      image: {
        src: jollyImages.portrait[0].src,
        alt: jollyImages.portrait[0].alt,
        aspect: "portrait" as const,
        objectPosition: jollyImages.portrait[0].objectPosition,
      },
      imageSide: "right" as const,
    },
    {
      id: "youth",
      number: "02",
      title: "Youth",
      description:
        "Conversations with young people about confidence, character, education and the possibility of building a life after the first opportunity arrives.",
      image: {
        src: jollyImages.lifestyle[1].src,
        alt: jollyImages.lifestyle[1].alt,
        aspect: "portrait" as const,
        objectPosition: jollyImages.lifestyle[1].objectPosition,
      },
      imageSide: "left" as const,
    },
    {
      id: "identity",
      number: "03",
      title: "Identity & culture",
      description:
        "Pride in Rwandan identity, values and culture — and the responsibility that comes with representing the country on international stages.",
      image: {
        src: jollyImages.culture[0].src,
        alt: jollyImages.culture[0].alt,
        aspect: "portrait" as const,
        objectPosition: jollyImages.culture[0].objectPosition,
      },
      imageSide: "right" as const,
    },
    {
      id: "opportunity",
      number: "04",
      title: "Opportunity",
      description:
        "Using visibility to open doors for others — education support, community projects and platforms where young people can be seen and heard.",
      image: {
        src: jollyImages.speaking[0].src,
        alt: jollyImages.speaking[0].alt,
        aspect: "square" as const,
        objectPosition: jollyImages.speaking[0].objectPosition,
      },
      imageSide: "left" as const,
    },
  ],

  featured: {
    id: "generation-dialogue",
    slug: "generation-dialogue",
    title: "Generation Dialogue",
    year: "2016",
    location: "Rwanda",
    issue:
      "How do younger and older Rwandans meet — honestly — around values, unity and shared responsibility?",
    description:
      "During her Miss Rwanda year, Jolly started Generation Dialogue: an intergenerational conversation she described as a long-term project beyond the crown.",
    action:
      "Bringing generations together to talk, share ideas and work toward common goals — grounded in Rwanda’s story of unity.",
    people: "Young people and elders across communities in Rwanda.",
    result:
      "A public initiative she named as part of her service during and after her reign — documented here for the archive, not inflated with unverified outcomes.",
    image: {
      src: jollyImages.impact[0].src,
      alt: jollyImages.impact[0].alt,
      aspect: "wide" as const,
      objectPosition: jollyImages.impact[0].objectPosition,
    },
    href: undefined,
  } as ImpactFeatured,

  featuredPlaceholder: {
    label: "Featured",
    headline: "A major story, when the facts are ready.",
    body: "This space holds a verified initiative — with issue, action, people and result documented carefully.",
  },

  archive: {
    headline: "Impact Archive",
    supporting:
      "Moments where her public role turned into service — documented from her own public accounts and credible reporting.",
    emptyHeadline: "The archive is growing.",
    emptyBody:
      "More verified initiatives will be added here as they are cleared for publication.",
    items: [
      {
        id: "generation-dialogue",
        slug: "generation-dialogue",
        title: "Generation Dialogue",
        year: "2016",
        category: "Community",
        description:
          "Intergenerational conversations on values, unity and shared responsibility — started during her Miss Rwanda year.",
        image: {
          src: jollyImages.impact[0].src,
          alt: jollyImages.impact[0].alt,
          aspect: "wide" as const,
          objectPosition: jollyImages.impact[0].objectPosition,
        },
        href: undefined,
      },
      {
        id: "beauty-with-a-purpose",
        slug: "beauty-with-a-purpose",
        title: "Beauty with a Purpose — Miss World",
        year: "2016",
        category: "Global",
        description:
          "Reached the Beauty with a Purpose Top 24 as Rwanda’s first Miss World contestant — carrying national purpose onto a global stage.",
        image: {
          src: jollyImages.speaking[0].src,
          alt: jollyImages.speaking[0].alt,
          aspect: "square" as const,
          objectPosition: jollyImages.speaking[0].objectPosition,
        },
      },
      {
        id: "kinyinya-gardens",
        slug: "kinyinya-gardens",
        title: "Kinyinya family gardens",
        year: "2016–2017",
        category: "Community",
        description:
          "With Rotarians from across East Africa, supported vegetable gardens for families in Kinyinya to help combat malnutrition — work she publicly described at the end of her reign.",
        image: {
          src: jollyImages.culture[0].src,
          alt: jollyImages.culture[0].alt,
          aspect: "portrait" as const,
          objectPosition: jollyImages.culture[0].objectPosition,
        },
      },
      {
        id: "women-girls-advocacy",
        slug: "women-girls-advocacy",
        title: "Voice for women and girls",
        year: "Ongoing",
        category: "Advocacy",
        description:
          "Public advocacy for women and girls — shaped in part by the criticism and pressure she faced after Miss Rwanda, and by a decision to speak for those in similar situations.",
        image: {
          src: jollyImages.portrait[0].src,
          alt: jollyImages.portrait[0].alt,
          aspect: "portrait" as const,
          objectPosition: jollyImages.portrait[0].objectPosition,
        },
      },
    ] as ImpactArchiveItem[],
  },

  future: {
    headlineLines: ["The work", "continues."],
    body: "Impact for her is not a closed chapter. It is an ongoing choice about what visibility is for — conversation, community and opportunity for others.",
  },

  finalCta: {
    headlineLines: ["Build something", "that matters."],
    supporting:
      "For partnerships, community initiatives and conversations with purpose — start here.",
    cta: { label: "Work With Jolly", href: "/work-with-jolly" },
  },
} as const;
