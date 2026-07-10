import Image from 'next/image'
import Link from 'next/link'

import { ROUTES } from '@/config/navigation'
import { siteConfig } from '@/config/site'

/** Logo mark + brand name, linking home. Shared by header and footer. */
export function BrandLink() {
  // Two-tone wordmark matching the logo: "VeriSafe" in blue, "Works" in navy.
  const [first, ...rest] = siteConfig.name.split(' ')

  return (
    <Link href={ROUTES.home} className="flex items-center gap-2">
      <Image src="/logo-mark.png" alt="" width={36} height={36} className="h-9 w-9" priority />
      <span className="font-heading text-lg font-bold tracking-tight">
        <span className="text-primary">{first}</span>{' '}
        <span className="text-foreground">{rest.join(' ')}</span>
      </span>
    </Link>
  )
}
