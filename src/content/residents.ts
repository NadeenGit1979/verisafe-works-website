import { EyeOff, FolderLock, ListChecks } from 'lucide-react'

import { siteConfig } from '@/config/site'
import type { CtaContent, Feature } from '@/types/content'

export const hero = {
  badge: 'For Residents',
  title: "Your home's record, held by you too",
  lede: 'Know exactly what is happening in your home. You hold the same record as the people working for you.',
  primaryCta: siteConfig.cta.primary,
  secondaryCta: 'See how it works',
}

export const benefitsSection = {
  eyebrow: 'Built for the people who live there',
  title: 'The same record, in your hands',
  lede: 'Not a summary written for you afterwards — the identical record the people doing the work are using.',
}

export const benefits: string[] = [
  'See what was agreed before work begins',
  'Have agreed job changes documented in real time',
  'Keep a personal copy of every job in your home',
  'Resolve issues quickly with a clear, identical timeline',
]

/** Sits under the benefits list — the question residents ask first. */
export const privacyNote =
  'You never see internal notes between your housing association and their contractors — only the shared job record: what was agreed, what changed, and what was completed.'

export const image = {
  src: '/images/resident.png',
  alt: 'A resident welcoming a maintenance worker at their door',
}

export const boundariesSection = {
  eyebrow: 'What you see',
  title: 'Clear about the line',
  lede: 'A shared record only works if everyone knows what it does and does not include.',
}

export const boundaries: Feature[] = [
  {
    icon: ListChecks,
    title: 'The whole job, as it happened',
    description:
      'The timeline, the documents, the photos, the audio and the sign-off — the same items, in the same order, as the people doing the work.',
  },
  {
    icon: EyeOff,
    title: 'Not the back office',
    description:
      'Internal notes between your housing association and its contractors stay internal. You see what was agreed, what changed and what was completed.',
  },
  {
    icon: FolderLock,
    title: 'Your copy stays yours',
    description:
      'Every job in your home is a copy you keep, so you still hold the history if the contractor or the managing arrangement changes.',
  },
]

export const cta: CtaContent = {
  title: "See your home's record",
  description: `${siteConfig.name} is in its test phase. Join as an early tester and hold the same record as everyone working in your home.`,
}
