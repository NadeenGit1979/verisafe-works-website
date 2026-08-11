import type { Metadata } from 'next'

import { CtaSection } from '@/components/sections/cta-section'
import { FeatureCard } from '@/components/sections/feature-card'
import { PageHero } from '@/components/sections/page-hero'
import { SectionHeading } from '@/components/sections/section-heading'
import { Container } from '@/components/ui/container'
import { siteConfig } from '@/config/site'
import { cta, flow, guarantees, guaranteesSection, hero } from '@/content/how-it-works'

export const metadata: Metadata = {
  title: 'How it works',
  description: `See how ${siteConfig.name} captures documents, images and audio into one shared, tamper-evident record for every job.`,
}

export default function HowItWorksPage() {
  return (
    <main>
      <PageHero badge={hero.badge} title={hero.title} lede={hero.lede} />

      <section>
        <Container size="lg" className="py-16 sm:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {flow.map((step) => (
              <FeatureCard
                key={step.title}
                {...step}
                orientation="horizontal"
                size="lg"
                className="p-7"
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary/40">
        <Container size="lg" className="py-16 sm:py-20">
          <SectionHeading title={guaranteesSection.title} lede={guaranteesSection.lede} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {guarantees.map((guarantee) => (
              <FeatureCard key={guarantee.title} {...guarantee} orientation="horizontal" />
            ))}
          </div>
        </Container>
      </section>

      <CtaSection {...cta} />
    </main>
  )
}
