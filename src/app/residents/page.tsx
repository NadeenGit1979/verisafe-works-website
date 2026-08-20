import type { Metadata } from 'next'

import { AudienceBenefits } from '@/components/sections/audience-benefits'
import { CtaSection } from '@/components/sections/cta-section'
import { ROUTES } from '@/config/navigation'
import { siteConfig } from '@/config/site'
import { benefits, benefitsSection, cta, image, privacyNote } from '@/content/residents'

import { ResidentsBoundaries } from './_components/residents-boundaries'
import { ResidentsHero } from './_components/residents-hero'

export const metadata: Metadata = {
  title: 'For Residents',
  description: `How ${siteConfig.name} gives residents a real-time copy of the record for work done in their home.`,
}

export default function ResidentsPage() {
  return (
    <main>
      <ResidentsHero />
      <AudienceBenefits
        {...benefitsSection}
        benefits={benefits}
        image={image}
        note={privacyNote}
      />
      <ResidentsBoundaries />
      <CtaSection
        {...cta}
        secondaryOverride={{ label: 'See how it works', href: ROUTES.howItWorks }}
      />
    </main>
  )
}
