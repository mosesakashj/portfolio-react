import { motion } from 'motion/react'
import { Badge } from '@/components/common/Badge'
import { fadeUpOnView } from '@/lib/motion'
import type { ExperienceEntry } from '@/types/experience'

export function ExperienceCard({
  company,
  role,
  location,
  startDate,
  endDate,
  summary,
  responsibilities,
  stack,
}: ExperienceEntry) {
  return (
    <motion.article
      {...fadeUpOnView}
      className="border-ink-800 light:border-ink-200 bg-ink-900/50 light:bg-ink-50 rounded-xl border p-6 sm:p-8"
    >
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
        <div>
          <h3 className="text-ink-50 light:text-ink-900 text-xl font-semibold">{role}</h3>
          <p className="text-accent-400 mt-1 font-mono text-sm">
            {company} · {location}
          </p>
        </div>
        <p className="text-ink-400 light:text-ink-600 text-sm whitespace-nowrap">
          {startDate} – {endDate}
        </p>
      </div>

      <p className="text-ink-300 light:text-ink-700 mt-4">{summary}</p>

      <ul className="text-ink-400 light:text-ink-600 mt-5 space-y-2.5 text-sm">
        {responsibilities.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="text-accent-500 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </motion.article>
  )
}
