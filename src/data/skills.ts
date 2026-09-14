import type { SkillCategory } from '@/types/skill'

export const SKILLS: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      { name: 'React.js', level: 'advanced' },
      { name: 'Vue.js 2 & 3', level: 'advanced' },
      { name: 'TypeScript', level: 'advanced' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 'advanced' },
      { name: 'Laravel (PHP)', level: 'advanced' },
      { name: '.NET Core', level: 'advanced' },
      { name: 'ASP.NET Core Web API', level: 'advanced' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    skills: [
      { name: 'SQL Server', level: 'advanced' },
      { name: 'PostgreSQL', level: 'advanced' },
      { name: 'MongoDB', level: 'proficient' },
      { name: 'Redis', level: 'advanced' },
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    skills: [
      { name: 'Microsoft Azure', level: 'advanced' },
      { name: 'Docker', level: 'advanced' },
      { name: 'GitHub Actions', level: 'advanced' },
      { name: 'Cloudflare', level: 'proficient' },
      { name: 'Laravel Forge', level: 'proficient' },
      { name: 'IIS', level: 'proficient' },
    ],
  },
  {
    id: 'testing-quality',
    title: 'Testing & Quality',
    skills: [
      { name: 'Playwright', level: 'advanced' },
      { name: 'Postman', level: 'advanced' },
      { name: 'Swagger (OpenAPI)', level: 'advanced' },
      { name: 'SonarQube', level: 'proficient' },
    ],
  },
  {
    id: 'tools-practices',
    title: 'Tools & Practices',
    skills: [
      { name: 'Git', level: 'advanced' },
      { name: 'Jira', level: 'advanced' },
      { name: 'Agile/Scrum', level: 'advanced' },
      { name: 'Code Review', level: 'advanced' },
      { name: 'Mentoring', level: 'advanced' },
    ],
  },
  {
    id: 'ai-agentic',
    title: 'AI & Agentic Systems',
    accent: 'signal',
    skills: [
      { name: 'AI Agents', level: 'learning' },
      { name: 'MCP (Model Context Protocol)', level: 'learning' },
      { name: 'Claude Code', level: 'learning' },
    ],
  },
]
