import type { Metadata } from 'next'

import { CtaSection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { siteConfig } from '@/config/site'
import { cta, hero } from '@/content/who-its-for'

import { AudienceCards } from './_components/audience-cards'
import { VisibilityMatrix } from './_components/visibility-matrix'

export const metadata: Metadata = {
  title: "Who it's for",
  description: `${siteConfig.name} serves housing associations, independent tradespeople and the residents they work for.`,
}

export default function WhoItsForPage() {
  return (
    <main>
      <PageHero title={hero.title} lede={hero.lede} />
      <AudienceCards />
      <VisibilityMatrix />
      <CtaSection {...cta} />
    </main>
  )
}
