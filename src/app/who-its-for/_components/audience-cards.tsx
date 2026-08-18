import { FeatureCard } from '@/components/sections/feature-card'
import { Container } from '@/components/ui/container'
import { audiences } from '@/content/who-its-for'

export function AudienceCards() {
  return (
    <Container>
      <div className="grid gap-6 py-16 sm:py-20 md:grid-cols-3">
        {audiences.map((audience) => (
          <FeatureCard key={audience.title} {...audience} />
        ))}
      </div>
    </Container>
  )
}
