'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowLeftIcon, MailIcon, SendIcon, UserIcon, MessageSquareIcon, CheckCircleIcon } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        alert('Please fill in all fields')
        setIsSubmitting(false)
        return
      }

      // EmailJS configuration - you'll need to set these up in EmailJS dashboard
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_default'
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_default'
      const autoReplyTemplateId = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID || templateId
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key'

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Sunil',
        reply_to: formData.email,
      }

      const autoReplyParams = {
        to_name: formData.name,
        to_email: formData.email,
        from_name: 'Sunil Tiwari',
        reply_to: 'sunil28071987@gmail.com',
      }

      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      // Send auto-reply email to the person who contacted
      const autoReplyResponse = await emailjs.send(serviceId, autoReplyTemplateId, autoReplyParams, publicKey)
      
      if (response.status === 200 && autoReplyResponse.status === 200) {
        // Show success message
        setIsSubmitting(false)
        setShowSuccess(true)
        
        // Reset form after success
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false)
        }, 5000)
      } else {
        throw new Error('Failed to send email')
      }
      
    } catch (error) {
      console.error('Error sending email:', error)
      setIsSubmitting(false)
      
      // Fallback to mailto if EmailJS fails
      const emailBody = `Hi Sunil,

${formData.message}

Best regards,
${formData.name}
Email: ${formData.email}`

      const mailtoUrl = `mailto:sunil28071987@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`
      
      const confirmed = confirm('Email service is currently unavailable. Would you like to open your email client instead?')
      if (confirmed) {
        window.open(mailtoUrl, '_self')
        setShowSuccess(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setShowSuccess(false), 5000)
      }
    }
  }

  return (
    <motion.div
      className="min-h-screen bg-white dark:bg-zinc-950"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto max-w-4xl px-4 py-16">
        <motion.div
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Home
          </Link>
        </motion.div>

        <motion.header
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          className="mb-12 text-center"
        >
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-gradient-to-r from-blue-100 to-purple-100 p-4 dark:from-blue-900/30 dark:to-purple-900/30">
              <MailIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-100">
            Get in Touch
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            I'd love to hear from you. Drop a note about anything — collaboration, questions, or just to say hi.
          </p>
        </motion.header>

        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-8 rounded-2xl bg-gradient-to-r from-emerald-50 to-green-50 p-6 dark:from-emerald-950/20 dark:to-green-950/20"
          >
            <div className="flex items-center gap-3">
              <CheckCircleIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <div>
                <h3 className="font-semibold text-emerald-900 dark:text-emerald-100">
                  Message Sent Successfully!
                </h3>
                <p className="text-emerald-800 dark:text-emerald-200">
                  Your message has been sent. I'll get back to you soon!
                </p>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          className="rounded-2xl bg-gradient-to-br from-zinc-50 to-zinc-100/50 p-8 dark:from-zinc-800/50 dark:to-zinc-900/50"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  <UserIcon className="mr-2 inline h-4 w-4" />
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  <MailIcon className="mr-2 inline h-4 w-4" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                <MessageSquareIcon className="mr-2 inline h-4 w-4" />
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                <MessageSquareIcon className="mr-2 inline h-4 w-4" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className={`w-full rounded-lg px-6 py-4 font-medium text-white shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:shadow-blue-500/25 ${
                isSubmitting 
                  ? 'bg-gradient-to-r from-blue-400 to-purple-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="mr-2 inline h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  Sending...
                </>
              ) : (
                <>
                  <SendIcon className="mr-2 inline h-5 w-5" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          className="mt-12 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 p-8 dark:from-emerald-950/20 dark:to-teal-950/20"
        >
          <h3 className="mb-4 text-xl font-semibold text-emerald-900 dark:text-emerald-100">
            Let's Connect!
          </h3>
          <p className="mb-6 text-emerald-800 dark:text-emerald-200">
            {/* TODO: Tweak this blurb */}
            Always happy to chat about engineering, side projects, or anything you're building.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}