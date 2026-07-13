import {
  Camera,
  Clock,
  FilePlus2,
  Fingerprint,
  Mic,
  Share2,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { siteConfig } from '@/config/site'
import type { CtaContent, Feature } from '@/types/content'

export const hero = {
  badge: 'The workflow',
  title: `How ${siteConfig.name} works`,
  lede: 'From the first quote to the final sign-off, every job is captured once and shared the same way with everyone involved.',
}

export const flow: Feature[] = [
  {
    icon: FilePlus2,
    title: '1. Start the job record',
    description:
      'Create a job in seconds and link the property, the resident and any colleagues or contractors involved. Everyone is added to the same record from the start.',
  },
  {
    icon: Camera,
    title: '2. Capture documents & images',
    description:
      'Attach quotes, certificates and invoices, and snap before/during/after photos. Each item is timestamped and locked to the job timeline.',
  },
  {
    icon: Mic,
    title: '3. Record the conversations',
    description:
      'Capture audio notes and agreements on site so what was said is never in doubt. Recordings sit alongside the documents and images.',
  },
  {
    icon: Share2,
    title: '4. Share one identical copy',
    description:
      "When the job closes, the resident, the worker and the worker's employer each hold the exact same record — nothing added, nothing removed.",
  },
]

export const guaranteesSection = {
  title: 'Why the record can be trusted',
  lede: 'Transparency only works if the record is reliable. These guarantees are built into every job.',
}

export const guarantees: Feature[] = [
  {
    icon: Fingerprint,
    title: 'Tamper-Proof',
    description:
      'Every entry is fingerprinted and timestamped, so the record can be trusted as a true account.',
  },
  {
    icon: Users,
    title: 'Shared by all parties',
    description:
      'Trades, maintenance teams and residents see the identical record — no private versions.',
  },
  {
    icon: Clock,
    title: 'Captured in real time',
    description:
      'Evidence is logged as the work happens, not reconstructed weeks later from memory.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by design',
    description:
      'Encrypted storage and role-based access keep sensitive job and property data protected.',
  },
]

export const cta: CtaContent = {
  title: 'See it on your next job',
  description:
    'Become an early tester, set up your first shared job record and experience trust through transparency before launch.',
}
