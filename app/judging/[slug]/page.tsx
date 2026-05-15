import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { JUDGING_DATA } from '../judging-data'
import JudgingDetailView from './view'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return JUDGING_DATA.map((j) => ({ slug: j.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const judging = JUDGING_DATA.find((j) => j.slug === slug)
  if (!judging) return {}

  const title = judging.role ? `${judging.role} — ${judging.event}` : judging.event
  const description = judging.description.slice(0, 160).replace(/\n/g, ' ')
  const url = `/judging/${judging.slug}`

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
      images: judging.image ? [{ url: judging.image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: judging.image ? [judging.image] : undefined,
    },
  }
}

export default async function JudgingDetailPage({ params }: PageProps) {
  const { slug } = await params
  const judging = JUDGING_DATA.find((j) => j.slug === slug)
  if (!judging) notFound()
  return <JudgingDetailView judging={judging} />
}
