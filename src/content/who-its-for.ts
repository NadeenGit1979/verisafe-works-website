import { Building2, Home, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { siteConfig } from '@/config/site'
import type { CtaContent } from '@/types/content'

export const hero = {
  title: 'Built for everyone on the job',
  lede: 'One shared record means trades, housing associations and residents all work from the same truth — each with the tools and protection they need.',
}

export type AudienceGroup = {
  icon: LucideIcon
  title: string
  intro: string
  benefits: string[]
  image: { src: string; alt: string }
}

export const groups: AudienceGroup[] = [
  {
      icon: Building2,
    title: 'Housing Associations',
    intro:
      'Give everyone working on your stock a consistent way to log work, evidence compliance and keep residents fully informed.',
    benefits: [
      'Standardise how every job is updated, recorded and viewed; internally and for the resident,
      "Evidence Awaab's Law and Building Safety Act compliance in one place",
      'Reduce complaints with a shared, transparent record',
      'Hand over a complete history when contractors change',
    ],
    image: {
      src: '/images/app-record.png',
      alt: `A job record shown in the ${siteConfig.name} app`,
    },
  },
  {  
    
    icon: Wrench,
    title: 'Independent Tradespeople',
    intro: `Your reputation is your business. ${siteConfig.name} gives you proof of exactly what was agreed and done on every job.`,
    benefits: [
      'Evidence every job with photos, documents and audio',
      'Settle disputes with the record, not your word against theirs',
      'Get paid faster with clear, signed-off work',
      'Build a portfolio of trusted, transparent jobs',
    ],
    image: {
      src: '/images/hero-tradesperson.png',
      alt: 'A tradesperson reviewing a job on a phone',
    },
  },
  {

    icon: Home,
    title: 'Residents',
    intro:
      'Know exactly what is happening in your home. You hold the same record as the people working for you.',
    benefits: [
      'See what was agreed before work begins',
      'Have agreed job changes documented in real time',
      'Keep a personal copy of every job in your home',
      'Resolve issues quickly with a clear, identical timeline',
    ],
    image: {
      src: '/images/resident.png',
      alt: 'A resident welcoming a maintenance worker at their door',
    },
  },
]

export const cta: CtaContent = {
  title: 'Find your place in the record',
  description: `Whether you fix it, manage it or live in it, ${siteConfig.name} keeps everyone on the same page.`,
}
