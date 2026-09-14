export type SkillLevel = 'learning' | 'proficient' | 'advanced'

export interface SkillCategory {
  id: string
  title: string
  skills: Array<{ name: string; level: SkillLevel }>
  accent?: 'signal'
}
