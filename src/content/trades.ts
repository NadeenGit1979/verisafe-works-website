import { AudioLines, FileText, ImageIcon } from 'lucide-react'

import { siteConfig } from '@/config/site'
import type { CtaContent, Feature } from '@/types/content'

export const hero = {
  badge: 'For Trades',
  title: 'Proof of every job, built in',
  lede: `Your reputation is your business. ${siteConfig.name} gives you proof of exactly what was agreed and done on every job.`,
  primaryCta: siteConfig.cta.primary,
  secondaryCta: 'See how it works',
}

export const benefitsSection = {
  eyebrow: 'Built for the people doing the work',
  title: 'Evidence that builds itself as you work',
  lede: 'Capture the job as it happens and the proof is already there when someone asks — no digging through your phone weeks later.',
}

export const benefits: string[] = [
  'Evidence every job with photos, documents and audio',
  'Settle disputes with the record, not your word against theirs',
  'Get paid faster with clear, signed-off work',
  'Build a portfolio of trusted, transparent jobs',
]

export const image = {
  src: '/images/hero-tradesperson.png',
  alt: 'A tradesperson reviewing a job record on a smartphone',
}

export const recordSection = {
  eyebrow: 'What you can prove',
  title: 'Everything that happened, attached to the job',
  lede: 'Each item is timestamped and locked to the job timeline, and the customer holds the identical copy.',
}

export const recordTypes: Feature[] = [
  {
    icon: FileText,
    title: 'The paperwork',
    description:
      'Quotes, invoices, certificates, risk assessments and the final sign-off, filed against the job instead of your inbox.',
  },
  {
    icon: ImageIcon,
    title: 'The condition',
    description:
      'Before, during and after photos, timestamped as you take them, so nobody can argue about what you found or what you left.',
  },
  {
    icon: AudioLines,
    title: 'The agreement',
    description:
      'Audio notes of what was agreed on site — the variation, the extra, the go-ahead — kept alongside the rest of the job.',
  },
]

export const cta: CtaContent = {
  title: 'Start building your record',
  description: `${siteConfig.name} is in its test phase. Join as an early tester and start proving every job, from the first one.`,
}
