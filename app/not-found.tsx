'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { HomeIcon, ArrowLeftIcon } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-zinc-900 dark:text-zinc-100">
            404
          </h1>
          <h2 className="text-xl font-medium text-zinc-700 dark:text-zinc-300">
            Page Not Found
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            <HomeIcon className="h-4 w-4" />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 rounded-lg font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  )
}