import type { Theme } from '../types'

export type Accent = 'olive' | 'sand' | 'sea' | 'grape'
export const ACCENTS: { id: Accent; color: string }[] = [
  { id: 'olive', color: '#0d5c3f' },
  { id: 'sand', color: '#c9a227' },
  { id: 'sea', color: '#0b5e6b' },
  { id: 'grape', color: '#5c3d99' },
]

let currentTheme: Theme = 'light'
let currentAccent: Accent = 'olive'
const listeners = new Set<() => void>()

function read(): Theme {
  try {
    const s = localStorage.getItem('pg.theme')
    if (s === 'light' || s === 'dark') return s
  } catch { /* noop */ }
  return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function notify() {
  listeners.forEach((l) => l())
}

export function subscribe(cb: () => void): () => void {
  listeners.add(cb)
  return () => listeners.delete(cb)
}

export function getTheme(): Theme {
  return currentTheme
}

export function setTheme(t: Theme) {
  currentTheme = t
  document.documentElement.setAttribute('data-theme', t)
  try {
    localStorage.setItem('pg.theme', t)
  } catch { /* noop */ }
  notify()
}

export function toggleTheme() {
  setTheme(currentTheme === 'dark' ? 'light' : 'dark')
}

export function getAccent(): Accent {
  return currentAccent
}

export function setAccent(a: Accent) {
  currentAccent = a
  document.documentElement.setAttribute('data-accent', a)
  try {
    localStorage.setItem('pg.accent', a)
  } catch { /* noop */ }
  notify()
}

function readAccent(): Accent {
  try {
    const s = localStorage.getItem('pg.accent')
    if (s === 'olive' || s === 'sand' || s === 'sea' || s === 'grape') return s
  } catch { /* noop */ }
  return 'olive'
}

// Initialize from storage or system preference at module load.
currentTheme = read()
currentAccent = readAccent()
if (typeof document !== 'undefined') {
  document.documentElement.setAttribute('data-theme', currentTheme)
  document.documentElement.setAttribute('data-accent', currentAccent)
}
