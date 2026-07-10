import type { MetadataRoute } from 'next'

import { ROUTES } from '@/config/navigation'
import { env } from '@/lib/env'

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(ROUTES).map((route) => ({
    url: `${env.siteUrl}${route === '/' ? '' : route}`,
    changeFrequency: 'monthly',
  }))
}
