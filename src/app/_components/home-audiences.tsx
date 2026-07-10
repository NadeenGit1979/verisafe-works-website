import Link from 'next/link'
import { Users } from 'lucide-react'

import { FeatureCard } from '@/components/sections/feature-card'
import { SectionHeading } from '@/components/sections/section-heading'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { ROUTES } from '@/config/navigation'
import { audienceSection, audiences } from '@/content/home'

export function HomeAudiences() {
  return (
    <section>
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow={audienceSection.eyebrow}
          eyebrowIcon={Users}
          title={audienceSection.title}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {audiences.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button render={<Link href={ROUTES.whoItsFor} />} variant="outline">
            {audienceSection.cta}
          </Button>
        </div>
      </Container>
    </section>
  )
}
