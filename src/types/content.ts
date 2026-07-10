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
