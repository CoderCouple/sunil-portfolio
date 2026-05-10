'use client'
import { motion } from 'motion/react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeftIcon, CalendarIcon, MapPinIcon, ClockIcon, CheckCircleIcon, UsersIcon, StarIcon, ExternalLinkIcon, AwardIcon, FileTextIcon } from 'lucide-react'
import { JUDGING_DATA } from '../judging-data'
import { use } from 'react'
import { MediaCarousel } from '@/components/ui/media-carousel'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function JudgingDetailPage({ params }: PageProps) {
  const { slug } = use(params)
  const judging = JUDGING_DATA.find(j => j.slug === slug)
  
  if (!judging) {
    notFound()
  }

  return (
    <motion.div
      className="min-h-screen bg-white dark:bg-zinc-950"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto max-w-4xl px-4 py-16">
        <motion.div
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          className="mb-8"
        >
          <Link
            href="/#judging"
            className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Auto-scrolling Image Carousel - Above Title */}
        {judging.images && judging.images.length > 0 && (
          <motion.div
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
            className="mb-8"
          >
            <MediaCarousel 
              media={judging.images}
              linkPrefix={`/judging/${judging.slug}`}
              autoplay={true}
              autoplayDelay={3000}
            />
          </motion.div>
        )}

        <motion.header
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          className="mb-12"
        >          
          <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            <a 
              href={judging.eventWebsiteUrl || "/#judging"}
              target={judging.eventWebsiteUrl ? "_blank" : "_self"}
              rel={judging.eventWebsiteUrl ? "noopener noreferrer" : undefined}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline decoration-2 underline-offset-4"
            >
              {judging.event}
            </a>
          </h1>
          
          <div className="mb-6 flex flex-wrap gap-4 text-lg text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5" />
              <span>{judging.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5" />
              <span>{judging.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="h-5 w-5" />
              <span>{judging.duration}</span>
            </div>
          </div>
          
          <div className="mb-8 rounded-lg bg-gradient-to-r from-emerald-50 to-teal-50 p-6 dark:from-emerald-950/20 dark:to-teal-950/20">
            <h2 className="mb-2 text-xl font-semibold text-emerald-900 dark:text-emerald-100">
              My Role: {judging.role}
            </h2>
            <p className="text-emerald-800 dark:text-emerald-200">
              {judging.description}
            </p>
          </div>
        </motion.header>

        {judging.image && (
          <motion.section
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
            className="mb-12"
          >
            <div className="overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-900">
              <img
                src={judging.image}
                alt={`Sunil judging at ${judging.event}`}
                className="w-full h-auto object-contain"
                onError={(e) => {
                  // Fallback to placeholder if image doesn't exist
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23f3f4f6'/%3E%3Ctext x='400' y='200' font-family='Arial' font-size='20' fill='%236b7280' text-anchor='middle'%3EJudging at " + judging.event + "%3C/text%3E%3C/svg%3E"
                }}
              />
            </div>
          </motion.section>
        )}

        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          className="mb-12"
        >
          <h3 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Event Details
          </h3>
          <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            {judging.description}
          </p>
        </motion.section>

        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          className="mb-12"
        >
          <h3 className="mb-6 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Judging Responsibilities
          </h3>
          <div className="space-y-3">
            {judging.responsibilities.map((responsibility, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50"
              >
                <CheckCircleIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-700 dark:text-zinc-300">
                  {responsibility}
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          className="mb-12"
        >
          <h3 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Organization
          </h3>
          <div className="rounded-lg bg-zinc-50 p-6 dark:bg-zinc-800/50">
            <div className="flex items-center gap-3 mb-4">
              <UsersIcon className="h-6 w-6 text-zinc-600 dark:text-zinc-400" />
              <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                {judging.organization}
              </h4>
            </div>
            {judging.organizationDescription && (
              <p className="mb-4 text-zinc-700 dark:text-zinc-300">
                {judging.organizationDescription}
              </p>
            )}
            <div className="flex items-center gap-4">
              <span className="text-zinc-600 dark:text-zinc-400">Event Date:</span>
              <span className="font-medium text-zinc-900 dark:text-zinc-100">{judging.date}</span>
            </div>
          </div>
        </motion.section>

        {judging.eventHighlights && judging.eventHighlights.length > 0 && (
          <motion.section
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
            className="mb-12"
          >
            <h3 className="mb-6 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Event Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {judging.eventHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 p-4 dark:from-amber-950/20 dark:to-orange-950/20"
                >
                  <StarIcon className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span className="text-amber-800 dark:text-amber-200">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>
        )}


        {(judging.link || judging.certificateUrl || judging.docsUrl) && (
          <motion.section
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
            className="mb-12"
          >
            <h3 className="mb-6 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Event Information
            </h3>
            <div className="flex flex-wrap gap-4">
              {judging.link && (
                <a
                  href={judging.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 transition-colors"
                >
                  <ExternalLinkIcon className="h-5 w-5" />
                  View Event Details
                </a>
              )}
              {judging.certificateUrl && (
                <a
                  href={judging.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white hover:bg-emerald-700 transition-colors"
                >
                  <AwardIcon className="h-5 w-5" />
                  Certificate of Appreciation
                </a>
              )}
              {judging.docsUrl && (
                <a
                  href={judging.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 font-medium text-white hover:bg-purple-700 transition-colors"
                >
                  <FileTextIcon className="h-5 w-5" />
                  Docs
                </a>
              )}
            </div>
          </motion.section>
        )}

        <motion.div
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          className="rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 p-8 dark:from-indigo-950/20 dark:to-purple-950/20"
        >
          <h3 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Interested in Having Me Judge Your Event?
          </h3>
          <p className="mb-6 text-zinc-700 dark:text-zinc-300">
            I'm passionate about supporting innovation in AI, STEM education, and startup ecosystems. I bring deep technical expertise and mentorship experience to help evaluate and encourage the next generation of innovators.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-zinc-900 px-6 py-3 font-medium text-white hover:bg-zinc-800 transition-colors dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}