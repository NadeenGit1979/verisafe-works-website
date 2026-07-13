import { IconBadge } from '@/components/ui/icon-badge'
import { cn } from '@/lib/utils'
import type { Feature } from '@/types/content'

type FeatureCardProps = Feature & {
  /** 'vertical' stacks icon above text; 'horizontal' puts it beside. */
  orientation?: 'vertical' | 'horizontal'
  className?: string
}

/** Icon-led card used for feature grids, workflow steps and trust guarantees. */
export function FeatureCard({
  icon,
  title,
  description,
  orientation = 'vertical',
  className,
}: FeatureCardProps) {
  const base = 'rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md'

  if (orientation === 'horizontal') {
    return (
      <div className={cn(base, 'flex gap-4', className)}>
        <IconBadge icon={icon} size="sm" />
        <div>
          <h3 className="font-heading text-lg font-semibold text-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
      </div>
    )
  }

  // Vertical: the icon sits beside the title on phones and above it from sm up.
  return (
    <div className={cn(base, className)}>
      <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-5">
        <IconBadge icon={icon} />
        <h3 className="font-heading text-lg font-semibold text-foreground">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-2">{description}</p>
    </div>
  )
}
