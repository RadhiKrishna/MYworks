import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Reference design ("ORDO — Engineering a Better Tomorrow") is a warm,
        // light, paper-toned site with near-black ink for headings/buttons and
        // a single amber accent used sparingly for eyebrows/underlines/links.
        // Dark near-black is reserved for the footer and the final "let's talk"
        // band, mirroring the reference.
        ink: "#15140F",      // near-black — dark section bg (footer/CTA), dark button fill
        panel: "#1E1C15",    // secondary dark surface (cards/rows inside dark sections)
        panel2: "#26231A",   // dark input/card background
        line: "#2C2A20",     // hairline borders/dividers on dark sections
        gold: "#C9973E",     // primary accent - eyebrows, underlines, numerals, links
        gold2: "#E3BE7C",    // hover/lighter gold
        paper: "#F3EFE6",    // primary text on dark sections
        mute: "#A79E8F",     // secondary/muted text on dark sections

        // Light-section tokens — the default look for almost the entire site
        // (nav, hero, about, services, sectors, page headers, etc.)
        cloud: "#FAF7F1",    // light section background (warm cream)
        cloud2: "#FFFFFF",   // card background on light sections
        sand: "#F0EAE0",     // alternate stripe background for visual rhythm
        line2: "#E7E0D3",    // hairline borders on light sections
        slate: "#17160F",    // headings/primary text on light sections (near-black)
        slate2: "#6E6759",   // muted/body text on light sections
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        content: "1280px",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "grid-dark": "linear-gradient(to right, rgba(21,20,15,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(21,20,15,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
