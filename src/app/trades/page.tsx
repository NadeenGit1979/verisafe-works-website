import type { Metadata } from 'next'

import { AudienceBenefits } from '@/components/sections/audience-benefits'
import { CtaSection } from '@/components/sections/cta-section'
import { ROUTES } from '@/config/navigation'
import { siteConfig } from '@/config/site'
import { benefits, benefitsSection, cta, image } from '@/content/trades'

import { TradesHero } from './_components/trades-hero'
import { TradesRecord } from './_components/trades-record'

export const metadata: Metadata = {
  title: 'For Trades',
  description: `How ${siteConfig.name} gives independent tradespeople proof of every job, from agreement to sign-off.`,
}

export default function TradesPage() {
  return (
    <main>
      <TradesHero />
      <AudienceBenefits {...benefitsSection} benefits={benefits} image={image} />
      <TradesRecord />
      <CtaSection {...cta} secondaryOverride={{ label: 'See pricing', href: ROUTES.pricing }} />
    </main>
  )
}
