import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { ROUTES } from '@/config/navigation'
import { workflowSection, workflowSteps } from '@/content/home'

export function HomeWorkflow() {
  return (
    <section className="bg-secondary/40">
      <Container className="py-16 sm:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
              <Image
                src={workflowSection.image.src}
                alt={workflowSection.image.alt}
                width={640}
                height={520}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {workflowSection.title}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{workflowSection.lede}</p>
            <ol className="mt-8 space-y-6">
              {workflowSteps.map((step) => (
                <li key={step.number} className="flex gap-4">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <Button render={<Link href={ROUTES.howItWorks} />} className="mt-8">
              {workflowSection.cta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
