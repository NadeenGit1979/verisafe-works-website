import { Suspense } from 'react'
import type { Metadata } from 'next'

import { PageHero } from '@/components/sections/page-hero'
import { Container } from '@/components/ui/container'
import { siteConfig } from '@/config/site'
import { hero } from '@/content/accept-invitation'

import { InvitationActions } from './_components/invitation-actions'

export const metadata: Metadata = {
  title: 'Accept your invitation',
  description: `Accept a job invitation and follow the shared record in the ${siteConfig.name} app.`,
  // Tokenised entry point for invite emails/SMS — not a page search engines
  // should surface.
  robots: { index: false },
}

export default function AcceptInvitationPage() {
  return (
    <main>
      <PageHero title={hero.title} lede={hero.lede} badge={siteConfig.tagline} />
      <section>
        <Container size="sm" className="py-16 sm:py-20">
          {/* useSearchParams in the client leaf needs a Suspense boundary to
              statically export; the fallback flashes only pre-hydration. */}
          <Suspense fallback={null}>
            <InvitationActions />
          </Suspense>
        </Container>
      </section>
    </main>
  )
}
