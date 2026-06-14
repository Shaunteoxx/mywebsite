# Hand-off notes

Everything a future you (or another dev) needs to keep this site running and growing.
Pair this with the [README](README.md).

## 1. Architecture at a glance

Single-page React app. [`App.jsx`](src/components/) composes the sections in order:

```
CursorGlow · ScrollProgress · Navbar
main → Hero · Marquee · Wins · Projects · About · Photography
Contact (footer)
```

There is **no client-side router**. Project case studies open as a **full-screen overlay**
(`CaseStudy`) via `AnimatePresence`, not a route. If you ever want shareable per-project
URLs (e.g. `/work/broke-no-more`), add `react-router-dom` and render `CaseStudy` on a route —
the component is already self-contained and data-driven.

All copy/content lives in [`src/data.js`](src/data.js). Components are mostly presentational.

## 2. Design system (`src/index.css`)

Defined as Tailwind v4 `@theme` tokens, so use them as utilities (`text-coral`, `bg-sand`, etc.):

| Token | Value | Use |
|-------|-------|-----|
| `--font-display` | Fredoka | headings, buttons |
| `--font-body` | Nunito | body text |
| `sand` / `sand-deep` | `#fff8f0` / `#ffeede` | page background |
| `ink` / `ink-soft` | `#1b2a41` / `#45556c` | text |
| `ocean` / `ocean-deep` | `#0ea5a4` / `#0d8c8b` | accent |
| `coral` | `#ff6b5c` | accent |
| `sun` | `#ffc93c` | accent |
| `sky` | `#4da8da` | accent |
| `grape` | `#8b5cf6` | accent |

Custom utilities: `.squiggle` (highlighter underline), `.dot-grid` (notebook dots),
`.float-slow` (idle bob), `.animate-marquee`. A global `prefers-reduced-motion` block
disables animations.

**Accent system:** projects/stats pick an accent by name (`coral` `ocean` `grape` `sky`
`sun`). The accent→class maps live at the top of `Projects.jsx`, `Wins.jsx`, and `CaseStudy.jsx`.

## 3. Content shapes (`src/data.js`)

### `projects[]`
```js
{
  id, title, tagline, period,
  accent: "coral" | "ocean" | "grape" | "sky",
  emoji,
  caseStudy: true,          // shows the "View Projects" button + opens CaseStudy
  blurb,                    // full text shown on the card
  learned,                  // "What I took away" line
  highlights: [ ... ],      // used in the case study when there's no study.features
  stack: [ ... ],
  links: [{ label, href, kind }],   // [] = no buttons
  study: { ... }            // optional — the full case-study content (below)
}
```

### `projects[].study` (the case study)
```js
{
  role, team,
  hero: "/broke-no-more/demo.mp4",   // video (mp4/webm/mov) OR image; omit for a placeholder
  gallery: [{ src, caption }],       // "A closer look"; omit the key to hide the section
  problem,
  contribution,                      // optional paragraph above the feature list
  features: [                        // rich "What I did" list; falls back to `highlights`
    { label, detail },
    { label, items: [ "sub-bullet", ... ] }
  ],
  process: [{ title, detail }],
  challenges,
  outcome,
}
```
Section numbers in `CaseStudy` auto-renumber, so hiding the gallery won't leave a gap.

### Other arrays
- `stats[]` — the "Me, by the numbers" rail: `{ tag, stat, unit?, label, sub, accent, emoji }`
- `marqueeWords[]`, `funFacts[]`, `skillGroups[]`, `certs[]`, `socials[]`

## 4. Adding media / images

Anything in `public/` is served from the site root.

- **Case-study media:** `public/<project-id>/` → reference as `/<project-id>/file.png`.
  Keep demo videos short and compressed (< ~10 MB). They autoplay **muted + looping**.
- **Portrait:** add `public/me.jpg` (square works best). `About` shows a placeholder until it exists.
- **Photography gallery:** currently an "under construction" state in `Photography.jsx`.
  When ready, swap the dashed frames for `<img>`s (same pattern as the case-study gallery).

## 5. Notable behaviour / gotchas

- **Volleyball physics** (`Hero.jsx`): custom `requestAnimationFrame` sim (gravity + air drag +
  wall/floor bounce). Wall limits are measured **once on release** to avoid per-frame layout
  reflow — important for mobile smoothness. `motion`'s built-in drag inertia has no gravity,
  which is why this is hand-rolled.
- **CursorGlow** and **parallax** are disabled/simplified on touch devices and when
  `prefers-reduced-motion` is set.
- **Doodles** use `currentColor` so they can be tinted (`text-coral`, etc.). The exception is
  `MikasaBall`, which is intentionally multi-colour (the real BV550C-WYBR ball).
- **Contact** intentionally shows only email + LinkedIn (phone was removed to avoid scraping).
- Run `npm run build` after content edits — it catches typos/JSX errors fast.

## 6. Open TODOs / placeholders

- [ ] Add `public/me.jpg` (portrait).
- [ ] Fill case studies for **Let's Cook**, **Judokas Connect**, **Requirements Generator**
      (they currently show the blank template — add a `study` object to each).
- [ ] Build out the **Photography** gallery when photos are ready.
- [ ] Add real `links` (live demo / repo) to projects that have them.
- [ ] Put the live Vercel URL in the README.

## 7. Deployment

Vercel, framework **Vite**, root `./`, build `npm run build`, output `dist`. SPA — no rewrites
needed. Pushing to `main` triggers a redeploy if the Vercel project is connected to the repo.
