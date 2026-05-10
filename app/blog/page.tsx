'use client'

import { motion } from 'motion/react'
import { BLOG_POSTS } from '@/app/data'
import { CalendarIcon, ArrowRightIcon } from 'lucide-react'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const VARIANTS_ITEM = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}


export default function BlogPage() {
  return (
    <motion.div
      className="min-h-screen bg-white dark:bg-zinc-950"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto max-w-5xl px-4 py-16">
        {/* Page Header */}
        <motion.header
          variants={VARIANTS_ITEM}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-100">
            Blog
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {/* TODO: Tweak this blog tagline */}
            Notes on engineering, building, and the things I'm learning.
          </p>
        </motion.header>

        {/* Blog Posts List - single column */}
        <motion.div 
          className="space-y-6"
          variants={VARIANTS_CONTAINER}
        >
          {BLOG_POSTS.map((post) => (
            <motion.article
              key={post.uid}
              className="group relative overflow-hidden rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-8 hover:shadow-lg transition-shadow"
              variants={VARIANTS_ITEM}
            >
              {/* Date */}
              <div className="mb-3 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                <CalendarIcon className="h-4 w-4" />
                <time>{post.date}</time>
              </div>
              
              {/* Title */}
              <h2 className="mb-3 text-xl font-bold leading-7 tracking-tight">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {post.title}
                </a>
              </h2>
              
              {/* Tags */}
              <div className="mb-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Description */}
              <p className="mb-4 text-zinc-600 dark:text-zinc-400 line-clamp-3">
                {post.description}
              </p>
              
              {/* Read more link */}
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                Read on Substack
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.article>
          ))}
        </motion.div>

        {/* TODO: Re-enable a CTA / newsletter section here when you have a Substack or mailing list. */}
      </div>
    </motion.div>
  )
}