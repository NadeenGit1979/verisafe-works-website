import type { Metadata } from 'next'

import { PageHero } from '@/components/sections/page-hero'
import { Container } from '@/components/ui/container'
import { IconBadge } from '@/components/ui/icon-badge'
import { siteConfig } from '@/config/site'
import { contactMethods, hero, intro } from '@/content/contact'

import { ContactForm } from './_components/contact-form'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get early access to ${siteConfig.name}, become a tester or ask us anything.`,
}

export default function ContactPage() {
  return (
    <main>
      <PageHero title={hero.title} lede={hero.lede} />

      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">{intro.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{intro.lede}</p>
              <ul className="mt-8 space-y-5">
                {contactMethods.map((method) => (
                  <li key={method.title} className="flex items-start gap-4">
                    <IconBadge icon={method.icon} size="sm" />
                    <div>
                      <p className="font-heading font-semibold text-foreground">{method.title}</p>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
