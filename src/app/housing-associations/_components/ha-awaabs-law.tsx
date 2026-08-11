import { Clock } from 'lucide-react'

import { SectionHeading } from '@/components/sections/section-heading'
import { Container } from '@/components/ui/container'
import { awaabsLaw } from '@/content/housing-associations'

export function HaAwaabsLaw() {
  return (
    <section className="bg-secondary/40">
      <Container size="lg" className="py-16 sm:py-20">
        <SectionHeading
          eyebrow={awaabsLaw.eyebrow}
          eyebrowIcon={Clock}
          title={awaabsLaw.title}
          lede={awaabsLaw.lede}
        />

        <dl className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {awaabsLaw.timescales.map((row) => (
            <div
              key={row.label}
              className="grid gap-1 p-5 sm:grid-cols-[1fr_2fr] sm:items-baseline sm:gap-6 sm:p-6"
            >
              <dt className="font-heading font-semibold text-foreground">{row.label}</dt>
              <dd className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-sm leading-relaxed text-muted-foreground">
          {awaabsLaw.footnote}
        </p>
      </Container>
    </section>
  )
}
