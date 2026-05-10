'use client'
import { notFound } from 'next/navigation'
import { JUDGING_DATA, type JudgingOpportunity } from '../../../judging-data'
import { use } from 'react'
import { MediaGallery } from '@/components/ui/media-gallery'

interface PageProps {
  params: Promise<{ slug: string; imageIndex: string }>
}

export default function ImageViewerPage({ params }: PageProps) {
  const { slug, imageIndex } = use(params)
  
  const judging = JUDGING_DATA.find((j: JudgingOpportunity) => j.slug === slug)
  
  if (!judging || !judging.images || judging.images.length === 0) {
    notFound()
  }

  return (
    <MediaGallery
      media={judging.images}
      currentIndex={parseInt(imageIndex)}
      title={judging.event}
      backLink={`/judging/${slug}`}
      backLabel={`Back to ${judging.event}`}
      urlPrefix={`/judging/${slug}`}
    />
  )
}