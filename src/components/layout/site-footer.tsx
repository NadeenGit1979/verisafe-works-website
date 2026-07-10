import Link from 'next/link'

import { BrandLink } from '@/components/layout/brand-link'
import { Container } from '@/components/ui/container'
import { FOOTER_NAV, LEGAL_NAV } from '@/config/navigation'
import { siteConfig } from '@/config/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div className="max-w-xs">
          <BrandLink />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            One shared, tamper-evident record of every job — built for tradespeople, maintenance
            teams and the residents they work for.
          </p>
        </div>

        {FOOTER_NAV.map((column) => (
          <div key={column.title}>
            <h3 className="font-heading text-sm font-semibold text-foreground">{column.title}</h3>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>{`© ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.`}</p>
          <div className="flex items-center gap-6">
            {LEGAL_NAV.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  )
}
