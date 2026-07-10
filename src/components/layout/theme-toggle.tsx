'use client'

import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useThemeToggle } from '@/hooks/use-theme-toggle'

/**
 * Sun/moon button that flips the theme. The visible icon is swapped purely in
 * CSS off the <html> class, so server and client render identical markup.
 */
export function ThemeToggle() {
  const toggleTheme = useThemeToggle()

  return (
    <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={toggleTheme}>
      <Moon className="size-5 dark:hidden" />
      <Sun className="hidden size-5 dark:block" />
    </Button>
  )
}
