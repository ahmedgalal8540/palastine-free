import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Lang } from '../types'
import { pick, langLabel, tKey } from './helpers'

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
  t: (k: string) => string
  pick: (loc: { ar: string; en: string } | undefined) => string
}

const Ctx = createContext<LangCtx | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const s = localStorage.getItem('pg.lang')
      if (s === 'ar' || s === 'en') return s
    } catch { /* noop */ }
    return 'ar' // default: Arabic
  })

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
    try {
      localStorage.setItem('pg.lang', lang)
    } catch { /* noop */ }
  }, [lang])

  function setLang(l: Lang) {
    setLangState(l)
  }

  function toggle() {
    setLangState((cur) => (cur === 'ar' ? 'en' : 'ar'))
  }

  const value: LangCtx = {
    lang,
    setLang,
    toggle,
    t: (k) => tKey(k, lang),
    pick: (loc) => pick(loc, lang),
  }

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useLang(): LangCtx {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}

export { langLabel }
