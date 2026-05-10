'use client'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    setMounted(true)
  }, [])


  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm dark:bg-zinc-950/80 border-b border-zinc-100 dark:border-zinc-800">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Sunil Tiwari
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <Link
                href="/"
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-md text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <SunIcon className="h-5 w-5" />
                  ) : (
                    <MoonIcon className="h-5 w-5" />
                  )}
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section with Text - Only show on home page */}
      {isHomePage && (
        <section className="py-16 text-center">
          <div className="mb-4 flex items-center justify-center">
            <div className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-zinc-100 to-zinc-200 ring-2 ring-zinc-200 dark:from-zinc-800 dark:to-zinc-900 dark:ring-zinc-700">
              <img
                src="/headshot.png"
                alt="Sunil Tiwari"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <span className="absolute text-3xl font-semibold text-zinc-500 dark:text-zinc-400">
                ST
              </span>
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            Sunil Tiwari
          </h1>
          <p className="mb-6 text-xl text-zinc-600 dark:text-zinc-400 font-medium">
            CEO @ Octopod AI · Fullstack + AI @ eBay · Ex-founder (Fulloop)
          </p>
          <p className="mx-auto max-w-4xl text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Engineer in the San Francisco Bay Area working on full-stack systems and AI agents.
            Currently at eBay; previously cofounded Fulloop AI and built at Amazon Music, Roku, Yahoo, Deloitte, and TCS.
          </p>
        </section>
      )}
    </>
  )
}
