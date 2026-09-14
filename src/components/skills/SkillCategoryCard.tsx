import { motion } from 'motion/react'
import clsx from 'clsx'
import { fadeUpOnView } from '@/lib/motion'
import type { SkillCategory } from '@/types/skill'

export function SkillCategoryCard({ title, skills, accent }: SkillCategory) {
  return (
    <motion.div
      {...fadeUpOnView}
      className={clsx(
        'rounded-xl border p-6',
        accent === 'signal'
          ? 'border-signal-500/30 bg-signal-500/5'
          : 'border-ink-800 light:border-ink-200 bg-ink-900/50 light:bg-ink-50',
      )}
    >
      <h3
        className={clsx(
          'font-mono text-sm tracking-wide uppercase',
          accent === 'signal' ? 'text-signal-400' : 'text-accent-400',
        )}
      >
        {title}
      </h3>
      <ul className="mt-4 space-y-2">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="text-ink-200 light:text-ink-700 flex items-center justify-between text-sm"
          >
            <span>{skill.name}</span>
            {skill.level === 'learning' && (
              <span className="text-signal-400 font-mono text-xs">learning</span>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
