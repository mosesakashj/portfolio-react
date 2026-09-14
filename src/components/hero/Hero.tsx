import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/common/Container'
import { HeroBackground } from '@/components/hero/HeroBackground'
import { ScrollIndicator } from '@/components/hero/ScrollIndicator'
import { TechBadgeRow } from '@/components/hero/TechBadgeRow'
import { TerminalMock } from '@/components/hero/TerminalMock'
import { fadeUpContainer, fadeUpItem } from '@/lib/motion'
import { SITE } from '@/lib/constants'

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4.5rem)] items-center overflow-hidden">
      <HeroBackground />
      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-0">
        <motion.div variants={fadeUpContainer} initial="hidden" animate="visible">
          <motion.p
            variants={fadeUpItem}
            className="text-accent-400 mb-4 font-mono text-sm tracking-wide"
          >
            Hi, I'm {SITE.name}
          </motion.p>
          <motion.h1
            variants={fadeUpItem}
            className="text-ink-50 light:text-ink-900 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {SITE.role}
          </motion.h1>
          <motion.p
            variants={fadeUpItem}
            className="text-ink-300 light:text-ink-700 mt-5 max-w-xl text-lg"
          >
            {SITE.tagline}
          </motion.p>
          <motion.p
            variants={fadeUpItem}
            className="text-ink-400 light:text-ink-600 mt-4 max-w-xl"
          >
            5+ years building production applications with React, Vue, .NET, Laravel, Node.js and
            modern cloud technologies.
          </motion.p>
          <motion.div variants={fadeUpItem} className="mt-8">
            <TechBadgeRow />
          </motion.div>
          <motion.div variants={fadeUpItem} className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/#projects"
              className="bg-accent-600 hover:bg-accent-500 rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-colors"
            >
              View My Work
            </Link>
            <Link
              to="/#contact"
              className="border-ink-700 light:border-ink-200 hover:border-accent-500 hover:text-accent-400 light:text-ink-900 rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors"
            >
              Let's Connect
            </Link>
            <a
              href={SITE.resumeUrl}
              download
              className="text-ink-100 light:text-ink-900 hover:text-accent-400 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="flex justify-center lg:justify-end"
        >
          <TerminalMock />
        </motion.div>
      </Container>
      <ScrollIndicator />
    </section>
  )
}
