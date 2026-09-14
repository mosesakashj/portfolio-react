import { Award } from 'lucide-react'
import { motion } from 'motion/react'
import { fadeUpOnView } from '@/lib/motion'
import type { Achievement } from '@/types/achievement'

export function AchievementCard({ title, date, description }: Achievement) {
  return (
    <motion.div
      {...fadeUpOnView}
      className="border-ink-800 light:border-ink-200 bg-ink-900/50 light:bg-ink-50 flex gap-4 rounded-xl border p-6"
    >
      <Award className="text-accent-400 h-6 w-6 shrink-0" aria-hidden="true" />
      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-ink-50 light:text-ink-900 font-medium">{title}</h3>
          <span className="text-ink-500 font-mono text-xs">{date}</span>
        </div>
        <p className="text-ink-400 light:text-ink-600 mt-2 text-sm">{description}</p>
      </div>
    </motion.div>
  )
}
