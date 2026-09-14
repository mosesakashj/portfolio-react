export function LoadingFallback() {
  return (
    <output className="flex min-h-[50vh] items-center justify-center" aria-label="Loading">
      <div className="border-accent-500 h-8 w-8 animate-spin rounded-full border-2 border-t-transparent" />
      <span className="sr-only">Loading…</span>
    </output>
  )
}
