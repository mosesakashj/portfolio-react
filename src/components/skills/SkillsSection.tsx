import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SkillCategoryCard } from '@/components/skills/SkillCategoryCard'
import { SKILLS } from '@/data/skills'

export function SkillsSection() {
  return (
    <Container as="section" id="skills" className="scroll-mt-24 py-20">
      <SectionHeading
        eyebrow="Technical Skills"
        title="A full-stack toolkit, expanding into AI engineering"
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((category) => (
          <SkillCategoryCard key={category.id} {...category} />
        ))}
      </div>
    </Container>
  )
}
