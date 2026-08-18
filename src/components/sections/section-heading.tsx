import type { LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  title: string
  lede?: string
  eyebrow?: string
  eyebrowIcon?: LucideIcon
  /**
   * 'center' opens a full-width section; 'start' is for a heading that shares
   * a row with something else, e.g. the audience benefit bands.
   */
  align?: 'center' | 'start'
  className?: string
}

/** h2 + optional eyebrow and lede that opens every content section. */
export function SectionHeading({
  title,
  lede,
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
          {EyebrowIcon && <EyebrowIcon className="h-4 w-4" aria-hidden="true" />}
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl',
          eyebrow && 'mt-3',
        )}
      >
        {title}
      </h2>
      {lede && <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{lede}</p>}
    </div>
  )
}
