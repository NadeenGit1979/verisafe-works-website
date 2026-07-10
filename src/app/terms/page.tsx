import type { Metadata } from 'next'

import { LegalDocumentBody } from '@/components/sections/legal-document'
import { PageHero } from '@/components/sections/page-hero'
import { siteConfig } from '@/config/site'
import { terms } from '@/content/legal'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: `The terms and conditions for using ${siteConfig.name}.`,
}

export default function TermsPage() {
  return (
    <main>
      <PageHero title={terms.title} lede={terms.lede} />
      <LegalDocumentBody document={terms} />
    </main>
  )
}
