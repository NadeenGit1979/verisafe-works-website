import { cn } from '@/lib/utils'

/** Shared appearance for all native form controls (input, textarea, select). */
export const controlClassName = cn(
  'w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors',
  'placeholder:text-muted-foreground',
  'focus:border-ring focus:ring-2 focus:ring-ring/30',
  'disabled:cursor-not-allowed disabled:opacity-50',
)

export function Input({ className, ...props }: React.ComponentProps<'input'>) {
  return <input className={cn(controlClassName, className)} {...props} />
}
