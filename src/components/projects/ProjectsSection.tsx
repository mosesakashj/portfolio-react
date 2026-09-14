import { useMemo, useState } from 'react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ProjectFilterBar } from '@/components/projects/ProjectFilterBar'
import { ProjectGrid } from '@/components/projects/ProjectGrid'
import { PROJECTS } from '@/data/projects'
import type { ProjectCategory } from '@/types/project'

export function ProjectsSection() {
  const [activeTag, setActiveTag] = useState<ProjectCategory | 'all'>('all')

  const filteredProjects = useMemo(() => {
    if (activeTag === 'all') return PROJECTS
    return PROJECTS.filter((project) => project.category === activeTag)
  }, [activeTag])

  return (
    <Container as="section" id="projects" className="scroll-mt-24 py-20">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="A few of the platforms I've architected and built — spanning enterprise ERP, e-commerce, and no-code/low-code systems."
      />

      <div className="mt-10">
        <ProjectFilterBar active={activeTag} onChange={setActiveTag} />
      </div>

      <div className="mt-8">
        <ProjectGrid projects={filteredProjects} />
      </div>
    </Container>
  )
}
