import type { LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

const sizes = {
  sm: { tile: 'h-11 w-11', icon: 'h-8 w-8' },
  md: { tile: 'h-12 w-12', icon: 'h-9 w-9' },
} as const

type IconBadgeProps = {
  icon: LucideIcon
  size?: keyof typeof sizes
  className?: string
}

/** The rounded accent tile with a primary-colored icon used across all cards. */
export function IconBadge({ icon: Icon, size = 'md', className }: IconBadgeProps) {
  return (
    <span
      className={cn(
        'flex flex-none items-center justify-center rounded-xl bg-accent text-primary',
        sizes[size].tile,
        className,
      )}
    >
      <Icon className={sizes[size].icon} aria-hidden="true" />
    </span>
  )
}
