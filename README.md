# Portfolio

A full-page-scroll developer portfolio built with Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion, based on `VuDucManh_FullStack_Resume.pdf`.

## ⚠️ This build ships with a fake identity — read this first

The name, email, phone, location, GitHub and LinkedIn shown on the site right now are **placeholder fake
data** ("Alex Tran" / `alex.tran.dev@example.com` / etc.), not real. This was a deliberate choice: the resume's
real contact details never needed to pass through this build, this chat, or any preview link, while every real
professional fact shown — employer (FPT Software), job title, dates, achievements/metrics, education, and
skills — was kept exactly as it appears on the resume, since that's what actually demonstrates skill to a
recruiter. The resume's other listed employer (HaPhan JSC) was deliberately left out of this site at the
person's request and does not appear anywhere in the data file or generated output.

**Before deploying this site live**, open `data/portfolio.ts` and edit the `IDENTITY` object at the top —
that's the only place real personal info needs to go:

```ts
export const IDENTITY = {
  name: "Alex Tran",              // → your real name
  initials: "AT",                 // → your real initials
  email: "alex.tran.dev@example.com",
  phone: "+84 000 000 000",
  phoneHref: "tel:+840000000000",
  location: "Da Nang, Vietnam",
  github: "https://github.com/your-username",
  githubLabel: "github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  availableForWork: true,
  resumeHref: "/resume.pdf",
};
```

You'll also need to:
- Add your real resume PDF at `public/resume.pdf` (intentionally not included — see `public/README-resume.txt`).
- Replace `siteUrl` in `app/layout.tsx` (currently `https://your-domain.example`) and the same placeholder URL
  in `app/robots.ts` / `app/sitemap.ts` with your real deployed domain.
- Generate and add a real `public/og-image.png` (1200×630) social preview image.

Nothing else in the codebase needs to change — every component reads from `IDENTITY` and `CONTENT`, never
hardcoded values.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build & verify

```bash
npm run build   # production build + TypeScript check
npm run lint    # ESLint
npm run start   # serve the production build locally
```

This has been run and verified in this environment: `npm run build` compiles with 0 TypeScript errors and
prerenders the page as static content, and `npm run lint` reports 0 problems.

## Deploy

- **Vercel** (recommended, zero config): `vercel deploy`, or connect the GitHub repo in the Vercel dashboard.
- **Any Node host**: `npm run build && npm run start`.
- **Static export**: if you don't need SSR at all, add `output: "export"` to `next.config.mjs` and run
  `npm run build` — output lands in `out/` as static files deployable anywhere (Netlify, GitHub Pages, S3, etc.).

## Editing content

**All copy lives in `data/portfolio.ts`** — a single typed data file with two parallel trees, `CONTENT.en` and
`CONTENT.vi`, mirroring each other section by section (hero, about, skills, experience, projects, education,
contact). Edit text there; no component needs to change.

To add a work experience entry, push an object onto `experience.items` (in both `en` and `vi`) with `company`,
`role`, `period`, and a `bullets` array (`<b>` tags allowed for highlighting numbers). To add a project, push an
object onto `projects.items` with `title`, `period`, `problem`, `solution`, `result`, `stack` (string array),
`github`, and `demo`.

Design tokens (colors, spacing, radii) live as CSS custom properties in `:root` in `app/globals.css` — change
`--navy-900`, `--blue-700`, `--blue-400`, `--blue-100` to re-theme the whole site. Tailwind's `tailwind.config.ts`
mirrors the same palette under `colors.navy` / `colors.blue` for use in JSX className utilities.

## Project structure

```
app/
  layout.tsx        Fonts, metadata, JSON-LD Person schema, skip link
  page.tsx           Assembles the page from the section components
  globals.css        Design tokens + component styles (glass, timeline, etc.)
  icon.svg            Favicon (monogram)
  robots.ts / sitemap.ts
components/
  Navbar.tsx, DotNav.tsx, BackgroundOrbs.tsx, Reveal.tsx
  Hero.tsx, About.tsx, Skills.tsx, Experience.tsx, Projects.tsx, Education.tsx, Contact.tsx
data/
  portfolio.ts        IDENTITY (fake, swap before deploy) + CONTENT (en/vi copy)
lib/
  usePortfolio.tsx    Client context: locale state, active-section tracking,
                      keyboard nav, scroll-snap section detection, hash sync
```

## Open `[TODO]` placeholders

1. **`IDENTITY` block in `data/portfolio.ts`** — replace the fake name/email/phone/location/GitHub/LinkedIn
   with your real information before going live.
2. **`public/resume.pdf`** — not included; add your real CV PDF (see `public/README-resume.txt`).
3. **Profile photo** — the About section shows initials in a glass avatar with a "[TODO: add photo]" badge.
   Swap `.avatar-wrap` in `components/About.tsx` for a real `<Image>` once you have a headshot.
4. **Book Library Platform project — tech stack, GitHub link, demo link** — the resume doesn't list these, so
   `projects.items[0]` in `data/portfolio.ts` carries `[TODO: ...]` placeholders for `stack`, `github`, `demo`.
5. **Contact form backend** — `contact.formAction` in `data/portfolio.ts` is a `[TODO: add Formspree endpoint]`
   placeholder. The form currently falls back to a `mailto:` link when unconfigured. Sign up at
   [Formspree](https://formspree.io) and paste your endpoint to make it a real hosted form.
6. **`siteUrl` / OG image** — `https://your-domain.example` appears in `app/layout.tsx`, `app/robots.ts`, and
   `app/sitemap.ts`. Replace with your real domain once deployed, and add a real `public/og-image.png`.

## Design decisions

- **Full-page scroll, data-driven copy**: `main.scroll-main { scroll-snap-type: y mandatory }` on desktop
  (`proximity` under 768px so tall content on small screens never gets clipped), each `<section>` snapping to
  `100svh`. All text renders from `CONTENT[locale]` rather than being hardcoded in JSX, which is what makes the
  EN/VI toggle and future edits possible without touching components.
- **Fake identity, real facts, one data file**: the privacy requirement (don't expose real contact info while
  building/previewing) and the "one data file to edit" requirement from the original brief turned out to be the
  same solution — an `IDENTITY` object separate from `CONTENT`, so swapping in real info later is a five-field
  edit, not a rebuild.
- **Glassmorphism restrained to real surfaces**: cards, the navbar, and chips use a `.glass` utility
  (`rgba` fill + `backdrop-filter: blur(16px) saturate(140%)` + hairline border), with an `@supports not`
  fallback for browsers without backdrop-filter. The three background orbs are the only "drama" element, kept
  to CSS `animation` (no JS) so they cost nothing on the main thread.
- **Two-typeface system**: Space Grotesk (`next/font/google`) for headings/numbers, Inter for body copy, both
  self-hosted by `next/font` (no render-blocking request, automatic `font-display: swap`).
- **No progress-bar skills**: skills are grouped into four categories (Languages, Frameworks & Libraries,
  Databases & Architecture, Tools & Practices) as glass chips, matching the resume's Technical Skills section
  exactly — presence/absence and grouping communicate more than a fake "87% React" ever does.
  Every experience bullet's numbers (500+ bugs found, 20% faster regression cycles) came from the resume
  verbatim, with only phrasing tightened to lead with an action verb.
- **Framer Motion for reveals**: a `<Reveal>` wrapper uses `whileInView` with `viewport={{ once: true }}` for
  the scroll-triggered fade/slide-up on every section. `prefers-reduced-motion` is respected via Framer Motion's
  automatic reduced-motion handling plus a matching CSS media query for the pure-CSS orb/pulse/caret animations.
- **One project, honestly**: the resume lists exactly one personal project (the book library platform). Rather
  than invent 3–6 projects to fill a grid, Projects ships with the one real project and clearly marks the two
  unknown fields (stack, links) as TODOs instead of guessing.

## Node/npm version used

Verified against Node.js v24.21.0 / npm 11.19.0, Next.js 16.3.7 (upgraded from the originally-scaffolded 14.x —
see below). Next.js 16 requires Node ≥ 20.9.0.

### Why Next.js 16, not 14

This project initially pinned Next.js `^14.2.15` (a safe, well-established App Router version). Running
`npm audit` after install surfaced one critical and four high-severity advisories in that line — including an
unauthenticated RCE affecting Windows-hosted servers — none of which were fixed even in the latest 14.2.x patch
(14.2.35). Since this is a brand-new project with no legacy constraint forcing an older major version, it was
upgraded to Next.js 16.3.7, which resolves all of them (`npm audit` reports 0 vulnerabilities) while still
supporting React 18 (no React 19 migration was needed). ESLint was bumped to v9 and the config moved to flat
config (`eslint.config.mjs`) since `eslint-config-next@16` requires ESLint ≥ 9 and ships as native flat config.

## Browser support

Modern evergreen browsers (Chrome, Edge, Firefox, Safari — last 2 versions). `backdrop-filter` degrades
gracefully to a solid panel color on older browsers via `@supports`. Reduced-motion users get an animation-free,
fully accessible experience (skip link, visible focus rings, `aria-current` on nav state, alt semantics on all
icon-only buttons).
