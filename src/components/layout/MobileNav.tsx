import { useRef } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { NAV_LINKS } from '@/data/nav'
import { useFocusTrap } from '@/hooks/useFocusTrap'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { SITE } from '@/lib/constants'

interface MobileNavProps {
  open: boolean
  onClose: () => void
  activeSection: string | null
}

export function MobileNav({ open, onClose, activeSection }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  useLockBodyScroll(open)
  useFocusTrap(panelRef, open)

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-black/60" onClick={onClose} aria-hidden="true" />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="bg-ink-900 light:bg-ink-50 absolute inset-y-0 right-0 flex w-72 max-w-[85vw] flex-col gap-1 p-6"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onKeyDown={(e) => {
              if (e.key === 'Escape') onClose()
            }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                to={`/#${link.id}`}
                onClick={onClose}
                className={clsx(
                  'rounded-lg px-3 py-3 text-base font-medium transition-colors',
                  activeSection === link.id
                    ? 'text-accent-400 bg-ink-800 light:bg-ink-100'
                    : 'text-ink-200 light:text-ink-700 hover:text-accent-400',
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={SITE.resumeUrl}
              download
              className="bg-accent-600 mt-4 rounded-lg px-3 py-3 text-center text-base font-medium text-white"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
