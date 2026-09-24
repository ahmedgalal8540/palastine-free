export type Lang = 'ar' | 'en'
export type Theme = 'light' | 'dark'

export interface Bilingual {
  ar: string
  en: string
}

/** A localizable value: either simple text or a plain string. */
export type Loc = Bilingual

/** Optional illustration with credit (Wikimedia Commons / public sources). */
export interface PhotoRef {
  src: string
  credit?: string
}

export interface City {
  id: string
  name: Loc
  governorate: Loc
  /** Founded / first mentioned, approximate — fully bilingual. */
  established: Loc
  population: Loc
  coords: { x: number; y: number } // position on the schematic map, 0-100 viewBox units
  blurb: Loc
  facts: Loc[]
  photo?: PhotoRef
}

export interface Figure {
  id: string
  name: Loc
  years: string
  role: Loc
  quote?: Loc
  blurb: Loc
  photo?: PhotoRef
}

export interface TimelineEvent {
  id: string
  year: string
  /** Latin-year label for English mode (e.g. '9000 BCE'); falls back to `year`. */
  yearEn?: string
  title: Loc
  text: Loc
  photo?: PhotoRef
}

export interface FaqItem {
  id: string
  q: Loc
  a: Loc
}
