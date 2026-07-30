import { BrandLink } from '@/components/layout/brand-link'
import { MobileNav } from '@/components/layout/mobile-nav'
import { NavLink } from '@/components/layout/nav-link'
import { ThemeToggle } from '@/components/layout/theme-toggle'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { MAIN_NAV } from '@/config/navigation'
import { siteConfig } from '@/config/site'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <BrandLink size="lg" />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {MAIN_NAV.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="flex items-center gap-1 md:gap-3">
          <ThemeToggle />

          <div className="hidden items-center gap-3 md:flex">
            <Button render={<a href={siteConfig.cta.href} target="_blank" rel="noopener noreferrer" />}>
              {siteConfig.cta.primary}
            </Button>
          </div>

          <MobileNav />
        </div>
      </Container>
    </header>
  )
}
