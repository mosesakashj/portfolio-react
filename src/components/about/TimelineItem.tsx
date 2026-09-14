import { motion } from 'motion/react'
import type { TimelineMilestone } from '@/types/experience'
import { fadeUpOnView } from '@/lib/motion'

export function TimelineItem({ year, title, description, current }: TimelineMilestone) {
  return (
    <motion.div {...fadeUpOnView} className="relative pb-10 pl-10 last:pb-0">
      <span
        className={`absolute top-1 left-0 h-3 w-3 rounded-full ${
          current ? 'bg-signal-500' : 'bg-accent-500'
        }`}
      />
      <span className="border-ink-700 light:border-ink-200 absolute top-4 bottom-0 left-1.5 border-l" />
      <p className="text-accent-400 font-mono text-sm">{year}</p>
      <h3 className="text-ink-50 light:text-ink-900 mt-1 font-medium">{title}</h3>
      <p className="text-ink-400 light:text-ink-600 mt-1 max-w-xl text-sm">{description}</p>
    </motion.div>
  )
}
