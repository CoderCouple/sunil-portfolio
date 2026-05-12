import type { MetadataRoute } from 'next'
import { SPEAKING_ENGAGEMENTS, JUDGING_OPPORTUNITIES } from './data'

const SITE_URL = 'https://suniltiwari.io'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]

  const speakingRoutes: MetadataRoute.Sitemap = SPEAKING_ENGAGEMENTS.map((e) => ({
    url: `${SITE_URL}/speaking/${e.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const judgingRoutes: MetadataRoute.Sitemap = JUDGING_OPPORTUNITIES.map((j) => ({
    url: `${SITE_URL}/judging/${j.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...speakingRoutes, ...judgingRoutes]
}
