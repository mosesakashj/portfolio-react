import { AchievementCard } from '@/components/certifications/AchievementCard'
import { LearningTrackItem } from '@/components/certifications/LearningTrackItem'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ACHIEVEMENTS, LEARNING_TRACK } from '@/data/achievements'

export function CertificationsSection() {
  return (
    <Container as="section" id="certifications" className="scroll-mt-24 py-20">
      <SectionHeading
        eyebrow="Recognition & Learning Journey"
        title="Recognized delivery, and a deliberate next chapter"
        description="No badges for badges' sake — recognition earned on real products, plus an honest, in-progress track into AI Agents and agentic engineering."
      />

      <div className="mt-14">
        <h3 className="text-ink-50 light:text-ink-900 text-xl font-semibold">Recognition</h3>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {ACHIEVEMENTS.map((achievement) => (
            <AchievementCard key={achievement.id} {...achievement} />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-ink-50 light:text-ink-900 text-xl font-semibold">Currently Learning</h3>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {LEARNING_TRACK.map((item) => (
            <LearningTrackItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </Container>
  )
}
