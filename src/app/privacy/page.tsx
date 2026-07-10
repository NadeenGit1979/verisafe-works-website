import type { Metadata } from 'next'

import { LegalDocumentBody } from '@/components/sections/legal-document'
import { PageHero } from '@/components/sections/page-hero'
import { siteConfig } from '@/config/site'
import { privacy } from '@/content/legal'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${siteConfig.name} collects, uses and protects your data.`,
}

export default function PrivacyPage() {
  return (
    <main>
      <PageHero title={privacy.title} lede={privacy.lede} />
      <LegalDocumentBody document={privacy} />
    </main>
  )
}
