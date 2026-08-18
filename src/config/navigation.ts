import type { Route } from 'next'

/** Every internal route, so links never hardcode path strings. */
export const ROUTES = {
  home: '/',
  housingAssociations: '/housing-associations',
  trades: '/trades',
  residents: '/residents',
  howItWorks: '/how-it-works',
  whoItsFor: '/who-its-for',
  pricing: '/pricing',
  /** Canonical "get the app" destination — every invite email/SMS links here. */
  download: '/download',
  contact: '/contact',
  privacy: '/privacy',
  terms: '/terms',
} as const satisfies Record<string, Route>

export type NavItem = {
  href: Route
  label: string
}

/**
 * The three audiences lead, in the same order everywhere they appear (nav,
 * homepage cards, /who-its-for hub) so the site reads as one map. "Home" is
 * left out on purpose — the wordmark carries it, and the row has no slack:
 * see the single-row assertion in e2e/responsive.spec.ts.
 */
export const MAIN_NAV: NavItem[] = [
  { href: ROUTES.housingAssociations, label: 'Housing Associations' },
  { href: ROUTES.trades, label: 'Trades' },
  { href: ROUTES.residents, label: 'Residents' },
  { href: ROUTES.howItWorks, label: 'How it works' },
  { href: ROUTES.pricing, label: 'Pricing' },
  { href: ROUTES.contact, label: 'Contact' },
]

export const FOOTER_NAV: { title: string; links: NavItem[] }[] = [
  {
    title: 'Product',
    links: [
      { href: ROUTES.housingAssociations, label: 'Housing Associations' },
      { href: ROUTES.trades, label: 'Trades' },
      { href: ROUTES.residents, label: 'Residents' },
      { href: ROUTES.howItWorks, label: 'How it works' },
      { href: ROUTES.whoItsFor, label: "Who it's for" },
      { href: ROUTES.pricing, label: 'Pricing' },
      { href: ROUTES.download, label: 'Download the app' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: ROUTES.contact, label: 'Contact' },
      { href: ROUTES.contact, label: 'Support' },
      { href: ROUTES.contact, label: 'Become a tester' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: ROUTES.privacy, label: 'Privacy' },
      { href: ROUTES.terms, label: 'Terms' },
      { href: ROUTES.contact, label: 'Data protection' },
    ],
  },
]

/** Links shown in the footer's bottom copyright bar. */
export const LEGAL_NAV: NavItem[] = [
  { href: ROUTES.privacy, label: 'Privacy Policy' },
  { href: ROUTES.terms, label: 'Terms & Conditions' },
]
