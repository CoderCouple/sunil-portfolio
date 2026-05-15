import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SPEAKING_ENGAGEMENTS } from '../../data'
import SpeakingDetailView from './view'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return SPEAKING_ENGAGEMENTS.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const speaking = SPEAKING_ENGAGEMENTS.find((s) => s.slug === slug)
  if (!speaking) return {}

  const title = speaking.event ? `${speaking.title} — ${speaking.event}` : speaking.title
  const description = speaking.description.slice(0, 160).replace(/\n/g, ' ')
  const url = `/speaking/${speaking.slug}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title,
      description,
      url,
      siteName: 'Sunil Tiwari',
      images: speaking.image ? [{ url: speaking.image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: speaking.image ? [speaking.image] : undefined,
    },
  }
}

export default async function SpeakingDetailPage({ params }: PageProps) {
  const { slug } = await params
  const speaking = SPEAKING_ENGAGEMENTS.find((s) => s.slug === slug)
  if (!speaking) notFound()
  return <SpeakingDetailView speaking={speaking} />
}
