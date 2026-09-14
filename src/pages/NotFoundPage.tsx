import { EmptyState } from '@/components/common/EmptyState'
import { PageMeta } from '@/components/common/PageMeta'

export default function NotFoundPage() {
  return (
    <>
      <PageMeta title="Page not found" />
      <EmptyState
        title="404 — Page not found"
        message="The page you're looking for doesn't exist. It may have been moved or the URL might be incorrect."
      />
    </>
  )
}
