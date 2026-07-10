import { Lock } from 'lucide-react'

import { Container } from '@/components/ui/container'
import { testimonial } from '@/content/home'

export function HomeTestimonial() {
  return (
    <section className="bg-secondary/40">
      <Container size="md" className="py-16 text-center sm:py-20">
        <Lock className="mx-auto h-8 w-8 text-primary" aria-hidden="true" />
        <blockquote className="mt-6 text-balance font-heading text-2xl font-medium leading-snug text-foreground sm:text-3xl">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <p className="mt-6 text-sm font-medium text-muted-foreground">{testimonial.attribution}</p>
      </Container>
    </section>
  )
}
