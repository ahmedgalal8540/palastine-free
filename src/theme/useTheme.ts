import { useSyncExternalStore } from 'react'
import { getTheme, setTheme, toggleTheme, subscribe, getAccent, setAccent } from './themeStore'
import type { Theme } from '../types'
import type { Accent } from './themeStore'

export function useTheme(): {
  theme: Theme
  toggle: () => void
  set: (t: Theme) => void
  accent: Accent
  setAccent: (a: Accent) => void
} {
  const theme = useSyncExternalStore(subscribe, getTheme, getTheme)
  const accent = useSyncExternalStore(subscribe, getAccent, getAccent)
  return { theme, toggle: toggleTheme, set: setTheme, accent, setAccent }
}
