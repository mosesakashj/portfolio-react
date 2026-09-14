import { TimelineItem } from '@/components/about/TimelineItem'
import { TIMELINE } from '@/data/timeline'

export function Timeline() {
  return (
    <div className="mt-4">
      {TIMELINE.map((milestone) => (
        <TimelineItem key={milestone.year} {...milestone} />
      ))}
    </div>
  )
}
