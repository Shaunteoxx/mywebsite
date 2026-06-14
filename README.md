# Shaun Teo — Personal Website

A playful, coastal-themed personal portfolio. Single-page React app with a hero you
can throw a volleyball around, a scroll-snap stat rail, project case studies, and a
photography section.

**Live:** _(add your Vercel URL here)_

## Tech stack

- **React 19** + **Vite** (build tooling, HMR)
- **Tailwind CSS v4** (via `@tailwindcss/vite`, configured in [`src/index.css`](src/index.css))
- **Motion** (`motion/react`) for animation, drag, and physics
- **lucide-react** for icons
- Hand-drawn SVG doodles in [`src/components/Doodles.jsx`](src/components/Doodles.jsx)

## Getting started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run lint     # eslint
```

## Project structure

```
src/
  App.jsx                 # page composition (section order)
  data.js                 # ALL content lives here (projects, stats, socials, etc.)
  index.css               # Tailwind v4 theme tokens + custom utilities
  components/
    Navbar.jsx            # sticky top nav
    ScrollProgress.jsx    # gradient bar + basketball that rolls on scroll
    CursorGlow.jsx        # warm glow that follows the cursor (static on touch)
    Hero.jsx              # intro + parallax doodles + throwable volleyball (physics)
    Marquee.jsx           # scrolling keyword ribbon
    Wins.jsx              # "Me, by the numbers" horizontal stat rail
    Projects.jsx          # "Things I'm proud of" grid + case-study trigger
    CaseStudy.jsx         # full-screen case-study template (data-driven)
    About.jsx             # bio, portrait, fun facts, hobbies, skills, certs
    Photography.jsx       # "Through my lens" (under construction)
    Contact.jsx           # footer with email + LinkedIn
    Doodles.jsx           # reusable hand-drawn SVG icons
public/
  broke-no-more/          # case-study media (screenshots + demo video)
  me.jpg                  # your portrait (add this — About shows a placeholder until then)
```

## Editing content

Almost everything is in [`src/data.js`](src/data.js) — you rarely need to touch components.

- **Add a project:** push an object to `projects`. Set `caseStudy: true` to get a "View Projects"
  detail page; add a `study` object for the full case-study content.
- **Stat rail:** edit the `stats` array.
- **Marquee words, fun facts, skills, certs, socials:** edit the matching arrays.
- **Project media:** drop files in `public/<project-id>/` and reference them as `/<project-id>/file.png`.
- **Your portrait:** add `public/me.jpg`.

See [HANDOFF.md](HANDOFF.md) for the full data shapes, design system, and gotchas.

## Deployment

Deploys to **Vercel** with zero config — framework preset **Vite**, root directory `./`,
build `npm run build`, output `dist`. It's a single-page app (no client-side routing),
so no rewrite rules are needed.

---

🤖 Built with [Claude Code](https://claude.com/claude-code)
