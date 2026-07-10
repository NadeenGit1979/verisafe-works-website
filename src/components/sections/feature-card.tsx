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
  const card = cn(
    'rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md',
    orientation === 'horizontal' && 'flex gap-4',
    className,
  )

  return (
    <div className={card}>
      <IconBadge icon={icon} size={orientation === 'horizontal' ? 'sm' : 'md'} />
      <div>
        <h3
          className={cn(
            'font-heading text-lg font-semibold text-foreground',
            orientation === 'vertical' && 'mt-5',
          )}
        >
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
