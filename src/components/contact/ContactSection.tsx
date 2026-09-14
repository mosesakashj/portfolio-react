import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfoCard } from '@/components/contact/ContactInfoCard'

export function ContactSection() {
  return (
    <Container as="section" id="contact" className="scroll-mt-24 py-20">
      <SectionHeading eyebrow="Contact" title="Let's talk" />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <ContactForm />
        <ContactInfoCard />
      </div>
    </Container>
  )
}
