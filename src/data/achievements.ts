import type { Achievement, LearningTrackItem } from '@/types/achievement'

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'operational-excellence-2026',
    title: 'Operational Excellence Award',
    date: 'July 2026',
    description:
      'Recognized for consistent operational impact and delivery excellence across concurrent projects.',
  },
  {
    id: 'best-performer-2025',
    title: 'Best Performer of the Year',
    date: '2025',
    description:
      'Recognized for technical excellence and measurable business impact across multiple products.',
  },
  {
    id: 'quality-excellence',
    title: 'Quality Excellence',
    date: 'Ongoing',
    description: 'Delivered multiple consecutive releases with zero critical production incidents.',
  },
]

export const LEARNING_TRACK: LearningTrackItem[] = [
  {
    id: 'ai-agents',
    title: 'AI Agents & Agentic Workflows',
    description: 'Designing autonomous and semi-autonomous systems that reason and act on tasks.',
    status: 'in-progress',
  },
  {
    id: 'mcp',
    title: 'Model Context Protocol (MCP)',
    description: 'Building and connecting tools that let LLMs interact safely with real systems.',
    status: 'in-progress',
  },
  {
    id: 'claude-code',
    title: 'Claude Code / AI-Assisted Engineering',
    description: 'Applying AI-assisted development workflows to production engineering.',
    status: 'in-progress',
  },
]
