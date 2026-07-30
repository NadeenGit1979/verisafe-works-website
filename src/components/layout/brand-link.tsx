import Image from 'next/image'
import Link from 'next/link'

import { ROUTES } from '@/config/navigation'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

const sizes = {
  default: { mark: 'h-9 w-9', wordmark: 'text-lg', gap: 'gap-2' },
  lg: { mark: 'h-11 w-11', wordmark: 'text-xl', gap: 'gap-2.5' },
} as const

type BrandLinkProps = {
  /** 'lg' is the sticky header; the footer keeps 'default'. */
  size?: keyof typeof sizes
}

/** Logo mark + brand name, linking home. Shared by header and footer. */
export function BrandLink({ size = 'default' }: BrandLinkProps) {
  // Two-tone wordmark matching the logo: "VeriSafe" in blue, "Works" in navy.
  const [first, ...rest] = siteConfig.name.split(' ')
  const { mark, wordmark, gap } = sizes[size]

  return (
    <Link href={ROUTES.home} className={cn('flex items-center', gap)}>
      <Image
        src="/logo-mark-new.png"
        alt=""
        width={128}
        height={128}
        className={cn('rounded-full', mark)}
        priority
      />
      <span className={cn('font-heading font-bold tracking-tight', wordmark)}>
        <span className="text-primary">{first}</span>{' '}
        <span className="text-foreground">{rest.join(' ')}</span>
      </span>
    </Link>
  )
}
