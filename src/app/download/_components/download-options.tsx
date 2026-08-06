import type { LucideIcon } from 'lucide-react'
import { Download } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { IconBadge } from '@/components/ui/icon-badge'

type DownloadOptionProps = {
  /** Anchor target so emails and SMS can deep-link a single platform. */
  id: string
  icon: LucideIcon
  platform: string
  title: string
  description: string
  cta: string
  meta: string
  href: string
  /**
   * Suggested filename for a direct file download. Browsers only honour this
   * same-origin — the APK is served from Supabase storage, so it is advisory
   * and the object's own name wins. Omitted for links that open a page.
   */
  fileName?: string
}

/** One platform's card: what you get, the button, and the fine print. */
export function DownloadOption({
  id,
  icon,
  platform,
  title,
  description,
  cta,
  meta,
  href,
  fileName,
}: DownloadOptionProps) {
  return (
    <div
      id={id}
      className="flex scroll-mt-24 flex-col rounded-3xl border border-border bg-background p-6 sm:p-8"
    >
      <div className="flex items-center gap-4">
        <IconBadge icon={icon} />
        <div>
          <p className="text-sm font-medium text-muted-foreground">{platform}</p>
          <h2 className="font-heading text-xl font-bold tracking-tight text-foreground">{title}</h2>
        </div>
      </div>

      <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{description}</p>

      <Button
        // mt-auto pins the button to the card's base so both cards' buttons
        // line up even when the descriptions run to different lengths.
        className="mt-auto self-start"
        size="lg"
        render={
          fileName ? (
            <a href={href} download={fileName} />
          ) : (
            <a href={href} target="_blank" rel="noopener noreferrer" />
          )
        }
      >
        <Download aria-hidden />
        {cta}
      </Button>

      <p className="mt-3 text-sm text-muted-foreground">{meta}</p>
    </div>
  )
}
