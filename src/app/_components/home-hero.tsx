import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { ROUTES } from '@/config/navigation'
import { siteConfig } from '@/config/site'
import { hero } from '@/content/home'

import { HomeLaunchCountdown } from './home-launch-countdown'

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-secondary/40">
      <Container className="grid gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <Badge icon={ShieldCheck}>{hero.badge}</Badge>
          <h1 className="mt-5 text-balance font-heading text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {hero.lede}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              render={<a href={siteConfig.cta.href} target="_blank" rel="noopener noreferrer" />}
              size="lg"
            >
              {hero.primaryCta}
            </Button>
            <Button
              render={<Link href={ROUTES.howItWorks} />}
              size="lg"
              variant="outline"
              className="max-sm:order-1"
            >
              {hero.secondaryCta}
            </Button>
            {/* The uncapped wrapper (not the max-w capped card) forces the
                wrap onto its own flex line — clamped items can't. */}
            <div className="sm:mt-3 sm:basis-full">
              <HomeLaunchCountdown className="sm:max-w-sm" />
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border shadow-xl">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            width={720}
            height={560}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </Container>
    </section>
  )
}
