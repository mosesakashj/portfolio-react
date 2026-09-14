export interface ExperienceEntry {
  id: string
  company: string
  role: string
  location: string
  startDate: string
  endDate: string | 'Present'
  summary: string
  responsibilities: string[]
  stack: string[]
}

export interface TimelineMilestone {
  year: string
  title: string
  description: string
  current?: boolean
}
