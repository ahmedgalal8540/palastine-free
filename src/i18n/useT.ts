import { useLang } from './LangContext'

/** Returns the current-language translator bound to the active language. */
export function useT() {
  const { t, lang, pick } = useLang()
  return { t, lang, pick }
}
