'use client'

import { useEffect } from 'react'

/**
 * Prevents body scrolling while `locked` is true and always restores the
 * previous value on cleanup, so an unmounted overlay can never leave the
 * page stuck.
 */
export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [locked])
}
