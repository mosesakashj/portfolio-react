import { Compass } from 'lucide-react'
import { Button } from '@/components/common/Button'

interface EmptyStateProps {
  title: string
  message: string
  backTo?: string
  backLabel?: string
}

export function EmptyState({ title, message, backTo = '/', backLabel = 'Back to home' }: EmptyStateProps) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-24 text-center">
      <Compass className="text-ink-600 mb-6 h-10 w-10" aria-hidden="true" />
      <h1 className="text-ink-50 light:text-ink-900 text-2xl font-semibold">{title}</h1>
      <p className="text-ink-400 light:text-ink-600 mt-3 max-w-md">{message}</p>
      <Button to={backTo} className="mt-8">
        {backLabel}
      </Button>
    </div>
  )
}
