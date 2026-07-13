import { Container } from '@/components/ui/container'
import { stats } from '@/content/home'

export function HomeStats() {
  return (
    <section className="border-y border-border bg-background">
      <Container className="grid grid-cols-2 gap-6 py-8 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-heading text-2xl font-bold uppercase text-primary sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 uppercase tracking-wide text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  )
}
