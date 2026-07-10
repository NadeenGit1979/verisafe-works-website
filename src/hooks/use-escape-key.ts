'use client'

import { useEffect } from 'react'

/**
 * Runs `onEscape` when the Escape key is pressed.
 * The listener is removed on cleanup — never leave window listeners behind.
 */
export function useEscapeKey(onEscape: () => void, enabled = true) {
  useEffect(() => {
    if (!enabled) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onEscape()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onEscape, enabled])
}
