import Image from 'next/image'
import { ShieldCheck } from 'lucide-react'

import { SectionHeading } from '@/components/sections/section-heading'
import { CheckList } from '@/components/ui/check-list'
import { Container } from '@/components/ui/container'

type AudienceBenefitsProps = {
  eyebrow: string
  title: string
  lede: string
  benefits: readonly string[]
  image: { src: string; alt: string }
  /** Optional reassurance line under the list — currently the residents' one. */
  note?: string
}

/**
 * The benefits band shared by /trades and /residents: heading, list and note in
 * one column beside the photo. The heading sits *inside* the column rather than
 * centered above it so the two columns end up a similar height — a four-item
 * list on its own leaves a few hundred pixels of dead space next to the image.
 */
export function AudienceBenefits({
  eyebrow,
  title,
  lede,
  benefits,
  image,
  note,
}: AudienceBenefitsProps) {
  return (
    <Container>
      <section className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2">
        <div>
          <SectionHeading align="start" eyebrow={eyebrow} title={title} lede={lede} />
          <CheckList items={benefits} className="mt-8" />
          {note && (
            <p className="mt-6 flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
              <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-primary" aria-hidden="true" />
              {note}
            </p>
          )}
        </div>
        <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
          <Image
            src={image.src}
            alt={image.alt}
            width={640}
            height={480}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </section>
    </Container>
  )
}
