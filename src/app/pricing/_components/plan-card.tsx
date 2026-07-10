import { Check } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Plan } from '@/content/pricing'
import { cn } from '@/lib/utils'

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-2xl border bg-card p-7',
        plan.featured ? 'border-primary shadow-lg ring-1 ring-primary' : 'border-border',
      )}
    >
      {plan.featured && (
        <Badge variant="primary" className="mb-4 w-fit">
          Most popular
        </Badge>
      )}
      <h2 className="font-heading text-xl font-semibold text-foreground">{plan.name}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-heading text-4xl font-bold text-foreground">{plan.price}</span>
        {plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}
      </div>
      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden="true" />
            <span className="text-sm leading-relaxed text-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      {/* Test phase: plans cannot be bought yet, so the action stays disabled. */}
      <Button className="mt-8" variant={plan.featured ? 'default' : 'outline'} disabled>
        {plan.cta}
      </Button>
    </div>
  )
}
