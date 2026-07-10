import { cn } from '@/lib/utils'

const sizes = {
  sm: 'max-w-3xl',
  md: 'max-w-4xl',
  lg: 'max-w-5xl',
  xl: 'max-w-6xl',
} as const

type ContainerProps = React.ComponentProps<'div'> & {
  size?: keyof typeof sizes
}

/** Horizontally centered content column. Every section lays out inside one. */
export function Container({ size = 'xl', className, ...props }: ContainerProps) {
  return <div className={cn('mx-auto w-full px-4 sm:px-6', sizes[size], className)} {...props} />
}
