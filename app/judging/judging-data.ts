export type JudgingOpportunity = {
  event: string
  role: string
  date: string
  organization: string
  link: string
  id: string
  slug: string
  description: string
  location: string
  duration: string
  responsibilities: string[]
  organizationDescription?: string
  eventHighlights?: string[]
  image?: string
  eventWebsiteUrl?: string
  certificateUrl?: string
  docsUrl?: string
  images?: {
    src: string
    alt: string
    caption?: string
    type?: 'image' | 'video'
  }[]
}

// TODO: Replace with your real judging engagements. Each `slug` becomes /judging/<slug>.
export const JUDGING_DATA: JudgingOpportunity[] = []
