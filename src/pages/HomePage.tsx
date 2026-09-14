import { AboutSection } from '@/components/about/AboutSection'
import { CertificationsSection } from '@/components/certifications/CertificationsSection'
import { PageMeta } from '@/components/common/PageMeta'
import { ContactSection } from '@/components/contact/ContactSection'
import { ExperienceSection } from '@/components/experience/ExperienceSection'
import { Hero } from '@/components/hero/Hero'
import { ProjectsSection } from '@/components/projects/ProjectsSection'
import { SkillsSection } from '@/components/skills/SkillsSection'

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="Senior Full-Stack Developer"
        description="Moses Akash J — Senior Full-Stack Developer building scalable web applications and exploring AI Agents, MCP, and Claude Code."
      />
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
    </>
  )
}
