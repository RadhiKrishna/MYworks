# Ordo Technical Services — Website (Next.js)

Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript** and **Tailwind CSS**.

## Run it locally

```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build for production (static hosting)

Content-only site (no server APIs), so it can be exported fully static:

1. In `next.config.mjs`, add `output: "export"` inside `nextConfig`, and set
   `images: { unoptimized: true }` (static export can't run Next's image
   optimizer).
2. Run `npm run build` — static files land in `out/`, upload that anywhere.

## Folder structure

```
app/
  layout.tsx        <- Navbar + Footer render ONCE here, wrap every page
  page.tsx           <- Homepage: just imports and stacks section components
  globals.css         <- global styles, animations, focus states

components/
  layout/
    Navbar.tsx        <- sticky nav, services dropdown, mobile menu
    Footer.tsx         <- site footer
  sections/            <- one file per homepage section (Hero, WhatWeDo, ...)
  ui/
    Button.tsx          <- reusable primary/secondary button
    Icon.tsx             <- shared icon set (used by nav, stats, WhyOrdo etc)
    SectionHeading.tsx    <- reusable "eyebrow + title + link" heading

lib/
  site-data.ts    <- single source of truth: nav links, footer links,
                       services, sectors, stats, phone/email, image URLs.
                       Edit content here once -- every component that uses
                       it updates automatically.

tailwind.config.ts  <- design tokens (colors, fonts) -- the visual identity
```

## Why this structure

- **Navbar/Footer are common**: they live in `app/layout.tsx`, which wraps
  every route under `app/`. When you add `app/about/page.tsx` or
  `app/services/page.tsx`, they get the same nav and footer automatically --
  nothing to copy-paste.
- **Colors and text are common**: everything pulls from `tailwind.config.ts`
  (colors: `ink`, `panel`, `gold`, `paper`, `mute`, `line`) and
  `lib/site-data.ts` (site name, phone, nav links, service/sector text).
  Change a value once, it updates everywhere it's used.
- **Sections are isolated**: each homepage block is its own file under
  `components/sections/`, so you can reorder, reuse, or drop one into
  another page without touching the rest.

## Images

Two real photos are wired up (Unsplash, free license) via `lib/site-data.ts
-> images`:
- Hero: Dubai skyline at dusk
- District Cooling section: industrial plant piping

The "Sectors We Serve" tiles and a few other spots use styled gradient
placeholders instead of stock photos, since sector-specific photography
(residential, hospitality, healthcare, etc.) works best when it's the
client's own project photos. Swap them in `components/sections/Sectors.tsx`
when available -- happy to source stock photos for these too if you want
them filled in now.

## Before going live

- Replace placeholder phone numbers (`+971 XX XXX XXXX`) and email in
  `lib/site-data.ts`
- Add a real logo mark if you have one (currently a text wordmark)
- Build out `services`, `district-cooling`, `sectors`, `projects` pages --
  the nav already links to these paths
- Wire up the contact form (see below)

## Wiring up the contact form

`components/sections/ContactForm.tsx` currently opens a pre-filled `mailto:`
link with the form data on submit -- it is honest (no fake "message sent"
confirmation) and works with zero backend, but it depends on the visitor
having a desktop email client configured. For a more reliable, form-native
experience, two common upgrades:

1. **Next.js API route** -- add `app/api/contact/route.ts` that receives the
   POST body and emails it (e.g. via Resend, SendGrid, or Nodemailer), then
   call that route's URL from `handleSubmit` in `ContactForm.tsx` using
   `fetch`. Needs a Node server (not compatible with static `output: export`).
2. **Form service** -- point the form at a service like Formspree, Web3Forms
   or Getform (they give you an endpoint URL, no backend code needed). Works
   fine with a fully static export.

Pick whichever fits your hosting plan and I can wire it in.

## Pre-delivery audit (see full report in chat)

A full audit pass was run on this project: TypeScript, ESLint, and a
production build all pass cleanly. Fixes included: restored font loading
(was silently broken), replaced a fake form-success message with an honest
`mailto:` fallback, removed non-functional social-link placeholders, added
SEO essentials (`sitemap.ts`, `robots.ts`, Open Graph/Twitter metadata,
Organization structured data, favicon), added security headers, added a 404
page, and removed dead code. Full details, flagged placeholder content, and
what still needs client input are in the audit report.
