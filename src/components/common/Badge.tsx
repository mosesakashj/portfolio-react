import type { ReactNode } from 'react'
import clsx from 'clsx'

interface BadgeProps {
  children: ReactNode
  accent?: 'default' | 'signal'
  className?: string
}

export function Badge({ children, accent = 'default', className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs',
        accent === 'signal'
          ? 'border-signal-500/40 bg-signal-500/10 text-signal-400'
          : 'border-ink-700 bg-ink-900 text-ink-200 light:border-ink-200 light:bg-ink-100 light:text-ink-700',
        className,
      )}
    >
      {children}
    </span>
  )
}
