import type { Lang } from '../types'
import { ui } from './ui'

export function pick(loc: { ar: string; en: string } | undefined, lang: Lang): string {
  if (!loc) return ''
  return lang === 'ar' ? loc.ar : loc.en
}

export function langLabel(l: Lang): string {
  return l === 'ar' ? 'العربية' : 'English'
}

const AR_MONTHS = 'يناير،فبراير،مارس،أبريل،مايو،يونيو،يوليو،أغسطس،سبتمبر،أكتوبر،نوفمبر،ديسمبر'.split(',')
const EN_MONTHS = 'January,February,March,April,May,June,July,August,September,October,November,December'.split(',')

export function monthDayLabel(day: number, lang: Lang): string {
  return lang === 'ar' ? `${day} ${AR_MONTHS[new Date().getMonth()]}` : `${EN_MONTHS[new Date().getMonth()]} ${day}`
}

export function tKey(k: string, lang: Lang): string {
  return (ui as Record<string, Record<Lang, string>>)[k]?.[lang] ?? k
}
