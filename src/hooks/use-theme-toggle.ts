'use client'

import { useCallback, useEffect } from 'react'

const STORAGE_KEY = 'theme'

function applyTheme(theme: 'light' | 'dark') {
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(theme)
}

function storedTheme(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

/**
 * Returns a callback that flips the `.light`/`.dark` class the root layout's
 * boot script set on <html>, persisting the choice. Until the user has chosen
 * explicitly, the class keeps following the OS preference.
 */
export function useThemeToggle() {
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    function handleChange(event: MediaQueryListEvent) {
      if (storedTheme()) return
      applyTheme(event.matches ? 'dark' : 'light')
    }

    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [])

  return useCallback(() => {
    const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark'
    applyTheme(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Storage may be blocked; the toggle still applies for this page view.
    }
  }, [])
}
