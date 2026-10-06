export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Story", href: "/story" },
  { label: "Work", href: "/work" },
  { label: "Impact", href: "/impact" },
  { label: "Journal", href: "/journal" },
];

export const primaryCta: NavItem = {
  label: "Work With Jolly",
  href: "/work-with-jolly",
};
