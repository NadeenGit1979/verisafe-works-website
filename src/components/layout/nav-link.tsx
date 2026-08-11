'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import type { NavItem } from '@/config/navigation'
import { cn } from '@/lib/utils'

type NavLinkProps = NavItem & {
  variant?: 'desktop' | 'mobile'
  onNavigate?: () => void
}

/**
 * Nav link with active-route styling. This is the only client-side piece of
 * the desktop navigation — the header itself stays a server component.
 */
export function NavLink({ href, label, variant = 'desktop', onNavigate }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      onClick={onNavigate}
      className={cn(
        variant === 'desktop'
          ? [
              // nowrap so a long label can never silently wrap inside its own
              // pill — an overflow is a louder, easier-to-catch failure.
              'whitespace-nowrap rounded-md px-3 py-2 text-base font-semibold transition-colors hover:bg-secondary hover:text-foreground',
              isActive ? 'text-primary' : 'text-muted-foreground',
            ]
          : [
              'rounded-md px-3 py-2.5 text-base font-medium',
              isActive ? 'bg-accent text-primary' : 'text-foreground hover:bg-secondary',
            ],
      )}
    >
      {label}
    </Link>
  )
}
