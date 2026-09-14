import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const id = hash.slice(1)
    let frame: number

    function scrollToTarget(attemptsLeft: number) {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ block: 'start' })
      } else if (attemptsLeft > 0) {
        frame = requestAnimationFrame(() => scrollToTarget(attemptsLeft - 1))
      }
    }

    scrollToTarget(10)
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}
