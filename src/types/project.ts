export type ProjectCategory = 'enterprise-saas' | 'ecommerce' | 'platform'

export interface Project {
  slug: string
  title: string
  tagline: string
  summary: string
  timeframe: string
  category: ProjectCategory
  featured: boolean
  stack: string[]
  highlights: string[]
  links?: {
    live?: string
    repo?: string
  }
}
