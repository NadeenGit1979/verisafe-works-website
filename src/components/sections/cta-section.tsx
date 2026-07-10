import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { ROUTES } from '@/config/navigation'
import { siteConfig } from '@/config/site'
import type { CtaContent } from '@/types/content'

/** Closing call-to-action banner rendered at the bottom of every page. */
export function CtaSection({ title, description }: CtaContent) {
  return (
    <section>
      <Container className="py-16 sm:py-20">
        <div className="rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12 sm:py-16">
          <h2 className="mx-auto max-w-2xl text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/80">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button render={<Link href={ROUTES.contact} />} size="lg" variant="secondary">
              {siteConfig.cta.primary}
            </Button>
            <Button
              render={<Link href={ROUTES.contact} />}
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              {siteConfig.cta.secondary}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
