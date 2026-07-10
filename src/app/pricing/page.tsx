import type { Metadata } from 'next'
import Link from 'next/link'

import { PageHero } from '@/components/sections/page-hero'
import { Container } from '@/components/ui/container'
import { ROUTES } from '@/config/navigation'
import { footnote, hero, plans } from '@/content/pricing'

import { PlanCard } from './_components/plan-card'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple, transparent pricing for tradespeople, maintenance teams and housing associations.',
}

export default function PricingPage() {
  return (
    <main>
      <PageHero badge={hero.badge} title={hero.title} lede={hero.lede} />

      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            {footnote.text}{' '}
            <Link href={ROUTES.contact} className="font-medium text-primary hover:underline">
              {footnote.linkLabel}
            </Link>
            .
          </p>
        </Container>
      </section>
    </main>
  )
}
