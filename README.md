# VeriSafe Works — Marketing Website

Marketing site for VeriSafe Works ("Trust Through Transparency"): one shared,
tamper-evident record of every job for tradespeople, housing maintenance teams
and residents.

Built with **Next.js (App Router) + React 19 + Tailwind CSS v4 + TypeScript**.
The reference designs live in `Screenshots V0dev Website/` and are the source
of truth for how pages must look.

## Getting started

```bash
pnpm install
cp .env.example .env.local   # adjust values per environment
pnpm dev                     # http://localhost:3000
```

## Scripts

| Script             | What it does                                        |
| ------------------ | --------------------------------------------------- |
| `pnpm dev`         | Start the dev server                                |
| `pnpm build`       | Production build (type-checks as part of the build) |
| `pnpm start`       | Serve the production build                          |
| `pnpm lint`        | ESLint (`lint:fix` to auto-fix)                     |
| `pnpm format`      | Prettier (`format:check` in CI)                     |
| `pnpm typecheck`   | TypeScript, no emit                                 |
| `pnpm test:e2e`    | Playwright smoke tests + full-page screenshots      |
| `pnpm test:e2e:ui` | Playwright in interactive UI mode                   |

Playwright builds and serves the production app itself (port 3100) and drops
full-page screenshots of every page in `e2e/screenshots/` — use them to compare
against the reference designs.

## Project structure

```
src/
  app/            Routes only. Thin pages that compose components.
    _components/  Sections used by exactly one route (colocation)
  components/
    ui/           Design-system primitives (Button, Input, Badge, Container…)
    layout/       Site chrome (header, footer, nav)
    sections/     Shared page sections (PageHero, CtaSection, FeatureCard…)
  config/         site.ts (brand identity), navigation.ts (ROUTES, nav menus)
  content/        All page copy as typed data — no prose inside components
  hooks/          Reusable client hooks (every effect cleans up after itself)
  lib/            utils.ts (cn), env.ts (typed environment access)
  types/          Shared content types
e2e/              Playwright specs
```

## Conventions

See [CLAUDE.md](./CLAUDE.md) for the full working agreements. The short
version:

- **No hardcoded colors** — only the semantic tokens defined in
  `src/app/globals.css` (`bg-primary`, `text-muted-foreground`, …).
- **No hardcoded brand or routes** — import from `src/config/`.
- **Copy lives in `src/content/`**, components stay presentational.
- **Server components by default**; `'use client'` only at the leaves that
  need interactivity (`NavLink`, `MobileNav`, `ContactForm`).
- **Every listener/effect must clean up** — see `src/hooks/` for the pattern.
- **Reuse before creating**: check `components/ui` and `components/sections`
  before writing new markup.

## Known gaps

- The contact form's **Send message button is intentionally non-functional**
  (no backend yet). Wire it to a server action or API route when ready.
