import { cva, type VariantProps } from 'class-variance-authority'
import type { LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

const badgeVariants = cva('inline-flex items-center gap-2 rounded-full px-3 py-1', {
  variants: {
    variant: {
      accent: 'bg-accent text-sm font-medium text-accent-foreground',
      primary: 'bg-primary text-xs font-semibold uppercase tracking-wide text-primary-foreground',
    },
  },
  defaultVariants: {
    variant: 'accent',
  },
})

type BadgeProps = React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & {
    icon?: LucideIcon
  }

export function Badge({ icon: Icon, variant, className, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props}>
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
      {children}
    </span>
  )
}
