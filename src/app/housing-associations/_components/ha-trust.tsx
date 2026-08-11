import { FeatureCard } from '@/components/sections/feature-card'
import { SectionHeading } from '@/components/sections/section-heading'
import { Container } from '@/components/ui/container'
import { trustSection, trustSignals } from '@/content/housing-associations'

export function HaTrust() {
  return (
    <section className="bg-secondary/40">
      <Container size="lg" className="py-16 sm:py-20">
        <SectionHeading eyebrow={trustSection.eyebrow} title={trustSection.title} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {trustSignals.map((signal) => (
            <FeatureCard key={signal.title} {...signal} orientation="horizontal" />
          ))}
        </div>
      </Container>
    </section>
  )
}
