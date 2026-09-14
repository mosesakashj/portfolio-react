import { AboutHighlights } from '@/components/about/AboutHighlights'
import { Timeline } from '@/components/about/Timeline'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { EDUCATION } from '@/lib/constants'

export function AboutSection() {
  return (
    <Container as="section" id="about" className="scroll-mt-24 py-20">
      <SectionHeading
        eyebrow="About Me"
        title="Senior full-stack engineer, building toward AI-native systems"
        description="I design and ship enterprise SaaS products end to end — from frontend architecture to database performance to cloud deployment — and I'm now applying that same rigor to AI agents and agentic workflows."
      />

      <div className="mt-14">
        <AboutHighlights />
      </div>

      <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h3 className="text-ink-50 light:text-ink-900 text-xl font-semibold">Education</h3>
          <p className="text-ink-200 light:text-ink-700 mt-3 font-medium">{EDUCATION.degree}</p>
          <p className="text-ink-400 light:text-ink-600 text-sm">{EDUCATION.institution}</p>
          <p className="text-ink-500 mt-1 font-mono text-xs">{EDUCATION.years}</p>
        </div>
        <div>
          <h3 className="text-ink-50 light:text-ink-900 text-xl font-semibold">Journey</h3>
          <Timeline />
        </div>
      </div>
    </Container>
  )
}
