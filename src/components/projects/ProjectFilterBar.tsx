import clsx from 'clsx'
import type { ProjectCategory } from '@/types/project'

const CATEGORIES: Array<{ value: ProjectCategory | 'all'; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'enterprise-saas', label: 'Enterprise SaaS' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'platform', label: 'Platforms' },
]

interface ProjectFilterBarProps {
  active: ProjectCategory | 'all'
  onChange: (value: ProjectCategory | 'all') => void
}

export function ProjectFilterBar({ active, onChange }: ProjectFilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
      {CATEGORIES.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => onChange(value)}
          aria-pressed={active === value}
          className={clsx(
            'focus-visible:ring-accent-500 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none',
            active === value
              ? 'bg-accent-600 border-accent-600 text-white'
              : 'border-ink-700 light:border-ink-200 text-ink-300 light:text-ink-600 hover:border-accent-500 hover:text-accent-400',
          )}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
