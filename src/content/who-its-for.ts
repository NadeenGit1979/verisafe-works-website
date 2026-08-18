import { Building2, Home, Wrench } from 'lucide-react'

import { ROUTES } from '@/config/navigation'
import { siteConfig } from '@/config/site'
import type { CtaContent, LinkedFeature, VisibilityRow } from '@/types/content'

export const hero = {
  title: 'Built for everyone on the job',
  lede: 'One shared record means trades, housing associations and residents all work from the same truth; each with the tools and protection they need.',
}

/**
 * The hub cards. Order matches MAIN_NAV and the homepage audience grid — the
 * three audiences appear in the same sequence everywhere on the site.
 */
export const audiences: LinkedFeature[] = [
  {
    icon: Building2,
    title: 'Housing Associations',
    description:
      'Give everyone working on your stock a consistent way to log work, evidence compliance and keep residents fully informed.',
    href: ROUTES.housingAssociations,
    linkLabel: 'For Housing Associations',
  },
  {
    icon: Wrench,
    title: 'Trades',
    description: `Your reputation is your business. ${siteConfig.name} gives you proof of exactly what was agreed and done on every job.`,
    href: ROUTES.trades,
    linkLabel: 'For Trades',
  },
  {
    icon: Home,
    title: 'Residents',
    description:
      'Know exactly what is happening in your home. You hold the same record as the people working for you.',
    href: ROUTES.residents,
    linkLabel: 'For Residents',
  },
]

export const visibilitySection = {
  eyebrow: 'Who sees what',
  title: 'Identical on the job, different around it',
  lede: 'Every party holds the same job record. What changes is the wider view each role needs — and what stays private.',
}

/** Column headers of the visibility matrix, in `visibilityRows` cell order. */
export const roles: string[] = ['Housing associations', 'Trades', 'Residents']

export const visibilityRows: VisibilityRow[] = [
  {
    label: 'The job timeline, as it happens',
    cells: [{ shown: true }, { shown: true }, { shown: true }],
  },
  {
    label: 'Documents, photos and audio',
    cells: [{ shown: true }, { shown: true }, { shown: true }],
  },
  {
    label: 'The written summary and sign-off',
    cells: [{ shown: true }, { shown: true }, { shown: true }],
  },
  {
    label: 'Internal notes between a housing association and its contractors',
    cells: [{ shown: true }, { shown: true, note: 'When you are a party' }, { shown: false }],
  },
  {
    label: 'Compliance and audit reporting across a whole portfolio',
    cells: [{ shown: true }, { shown: false }, { shown: false }],
  },
  {
    label: 'A portfolio of your own jobs across every customer',
    cells: [{ shown: false }, { shown: true }, { shown: false }],
  },
]

export const cta: CtaContent = {
  title: 'Find your place in the record',
  description: `Whether you fix it, manage it or live in it, ${siteConfig.name} keeps everyone on the same page.`,
}
