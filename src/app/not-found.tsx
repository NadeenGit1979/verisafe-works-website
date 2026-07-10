import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { ROUTES } from '@/config/navigation'

export default function NotFound() {
  return (
    <main>
      <Container size="sm" className="py-24 text-center sm:py-32">
        <p className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
          404
        </p>
        <h1 className="mt-3 text-balance font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
          The page you are looking for does not exist or has moved. Head back home to find what you
          need.
        </p>
        <Button render={<Link href={ROUTES.home} />} size="lg" className="mt-8">
          Back to home
        </Button>
      </Container>
    </main>
  )
}
