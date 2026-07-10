import { ShieldCheck } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/ui/container'

type PageHeroProps = {
  title: string
  lede: string
  badge?: string
}

/** Shared page-title band used by every subpage. */
export function PageHero({ title, lede, badge }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-secondary/40">
      <Container size="sm" className="py-16 text-center sm:py-20">
        {badge && <Badge icon={ShieldCheck}>{badge}</Badge>}
        <h1 className="mt-5 text-balance font-heading text-4xl font-extrabold tracking-tight text-foreground first:mt-0 sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {lede}
        </p>
      </Container>
    </section>
  )
}
