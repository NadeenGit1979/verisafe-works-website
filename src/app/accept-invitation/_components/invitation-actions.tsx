'use client'

import { useSearchParams } from 'next/navigation'
import { AlertTriangle, Download, Smartphone } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { androidApkUrl, siteConfig } from '@/config/site'
import { download, invalidLink, noApp, openApp } from '@/content/accept-invitation'

/**
 * Client leaf: the invitation token only exists in the browser's query string
 * (the export is static), so reading it — and building the app deep link from
 * it — has to happen here. Everything around it stays server-rendered.
 */
export function InvitationActions() {
  const token = useSearchParams().get('token')

  if (!token) {
    return (
      <div className="rounded-3xl border border-border bg-secondary/40 px-6 py-10 text-center sm:px-12">
        <AlertTriangle aria-hidden className="mx-auto size-8 text-accent-amber" />
        <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-foreground">
          {invalidLink.title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {invalidLink.description}
        </p>
      </div>
    )
  }

  // Custom-scheme fallback: works as soon as the app is installed, even before
  // OS-level app-link verification (AASA / assetlinks) kicks in. Once that
  // verifies, most users never see this page — the OS opens the app directly.
  const appLink = `verisafeworks://accept-invitation?token=${encodeURIComponent(token)}`

  return (
    <div className="text-center">
      <Button render={<a href={appLink} />} size="lg">
        <Smartphone aria-hidden />
        {openApp.cta}
      </Button>
      <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
        {openApp.hint}
      </p>

      <div className="mx-auto mt-6 flex max-w-xl flex-wrap justify-center gap-3">
        {/* Direct APK from our own storage — an invitee who has to install
            first should not lose the tab, so this downloads in place rather
            than opening the /download page in a new one. */}
        <Button
          render={<a href={androidApkUrl} download="verisafe-works.apk" />}
          variant="outline"
        >
          <Download aria-hidden />
          {download.android}
        </Button>
        <Button
          render={
            <a href={siteConfig.appDownloads.ios} target="_blank" rel="noopener noreferrer" />
          }
          variant="outline"
        >
          <Download aria-hidden />
          {download.ios}
        </Button>
      </div>

      <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-border bg-secondary/40 px-6 py-8">
        <h2 className="font-heading text-xl font-bold tracking-tight text-foreground">
          {noApp.title}
        </h2>
        <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
          {noApp.description}
        </p>
        <Button
          render={<a href={siteConfig.cta.href} target="_blank" rel="noopener noreferrer" />}
          variant="amber"
          className="mt-5"
        >
          {siteConfig.cta.primary}
        </Button>
      </div>

      <p className="mx-auto mt-8 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
        {openApp.expiryNote}
      </p>
    </div>
  )
}
