import type { Metadata } from 'next'

import { CtaSection } from '@/components/sections/cta-section'
import { ROUTES } from '@/config/navigation'
import { siteConfig } from '@/config/site'
import { cta } from '@/content/housing-associations'

import { HaAwaabsLaw } from './_components/ha-awaabs-law'
import { HaBenefits } from './_components/ha-benefits'
import { HaHero } from './_components/ha-hero'
import { HaTrust } from './_components/ha-trust'

export const metadata: Metadata = {
  title: 'For Housing Associations',
  description: `How ${siteConfig.name} helps housing associations evidence Awaab's Law and Building Safety Act compliance with one shared, tamper-evident job record.`,
}

export default function HousingAssociationsPage() {
  return (
    <main>
      <HaHero />
      <HaAwaabsLaw />
      <HaBenefits />
      <HaTrust />
      <CtaSection
        {...cta}
        primaryOverride={{ label: 'Book a pilot conversation', href: ROUTES.contact }}
        secondaryOverride={{ label: 'See pricing', href: ROUTES.pricing }}
      />
    </main>
  )
}
