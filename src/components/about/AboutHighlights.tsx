import {
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers,
  Sparkles,
  Users,
  Workflow,
} from 'lucide-react'

const HIGHLIGHTS = [
  { icon: Code2, title: '5+ Years Experience', description: 'Building production applications end to end.' },
  { icon: Layers, title: 'Full-Stack Development', description: 'React, Vue, .NET Core, Laravel, Node.js.' },
  { icon: Workflow, title: 'Frontend Architecture', description: 'Scalable, maintainable component systems.' },
  { icon: Database, title: 'Backend & API Design', description: 'REST APIs, integrations, secure data flows.' },
  { icon: GitBranch, title: 'Database Optimization', description: '5M+ record datasets, 60% faster queries.' },
  { icon: Cloud, title: 'Cloud Deployment', description: 'Azure, Docker, CI/CD with GitHub Actions.' },
  { icon: Users, title: 'Technical Leadership', description: 'Mentoring developers, leading Agile teams.' },
  { icon: Sparkles, title: 'AI & Agentic Systems', description: 'Actively learning AI Agents, MCP, Claude Code.' },
]

export function AboutHighlights() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
        <div
          key={title}
          className="border-ink-800 light:border-ink-200 bg-ink-900/50 light:bg-ink-50 rounded-xl border p-6"
        >
          <Icon className="text-accent-400 mb-4 h-6 w-6" aria-hidden="true" />
          <h3 className="text-ink-50 light:text-ink-900 font-medium">{title}</h3>
          <p className="text-ink-400 light:text-ink-600 mt-2 text-sm">{description}</p>
        </div>
      ))}
    </div>
  )
}
