import type { MetadataRoute } from 'next'

import { env } from '@/lib/env'

// Required for `output: 'export'` — generated once at build time.
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${env.siteUrl}/sitemap.xml`,
  }
}
