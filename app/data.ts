type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  logo?: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
  date: string
  tags: string[]
}

type SocialLink = {
  label: string
  link: string
}

type MediaPublication = {
  title: string
  publication: string
  date: string
  link: string
  id: string
}

type SpeakingEngagement = {
  title: string
  event: string
  date: string
  location: string
  link: string
  id: string
  slug: string
  description: string
  topics: string[]
  audience: string
  organizer: string
  organizerDescription: string
  conferenceDescription: string
  image?: string
  videoUrl?: string
  slidesUrl?: string
  agendaUrl?: string
  eventUrl?: string
  speakerUrl?: string
  eventWebsiteUrl?: string
  images?: {
    src: string
    alt: string
    caption?: string
    type?: 'image' | 'video'
  }[]
}

import { JUDGING_DATA, type JudgingOpportunity } from './judging/judging-data'

type Book = {
  title: string
  publisher: string
  date: string
  description: string
  link: string
  id: string
}

type NewsPublication = {
  title: string
  publication: string
  date: string
  type: 'interview' | 'feature' | 'press-release' | 'article'
  link: string
  id: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Fulloop AI',
    description:
      'Led engineering as CTO. AI-powered technical interview platform with cheating-resistant assessments, real-world coding environments, and structured rubrics for authentic skill evaluation.',
    link: 'https://www.fulloop.ai',
    video: '/cover.jpg',
    id: 'project-fulloop',
  },
  {
    name: 'Context Zero',
    description:
      'Personal AI memory layer — a hierarchical, long-term memory system for LLM agents. Backend, infra, and Chrome extension.',
    link: 'https://github.com/CoderCouple?tab=repositories&q=context0',
    video: '/cover.jpg',
    id: 'project-context0',
  },
  {
    name: 'Octoflash AI',
    description:
      'AI-powered YouTube-to-Manim animation generator. Turns explainer videos into interactive math/science animations.',
    link: 'https://github.com/CoderCouple/octoflash-ai',
    video: '/cover.jpg',
    id: 'project-octoflash',
  },
  {
    name: 'Incident-Response MCP',
    description:
      'Autonomous incident investigation agent built as an MCP server — 19 tools, LangGraph orchestration, dual-namespace Pinecone RAG across 90+ incidents.',
    link: 'https://github.com/CoderCouple/Incident-Response-MCP',
    video: '/cover.jpg',
    id: 'project-incident-mcp',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Octopod AI',
    title: 'CEO',
    start: '2025',
    end: 'Present',
    link: 'https://github.com/CoderCouple?tab=repositories&q=octopod',
    id: 'work-octopod',
  },
  {
    company: 'eBay',
    title: 'Member of Technical Staff',
    start: 'Oct 2023',
    end: 'Present',
    link: 'https://www.ebay.com',
    id: 'work-ebay',
    logo: '/logos/ebay_logo.png',
  },
  {
    company: 'Amazon Music',
    title: 'Senior Software Engineer',
    start: 'Nov 2021',
    end: 'Jul 2023',
    link: 'https://music.amazon.com',
    id: 'work-amazon',
    logo: '/logos/amazon_music_logo.png',
  },
  {
    company: 'Roku Inc.',
    title: 'Senior Software Engineer',
    start: 'May 2021',
    end: 'Oct 2021',
    link: 'https://www.roku.com',
    id: 'work-roku',
    logo: '/logos/Roku_logo.svg',
  },
  {
    company: 'Yahoo',
    title: 'Software Engineer',
    start: 'Jan 2019',
    end: 'Mar 2021',
    link: 'https://www.yahoo.com',
    id: 'work-yahoo',
    logo: '/logos/yahoo_logo.png',
  },
  {
    company: 'Deloitte India (US Offices)',
    title: 'Software Engineer',
    start: 'Oct 2013',
    end: 'Dec 2016',
    link: 'https://www2.deloitte.com',
    id: 'work-deloitte',
  },
  {
    company: 'Tata Consultancy Services',
    title: 'System Engineer',
    start: 'Sep 2011',
    end: 'Sep 2013',
    link: 'https://www.tcs.com',
    id: 'work-tcs',
  },
]

// Posts live in the context-zero-ai blog repo (separate deployment).
// TODO: replace with curated highlights once the blog is wired up at blog.suniltiwari.io.
export const BLOG_POSTS: BlogPost[] = []

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/CoderCouple',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/sdtiwari/',
  },
  {
    label: 'X',
    link: 'https://x.com/sunil28071987',
  },
]

// TODO: Replace with your publications, papers, or talks-as-articles.
export const MEDIA_PUBLICATIONS: MediaPublication[] = []

// TODO: Replace with your speaking engagements. Each `slug` becomes /speaking/<slug>.
export const SPEAKING_ENGAGEMENTS: SpeakingEngagement[] = []

export const JUDGING_OPPORTUNITIES: JudgingOpportunity[] = JUDGING_DATA

// TODO: Replace with your books or publications.
export const BOOKS: Book[] = []

// TODO: Replace with press / news mentions.
export const NEWS_PUBLICATIONS: NewsPublication[] = []

export const EMAIL = 'sunil28071987@gmail.com'
