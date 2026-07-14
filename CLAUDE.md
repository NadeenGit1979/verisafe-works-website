# CLAUDE.md — Working agreements for this repo

VeriSafe Works marketing site. Next.js App Router + React 19 + Tailwind v4 +
TypeScript, `src/` layout. Reference designs in `Screenshots V0dev Website/`
are the source of truth for visuals.

## Architecture rules

1. **Routes are thin.** Files in `src/app/**/page.tsx` only compose components
   and export metadata. Section markup used by a single route goes in that
   route's `_components/` folder; anything shared goes in `src/components/`.
2. **Copy is data.** All user-facing text lives in `src/content/*.ts` as typed
   exports (`src/types/content.ts`). Components receive it via props/imports —
   never inline prose in a component.
3. **One source of truth for identity.** Brand name, tagline and contact
   details come from `src/config/site.ts`; internal links come from `ROUTES`
   in `src/config/navigation.ts`. Never hardcode either.
4. **Design tokens only.** Colors, radii and fonts are CSS variables defined
   in `src/app/globals.css` and consumed through Tailwind semantic classes
   (`bg-primary`, `text-muted-foreground`, `rounded-2xl`). Never use raw hex/
   oklch values or Tailwind palette colors (`bg-blue-600`) in components.
5. **Reuse the primitives.** `Button`, `Badge`, `IconBadge`, `Container`,
   `Input/Textarea/Select/Label`, `CheckList`, `FeatureCard`, `SectionHeading`,
   `PageHero`, `CtaSection` already exist. Extend them (variants/props) rather
   than duplicating markup. New primitives follow the same pattern: cva for
   variants, `cn()` for class merging.

## Client/server discipline

- Server components by default. `'use client'` is allowed only at interactive
  leaves — currently `NavLink`, `MobileNav`, `ContactForm`, `ThemeToggle` and
  hooks. Adding a new client boundary needs a reason interactivity can't live
  deeper.
- Env vars are read **only** through `src/lib/env.ts` and documented in
  `.env.example`. `NEXT_PUBLIC_*` for client-safe values only.

## Memory / cleanup discipline

- `reactStrictMode` is on: dev double-invokes effects to expose leaks.
- Every `addEventListener`, timer, observer or subscription in an effect MUST
  return a cleanup that removes it — see `src/hooks/use-escape-key.ts` and
  `use-scroll-lock.ts` for the house pattern.
- Prefer deriving state over syncing it with effects
  (`react-hooks/set-state-in-effect` is an error — see `MobileNav`'s
  route-derived open state for the pattern).

## Quality gates (run before calling work done)

```bash
pnpm lint && pnpm typecheck && pnpm build && pnpm test:e2e
```

- `pnpm test:e2e` also fails on any browser console error or 4xx/5xx response,
  and refreshes `e2e/screenshots/*.png` — compare those against the reference
  screenshots after visual changes.
- `next.config.mjs` must never ignore build/type errors.

## Known intentional gaps

- Contact form posts to Web3Forms (free tier, 250 submissions/month) — no
  backend of our own. The access key is `NEXT_PUBLIC_WEB3FORMS_KEY`, public by
  design but inlined at build time, so it must be set in Render's build
  environment. Spam is handled by the hidden `botcheck` honeypot plus
  Web3Forms' server-side filtering; success/error states are real, driven by
  the API response.
