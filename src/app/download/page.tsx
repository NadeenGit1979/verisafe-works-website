import type { Metadata } from 'next'

import { PageHero } from '@/components/sections/page-hero'
import { Button } from '@/components/ui/button'
import { CheckList } from '@/components/ui/check-list'
import { Container } from '@/components/ui/container'
import { ROUTES } from '@/config/navigation'
import { androidApkUrl, siteConfig } from '@/config/site'
import {
  androidCard,
  androidSteps,
  help,
  hero,
  iosCard,
  iosSteps,
} from '@/content/download'
import Link from 'next/link'

import { DownloadOption } from './_components/download-options'

export const metadata: Metadata = {
  title: 'Download the app',
  description: `Install the ${siteConfig.name} app on Android or iPhone and follow every job on one shared record.`,
}

export default function DownloadPage() {
  return (
    <main>
      <PageHero title={hero.title} lede={hero.lede} badge={siteConfig.tagline} />

      <section>
        <Container size="md" className="py-16 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-2">
            <DownloadOption
              id="android"
              icon={androidCard.icon}
              platform={androidCard.platform}
              title={androidCard.title}
              description={androidCard.description}
              cta={androidCard.cta}
              meta={androidCard.meta(siteConfig.appDownloads.androidVersion)}
              href={androidApkUrl}
              fileName={androidCard.fileName}
            />
            <DownloadOption
              id="ios"
              icon={iosCard.icon}
              platform={iosCard.platform}
              title={iosCard.title}
              description={iosCard.description}
              cta={iosCard.cta}
              meta={iosCard.meta}
              href={siteConfig.appDownloads.ios}
            />
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="font-heading text-lg font-bold tracking-tight text-foreground">
                {androidSteps.title}
              </h2>
              <CheckList className="mt-4" items={androidSteps.steps} />
            </div>
            <div>
              <h2 className="font-heading text-lg font-bold tracking-tight text-foreground">
                {iosSteps.title}
              </h2>
              <CheckList className="mt-4" items={iosSteps.steps} />
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-border bg-secondary/40 px-6 py-8 text-center sm:px-12">
            <h2 className="font-heading text-xl font-bold tracking-tight text-foreground">
              {help.title}
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              {help.description}
            </p>
            <Button className="mt-5" variant="outline" render={<Link href={ROUTES.contact} />}>
              {help.cta}
            </Button>
          </div>
        </Container>
      </section>
    </main>
  )
}
