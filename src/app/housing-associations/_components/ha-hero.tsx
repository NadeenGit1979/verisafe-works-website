import Link from 'next/link'

import { PageHero } from '@/components/sections/page-hero'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/config/navigation'
import { hero } from '@/content/housing-associations'

export function HaHero() {
  return (
    <PageHero badge={hero.badge} title={hero.title} lede={hero.lede}>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button render={<Link href={ROUTES.contact} />} size="lg">
          {hero.primaryCta}
        </Button>
        <Button render={<Link href={ROUTES.howItWorks} />} size="lg" variant="outline">
          {hero.secondaryCta}
        </Button>
      </div>
    </PageHero>
  )
}
