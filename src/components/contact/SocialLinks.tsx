import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/common/icons'
import { SITE } from '@/lib/constants'

const LINKS = [
  { label: 'Email', href: `mailto:${SITE.email}`, icon: Mail },
  { label: 'LinkedIn', href: SITE.linkedin, icon: LinkedinIcon },
  { label: 'GitHub', href: SITE.github, icon: GithubIcon },
]

export function SocialLinks() {
  return (
    <ul className="space-y-3">
      {LINKS.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
            className="text-ink-200 light:text-ink-700 hover:text-accent-400 flex items-center gap-3 text-sm transition-colors"
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}
