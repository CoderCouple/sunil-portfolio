'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
  MEDIA_PUBLICATIONS,
  SPEAKING_ENGAGEMENTS,
  JUDGING_OPPORTUNITIES,
  BOOKS,
  NEWS_PUBLICATIONS,
} from './data'

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

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  // Check if src is an image or video based on file extension
  const isImage = src.endsWith('.png') || src.endsWith('.jpg') || src.endsWith('.jpeg') || src.endsWith('.webp')
  
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        {isImage ? (
          <img
            src={src}
            alt="Project screenshot"
            className="aspect-video w-full cursor-zoom-in rounded-xl object-cover"
          />
        ) : (
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video w-full cursor-zoom-in rounded-xl"
          />
        )}
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-900 dark:ring-zinc-700">
          {isImage ? (
            <img
              src={src}
              alt="Project screenshot"
              className="aspect-video h-[50vh] w-full rounded-xl object-contain md:h-[70vh]"
            />
          ) : (
            <video
              src={src}
              autoPlay
              loop
              muted
              className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
            />
          )}
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-16"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-3">
            Bio
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Visionary founder and AI thought leader architecting the future of enterprise LLM platforms. 
            Currently spearheading LinkedIn's revolutionary Agent Platform—the industry's most advanced 
            infrastructure for long-running, tool-using AI agents with memory and orchestration capabilities.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            As Founder & CEO of Fulloop AI, built groundbreaking LLM-powered technical interview agents 
            that are transforming how companies evaluate talent. Former engineering leader across Meta, 
            Snap, and Uber, with a proven track record of scaling teams and delivering AI innovations 
            that impact millions of users globally.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium text-zinc-900 dark:text-zinc-100">Key Achievements</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-12">
          <div className="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-4 dark:from-blue-950/20 dark:to-indigo-950/20">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">LinkedIn Agent Platform</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Leading enterprise AI infrastructure powering millions of agent interactions</p>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50 p-4 dark:from-emerald-950/20 dark:to-teal-950/20">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Fulloop AI Founder</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Secured eBay as design partner, raised funding, built 7-person team</p>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 p-4 dark:from-purple-950/20 dark:to-pink-950/20">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Big Tech Leadership</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Staff Engineer at Snap, EM at Uber, Engineer at Meta</p>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 p-4 dark:from-amber-950/20 dark:to-orange-950/20">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Education Excellence</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Carnegie Mellon MS Data Science, Mumbai University CS</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="work"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium text-zinc-900 dark:text-zinc-100">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row items-center gap-4">
                  {job.logo && (
                    <div className="flex-shrink-0">
                      <img
                        src={job.logo}
                        alt={`${job.company} logo`}
                        className="h-12 w-12 object-contain"
                        onError={(e) => {
                          e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' fill='%23f3f4f6' rx='8'/%3E%3Ctext x='24' y='28' font-family='Arial' font-size='14' fill='%236b7280' text-anchor='middle'%3E${job.company.charAt(0)}%3C/text%3E%3C/svg%3E`
                        }}
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-normal dark:text-zinc-100">
                          {job.title}
                        </h4>
                        <p className="text-zinc-500 dark:text-zinc-400">
                          {job.company}
                        </p>
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm whitespace-nowrap ml-4">
                        {job.start} - {job.end}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium text-zinc-900 dark:text-zinc-100">Blog</h3>
        <div className="flex flex-col space-y-2">
          {BLOG_POSTS.slice(0, 5).map((post) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              key={post.uid}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-500">
                    {post.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
          {BLOG_POSTS.length > 5 && (
            <a
              href="/blog"
              className="mt-4 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              Show more posts →
            </a>
          )}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium text-zinc-900 dark:text-zinc-100">White Papers & Publications</h3>
        <div className="flex flex-col space-y-2">
          {MEDIA_PUBLICATIONS.map((publication) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              key={publication.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-col">
                  <h4 className="font-normal dark:text-zinc-100">
                    {publication.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {publication.publication} • {publication.date}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium text-zinc-900 dark:text-zinc-100">Speaking & Conferences</h3>
        <div className="flex flex-col space-y-2">
          {SPEAKING_ENGAGEMENTS.map((engagement) => (
            <a
              href={`/speaking/${engagement.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              key={engagement.id}
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-col">
                  <h4 className="font-normal dark:text-zinc-100">
                    {engagement.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {engagement.event} • {engagement.location} • {engagement.date}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium text-zinc-900 dark:text-zinc-100">Judging & Advisory</h3>
        <div className="flex flex-col space-y-2">
          {JUDGING_OPPORTUNITIES.map((opportunity) => (
            <a
              href={`/judging/${opportunity.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              key={opportunity.id}
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-col">
                  <h4 className="font-normal dark:text-zinc-100">
                    {opportunity.event}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {opportunity.role} at {opportunity.organization} • {opportunity.date}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium text-zinc-900 dark:text-zinc-100">Books</h3>
        <div className="flex flex-col space-y-2">
          {BOOKS.map((book) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              key={book.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {book.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {book.publisher} • {book.date}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-500">
                    {book.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium text-zinc-900 dark:text-zinc-100">News & Press</h3>
        <div className="flex flex-col space-y-2">
          {NEWS_PUBLICATIONS.map((news) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              key={news.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-col">
                  <h4 className="font-normal dark:text-zinc-100">
                    {news.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {news.publication} • {news.type} • {news.date}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium text-zinc-900 dark:text-zinc-100">Notable Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.name} className="space-y-2">
              <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-800/60 dark:ring-zinc-700">
                <ProjectVideo src={project.video} />
              </div>
              <div className="px-1">
                <a
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                  href={project.link}
                  target="_blank"
                >
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                </a>
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium text-zinc-900 dark:text-zinc-100">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
