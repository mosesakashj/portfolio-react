import { Badge } from '@/components/common/Badge'

const CORE_STACK = ['React', 'Vue', '.NET', 'Laravel', 'Node.js', 'TypeScript']
const EXPLORING = ['AI Agents', 'MCP', 'Claude Code']

export function TechBadgeRow() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {CORE_STACK.map((tech) => (
        <Badge key={tech}>{tech}</Badge>
      ))}
      {EXPLORING.map((tech) => (
        <Badge key={tech} accent="signal">
          {tech}
        </Badge>
      ))}
    </div>
  )
}
