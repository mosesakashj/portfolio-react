import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { LoadingFallback } from '@/components/common/LoadingFallback'
import { ScrollToTop } from '@/components/common/ScrollToTop'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Suspense fallback={<LoadingFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
