import Link from 'next/link'

import { PageHero } from '@/components/sections/page-hero'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/config/navigation'
import { siteConfig } from '@/config/site'
import { hero } from '@/content/trades'

export function TradesHero() {
  return (
    <PageHero badge={hero.badge} title={hero.title} lede={hero.lede}>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button
          render={<a href={siteConfig.cta.href} target="_blank" rel="noopener noreferrer" />}
          size="lg"
        >
          {hero.primaryCta}
        </Button>
        <Button render={<Link href={ROUTES.howItWorks} />} size="lg" variant="outline">
          {hero.secondaryCta}
        </Button>
      </div>
    </PageHero>
  )
}
