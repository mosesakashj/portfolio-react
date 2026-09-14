import { Sparkles } from 'lucide-react'
import { motion } from 'motion/react'
import { fadeUpOnView } from '@/lib/motion'
import type { LearningTrackItem as LearningTrackItemType } from '@/types/achievement'

export function LearningTrackItem({ title, description }: LearningTrackItemType) {
  return (
    <motion.div
      {...fadeUpOnView}
      className="border-signal-500/30 bg-signal-500/5 flex gap-4 rounded-xl border p-6"
    >
      <Sparkles className="text-signal-400 h-6 w-6 shrink-0" aria-hidden="true" />
      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-ink-50 light:text-ink-900 font-medium">{title}</h3>
          <span className="text-signal-400 font-mono text-xs">in progress</span>
        </div>
        <p className="text-ink-400 light:text-ink-600 mt-2 text-sm">{description}</p>
      </div>
    </motion.div>
  )
}
