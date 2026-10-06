export const site = {
  name: "Jolly Mutesi",
  shortName: "Jolly Mutesi",
  tagline:
    "Miss Rwanda 2016. Motivational speaker, entrepreneur and advocate — building in public from Kigali.",
  url: "https://jollymutesi.com",
  locale: "en_US",
  description:
    "The official digital home of Jolly Mutesi — Miss Rwanda 2016, speaker, entrepreneur and advocate for women and girls.",
  email: "hello@jollymutesi.com",
  copyrightYear: 2026,
  social: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/mutesi_jolly/",
      placeholder: false,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mutesi-jolly-402954350",
      placeholder: false,
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/",
      placeholder: true,
    },
  ],
  person: {
    name: "Jolly Mutesi",
    alternateName: "Mutesi Jolly",
    jobTitle:
      "Motivational speaker, entrepreneur, realtor and women’s advocate",
    nationality: "Rwandan",
    description:
      "Rwandan public figure — Miss Rwanda 2016, first Rwandan at Miss World, motivational speaker, business consultant and advocate for women and girls.",
  },
} as const;

export type SiteConfig = typeof site;
