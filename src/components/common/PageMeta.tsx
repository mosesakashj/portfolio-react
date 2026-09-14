import { useDocumentTitle } from '@/hooks/useDocumentTitle'

interface PageMetaProps {
  title: string
  description?: string
}

export function PageMeta({ title, description }: PageMetaProps) {
  useDocumentTitle(`${title} — Moses Akash J`, description)
  return null
}
