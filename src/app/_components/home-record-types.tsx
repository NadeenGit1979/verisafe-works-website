import { FeatureCard } from '@/components/sections/feature-card'
import { SectionHeading } from '@/components/sections/section-heading'
import { Container } from '@/components/ui/container'
import { recordSection, recordTypes } from '@/content/home'

export function HomeRecordTypes() {
  return (
    <section>
      <Container className="py-16 sm:py-20">
        <SectionHeading title={recordSection.title} lede={recordSection.lede} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {recordTypes.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  )
}
