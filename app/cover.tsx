'use client'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export function Cover() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="relative w-full">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
            <div className="mb-4 flex items-center justify-center">
              <div className="relative h-32 w-32 overflow-hidden rounded-full ring-2 ring-white/20">
                <img
                  src="/headshot.png"
                  alt="Sunil Tiwari"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <h1 className="mb-2 text-3xl font-bold text-white sm:text-4xl">
              Sunil Tiwari
            </h1>
            <p className="mb-6 text-xl text-gray-300 font-medium">
              CEO @ Octopod AI · Fullstack + AI @ eBay · Ex-founder (Fulloop)
            </p>
            <p className="mx-auto max-w-3xl text-xl text-gray-300 leading-relaxed">
              Engineer in the SF Bay Area working on full-stack and AI systems.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <motion.section
      className="relative w-full"
      variants={VARIANTS_SECTION}
      transition={TRANSITION_SECTION}
      initial="hidden"
      animate="visible"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <div className="mb-4 flex items-center justify-center">
            <div className="relative h-32 w-32 overflow-hidden rounded-full ring-2 ring-white/20">
              <img
                src="/headshot.png"
                alt="Sunil Tiwari"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <h1 className="mb-2 text-3xl font-bold text-white sm:text-4xl">
            Sunil Tiwari
          </h1>
          <p className="mb-6 text-xl text-gray-300 font-medium">
            CEO @ Octopod AI · Fullstack + AI @ eBay · Ex-founder (Fulloop)
          </p>
          <p className="mx-auto max-w-3xl text-xl text-gray-300 leading-relaxed">
            Engineer in the SF Bay Area working on full-stack and AI systems.
          </p>
        </div>
        {/* Floating AI-themed decorations */}
        <div className="absolute top-8 right-8 h-12 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-60 animate-pulse"></div>
        <div className="absolute bottom-8 left-8 h-8 w-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 opacity-60 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 h-6 w-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-60 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 h-4 w-4 rounded-full bg-gradient-to-r from-green-400 to-teal-500 opacity-60 animate-pulse"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>
      </div>
    </motion.section>
  )
}