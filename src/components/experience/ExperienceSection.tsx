import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ExperienceCard } from '@/components/experience/ExperienceCard'
import { EXPERIENCE } from '@/data/experience'

export function ExperienceSection() {
  return (
    <Container as="section" id="experience" className="scroll-mt-24 py-20">
      <SectionHeading
        eyebrow="Professional Experience"
        title="Leading enterprise SaaS development"
        description="Over 5 years architecting, building, and scaling production systems used by 150+ business customers."
      />

      <div className="mt-14 space-y-8">
        {EXPERIENCE.map((entry) => (
          <ExperienceCard key={entry.id} {...entry} />
        ))}
      </div>
    </Container>
  )
}
