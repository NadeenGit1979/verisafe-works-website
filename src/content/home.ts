import { AudioLines, Building2, FileText, Home, ImageIcon, Wrench } from 'lucide-react'
import { siteConfig } from '@/config/site'
import type { CtaContent, Feature, Stat, Step } from '@/types/content'

export const hero = {
  badge: siteConfig.tagline,
  title: 'One shared record of every job',
  lede: `${siteConfig.name} keeps a complete, identical record of all documents, images and audio conversations for each job — held by the resident, the worker and, if applicable, the worker's employer.`,
  primaryCta: siteConfig.cta.primary,
  secondaryCta: 'See how it works',
  image: {
    src: '/images/hero-tradesperson.png',
    alt: 'A tradesperson reviewing a job record on a smartphone in a home',
  },
}

export const stats: Stat[] = [
  { value: '1 record', label: 'shared by everyone' },
  { value: '100%', label: 'of job evidence kept' },
  { value: '0', label: 'he-said-she-said disputes' },
  { value: '3 roles', label: 'trades, teams & residents' },
]

export const recordSection = {
  title: 'An identical record, held by everyone',
  lede: 'Nothing is hidden and nothing goes missing. Every part of the job is captured once and shared the same way with all parties.',
}

export const recordTypes: Feature[] = [
  {
    icon: FileText,
    title: 'Every document',
    description:
      'Quotes, invoices, certificates, risk assessments and sign-offs stored against the job — never lost.',
  },
  {
    icon: ImageIcon,
    title: 'Every image',
    description:
      'Before, during and after photos timestamped and attached, so the work speaks for itself.',
  },
  {
    icon: AudioLines,
    title: 'Every conversation',
    description:
      'Recorded audio notes and agreements kept alongside the job, exactly as they happened.',
  },
]

export const workflowSection = {
  title: `How ${siteConfig.name} works`,
  lede: 'From the first quote to the final sign-off, everyone works from the same trusted timeline.',
  cta: 'Explore the full workflow',
  image: {
    src: '/images/app-record.png',
    alt: `The ${siteConfig.name} app showing a job timeline with documents, photos and an audio note`,
  },
}

export const workflowSteps: Step[] = [
  {
    number: '01',
    title: 'Open the job',
    description:
      'The tradesperson or maintenance team starts a job record in seconds, with the property and resident attached.',
  },
  {
    number: '02',
    title: 'Capture as you go',
    description:
      'Documents, photos and audio are added in real time. Everyone on the job sees the same record.',
  },
  {
    number: '03',
    title: 'Share one truth',
    description:
      'Customer, worker and employer all hold an identical, tamper-evident copy when the job closes.',
  },
]

export const audienceSection = {
  eyebrow: 'Built for everyone on the job',
  title: 'One platform, three points of view',
  cta: 'See who benefits',
}

export const audiences: Feature[] = [
  {
    icon: Wrench,
    title: 'Independent tradespeople',
    description:
      'Protect your reputation with proof of every job and get paid faster with disputes settled by the record.',
  },
  {
    icon: Building2,
    title: 'Housing maintenance teams',
    description:
      'Give every operative a consistent way to log work, evidence compliance and keep residents informed.',
  },
  {
    icon: Home,
    title: 'Residents',
    description:
      'See exactly what was agreed and done in your home, with the same record the worker and landlord hold.',
  },
]

export const testimonial = {
  quote:
    'When the resident, my team and the landlord all see the same record, the conversation stops being about blame and starts being about the work.',
  attribution: 'Maintenance Lead, regional housing association',
}

export const cta: CtaContent = {
  title: 'Build trust on every job',
  description: `${siteConfig.name} is in its test phase. Join as an early tester and help shape one shared, verifiable record that protects tradespeople, teams and residents alike.`,
}
