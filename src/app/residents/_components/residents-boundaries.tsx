import { FeatureCard } from '@/components/sections/feature-card'
import { SectionHeading } from '@/components/sections/section-heading'
import { Container } from '@/components/ui/container'
import { boundaries, boundariesSection } from '@/content/residents'

export function ResidentsBoundaries() {
  return (
    <section className="bg-secondary/40">
      <Container size="lg" className="py-16 sm:py-20">
        <SectionHeading
          eyebrow={boundariesSection.eyebrow}
          title={boundariesSection.title}
          lede={boundariesSection.lede}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {boundaries.map((boundary) => (
            <FeatureCard key={boundary.title} {...boundary} />
          ))}
        </div>
      </Container>
    </section>
  )
}
