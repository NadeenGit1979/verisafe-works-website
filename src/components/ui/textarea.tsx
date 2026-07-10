import { cn } from '@/lib/utils'
import { controlClassName } from '@/components/ui/input'

export function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return <textarea className={cn(controlClassName, className)} {...props} />
}
