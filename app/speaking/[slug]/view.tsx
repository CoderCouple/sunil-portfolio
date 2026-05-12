'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowLeftIcon, CalendarIcon, MapPinIcon, UsersIcon, PlayIcon, FileTextIcon, ExternalLinkIcon } from 'lucide-react'
import { SPEAKING_ENGAGEMENTS } from '../../data'
import { MediaCarousel } from '@/components/ui/media-carousel'

type Speaking = (typeof SPEAKING_ENGAGEMENTS)[number]

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

export default function SpeakingDetailView({ speaking }: { speaking: Speaking }) {
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
            href="/#speaking"
            className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Auto-scrolling Image Carousel - Above Title */}
        {speaking.images && speaking.images.length > 0 && (
          <motion.div
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
            className="mb-8"
          >
            <MediaCarousel 
              media={speaking.images}
              linkPrefix={`/speaking/${speaking.slug}`}
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
              href={speaking.eventWebsiteUrl || "/#speaking"}
              target={speaking.eventWebsiteUrl ? "_blank" : "_self"}
              rel={speaking.eventWebsiteUrl ? "noopener noreferrer" : undefined}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline decoration-2 underline-offset-4"
            >
              {speaking.event}
            </a>
          </h1>
          
          <div className="mb-6 flex flex-wrap gap-4 text-lg text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5" />
              <span>{speaking.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5" />
              <span>{speaking.location}</span>
            </div>
          </div>
          
          <div className="mb-8 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-6 dark:from-blue-950/20 dark:to-indigo-950/20">
            <h2 className="mb-2 text-xl font-semibold text-blue-900 dark:text-blue-100">
              My Talk: {speaking.title}
            </h2>
            <p className="text-blue-800 dark:text-blue-200">
              {speaking.description}
            </p>
          </div>
        </motion.header>

        {speaking.image && (
          <motion.section
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
            className="mb-12"
          >
            <div className="overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-900">
              <img
                src={speaking.image}
                alt={`Sunil speaking at ${speaking.event}`}
                className="w-full h-auto object-contain"
                onError={(e) => {
                  // Fallback to placeholder if image doesn't exist
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23f3f4f6'/%3E%3Ctext x='400' y='200' font-family='Arial' font-size='20' fill='%236b7280' text-anchor='middle'%3ESpeaking at " + speaking.event + "%3C/text%3E%3C/svg%3E"
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
            About This Talk
          </h3>
          <div className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 whitespace-pre-line">
            {speaking.description}
          </div>
        </motion.section>

        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          className="mb-12"
        >
          <h3 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Key Topics Covered
          </h3>
          <div className="flex flex-wrap gap-2">
            {speaking.topics.map((topic, index) => (
              <span
                key={index}
                className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {topic}
              </span>
            ))}
          </div>
        </motion.section>

        {(speaking.videoUrl || speaking.slidesUrl || speaking.agendaUrl || speaking.eventUrl || speaking.speakerUrl) && (
          <motion.section
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
            className="mb-12"
          >
            <h3 className="mb-6 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Resources
            </h3>
            <div className="flex flex-wrap gap-4">
              {speaking.videoUrl && (
                <a
                  href={speaking.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-medium text-white hover:bg-red-700 transition-colors"
                >
                  <PlayIcon className="h-5 w-5" />
                  Watch Recording
                </a>
              )}
              {speaking.slidesUrl && (
                <a
                  href={speaking.slidesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 transition-colors"
                >
                  <FileTextIcon className="h-5 w-5" />
                  View Slides
                </a>
              )}
              {speaking.agendaUrl && (
                <a
                  href={speaking.agendaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white hover:bg-emerald-700 transition-colors"
                >
                  <CalendarIcon className="h-5 w-5" />
                  View Agenda
                </a>
              )}
              {speaking.eventUrl && (
                <a
                  href={speaking.eventUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 font-medium text-white hover:bg-purple-700 transition-colors"
                >
                  <ExternalLinkIcon className="h-5 w-5" />
                  View Event
                </a>
              )}
              {speaking.speakerUrl && (
                <a
                  href={speaking.speakerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-6 py-3 font-medium text-white hover:bg-amber-700 transition-colors"
                >
                  <UsersIcon className="h-5 w-5" />
                  View Speaker
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
            Interested in Having Me Speak?
          </h3>
          <p className="mb-6 text-zinc-700 dark:text-zinc-300">
            I'm always excited to share insights about AI agent systems, enterprise platform architecture, and the future of technical hiring. Let's connect!
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