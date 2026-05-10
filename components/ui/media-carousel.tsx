'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

// Helper function to detect media type
const getMediaType = (src: string, type?: 'image' | 'video'): 'image' | 'video' => {
  if (type) return type
  const extension = src.split('.').pop()?.toLowerCase()
  const videoExtensions = ['mp4', 'webm', 'mov', 'avi', 'mkv']
  return videoExtensions.includes(extension || '') ? 'video' : 'image'
}

export type MediaItem = {
  src: string
  alt: string
  caption?: string
  type?: 'image' | 'video'
}

interface MediaCarouselProps {
  media: MediaItem[]
  linkPrefix: string // e.g., '/judging/slug-name' or '/speaking/slug-name'
  className?: string
  autoplay?: boolean
  autoplayDelay?: number
}

export function MediaCarousel({ 
  media, 
  linkPrefix, 
  className = "",
  autoplay = true,
  autoplayDelay = 3000 
}: MediaCarouselProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!media || media.length === 0) {
    return null
  }

  if (!mounted) {
    return (
      <div className={`w-full ${className}`}>
        <div className="w-full h-64 bg-zinc-100 dark:bg-zinc-800 rounded-2xl animate-pulse" />
      </div>
    )
  }

  const plugins = autoplay ? [
    Autoplay({
      delay: autoplayDelay,
      stopOnInteraction: false,
    })
  ] : []

  return (
    <div className={`w-full ${className}`}>
      <Carousel
        className="w-full"
        plugins={plugins}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-4">
          {media.map((mediaItem, index) => {
            const mediaType = getMediaType(mediaItem.src, mediaItem.type)
            return (
              <CarouselItem key={index} className="pl-4 basis-4/5 md:basis-1/2 lg:basis-1/3">
                <Link 
                  href={`${linkPrefix}/image/${index}`}
                  className="block relative h-64 overflow-hidden rounded-2xl cursor-pointer transition-transform hover:scale-105"
                >
                  {mediaType === 'video' ? (
                    <video
                      src={mediaItem.src}
                      className="h-full w-full object-cover"
                      muted
                      playsInline
                      preload="metadata"
                      onError={(e) => {
                        e.currentTarget.poster = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='256' viewBox='0 0 400 256'%3E%3Crect width='400' height='256' fill='%23374151'/%3E%3Ctext x='200' y='128' font-family='Arial' font-size='14' fill='%23ffffff' text-anchor='middle'%3E${encodeURIComponent(mediaItem.alt)}%3C/text%3E%3C/svg%3E`
                      }}
                    />
                  ) : (
                    <img
                      src={mediaItem.src}
                      alt={mediaItem.alt}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='256' viewBox='0 0 400 256'%3E%3Crect width='400' height='256' fill='%23f3f4f6'/%3E%3Ctext x='200' y='128' font-family='Arial' font-size='14' fill='%236b7280' text-anchor='middle'%3E${encodeURIComponent(mediaItem.alt)}%3C/text%3E%3C/svg%3E`
                      }}
                    />
                  )}
                  {mediaItem.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-sm text-white">
                        {mediaItem.caption}
                      </p>
                    </div>
                  )}
                  {/* Play button overlay for videos */}
                  {mediaType === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 rounded-full p-3">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  )}
                  {/* Click indicator overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/10 transition-colors">
                    <div className="opacity-0 hover:opacity-100 transition-opacity text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                      {mediaType === 'video' ? 'Click to play video' : 'Click to view full size'}
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-white/90 hover:bg-white text-zinc-800 border-zinc-200 shadow-lg" />
        <CarouselNext className="right-2 bg-white/90 hover:bg-white text-zinc-800 border-zinc-200 shadow-lg" />
      </Carousel>
    </div>
  )
}