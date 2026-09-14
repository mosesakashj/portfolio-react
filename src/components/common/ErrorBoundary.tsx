import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Button } from '@/components/common/Button'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Unhandled UI error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-ink-950 px-4 text-center text-ink-100">
          <h1 className="text-2xl font-semibold">Something went wrong</h1>
          <p className="mt-3 max-w-md text-ink-400">
            An unexpected error occurred while rendering this page. Try reloading — if it keeps
            happening, please get in touch.
          </p>
          <Button href="/" className="mt-8">
            Reload site
          </Button>
        </div>
      )
    }

    return this.props.children
  }
}
