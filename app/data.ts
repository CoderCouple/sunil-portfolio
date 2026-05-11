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
    logo: '/logos/octopod_logo.png',
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
    logo: '/logos/deloitte_logo.png',
  },
  {
    company: 'Tata Consultancy Services',
    title: 'System Engineer',
    start: 'Sep 2011',
    end: 'Sep 2013',
    link: 'https://www.tcs.com',
    id: 'work-tcs',
    logo: '/logos/tcs_logo.png',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Developing Adaptive Context Compression',
    description: 'Intelligent context compression techniques for optimizing LLM memory while preserving critical reasoning information',
    link: 'https://pfofadiya.substack.com/p/developing-adaptive-context-compression',
    uid: 'blog-2',
    date: 'March 11, 2026',
    tags: ['AI Agents', 'LLM', 'Memory Optimization'],
  },
  {
    title: 'Designing Hierarchical Memory Systems for AI Agents',
    description: 'Deep dive into architecting memory systems that enable AI agents to learn, adapt, and retain knowledge across conversations and tasks',
    link: 'https://pfofadiya.substack.com/p/designing-hierarchical-memory-systems',
    uid: 'blog-1',
    date: 'February 24, 2026',
    tags: ['AI Agents', 'Architecture', 'Memory Systems'],
  },
]

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

export const MEDIA_PUBLICATIONS: MediaPublication[] = [
  {
    title: 'Developing Adaptive Context Compression Techniques for Large Language Models (LLMs) in Long-Running Interactions',
    publication: 'ArXiv',
    date: 'March 2026',
    link: 'https://arxiv.org/pdf/2603.29193',
    id: 'media-2',
  },
  {
    title: 'Multi-Layered Memory Architectures for LLM Agents: An Experimental Evaluation of Long-Term Context Retention',
    publication: 'ArXiv',
    date: 'March 2026',
    link: 'https://arxiv.org/pdf/2603.29194',
    id: 'media-4',
  },
  {
    title: 'Novel Memory Forgetting Techniques for Autonomous AI Agents: Balancing Relevance and Efficiency',
    publication: 'ArXiv',
    date: 'April 2026',
    link: 'https://arxiv.org/pdf/2604.02280',
    id: 'media-3',
  },
  {
    title: 'Early approaches in computer vision object detection and 3D reconstruction',
    publication: 'IRAJ International Journal',
    date: 'Jan 2014',
    link: 'https://www.iraj.in/journal/journal_file/journal_pdf/12-105-142063760724-28.pdf',
    id: 'media-1',
  },
]

export const SPEAKING_ENGAGEMENTS: SpeakingEngagement[] = [
  {
    title: 'New talks coming soon',
    event: '',
    date: 'TBD',
    location: '',
    link: '#',
    id: 'speak-tbd',
    slug: 'coming-soon',
    description: 'New speaking engagements are in the works — check back here for upcoming talks and conferences.',
    topics: [],
    audience: '',
    organizer: '',
    organizerDescription: '',
    conferenceDescription: '',
  },
  /* Archived — uncomment to re-publish on the homepage and /speaking/<slug>.
  {
    title: 'AI in the SDLC: Engineering Workflows in the Age of AI',
    event: 'QonfX San Francisco 2026',
    date: 'March 20, 2026',
    location: 'San Francisco, CA',
    link: 'https://luma.com/qonfx-sf',
    id: 'speak-3',
    slug: 'qonfx-sf-2026',
    description: 'Expert panel exploring how AI systems are evolving from assistive tools to active participants in software development workflows. Discussion covers the transformation from AI-assisted practices to AI-driven execution across the Software Development Lifecycle, including requirements translation, continuous validation, and workflow orchestration.',
    topics: ['AI in SDLC', 'Engineering Workflows', 'Continuous Validation', 'Workflow Orchestration', 'AI-Driven Development', 'Build & Release Pipelines'],
    audience: 'Engineering Leaders, QA Directors, CTOs, VP Engineering',
    organizer: 'The Test Tribe',
    organizerDescription: 'The world\'s largest Software Testing/QA community with members in 120+ countries and 44 global chapters, dedicated to advancing quality engineering practices.',
    conferenceDescription: 'QonfX is an exclusive, invite-only conference that brings together top Engineering, QA, and Business Leaders to discuss the present and future of software testing and quality assurance.',
    image: '/qonfx/qonfx-header.png',
    slidesUrl: 'https://drive.google.com/file/d/1tfhyQDYuxwv7zYzg8c34vUV64M9yyzxM/view',
    agendaUrl: 'https://drive.google.com/file/d/1iNX2xpNGvvrpJZc5YDVHmubMFoFGIZeX/view',
    eventUrl: 'https://luma.com/qonfx-sf',
    speakerUrl: 'https://www.thetesttribe.com/qonfx/san-francisco/#speakers',
    eventWebsiteUrl: 'https://www.thetesttribe.com/qonfx/san-francisco/',
    images: [
      { src: '/qonfx/qonfx_1.jpg', alt: 'QonfX San Francisco 2026 Panel Discussion', type: 'image' as const },
      { src: '/qonfx/qonfx_2.jpg', alt: 'QonfX San Francisco 2026', type: 'image' as const },
      { src: '/qonfx/qonfx_3.jpg', alt: 'QonfX Panel on AI in SDLC', type: 'image' as const },
      { src: '/qonfx/qonfx_4.jpg', alt: 'QonfX Conference Atmosphere', type: 'image' as const },
      { src: '/qonfx/qonfx_5.jpg', alt: 'Engaging with audience at QonfX', type: 'image' as const },
      { src: '/qonfx/qonfx_6.jpg', alt: 'QonfX San Francisco Event', type: 'image' as const },
      { src: '/qonfx/qonfx_7.jpg', alt: 'Panel discussion at QonfX 2026', type: 'image' as const },
    ],
  },
  {
    title: 'GenAI for Software Development - Beyond the Hype, Into the Code',
    event: 'TechEx North America 2026: AI Developer',
    date: 'May 19, 2026',
    location: 'Santa Clara, CA',
    link: '/speaking/techex-north-america-2026',
    id: 'speak-4',
    slug: 'techex-north-america-2026',
    description: 'Panel discussion moving beyond the AI hype to explore practical applications of Generative AI in software development workflows. Discussion covers real-world implementation challenges, developer productivity impacts, and sustainable integration strategies for AI tools in development teams.',
    topics: ['Generative AI', 'Software Development', 'Developer Productivity', 'AI Tools Integration', 'Development Workflows', 'Practical AI Applications'],
    audience: 'AI Engineers, Data Scientists, Enterprise Architects, CTOs',
    organizer: 'TechEx Events',
    organizerDescription: 'Leading technology conference organizer bringing together 8,000+ innovators, 250+ speakers and 200+ exhibitors across seven co-located events focused on emerging technologies.',
    conferenceDescription: 'TechEx North America is the premier technology event in Silicon Valley, featuring AI & Big Data, Cyber Security & Cloud, IoT, Digital Transformation, Edge Computing, Intelligent Automation and Data Center technologies.',
    image: '/techex/techex-header.png',
    agendaUrl: 'https://techexevent.com/northamerica/',
    eventWebsiteUrl: 'https://techexevent.com/northamerica/',
  },
  {
    title: 'AI & Context Management',
    event: 'AI DevSummit + DeveloperWeek Management 2026',
    date: 'May 27-28, 2026',
    location: 'South San Francisco, CA',
    link: '/speaking/ai-devsummit-developerweek-2026',
    id: 'speak-5',
    slug: 'ai-devsummit-developerweek-2026',
    description: 'Business/Thought Leadership session covering:\n• Cognitive memory for agents\n• Advanced context management\n• Architecting long-running, autonomous agents\n\nDrawing from real-world implementation experience, this talk shares practical lessons, architectural patterns, and hard-earned insights from building and scaling production-grade AI agents.',
    topics: ['Cognitive Memory for Agents', 'Advanced Context Management', 'Long-Running Autonomous Agents', 'Production AI', 'Agent Architecture', 'Real-World Implementation'],
    audience: 'AI Engineers, ML Engineers, Engineering Managers, Technical Leaders',
    organizer: 'DevNetwork',
    organizerDescription: 'DevNetwork produces DeveloperWeek, the world\'s largest developer & engineering conference & expo series with 10,000+ participants across multiple events.',
    conferenceDescription: 'AI DevSummit is the premier conference focused on artificial intelligence for developers, featuring cutting-edge AI technologies, best practices, and real-world implementations. The conference tracks include AI Frameworks, Tools, and Applied AI as well as AI Strategy, Case Studies, and Success Stories. Session format: Business/Thought Leadership (25 Min).',
    image: '/ai-devsummit/ai-devsummit-speaker.png',
    eventWebsiteUrl: 'https://aidevsummit.co/',
  },
  */
]

export const JUDGING_OPPORTUNITIES: JudgingOpportunity[] = JUDGING_DATA

export const BOOKS: Book[] = [
  {
    title: 'AI Agents in Production: A Practical Guide',
    publisher: 'O\'Reilly Media',
    date: 'Coming 2026',
    description: 'A comprehensive guide to building and deploying AI agent systems in enterprise environments.',
    link: '#',
    id: 'book-1',
  },
]

export const NEWS_PUBLICATIONS: NewsPublication[] = [
  {
    title: 'Future of Tech Hiring: From The Lens of AI Startups Founders',
    publication: 'Street Insider',
    date: 'December 2024',
    type: 'feature',
    link: 'https://www.streetinsider.com/Globe+PR+Wire/Future+of+Tech+Hiring%3A+From+The+Lens+of+AI+Startups+Founders/26236692.html',
    id: 'news-2',
  },
  {
    title: 'Fulloop Highlights Institutional Shift Toward AI Infrastructure Investment',
    publication: 'Business Insider',
    date: 'November 2024',
    type: 'press-release',
    link: 'https://markets.businessinsider.com/news/stocks/fulloop-highlights-institutional-shift-toward-ai-infrastructure-investment-1035916673',
    id: 'news-1',
  },
]

export const EMAIL = 'sunil28071987@gmail.com'
