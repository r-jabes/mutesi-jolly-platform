/**
 * Story page content — verified public biography of Jolly Mutesi.
 */

import { jollyImages } from "@/content/jolly-images";
import type { MediaRef } from "@/content/homepage";

export type StoryTimelineItem = {
  year: string;
  title: string;
  description: string;
  image?: MediaRef;
  verified: boolean;
};

export const story = {
  seo: {
    title: "Mutesi Jolly — Her Story",
    description:
      "The story of Jolly Mutesi — Miss Rwanda 2016, Rwanda’s first Miss World representative, motivational speaker, entrepreneur and advocate.",
  },

  hero: {
    eyebrow: "Her Story",
    headline: "More than a title.",
    supporting:
      "From Miss Rwanda 2016 to speaking, business and advocacy — a life that kept expanding after the crown.",
    media: {
      src: jollyImages.hero[1].src,
      alt: jollyImages.hero[1].alt,
      aspect: "portrait" as const,
      objectPosition: "center top",
    },
  },

  opening: {
    statementLines: [
      "A crown can open a door.",
      "What you do next is the story.",
    ],
    body: "Jolly Mutesi was crowned Miss Rwanda in 2016 and became the first Rwandan to compete at Miss World. Since then she has built a public life as a motivational speaker, entrepreneur, realtor and advocate for women and girls — rooted in Rwanda, visible beyond it.",
  },

  beginning: {
    label: "The Beginning",
    headline: "Where her public story starts.",
    body: "Born in Kasese, Uganda, and raised between Uganda and Rwanda, Jolly grew up speaking several languages and studying History, Economics and Literature before a national stage changed the scale of her life.",
    media: {
      src: jollyImages.portrait[0].src,
      alt: jollyImages.portrait[0].alt,
      aspect: "portrait" as const,
      objectPosition: jollyImages.portrait[0].objectPosition,
    },
    timeline: [
      {
        year: "1996",
        title: "Born in Kasese",
        description:
          "Born on 15 November 1996 in Kasese, Uganda — the youngest of six — before continuing her schooling between Uganda and Rwanda.",
        verified: true,
      },
      {
        year: "2016",
        title: "Miss Rwanda",
        description:
          "Crowned Miss Rwanda on 27 February 2016, representing the Western Province — a national introduction that opened a wider public stage.",
        verified: true,
        image: {
          src: jollyImages.hero[0].src,
          alt: jollyImages.hero[0].alt,
          aspect: "portrait" as const,
          objectPosition: jollyImages.hero[0].objectPosition,
        },
      },
      {
        year: "2016",
        title: "Miss World — first for Rwanda",
        description:
          "She became the first beauty queen to represent Rwanda at Miss World, and reached the Beauty with a Purpose Top 24 — putting Rwanda on that stage for the first time.",
        verified: true,
      },
    ] satisfies StoryTimelineItem[],
  },

  missRwanda: {
    eyebrow: "2016",
    headline: "The crown was the beginning.",
    body: "Miss Rwanda 2016 was recognition — and a responsibility. During her reign she promoted domestic tourism, began Generation Dialogue, and used the platform for community work. It was never meant to be the end of the story.",
    media: {
      src: jollyImages.hero[0].src,
      alt: jollyImages.hero[0].alt,
      aspect: "portrait" as const,
      objectPosition: jollyImages.hero[0].objectPosition,
    },
  },

  beyondCrown: {
    label: "After the crown",
    headline: "Beyond the crown.",
    body: "When the year ended, the work did not. She stayed in public life as a speaker and entrepreneur, judged Miss Rwanda, helped revive Miss East Africa as Vice President, and kept advocating for women and girls.",
    themes: [
      "Speaking",
      "Entrepreneurship",
      "Real estate",
      "Pageant leadership",
      "Women’s advocacy",
      "Media",
      "Culture",
    ],
    media: {
      src: jollyImages.personality[0].src,
      alt: jollyImages.personality[0].alt,
      aspect: "portrait" as const,
      objectPosition: jollyImages.personality[0].objectPosition,
    },
  },

  business: {
    label: "Business",
    headline: "Building beyond the spotlight.",
    body: "Alongside the public image, she works as a business consultant and realtor in Kigali — interested in ventures, partnerships and practical opportunity, not only visibility.",
    themes: ["Business consulting", "Real estate", "Partnerships", "Entrepreneurship"],
    note: "Specific deal and company names will be added here only when she chooses to publish them.",
    media: {
      src: jollyImages.lifestyle[0].src,
      alt: jollyImages.lifestyle[0].alt,
      aspect: "portrait" as const,
      objectPosition: jollyImages.lifestyle[0].objectPosition,
    },
  },

  voice: {
    label: "Voice",
    headline: "Finding a voice — and using it.",
    body: "She is a recognised motivational speaker — including Best Motivational Speaker of the Year at the Zikomo Awards (2023) — and has spoken on stages such as the Oxford Africa Conference (2024). Her themes return to women, girls, youth, identity and leadership.",
    themes: [
      "Women & girls",
      "Youth",
      "Identity",
      "Leadership",
      "Self-worth",
      "African perspective",
    ],
    media: {
      src: jollyImages.speaking[0].src,
      alt: jollyImages.speaking[0].alt,
      aspect: "square" as const,
      objectPosition: jollyImages.speaking[0].objectPosition,
    },
    cta: { label: "See How to Work With Her", href: "/work" },
  },

  cultureStyle: {
    label: "Culture & Style",
    headline: "Style is part of the language.",
    body: "Public presence matters in her work. Fashion and culture are how she shows up in rooms — not a costume, and not the whole story either.",
    items: [
      {
        id: "cs-1",
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
        id: "cs-2",
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
        id: "cs-3",
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
      {
        id: "cs-4",
        category: "Culture",
        location: "Editorial",
        year: "Jolly Mutesi",
        media: {
          src: jollyImages.culture[0].src,
          alt: jollyImages.culture[0].alt,
          aspect: "portrait" as const,
          objectPosition: jollyImages.culture[0].objectPosition,
        },
      },
    ],
  },

  impact: {
    label: "Impact",
    headline: "Purpose after the spotlight.",
    body: "During and after Miss Rwanda she treated visibility as a tool for service — Generation Dialogue, community support, and advocacy for women and girls who face pressure in public life.",
    note: "Documented initiatives and community moments are gathered on the Impact page.",
    media: {
      src: jollyImages.impact[0].src,
      alt: jollyImages.impact[0].alt,
      aspect: "wide" as const,
      objectPosition: jollyImages.impact[0].objectPosition,
    },
    cta: { label: "Explore Impact", href: "/impact" },
  },

  today: {
    label: "Present",
    headline: "Today.",
    body: "Based in Kigali: speaking, business consulting, real estate, advocacy and selective collaborations. Miss Rwanda opened the door. The work since then is the point.",
    note: "This page will stay updated as her next chapters become public.",
    media: {
      src: jollyImages.lifestyle[1].src,
      alt: jollyImages.lifestyle[1].alt,
      aspect: "portrait" as const,
      objectPosition: jollyImages.lifestyle[1].objectPosition,
    },
  },

  closingCta: {
    headlineLines: ["There is more", "to build."],
    supporting:
      "If you have a speaking invitation, partnership, media request or business conversation — start here.",
    cta: { label: "Work With Jolly", href: "/work-with-jolly" },
  },
} as const;
