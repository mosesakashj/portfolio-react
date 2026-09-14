import { MapPin } from 'lucide-react'
import { SocialLinks } from '@/components/contact/SocialLinks'
import { SITE } from '@/lib/constants'

export function ContactInfoCard() {
  return (
    <div className="border-ink-800 light:border-ink-200 bg-ink-900/50 light:bg-ink-50 rounded-xl border p-6 sm:p-8">
      <p className="text-ink-400 light:text-ink-600 flex items-center gap-2 text-sm">
        <MapPin className="h-4 w-4" aria-hidden="true" />
        {SITE.location}
      </p>
      <p className="text-ink-300 light:text-ink-700 mt-4">
        Open to conversations about full-stack engineering roles, technical leadership, and
        AI-agent / AI-engineering opportunities. The fastest way to reach me is directly below.
      </p>
      <div className="mt-6">
        <SocialLinks />
      </div>
    </div>
  )
}
