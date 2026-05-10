'use client'
import { notFound } from 'next/navigation'
import { SPEAKING_ENGAGEMENTS } from '../../../../data'
import { use } from 'react'
import { MediaGallery } from '@/components/ui/media-gallery'

interface PageProps {
  params: Promise<{ slug: string; imageIndex: string }>
}

export default function ImageViewerPage({ params }: PageProps) {
  const { slug, imageIndex } = use(params)
  
  const speaking = SPEAKING_ENGAGEMENTS.find(s => s.slug === slug)
  
  if (!speaking || !speaking.images || speaking.images.length === 0) {
    notFound()
  }

  return (
    <MediaGallery
      media={speaking.images}
      currentIndex={parseInt(imageIndex)}
      title={speaking.event}
      backLink={`/speaking/${slug}`}
      backLabel={`Back to ${speaking.event}`}
      urlPrefix={`/speaking/${slug}`}
    />
  )
}