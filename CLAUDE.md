# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for **Sunil Tiwari**. Originally forked from a portfolio built for Payal Fofadiya — most of her content was stripped down to TODO placeholders (see `app/data.ts`) when the site was repurposed; some orphan event images may still live under `public/`. Built on the Nim template (Next.js 15 + React 19 + Tailwind v4 + Motion). Single-page site with App Router, plus sub-routes (blog, contact, dynamic judging/speaking pages). Deployed to Vercel at `suniltiwari.io`.

## Common Commands

```bash
npm run dev      # Dev server at http://localhost:3000
npm run build    # Production build (Vercel runs this)
npm run start    # Serve production build locally
npm run lint     # ESLint (next/core-web-vitals + MDX rules)
```

No test framework is configured.

## Architecture

### Content lives in TypeScript, not a CMS
Nearly all site content (projects, work history, social links, media, books, news, speaking engagements) is defined as exported constants in **`app/data.ts`**. `app/page.tsx` imports those constants and renders the entire single-page layout. To add or edit a project / talk / publication / etc., edit `app/data.ts`.

Two exceptions:
- **Blog posts** — MDX files under `app/blog/<slug>/page.mdx`, each in its own folder. The `BLOG_POSTS` array in `app/data.ts` is a separate list of *external* posts (e.g. Substack links) shown on `/blog`; it is not auto-generated from local MDX files.
- **Judging data** — lives in `app/judging/judging-data.ts` and is re-exported through `app/data.ts`. Speaking data still lives inline in `app/data.ts`.

### Dynamic detail routes
- `app/judging/[slug]/` and `app/speaking/[slug]/` render detail pages by looking up the `slug` field on entries from `JUDGING_OPPORTUNITIES` / `SPEAKING_ENGAGEMENTS`. When you add a new entry, the detail page is generated automatically — make sure the entry has a unique `slug` and any optional media (`images`, `videoUrl`, `slidesUrl`, etc.) you want shown.

### UI primitives
- `components/ui/` holds custom interactive components (Spotlight, Magnetic, MorphingDialog, MediaCarousel, MediaGallery, AnimatedBackground, TextEffect/Loop/Morph, ScrollProgress, Button). Many use the **Motion** library and follow Framer Motion idioms.
- `components.json` configures shadcn/ui (style: default, baseColor: zinc, alias `@/components`). New shadcn components land in `components/ui/`.
- `MorphingDialog` is the pattern used for click-to-zoom images/videos throughout the homepage — reuse it for new media tiles instead of rolling a custom modal.

### Styling & theming
- Tailwind **v4** via `@tailwindcss/postcss` — config is CSS-first in `app/globals.css` (no `tailwind.config.js`). The `components.json` reference to `tailwind.config.js` is stale; do not create that file.
- Dark mode is `class`-based via `next-themes` (`<ThemeProvider attribute="class" storageKey="theme">` in `app/layout.tsx`). Use `dark:` variants — do not add a separate dark stylesheet.
- Fonts: Geist + Geist Mono via `next/font/google`, exposed as CSS vars in `app/layout.tsx`.

### Path alias
`@/*` maps to the repo root (`tsconfig.json`). Always import as `@/components/...`, `@/lib/...`, `@/hooks/...` rather than relative paths.

## Conventions

- The homepage hero in `app/header.tsx` references `/headshot.png`. Drop a real headshot at `public/headshot.png` — until then, an "ST" initial fallback renders.
- `EMAIL` and `SOCIAL_LINKS` in `app/data.ts` are the source of truth for footer/contact links. Several social links are still placeholder URLs — update before launch.
- Static media (project screenshots, headshots, event photos) goes in `public/` and is referenced with absolute paths (`/foo.png`).
- The contact form (`app/contact/page.tsx`) uses EmailJS via `NEXT_PUBLIC_EMAILJS_*` env vars. `.env.production` and `.env.preview` are intentionally blank — fill them in from the EmailJS dashboard. Until set, the form falls back to a `mailto:` link.
- `cover.tsx` exists but is not currently imported anywhere — safe to ignore unless re-introduced.
- Prettier is configured (`.prettierrc.json`); rely on it for formatting.
