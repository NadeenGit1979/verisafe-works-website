import type { Route } from 'next'

/** Every internal route, so links never hardcode path strings. */
export const ROUTES = {
  home: '/',
  howItWorks: '/how-it-works',
  whoItsFor: '/who-its-for',
  pricing: '/pricing',
  contact: '/contact',
  privacy: '/privacy',
  terms: '/terms',
} as const satisfies Record<string, Route>

export type NavItem = {
  href: Route
  label: string
}

export const MAIN_NAV: NavItem[] = [
  { href: ROUTES.home, label: 'Home' },
  { href: ROUTES.howItWorks, label: 'How it works' },
  { href: ROUTES.whoItsFor, label: "Who it's for" },
  { href: ROUTES.pricing, label: 'Pricing' },
  { href: ROUTES.contact, label: 'Contact' },
]

export const FOOTER_NAV: { title: string; links: NavItem[] }[] = [
  {
    title: 'Product',
    links: [
      { href: ROUTES.howItWorks, label: 'How it works' },
      { href: ROUTES.whoItsFor, label: "Who it's for" },
      { href: ROUTES.pricing, label: 'Pricing' },
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
