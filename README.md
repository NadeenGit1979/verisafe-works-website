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

## App deep links (`/accept-invitation` + `public/.well-known/`)

The backend sends job-invitation emails/SMS linking to
`https://verisafe.works/accept-invitation?token=…` (its `APP_INVITE_BASE_URL`
env var). This site serves two things that make those links work:

1. **The landing page** at `/accept-invitation` — browser fallback with an
   "Open in the app" button (`verisafeworks://` custom scheme, token
   forwarded).
2. **The OS verification files** in `public/.well-known/` that upgrade taps to
   open the VeriSafe Works app directly, with no browser step:
   - `apple-app-site-association` (iOS Universal Links)
   - `assetlinks.json` (Android App Links)

Deployment requirements — **both must be done for direct app-open to work**:

- **Apple Team ID**: `apple-app-site-association` is set to
  `H4U595BGQB.com.verisafe.works`. If the iOS app is ever signed under a
  different Apple Developer team (Xcode → Signing & Capabilities), this must
  change with it. Apple caches this file via its CDN, so changes take up to a
  day to propagate.
- **Serve the AASA file as JSON**: the file has no extension, so static hosts
  default it to `application/octet-stream`, which Apple rejects. On Render
  (static site → Redirects/Headers), add a header rule:
  path `/.well-known/apple-app-site-association`, header `Content-Type`,
  value `application/json`. No redirects on either `.well-known` path — the
  OSes won't follow them. This is also why everything claims the **apex domain
  only** for Android: Render 301-redirects `www` to the apex, so `www` can
  never pass verification (the Android manifest therefore doesn't claim it;
  iOS lists `www` too but validates per-domain, so its failure is harmless).

`assetlinks.json` currently pins the **debug keystore** SHA-256 — correct for
now because `android/app/build.gradle` signs release builds with the debug
keystore too. When a real release keystore is created, add its fingerprint
(`keytool -list -v -keystore <file>`) to the array.

Verify after deploy:
`https://verisafe.works/.well-known/apple-app-site-association` and
`https://verisafe.works/.well-known/assetlinks.json` both return 200 with the
JSON body (Android's checker:
`https://digitalassetlinks.googleapis.com/v1/statements:list?source.web.site=https://verisafe.works&relation=delegate_permission/common.handle_all_urls`).

## Known gaps

- The contact form's **Send message button is intentionally non-functional**
  (no backend yet). Wire it to a server action or API route when ready.
