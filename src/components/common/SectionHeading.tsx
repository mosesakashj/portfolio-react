interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="text-accent-400 mb-3 font-mono text-sm tracking-wide uppercase">{eyebrow}</p>
      )}
      <h2 className="text-ink-50 light:text-ink-900 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-ink-400 light:text-ink-600 mt-4 text-lg">{description}</p>
      )}
    </div>
  )
}
