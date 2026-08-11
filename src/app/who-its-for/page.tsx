import type { Metadata } from 'next'
import Image from 'next/image'

import { CtaSection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { CheckList } from '@/components/ui/check-list'
import { Container } from '@/components/ui/container'
import { IconBadge } from '@/components/ui/icon-badge'
import { siteConfig } from '@/config/site'
import { cta, groups, hero } from '@/content/who-its-for'

export const metadata: Metadata = {
  title: "Who it's for",
  description: `${siteConfig.name} serves independent tradespeople, housing associations and the residents they work for.`,
}

export default function WhoItsForPage() {
  return (
    <main>
      <PageHero title={hero.title} lede={hero.lede} />

      <Container>
        {groups.map((group, index) => (
          <section
            key={group.title}
            className="grid items-center gap-10 border-b border-border py-16 last:border-0 sm:py-20 lg:grid-cols-2"
          >
            <div className={index % 2 === 1 ? 'lg:order-2' : undefined}>
              <IconBadge icon={group.icon} />
              <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-foreground">
                {group.title}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{group.intro}</p>
              <CheckList items={group.benefits} className="mt-6" />
            </div>
            <div className={index % 2 === 1 ? 'lg:order-1' : undefined}>
              <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
                <Image
                  src={group.image.src}
                  alt={group.image.alt}
                  width={640}
                  height={480}
                  priority={index === 0}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </section>
        ))}
      </Container>

      <CtaSection {...cta} />
    </main>
  )
}
