import { SectionHeading } from '@/components/sections/section-heading'
import { CheckList } from '@/components/ui/check-list'
import { Container } from '@/components/ui/container'
import { benefits, benefitsSection } from '@/content/housing-associations'

export function HaBenefits() {
  return (
    <section>
      <Container size="sm" className="py-16 sm:py-20">
        <SectionHeading
          eyebrow={benefitsSection.eyebrow}
          title={benefitsSection.title}
          lede={benefitsSection.lede}
        />
        <CheckList items={benefits} className="mx-auto mt-10 max-w-xl" />
      </Container>
    </section>
  )
}
