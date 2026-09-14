import { Mail } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { GithubIcon, LinkedinIcon } from '@/components/common/icons'
import { SITE } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="border-ink-800 light:border-ink-200 border-t">
      <Container className="flex flex-col items-center gap-4 py-10 text-sm text-ink-400 sm:flex-row sm:justify-between light:text-ink-600">
        <p>
          &copy; {new Date().getFullYear()} {SITE.name}. Built with React &amp; Tailwind.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-accent-400 transition-colors"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent-400 transition-colors"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${SITE.email}`}
            aria-label="Email"
            className="hover:text-accent-400 transition-colors"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  )
}
