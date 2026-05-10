'use client'
import { motion } from 'motion/react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react'
import { useState, useEffect, useCallback } from 'react'
import { MediaItem } from './media-carousel'

// Helper function to detect media type
const getMediaType = (src: string, type?: 'image' | 'video'): 'image' | 'video' => {
  if (type) return type
  const extension = src.split('.').pop()?.toLowerCase()
  const videoExtensions = ['mp4', 'webm', 'mov', 'avi', 'mkv']
  return videoExtensions.includes(extension || '') ? 'video' : 'image'
}

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
}

const VARIANTS_IMAGE = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
}

interface MediaGalleryProps {
  media: MediaItem[]
  currentIndex: number
  title: string
  backLink: string
  backLabel: string
  urlPrefix: string // e.g., '/judging/slug-name' or '/speaking/slug-name'
}

export function MediaGallery({ 
  media, 
  currentIndex: initialIndex, 
  title, 
  backLink, 
  backLabel,
  urlPrefix
}: MediaGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [mounted, setMounted] = useState(false)
  
  const imageIdx = Math.max(0, Math.min(currentIndex, (media?.length || 1) - 1))
  const currentMedia = media?.[imageIdx]
  const mediaType = currentMedia ? getMediaType(currentMedia.src, currentMedia.type) : 'image'

  const goToPrevious = useCallback(() => {
    if (!media || media.length === 0) return
    const newIndex = imageIdx === 0 ? media.length - 1 : imageIdx - 1
    setCurrentIndex(newIndex)
    window.history.replaceState(null, '', `${urlPrefix}/image/${newIndex}`)
  }, [imageIdx, media, urlPrefix])

  const goToNext = useCallback(() => {
    if (!media || media.length === 0) return
    const newIndex = imageIdx === media.length - 1 ? 0 : imageIdx + 1
    setCurrentIndex(newIndex)
    window.history.replaceState(null, '', `${urlPrefix}/image/${newIndex}`)
  }, [imageIdx, media, urlPrefix])

  useEffect(() => {
    setMounted(true)
  }, [])
  
  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        goToPrevious()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        goToNext()
      } else if (event.key === 'Escape') {
        window.history.back()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [goToPrevious, goToNext])
  
  if (!media || media.length === 0) {
    notFound()
  }
  
  if (!mounted) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    )
  }

  if (!currentMedia) {
    notFound()
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* Header with title and navigation */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-6">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-4">
            <Link
              href={backLink}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              {backLabel}
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-xl font-semibold">
              {currentMedia.caption || currentMedia.alt}
            </h1>
            <p className="text-sm text-white/60">
              {imageIdx + 1} of {media.length} • {mediaType === 'video' ? 'Video' : 'Photo'}
            </p>
          </div>
          
          <Link
            href={backLink}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
          >
            <XIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>

      {/* Main media display */}
      <div className="flex items-center justify-center h-full px-4 py-24">
        <motion.div
          key={imageIdx}
          variants={VARIANTS_IMAGE}
          initial="hidden"
          animate="visible"
          className="relative flex items-center justify-center w-full max-w-7xl"
          style={{ height: 'calc(100vh - 12rem)' }}
        >
          {mediaType === 'video' ? (
            <video
              src={currentMedia.src}
              className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl"
              controls
              autoPlay
              muted
              playsInline
              onError={(e) => {
                e.currentTarget.poster = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23374151'/%3E%3Ctext x='400' y='300' font-family='Arial' font-size='18' fill='%23ffffff' text-anchor='middle'%3E${encodeURIComponent(currentMedia.alt)}%3C/text%3E%3C/svg%3E`
              }}
            />
          ) : (
            <img
              src={currentMedia.src}
              alt={currentMedia.alt}
              className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl"
              onError={(e) => {
                e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23374151'/%3E%3Ctext x='400' y='300' font-family='Arial' font-size='18' fill='%23ffffff' text-anchor='middle'%3E${encodeURIComponent(currentMedia.alt)}%3C/text%3E%3C/svg%3E`
              }}
            />
          )}
        </motion.div>
      </div>

      {/* Navigation arrows */}
      {media.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-12 h-12 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-12 h-12 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Next image"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Bottom info panel */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <div className="text-center text-white">
          {currentMedia.caption && (
            <p className="text-lg font-medium mb-2">
              {currentMedia.caption}
            </p>
          )}
          <div className="flex items-center justify-center gap-6 text-sm text-white/60">
            <span>Use arrow keys to navigate</span>
            <span>•</span>
            <span>Press ESC to close</span>
            {mediaType === 'video' && (
              <>
                <span>•</span>
                <span>Video controls available</span>
              </>
            )}
            <span>•</span>
            <span>{title}</span>
          </div>
        </div>
      </div>

      {/* Thumbnail navigation */}
      {media.length > 1 && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
          <div className="flex gap-2 bg-black/50 rounded-full p-2">
            {media.map((mediaItem, index) => {
              const thumbMediaType = getMediaType(mediaItem.src, mediaItem.type)
              return (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    window.history.replaceState(null, '', `${urlPrefix}/image/${index}`)
                  }}
                  className={`relative w-12 h-12 rounded-lg overflow-hidden transition-all ${
                    index === imageIdx
                      ? 'ring-2 ring-white scale-110'
                      : 'opacity-60 hover:opacity-80'
                  }`}
                >
                  {thumbMediaType === 'video' ? (
                    <div className="relative w-full h-full bg-zinc-700 flex items-center justify-center">
                      <video
                        src={mediaItem.src}
                        className="w-full h-full object-cover"
                        muted
                        preload="metadata"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={mediaItem.src}
                      alt={mediaItem.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' fill='%23374151'/%3E%3Ctext x='24' y='26' font-family='Arial' font-size='8' fill='%23ffffff' text-anchor='middle'%3E${index + 1}%3C/text%3E%3C/svg%3E`
                      }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </motion.div>
  )
}