'use client'

import { useSyncExternalStore } from 'react'

/**
 * One shared once-a-second clock for every subscribed component.
 * The interval starts with the first subscriber and is cleared with the
 * last — never leave timers behind.
 */
let now = Date.now()
const listeners = new Set<() => void>()
let intervalId: ReturnType<typeof setInterval> | null = null

function subscribe(listener: () => void) {
  listeners.add(listener)
  if (intervalId === null) {
    intervalId = setInterval(() => {
      now = Date.now()
      for (const notify of listeners) notify()
    }, 1000)
  }
  return () => {
    listeners.delete(listener)
    if (listeners.size === 0 && intervalId !== null) {
      clearInterval(intervalId)
      intervalId = null
    }
  }
}

const getSnapshot = () => now
// The site is statically exported, so the server has no meaningful "now";
// returning null keeps prerendered and hydrated markup identical.
const getServerSnapshot = () => null

/**
 * The current epoch time, ticking once a second, or `null` on the server
 * and during hydration.
 */
export function useNow(): number | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
