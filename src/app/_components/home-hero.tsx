import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { ROUTES } from '@/config/navigation'
import { hero } from '@/content/home'

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-secondary/40">
      <Container className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <Badge icon={ShieldCheck}>{hero.badge}</Badge>
          <h1 className="mt-5 text-balance font-heading text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {hero.lede}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button render={<Link href={ROUTES.contact} />} size="lg">
              {hero.primaryCta}
            </Button>
            <Button render={<Link href={ROUTES.howItWorks} />} size="lg" variant="outline">
              {hero.secondaryCta}
            </Button>
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
