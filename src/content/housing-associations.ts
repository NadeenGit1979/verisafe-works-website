import { FileCheck2, Fingerprint, Landmark, ShieldCheck } from 'lucide-react'

import { siteConfig } from '@/config/site'
import type { CtaContent, Feature } from '@/types/content'

export const hero = {
  badge: 'For Housing Associations',
  title: 'Evidence every repair, automatically',
  lede: `${siteConfig.name} gives repairs teams a shared, timestamped record of every job — built to help you evidence Awaab's Law and Building Safety Act compliance, not just settle disputes.`,
  primaryCta: 'Book a pilot conversation',
  secondaryCta: 'See how it works',
}

/** One statutory response timescale under Awaab's Law. */
export type Timescale = { label: string; value: string }

export const awaabsLaw = {
  eyebrow: "Awaab's Law",
  title: 'Phase 2 lands 30 November 2026',
  lede: 'From 30 November 2026, statutory response timescales extend well beyond damp and mould. A shared, timestamped job record is the simplest way to evidence you met them.',
  timescales: [
    {
      label: 'Emergency hazard',
      value: 'Investigate and make safe within 24 hours of becoming aware',
    },
    {
      label: 'Significant hazard',
      value: 'Investigate within 10 working days of becoming aware',
    },
    {
      label: 'Written summary',
      value: 'Findings and proposed action shared within 3 working days of the investigation concluding',
    },
    {
      label: 'Safety works',
      value: 'Complete within 5 working days of the investigation concluding',
    },
    {
      label: 'Preventative works',
      value:
        'Steps taken within 5 working days of the investigation concluding, so work begins as soon as reasonably practicable and within 12 weeks',
    },
  ] satisfies Timescale[],
  footnote:
    'Phase 1 (emergency hazards and damp & mould) has applied since 27 October 2025. Phase 2 widens the hazard list from 30 November 2026 — check the latest guidance for your stock.',
}

export const benefitsSection = {
  eyebrow: 'Built for repairs teams',
  title: 'One record, evidenced automatically',
  lede: 'Everything a resident, operative, contractor or auditor needs to see is captured once and shared identically.',
}

export const benefits: string[] = [
  'Timestamped evidence of every hazard report, investigation and repair, ready for a compliance audit',
  'A written summary and sign-off attached to the job the moment it happens — not reconstructed later from memory',
  'One shared timeline across your own operatives and any contractors working on your stock',
  'Give your residents a voice, with the option to raise issues directly in the live job record',
  'A complete history that transfers cleanly if a contractor or management arrangement changes',
]

export const trustSection = {
  eyebrow: 'Built to be trusted',
  title: 'Trust and compliance, by design',
}

export const trustSignals: Feature[] = [
  {
    icon: Fingerprint,
    title: 'Tamper-evident by design',
    // ⚠️ AHEAD OF THE BUILD — deliberate, with a deadline. "Fingerprinted"
    // asserts a cryptographic hash per entry that makes alteration detectable.
    // Nothing does that today: the only sha256 in the backend hashes invitation
    // tokens (job-participants.service.ts:906), and COMPLIANCE-CE-ISO27001.md
    // §8.7 records the activity log as opt-in per call site with no tamper
    // protection.
    //
    // Kept on 2026-08-10 on the basis that HA onboarding is 3–4 months out.
    // That window is the deadline, not a reprieve: the claim must be TRUE
    // before the first security questionnaire, because answering that
    // questionnaire honestly would contradict this sentence in writing.
    // Making it true = hash each entry on write, chain it to the previous
    // hash, revoke UPDATE/DELETE on the table. A few days' work.
    description:
      'Every entry is fingerprinted and timestamped the moment it is captured, so the record holds up as a true account.',
  },
  {
    icon: ShieldCheck,
    title: `ICO registered — ${siteConfig.legal.icoNumber}`,
    description: `${siteConfig.legal.companyName} is registered with the Information Commissioner's Office as a data controller.`,
  },
  {
    icon: FileCheck2,
    title: 'DPA and DPIA in place',
    description:
      'A Data Processing Agreement and Data Protection Impact Assessment are ready for your procurement and IT review.',
  },
  {
    icon: Landmark,
    title: 'Cyber Essentials underway',
    // "Underway" is accurate and substantiable: preparation has genuinely
    // started, progress is evidenced, and CLIENT-SUMMARY.md targets the
    // certificate for early September 2026. If a buyer asks, the answer is a
    // real one with documents behind it.
    //
    // ISO 27001 is deliberately absent and must stay absent. CLIENT-SUMMARY.md
    // answers "Are you ISO 27001 certified?" with "No — not currently needed",
    // and COMPLIANCE-CE-ISO27001.md §6 says not to claim alignment. Unlike CE,
    // no work is happening, so there would be nothing to show when asked —
    // and it would contradict our own security-questionnaire answer.
    //
    // Replace this whole card the day the certificate lands.
    description:
      'Cyber Essentials certification is underway as part of our path to public-sector procurement. We share our progress and our security questionnaire responses on request.',
  },
]

export const cta: CtaContent = {
  title: 'Talk to us about a pilot',
  description: `${siteConfig.name} is running early pilots with housing providers ahead of general launch. Tell us about your repairs workflow and we'll show you how a shared record fits in.`,
}
