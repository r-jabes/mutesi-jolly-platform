import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F4F0E8",
        "warm-white": "#FAF8F3",
        charcoal: "#171715",
        "soft-charcoal": "#292824",
        stone: "#B7B0A3",
        sand: "#D8D0C2",
        burgundy: "#541F2A",
        muted: "#6F6A61",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        editorial: "1440px",
      },
      spacing: {
        gutter: "1.25rem",
        "page-mobile": "1.25rem",
        "page-tablet": "2rem",
        "page-desktop": "3.5rem",
      },
      fontSize: {
        meta: [
          "0.6875rem",
          { lineHeight: "1.4", letterSpacing: "0.12em" },
        ],
        "meta-sm": [
          "0.625rem",
          { lineHeight: "1.4", letterSpacing: "0.12em" },
        ],
        hero: [
          "clamp(2.85rem, 7.2vw, 7.25rem)",
          { lineHeight: "1.05", letterSpacing: "-0.025em" },
        ],
        section: [
          "clamp(2.35rem, 5vw, 5.25rem)",
          { lineHeight: "1.06", letterSpacing: "-0.02em" },
        ],
        statement: [
          "clamp(2.35rem, 5.5vw, 6.5rem)",
          { lineHeight: "1.06", letterSpacing: "-0.02em" },
        ],
        body: ["1.125rem", { lineHeight: "1.7" }],
        "body-lg": ["1.25rem", { lineHeight: "1.65" }],
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        editorial: "600ms",
        page: "500ms",
      },
    },
  },
  plugins: [],
} satisfies Config;
