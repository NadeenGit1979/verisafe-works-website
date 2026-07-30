import { IconBadge } from '@/components/ui/icon-badge'
import { cn } from '@/lib/utils'
import type { Feature } from '@/types/content'

const sizes = {
  default: { title: 'text-lg', description: 'text-sm', horizontalBadge: 'sm' },
  lg: { title: 'text-xl', description: 'text-base', horizontalBadge: 'md' },
} as const

type FeatureCardProps = Feature & {
  /** 'vertical' stacks icon above text; 'horizontal' puts it beside. */
  orientation?: 'vertical' | 'horizontal'
  /** 'lg' scales the copy up for cards that carry a section on their own. */
  size?: keyof typeof sizes
  className?: string
}

/** Icon-led card used for feature grids, workflow steps and trust guarantees. */
export function FeatureCard({
  icon,
  title,
  description,
  orientation = 'vertical',
  size = 'default',
  className,
}: FeatureCardProps) {
  const base = 'rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md'
  const scale = sizes[size]

  if (orientation === 'horizontal') {
    return (
      <div className={cn(base, 'flex gap-4', className)}>
        <IconBadge icon={icon} size={scale.horizontalBadge} />
        <div>
          <h3 className={cn('font-heading font-semibold text-foreground', scale.title)}>{title}</h3>
          <p className={cn('mt-2 leading-relaxed text-muted-foreground', scale.description)}>
            {description}
          </p>
        </div>
      </div>
    )
  }

  // Vertical: the icon sits beside the title on phones and above it from sm up.
  return (
    <div className={cn(base, className)}>
      <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-5">
        <IconBadge icon={icon} />
        <h3 className={cn('font-heading font-semibold text-foreground', scale.title)}>{title}</h3>
      </div>
      <p className={cn('mt-3 leading-relaxed text-muted-foreground sm:mt-2', scale.description)}>
        {description}
      </p>
    </div>
  )
}
