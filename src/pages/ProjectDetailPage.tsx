import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { Badge } from '@/components/common/Badge'
import { Container } from '@/components/common/Container'
import { EmptyState } from '@/components/common/EmptyState'
import { PageMeta } from '@/components/common/PageMeta'
import { PROJECTS } from '@/data/projects'

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = PROJECTS.find((p) => p.slug === slug)

  if (!project) {
    return (
      <>
        <PageMeta title="Project not found" />
        <EmptyState
          title="Project not found"
          message="The project you're looking for doesn't exist or may have been moved."
          backTo="/#projects"
          backLabel="Back to projects"
        />
      </>
    )
  }

  return (
    <>
      <PageMeta title={project.title} description={project.summary} />
      <Container as="section" className="py-20">
        <Link
          to="/#projects"
          className="text-ink-400 light:text-ink-600 hover:text-accent-400 mb-8 inline-flex items-center gap-2 text-sm"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to projects
        </Link>

        <p className="text-ink-500 font-mono text-sm">{project.timeframe}</p>
        <h1 className="text-ink-50 light:text-ink-900 mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="text-ink-400 light:text-ink-600 mt-3 text-lg">{project.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <p className="text-ink-300 light:text-ink-700 mt-10 max-w-2xl text-lg">{project.summary}</p>

        <h2 className="text-ink-50 light:text-ink-900 mt-10 text-xl font-semibold">Highlights</h2>
        <ul className="text-ink-300 light:text-ink-700 mt-5 max-w-2xl space-y-3">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span className="bg-accent-500 mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}
