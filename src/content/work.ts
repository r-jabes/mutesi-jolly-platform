/**
 * Work page content — professional pathways grounded in her real public work.
 */

import { jollyImages } from "@/content/jolly-images";

export type WorkSelectedItem = {
  title: string;
  category: string;
  year?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
    objectPosition?: string;
    aspect?: "portrait" | "landscape" | "square" | "cinema" | "wide";
  };
  href?: string;
};

export const work = {
  seo: {
    title: "Work With Mutesi Jolly | Speaking, Partnerships & Media",
    description:
      "Invite Jolly Mutesi to speak, partner, consult or appear in media — Miss Rwanda 2016, motivational speaker and entrepreneur based in Kigali.",
  },

  hero: {
    eyebrow: "Work With Jolly",
    headlineLines: ["Work that fits", "her voice."],
    supporting:
      "Speaking, business, brand partnerships and media — for invitations that respect who she is and what she stands for.",
    media: {
      src: jollyImages.speaking[0].src,
      alt: jollyImages.speaking[0].alt,
      aspect: "square" as const,
      /** Keep her head and sunglasses inside tall hero crops */
      objectPosition: "center 12%",
    },
  },

  introduction: {
    headline: "Different rooms. Same standard.",
    body: "Jolly works as a motivational speaker, business consultant and public figure. The best invitations are clear: the room, the audience, the purpose — and why her story belongs in it.",
  },

  categories: [
    {
      id: "speaking",
      number: "01",
      title: "Speaking",
      headlineLines: ["Ideas worth", "putting in", "the room."],
      description:
        "Keynotes, panels and moderated conversations on leadership, women and girls, youth, identity and building after public recognition — including stages such as the Oxford Africa Conference.",
      image: {
        src: jollyImages.speaking[0].src,
        alt: jollyImages.speaking[0].alt,
        aspect: "square" as const,
        objectPosition: jollyImages.speaking[0].objectPosition,
      },
      cta: "Invite Jolly to Speak",
      inquiryType: "speaking",
      href: "/work-with-jolly?type=speaking",
      imageSide: "right" as const,
      tone: "light" as const,
    },
    {
      id: "business",
      number: "02",
      title: "Business",
      headlineLines: ["Building beyond", "visibility."],
      description:
        "Business consulting, real estate conversations and selected collaborations with founders and partners who want substance — not only association.",
      image: {
        src: jollyImages.lifestyle[0].src,
        alt: jollyImages.lifestyle[0].alt,
        aspect: "portrait" as const,
        objectPosition: jollyImages.lifestyle[0].objectPosition,
      },
      cta: "Discuss a Business Opportunity",
      inquiryType: "business",
      href: "/work-with-jolly?type=business",
      imageSide: "left" as const,
      tone: "dark" as const,
    },
    {
      id: "partnerships",
      number: "03",
      title: "Partnerships",
      headlineLines: ["Partnerships", "with purpose."],
      description:
        "Brand collaborations, campaigns and cultural projects that align with her presence — women, youth, Rwanda and contemporary African style.",
      image: {
        src: jollyImages.style[0].src,
        alt: jollyImages.style[0].alt,
        aspect: "portrait" as const,
        objectPosition: jollyImages.style[0].objectPosition,
      },
      cta: "Start a Partnership",
      inquiryType: "partnership",
      href: "/work-with-jolly?type=partnership",
      imageSide: "right" as const,
      tone: "light" as const,
    },
    {
      id: "media",
      number: "04",
      title: "Media",
      headlineLines: ["A voice for", "the conversation."],
      description:
        "Interviews, features and press for stories about her journey, work, advocacy or the themes she speaks on publicly.",
      image: {
        src: jollyImages.hero[1].src,
        alt: jollyImages.hero[1].alt,
        aspect: "portrait" as const,
        objectPosition: "center top",
      },
      cta: "Media Inquiry",
      inquiryType: "media",
      href: "/work-with-jolly?type=media",
      imageSide: "left" as const,
      tone: "dark" as const,
    },
  ],

  process: {
    headline: "From invitation to yes.",
    steps: [
      {
        number: "01",
        title: "Share the brief",
        description: "Tell us the date, room, audience and what you need from her.",
      },
      {
        number: "02",
        title: "Check the fit",
        description: "We review whether the opportunity matches her voice and capacity.",
      },
      {
        number: "03",
        title: "Move forward",
        description: "If it is a yes, we align on scope, logistics and next steps.",
      },
    ],
  },

  selectedWork: {
    headline: "Selected moments",
    supporting:
      "Public milestones from her path — not a fabricated client list.",
    emptyNote:
      "More case studies will appear here as partnerships are cleared for publication.",
    items: [
      {
        title: "Oxford Africa Conference",
        category: "Speaking",
        year: "2024",
        description:
          "Key speaker at Rhodes House, Oxford — joining the Oxford Africa conversation on African leadership and culture.",
        image: {
          src: jollyImages.speaking[0].src,
          alt: jollyImages.speaking[0].alt,
          aspect: "square" as const,
          objectPosition: jollyImages.speaking[0].objectPosition,
        },
        href: "/work-with-jolly?type=speaking",
      },
      {
        title: "Vice President, Miss East Africa",
        category: "Leadership",
        year: "2021",
        description:
          "Helped revive the regional pageant as Vice President — organising across East Africa from her experience as Miss Rwanda.",
        image: {
          src: jollyImages.style[0].src,
          alt: jollyImages.style[0].alt,
          aspect: "portrait" as const,
          objectPosition: jollyImages.style[0].objectPosition,
        },
      },
      {
        title: "Miss Rwanda Judge",
        category: "Pageant",
        year: "2018–2022",
        description:
          "Returned to the national stage as a judge — guiding a new generation of contestants after her own reign.",
        image: {
          src: jollyImages.personality[0].src,
          alt: jollyImages.personality[0].alt,
          aspect: "portrait" as const,
          objectPosition: jollyImages.personality[0].objectPosition,
        },
      },
    ] as WorkSelectedItem[],
  },

  finalCta: {
    headlineLines: ["Have something", "worth her time?"],
    supporting: "Send a clear brief. We will take it from there.",
    cta: { label: "Work With Jolly", href: "/work-with-jolly" },
  },
} as const;
