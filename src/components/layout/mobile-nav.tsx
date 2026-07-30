'use client'

import { usePathname } from 'next/navigation'
import { useCallback, useState } from 'react'
import { Menu, X } from 'lucide-react'

import { NavLink } from '@/components/layout/nav-link'
import { Button } from '@/components/ui/button'
import { MAIN_NAV } from '@/config/navigation'
import { siteConfig } from '@/config/site'
import { useEscapeKey } from '@/hooks/use-escape-key'
import { useScrollLock } from '@/hooks/use-scroll-lock'

/** Hamburger menu for small screens. Closes on navigation and Escape. */
export function MobileNav() {
  const pathname = usePathname()
  // The menu remembers which route it was opened on, so it derives to closed
  // as soon as the route changes — no state-syncing effect needed.
  const [openedOnPath, setOpenedOnPath] = useState<string | null>(null)
  // Guarded adjust-during-render: clear stale state once the route no longer
  // matches, so returning to the original route can't silently re-open the menu.
  if (openedOnPath !== null && openedOnPath !== pathname) {
    setOpenedOnPath(null)
  }
  const open = openedOnPath === pathname
  const close = useCallback(() => setOpenedOnPath(null), [])

  useEscapeKey(close, open)
  useScrollLock(open)

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpenedOnPath(open ? null : pathname)}
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* top-20 matches the header's h-20 so the panel hangs off its bottom edge. */}
      {open && (
        <div className="fixed inset-x-0 top-20 border-t border-border bg-background">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {MAIN_NAV.map((link) => (
              <NavLink key={link.href} {...link} variant="mobile" onNavigate={close} />
            ))}
            <Button
              render={
                <a
                  href={siteConfig.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                />
              }
              className="mt-2"
            >
              {siteConfig.cta.primary}
            </Button>
          </nav>
        </div>
      )}
    </div>
  )
}
