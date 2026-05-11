export type JudgingOpportunity = {
  event: string
  role: string
  date: string
  organization: string
  link: string
  id: string
  slug: string
  description: string
  location: string
  duration: string
  responsibilities: string[]
  organizationDescription?: string
  eventHighlights?: string[]
  image?: string
  eventWebsiteUrl?: string
  certificateUrl?: string
  docsUrl?: string
  images?: {
    src: string
    alt: string
    caption?: string
    type?: 'image' | 'video'
  }[]
}

export const JUDGING_DATA: JudgingOpportunity[] = [
  {
    event: 'New judging engagements coming soon',
    role: 'TBD',
    date: 'Coming soon',
    organization: 'TBD',
    link: '#',
    id: 'judge-tbd',
    slug: 'coming-soon',
    description: 'New judging and advisory engagements are in the works — check back here for upcoming opportunities.',
    location: 'TBD',
    duration: 'TBD',
    responsibilities: [],
  },
  /* Archived — uncomment to re-publish on the homepage and /judging/<slug>.
  {
    event: 'AI Pitch Night w/ TheAgentic & Tehele Ventures',
    role: 'Startup Judge',
    date: 'February 25, 2026',
    organization: 'TheAgentic & Tehele Ventures',
    link: 'https://luma.com/ohodmojd',
    id: 'judge-1',
    slug: 'ai-pitch-night-theagentic-tehele',
    description: 'An exclusive event connecting founders, investors, and startup enthusiasts in a dynamic and intimate setting. Judging 15 AI startup pitches across various sectors including biotech, healthtech, cybersecurity, and fintech.',
    location: 'Venture Dock, Palo Alto, California',
    duration: '3.5 hours',
    eventWebsiteUrl: 'https://luma.com/ohodmojd',
    responsibilities: [
      'Evaluate 15 AI startup pitches',
      'Provide constructive feedback to founders',
      'Score presentations based on innovation, market potential, and technical feasibility',
      'Participate in networking session with entrepreneurs and investors',
    ],
    organizationDescription: 'TheAgentic provides complete infrastructure for production-ready AI agents, currently powering companies in biotech, healthtech, cybersecurity, and fintech where accuracy isn\'t optional.',
    eventHighlights: [
      '15 curated AI startup pitches',
      'Networking with founders and investors',
      'Focus on production-ready AI applications',
      'Intimate setting for meaningful connections',
    ],
    image: '/ai-pitch-night-feb-25-2026/ai_pitch_night1.png',
    images: [
      {
        src: '/ai-pitch-night-feb-25-2026/ai_pitch_night1.png',
        alt: 'AI Pitch Night with TheAgentic & Tehele Ventures',
        caption: 'AI Pitch Night event featuring top AI startups',
        type: 'image',
      },
      {
        src: '/ai-pitch-night-feb-25-2026/ai_pitch_night9.jpeg',
        alt: 'AI Pitch Night event at Venture Dock, Palo Alto',
        caption: 'AI Pitch Night event at Venture Dock, Palo Alto',
      },
      {
        src: '/ai-pitch-night-feb-25-2026/ai_pitch_night2.jpeg',
        alt: 'Networking with founders and investors at AI Pitch Night',
        caption: 'Networking with AI startup founders and investors',
      },
      {
        src: '/ai-pitch-night-feb-25-2026/ai_pitch_night3.jpeg',
        alt: 'AI startup presentations at Venture Dock venue',
        caption: 'Startup pitches being evaluated by expert judges',
      },
      {
        src: '/ai-pitch-night-feb-25-2026/ai_pitch_night4.jpeg',
        alt: 'Judging AI startup presentations',
        caption: 'Evaluating innovative AI solutions and business models',
      },
      {
        src: '/ai-pitch-night-feb-25-2026/ai_pitch_night5.jpeg',
        alt: 'TheAgentic & Tehele Ventures AI Pitch Night venue setup',
        caption: 'Professional venue setup for AI startup presentations',
      },
      {
        src: '/ai-pitch-night-feb-25-2026/ai_pitch_night6.jpeg',
        alt: 'Judges panel at AI Pitch Night event',
        caption: 'Expert judges panel evaluating AI startup pitches',
      },
      {
        src: '/ai-pitch-night-feb-25-2026/ai_pitch_night7.jpeg',
        alt: 'AI Pitch Night networking and presentations',
        caption: 'Interactive session with AI founders and industry experts',
      },
      {
        src: '/ai-pitch-night-feb-25-2026/ai_pitch_night8.jpeg',
        alt: 'Concluding moments at AI Pitch Night 2026',
        caption: 'Successful conclusion of AI Pitch Night event',
      },
      {
        src: '/ai-pitch-night-feb-25-2026/ai_pitch_night10.mp4',
        alt: 'Video highlights from AI Pitch Night event',
        caption: 'Live moments from the AI Pitch Night presentations and networking',
        type: 'video',
      },
    ],
  },
  {
    event: '39th Annual San Mateo County STEM Fair',
    role: 'Judge',
    date: 'March 14, 2026',
    organization: 'San Mateo County STEM Fair',
    link: 'https://stemfair.net/judges/',
    id: 'judge-2',
    slug: 'san-mateo-stem-fair-2026',
    description: 'The 39th Annual San Mateo County STEM Fair showcasing innovative student projects in science, technology, engineering, and mathematics. Evaluating projects from middle and high school students across the county.',
    location: 'Virtual Event',
    duration: 'Full Day',
    eventWebsiteUrl: 'https://stemfair.net/judges/',
    responsibilities: [
      'Evaluate student STEM projects across multiple categories',
      'Interview students about their research and methodology',
      'Assess projects for scientific merit, creativity, and presentation quality',
      'Provide encouraging feedback to young scientists and engineers',
    ],
    organizationDescription: 'San Mateo County STEM Fair is an annual celebration of student innovation in science, technology, engineering, and mathematics, encouraging the next generation of STEM leaders.',
    eventHighlights: [
      'Student projects from across San Mateo County',
      'Multiple STEM categories and disciplines',
      'Opportunity to mentor young innovators',
      'Supporting STEM education initiatives',
    ],
    image: '/stem_fair/stem_fair1.png',
    certificateUrl: 'https://drive.google.com/file/d/1URzsX7m2BINpm6tBgv4tYQbaD0As6uDK/view',
    docsUrl: 'https://drive.google.com/drive/folders/1uNrs7oblXNGap33bO2u1kSuTbbRSz4zj',
  },
  */
]
