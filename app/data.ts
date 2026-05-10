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

// TODO: Replace with your real projects.
export const PROJECTS: Project[] = [
  {
    name: 'Project One',
    description: 'Short description of what this project is and the impact it had.',
    link: 'https://example.com',
    video: '/cover.jpg',
    id: 'project1',
  },
]

// TODO: Replace with your real work history.
export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Company',
    title: 'Your title',
    start: 'Month YYYY',
    end: 'Present',
    link: 'https://example.com',
    id: 'work1',
  },
]

// TODO: Replace with your blog posts (links can be external, e.g. Substack/Medium).
export const BLOG_POSTS: BlogPost[] = []

// TODO: Update with your real handles.
export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/',
  },
  {
    label: 'X',
    link: 'https://x.com/',
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
