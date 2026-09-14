import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { MobileNav } from '@/components/layout/MobileNav'
import { useTheme } from '@/context/ThemeContext'
import { NAV_LINKS } from '@/data/nav'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useStickyHeader } from '@/hooks/useStickyHeader'
import { SITE } from '@/lib/constants'

const SECTION_IDS = NAV_LINKS.map((link) => link.id)

export function Navbar() {
  const isScrolled = useStickyHeader()
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { pathname, hash } = useLocation()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const activeSection = useActiveSection(SECTION_IDS)

  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname, hash])

  function closeMobileNav() {
    setIsMobileOpen(false)
    menuButtonRef.current?.focus()
  }

  const isHome = pathname === '/'

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 transition-all duration-200',
        isScrolled
          ? 'bg-ink-950/85 light:bg-ink-50/85 border-ink-800 light:border-ink-200 border-b backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        <Link to="/" className="text-ink-50 light:text-ink-900 font-mono text-lg font-semibold">
          Moses Akash J
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = isHome && activeSection === link.id
            return (
              <Link
                key={link.id}
                to={`/#${link.id}`}
                aria-current={isActive ? 'page' : undefined}
                className={clsx(
                  'text-sm font-medium transition-colors',
                  isActive ? 'text-accent-400' : 'text-ink-300 light:text-ink-600 hover:text-accent-400',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="text-ink-300 light:text-ink-600 hover:text-accent-400 rounded-lg p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>

          <a
            href={SITE.resumeUrl}
            download
            className="bg-accent-600 hover:bg-accent-500 hidden rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors md:inline-flex"
          >
            Download Resume
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsMobileOpen((v) => !v)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-nav"
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            className="text-ink-100 light:text-ink-900 rounded-lg p-2 md:hidden"
          >
            {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <div id="mobile-nav">
        <MobileNav open={isMobileOpen} onClose={closeMobileNav} activeSection={isHome ? activeSection : null} />
      </div>
    </header>
  )
}
