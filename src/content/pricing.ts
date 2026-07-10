export const hero = {
  badge: 'Coming soon',
  title: 'Transparent pricing, naturally',
  lede: 'We are in our test phase, so paid plans are not on sale yet. Here is what they will look like at launch — every plan includes the full shared record: documents, images and audio. No hidden fees.',
}

export type Plan = {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  featured: boolean
}

export const plans: Plan[] = [
  {
    name: 'Sole Trader',
    price: '£12',
    period: '/month',
    description: 'For independent tradespeople protecting every job.',
    features: [
      'Unlimited job records',
      'Documents, photos & audio capture',
      'Shared resident copies',
      'Tamper-evident timeline',
      'Email support',
    ],
    cta: 'Coming soon',
    featured: false,
  },
  {
    name: 'Team',
    price: '£9',
    period: '/user/month',
    description: 'For maintenance teams that need consistency across operatives.',
    features: [
      'Everything in Sole Trader',
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
    name: 'Housing Association',
    price: 'Custom',
    period: '',
    description: 'For associations managing maintenance at scale.',
    features: [
      'Everything in Team',
      'Unlimited members & contractors',
      'Resident portal access',
      'Audit & reporting tools',
      'Single sign-on (SSO)',
      'Dedicated account manager',
    ],
    cta: 'Coming soon',
    featured: false,
  },
]

export const footnote = {
  text: 'Planned pricing — details may change before launch. All prices exclude VAT. Annual billing saves 20%. Want in before then?',
  linkLabel: 'Become a tester',
}
