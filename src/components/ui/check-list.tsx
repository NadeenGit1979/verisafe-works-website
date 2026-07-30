import { CheckCircle2 } from 'lucide-react'

import { cn } from '@/lib/utils'

type CheckListProps = {
  items: readonly string[]
  className?: string
}

/** Bulleted list with primary check icons, used for benefits and trust items. */
export function CheckList({ items, className }: CheckListProps) {
  return (
    <ul className={cn('space-y-3', className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden="true" />
          {/* text-base matches the intro paragraph above each list. */}
          <span className="text-base leading-relaxed text-foreground">{item}</span>
        </li>
      ))}
    </ul>
  )
}
