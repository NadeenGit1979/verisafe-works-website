import type { Route } from 'next'

import { ROUTES } from '@/config/navigation'

export const hero = {
  badge: 'Plans coming soon',
  title: 'Transparent pricing, naturally',
  lede: 'We are in our test phase, so paid plans are not on sale yet. Here is what they will look like at launch — every plan includes the full shared record: documents, images and audio. No hidden fees. Housing association pilots are open now.',
}

export type Plan = {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  featured: boolean
  /**
   * When set, the CTA becomes a live internal link instead of the disabled
   * "Coming soon" state — e.g. routing enterprise buyers to Contact while
   * the self-serve tiers stay disabled during the test phase.
   */
  ctaHref?: Route
}

export const plans: Plan[] = [
  {
    name: 'Independent Tradesperson',
    price: '£12',
    period: '/Month',
    description: 'For independent tradespeople protecting every job.',
    features: [
      'Unlimited job records',
      'Documents, photos & audio capture',
      'Secure encrypted storage',
      'Digital sign off',
      'Email support',
    ],
    cta: 'Coming soon',
    featured: false,
  },
  {
    name: 'Team',
    price: '£9',
    period: '/user/month',
    description: 'Consistent job tracking for teams of contractors.',
    features: [
      "All Independent Tradesperson's features",
      'Up to 25 team members',
      'Compliance & sign-off tracking',
      'Shared property history',
      'Role-based access',
      'Priority support',
    ],
    cta: 'Coming soon',
    featured: true,
  },
  {
    name: 'Housing Associations',
    price: 'Custom',
    period: '',
    description: 'For housing associations managing repairs and compliance at scale.',
    features: [
      'Everything in Team',
      'Unlimited members & contractors',
      'Resident portal access',
      'Audit & reporting tools',
      'Single sign-on (SSO)',
      'Dedicated account manager',
    ],
    cta: 'Talk to us about a pilot',
    featured: false,
    ctaHref: ROUTES.contact,
  },
]

export const footnote = {
  text: 'Planned pricing — details may change before launch. All prices exclude VAT. Annual billing saves 20%. Want in before then?',
  linkLabel: 'Become a tester',
}
