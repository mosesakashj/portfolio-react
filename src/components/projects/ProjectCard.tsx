import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/common/Badge'
import type { Project } from '@/types/project'

export function ProjectCard({ slug, title, tagline, timeframe, stack, featured }: Project) {
  return (
    <Link
      to={`/projects/${slug}`}
      className="group border-ink-800 light:border-ink-200 bg-ink-900/50 light:bg-ink-50 hover:border-accent-500/50 focus-visible:ring-accent-500 relative flex h-full flex-col rounded-xl border p-6 transition-colors focus-visible:ring-2 focus-visible:outline-none"
    >
      {featured && (
        <span className="text-signal-400 absolute top-6 right-6 font-mono text-xs">Featured</span>
      )}
      <p className="text-ink-500 font-mono text-xs">{timeframe}</p>
      <h3 className="text-ink-50 light:text-ink-900 group-hover:text-accent-400 mt-2 text-lg font-semibold transition-colors">
        {title}
      </h3>
      <p className="text-ink-400 light:text-ink-600 mt-2 text-sm">{tagline}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {stack.slice(0, 4).map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <span className="text-accent-400 mt-auto flex items-center gap-1 pt-6 text-sm font-medium">
        View case study
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </Link>
  )
}
