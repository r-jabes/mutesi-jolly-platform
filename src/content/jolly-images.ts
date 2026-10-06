/**
 * Central photography registry for the Jolly Mutesi platform.
 * Paths match files under /public/images/jolly/
 * Switch hero by changing `activeHeroIndex`.
 */

export type JollyImage = {
  src: string;
  alt: string;
  role?:
    | "hero"
    | "portrait"
    | "style"
    | "speaking"
    | "personality"
    | "impact"
    | "culture"
    | "lifestyle";
  /** CSS object-position hint for editorial crops */
  objectPosition?: string;
};

export const jollyImages = {
  hero: [
    {
      src: "/images/jolly/hero/hero-jolly-01.jpg",
      alt: "Mutesi Jolly",
      role: "hero" as const,
      objectPosition: "center 12%",
    },
    {
      src: "/images/jolly/hero/hero-jolly-02.jpg",
      alt: "Mutesi Jolly",
      role: "hero" as const,
      /** Prefer top of frame so her head is never cropped */
      objectPosition: "center top",
    },
  ],

  portrait: [
    {
      src: "/images/jolly/portrait/portrait-jolly-01.jpg",
      alt: "Mutesi Jolly",
      role: "portrait" as const,
      objectPosition: "center 15%",
    },
  ],

  style: [
    {
      src: "/images/jolly/style/style-jolly-01.jpg",
      alt: "Mutesi Jolly",
      role: "style" as const,
      objectPosition: "center 20%",
    },
    {
      src: "/images/jolly/style/style-jolly-02.jpg",
      alt: "Mutesi Jolly",
      role: "style" as const,
      objectPosition: "center 18%",
    },
    {
      src: "/images/jolly/style/style-jolly-03.jpg",
      alt: "Mutesi Jolly",
      role: "style" as const,
      objectPosition: "center 12%",
    },
  ],

  speaking: [
    {
      src: "/images/jolly/speaking/speaking-jolly-01.jpg",
      alt: "Mutesi Jolly speaking",
      role: "speaking" as const,
      objectPosition: "center 20%",
    },
  ],

  personality: [
    {
      src: "/images/jolly/personality/personality-jolly-01.jpg",
      alt: "Mutesi Jolly",
      role: "personality" as const,
      objectPosition: "center 20%",
    },
  ],

  impact: [
    {
      src: "/images/jolly/impact/impact-jolly-01.jpg",
      alt: "Mutesi Jolly at a community gift presentation",
      role: "impact" as const,
      /** Landscape preferred — subject sits toward the side of the frame */
      objectPosition: "left center",
    },
  ],

  culture: [
    {
      src: "/images/jolly/culture/culture-jolly-01.jpg",
      alt: "Mutesi Jolly",
      role: "culture" as const,
      objectPosition: "center 18%",
    },
  ],

  lifestyle: [
    {
      src: "/images/jolly/lifestyle/lifestyle-jolly-01.jpg",
      alt: "Mutesi Jolly",
      role: "lifestyle" as const,
      objectPosition: "center 12%",
    },
    {
      src: "/images/jolly/lifestyle/lifestyle-jolly-02.jpg",
      alt: "Mutesi Jolly",
      role: "lifestyle" as const,
      objectPosition: "center 15%",
    },
  ],
} as const;

/** Change this index to switch the homepage hero without a carousel */
export const activeHeroIndex = 0;

export function getHeroImage(index: number = activeHeroIndex): JollyImage {
  return jollyImages.hero[index] ?? jollyImages.hero[0];
}
