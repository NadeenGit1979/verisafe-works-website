import type { MetadataRoute } from 'next'

import { ROUTES } from '@/config/navigation'
import { env } from '@/lib/env'

// Required for `output: 'export'` — generated once at build time.
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(ROUTES).map((route) => ({
    url: `${env.siteUrl}${route === '/' ? '' : route}`,
    changeFrequency: 'monthly',
  }))
}
