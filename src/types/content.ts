import type { LucideIcon } from 'lucide-react'

/** An icon-led card or list entry (feature grids, trust guarantees, audiences). */
export type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

/** A numbered step in a workflow list. */
export type Step = {
  number: string
  title: string
  description: string
}

/** A headline metric shown in the stats bar. */
export type Stat = {
  value: string
  label: string
}

/** Copy for the shared closing call-to-action banner. */
export type CtaContent = {
  title: string
  description: string
}

/** The hero strip counting down to the test-phase launch. */
export type LaunchCountdown = {
  /** ISO-8601 moment the test phase opens. */
  target: string
  eyebrow: string
  /** Compact stamp shown in the strip header, e.g. '20 Jul 2026 · 09:00'. */
  dateStamp: string
  /** Static sentence read to screen readers in place of the ticking digits. */
  accessibleSummary: string
  /** External sign-up form the date stamp links to. */
  signUp: { href: string; ariaLabel: string }
  units: { days: string; hours: string; minutes: string; seconds: string }
  /** Shown in place of the digits once the target moment has passed. */
  liveLabel: string
}

/** One block of flowing legal copy. */
export type LegalBlock =
  | { kind: 'paragraph'; text: string }
  | { kind: 'subheading'; text: string }
  | { kind: 'list'; items: string[]; ordered?: boolean }
  | { kind: 'table'; headers?: string[]; rows: string[][] }
  | { kind: 'note'; text: string }

/** A numbered section of a legal document. */
export type LegalSection = {
  id: string
  title: string
  blocks: LegalBlock[]
}

/** A complete legal document (privacy policy, terms) rendered as a page. */
export type LegalDocument = {
  title: string
  lede: string
  effectiveDate: string
  lastUpdated: string
  version: string
  sections: LegalSection[]
}
