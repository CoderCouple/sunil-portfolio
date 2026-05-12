import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

const SITE_URL = 'https://suniltiwari.io'
const SITE_NAME = 'Sunil Tiwari'
const SITE_DESCRIPTION =
  'Sunil Tiwari — AI thought leader, engineer, and computer scientist. CEO of Octopod AI and ex-CTO of Fulloop AI. Writing, speaking, and building at the frontier of AI agents, LLM memory systems, and applied machine learning.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Sunil Tiwari — AI Thought Leader, Engineer, Computer Scientist',
    template: '%s | Sunil Tiwari',
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: 'Sunil Tiwari', url: SITE_URL }],
  creator: 'Sunil Tiwari',
  publisher: 'Sunil Tiwari',
  category: 'technology',
  keywords: [
    'Sunil Tiwari',
    'AI thought leader',
    'AI engineer',
    'computer scientist',
    'artificial intelligence',
    'AI agents',
    'LLM',
    'large language models',
    'machine learning',
    'software engineer',
    'full-stack engineer',
    'Octopod AI',
    'Fulloop AI',
    'eBay engineering',
    'Amazon Music engineering',
    'AI memory systems',
    'context engineering',
    'AI startup founder',
    'San Francisco Bay Area',
    'San José State University',
    'sdtiwari',
    'CoderCouple',
  ],
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Sunil Tiwari — AI Thought Leader, Engineer, Computer Scientist',
    description: SITE_DESCRIPTION,
    firstName: 'Sunil',
    lastName: 'Tiwari',
    username: 'sdtiwari',
    gender: 'male',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunil Tiwari — AI Thought Leader, Engineer, Computer Scientist',
    description: SITE_DESCRIPTION,
    creator: '@sunil28071987',
    site: '@sunil28071987',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    // Drop your token from Google Search Console here when you set it up:
    // google: 'xxxxxxxxxxxxxxxx',
    // bing: 'xxxxxxxxxxxxxxxx',
  },
};

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
        suppressHydrationWarning
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
          disableTransitionOnChange
          enableColorScheme={false}
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <Header />
            <div className="relative mx-auto w-full max-w-4xl flex-1 px-4">
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
