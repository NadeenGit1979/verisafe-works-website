'use client'

import { Fragment } from 'react'
import { ExternalLink } from 'lucide-react'

import { launchCountdown } from '@/content/home'
import { useNow } from '@/hooks/use-now'
import { cn } from '@/lib/utils'

/** Splits milliseconds into [days, hours, minutes, seconds]. */
function splitRemaining(ms: number): number[] {
  const total = Math.floor(ms / 1000)
  return [
    Math.floor(total / 86400),
    Math.floor((total % 86400) / 3600),
    Math.floor((total % 3600) / 60),
    total % 60,
  ]
}

/**
 * The test-phase launch countdown, styled as an entry in the shared job
 * record the product itself produces: a recording dot, a timestamp and
 * tabular digits. Before hydration the digits render as dashes so the
 * statically exported markup never mismatches.
 */
export function HomeLaunchCountdown({ className }: { className?: string }) {
  const now = useNow()
  const remaining = now === null ? null : new Date(launchCountdown.target).getTime() - now
  const isOpen = remaining !== null && remaining <= 0
  const values = remaining !== null && remaining > 0 ? splitRemaining(remaining) : null
  const { units } = launchCountdown
  const labels = [units.days, units.hours, units.minutes, units.seconds]

  return (
    <div
      className={cn(
        'rounded-2xl border border-border bg-card p-5 shadow-sm motion-safe:animate-countdown-pop motion-reduce:animate-countdown-glow',
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-foreground">
          <span aria-hidden="true" className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent-amber opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-amber" />
          </span>
          {launchCountdown.eyebrow}
        </span>
        <a
          href={launchCountdown.signUp.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={launchCountdown.signUp.ariaLabel}
          className="group inline-flex items-center gap-1 rounded-sm font-mono text-xs text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          {launchCountdown.dateStamp}
          <ExternalLink
            aria-hidden="true"
            className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>

      <p className="sr-only">{launchCountdown.accessibleSummary}</p>

      {isOpen ? (
        <p className="mt-4 border-t border-dashed border-border pt-4 text-sm font-medium text-foreground">
          {launchCountdown.liveLabel}
        </p>
      ) : (
        <div
          aria-hidden="true"
          className="mt-4 flex items-start justify-between border-t border-dashed border-border pt-4"
        >
          {labels.map((label, index) => (
            <Fragment key={label}>
              {index > 0 && (
                <span className="pt-px font-mono text-2xl font-semibold leading-none text-muted-foreground/40 sm:text-3xl">
                  :
                </span>
              )}
              <span className="flex flex-col items-center gap-1.5">
                <span className="font-mono text-2xl font-semibold leading-none tabular-nums text-foreground sm:text-3xl">
                  {values ? String(values[index]).padStart(2, '0') : '--'}
                </span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {label}
                </span>
              </span>
            </Fragment>
          ))}
        </div>
      )}
    </div>
  )
}
