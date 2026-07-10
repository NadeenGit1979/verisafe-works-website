import { cn } from '@/lib/utils'
import { controlClassName } from '@/components/ui/input'

export function Select({ className, ...props }: React.ComponentProps<'select'>) {
  return <select className={cn(controlClassName, className)} {...props} />
}
