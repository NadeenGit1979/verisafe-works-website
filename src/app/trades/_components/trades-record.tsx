import { FeatureCard } from '@/components/sections/feature-card'
import { SectionHeading } from '@/components/sections/section-heading'
import { Container } from '@/components/ui/container'
import { recordSection, recordTypes } from '@/content/trades'

export function TradesRecord() {
  return (
    <section className="bg-secondary/40">
      <Container size="lg" className="py-16 sm:py-20">
        <SectionHeading
          eyebrow={recordSection.eyebrow}
          title={recordSection.title}
          lede={recordSection.lede}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {recordTypes.map((type) => (
            <FeatureCard key={type.title} {...type} />
          ))}
        </div>
      </Container>
    </section>
  )
}
