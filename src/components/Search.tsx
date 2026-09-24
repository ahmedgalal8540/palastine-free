import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLang } from '../i18n/LangContext'
import { cities } from '../data/cities'
import { regions, borders, waterBodies, climateZones } from '../data/geo'
import { figures } from '../data/people'
import { faq } from '../data/faq'
import { timeline } from '../data/timeline'
import { violations } from '../data/violations'
import { movements } from '../data/movements'
import { dishes, crafts, holidays, heritage } from '../data/culture'
import type { Loc } from '../types'

interface SearchDoc {
  id: string
  type: 'page' | 'city' | 'geo' | 'figure' | 'event' | 'culture' | 'faq'
  title: Loc
  text?: Loc
  path: string
}

function buildIndex(): SearchDoc[] {
  const docs: SearchDoc[] = []

  const pages: [SearchDoc['type'], Loc, string][] = [
    ['page', { ar: 'الرئيسية', en: 'Home' }, '/'],
    ['page', { ar: 'الجغرافيا', en: 'Geography' }, '/geography'],
    ['page', { ar: 'التاريخ', en: 'History' }, '/history'],
    ['page', { ar: 'الأخبار', en: 'News' }, '/news'],
    ['page', { ar: 'السكان', en: 'Population' }, '/population'],
    ['page', { ar: 'العلم', en: 'Flag' }, '/flag'],
    ['page', { ar: 'الثقافة', en: 'Culture' }, '/culture'],
    ['page', { ar: 'شخصيات', en: 'Figures' }, '/figures'],
    ['page', { ar: 'اختبر معرفتك', en: 'Quiz' }, '/quiz'],
    ['page', { ar: 'حول', en: 'About' }, '/about'],
  ]
  pages.forEach(([type, title, path]) => docs.push({ id: 'page' + path, type, title, path }))

  cities.forEach((c) => docs.push({ id: c.id, type: 'city', title: c.name, text: c.blurb, path: '/geography' }))
  regions.forEach((r) => docs.push({ id: r.id, type: 'geo', title: r.name, text: r.desc, path: '/geography' }))
  borders.forEach((b) => docs.push({ id: b.id, type: 'geo', title: b.side, text: b.note, path: '/geography' }))
  waterBodies.forEach((w) => docs.push({ id: w.id, type: 'geo', title: w.name, text: w.desc, path: '/geography' }))
  climateZones.forEach((c) => docs.push({ id: c.id, type: 'geo', title: c.name, text: c.desc, path: '/geography' }))
  figures.forEach((f) => docs.push({ id: f.id, type: 'figure', title: f.name, text: f.blurb, path: '/figures' }))
  timeline.forEach((ev) => docs.push({ id: ev.id, type: 'event', title: ev.title, text: ev.text, path: '/history' }))
  violations.forEach((v) => docs.push({ id: v.id, type: 'event', title: v.title, text: v.text, path: '/history' }))
  movements.forEach((m) => docs.push({ id: m.id, type: 'culture', title: m.name, text: m.context, path: '/population' }))
  dishes.forEach((d) => docs.push({ id: d.id, type: 'culture', title: d.name, text: d.desc, path: '/culture' }))
  crafts.forEach((c) => docs.push({ id: c.id, type: 'culture', title: c.name, text: c.desc, path: '/culture' }))
  holidays.forEach((h) => docs.push({ id: h.id, type: 'culture', title: h.name, text: h.desc, path: '/culture' }))
  heritage.forEach((h) => docs.push({ id: 'h-' + h.title.en, type: 'culture', title: h.title, text: h.text, path: '/culture' }))
  faq.forEach((f) => docs.push({ id: f.id, type: 'faq', title: f.q, text: f.a, path: '/about' }))

  return docs
}

const INDEX: SearchDoc[] = buildIndex()

const TYPE_KEY: Record<SearchDoc['type'], string> = {
  page: 'searchTypePage',
  city: 'searchTypeCity',
  geo: 'searchTypeGeo',
  figure: 'searchTypeFigure',
  event: 'searchTypeEvent',
  culture: 'searchTypeCulture',
  faq: 'searchTypeFaq',
}

export function Search() {
  const { t, pick } = useLang()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [sel, setSel] = useState(0)
  const [recent, setRecent] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('pg.recent') ?? '[]') as string[]
    } catch {
      return []
    }
  })
  const inputRef = useRef<HTMLInputElement>(null)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    const scored = INDEX.map((d) => {
      const title = [d.title.ar, d.title.en].filter(Boolean).join(' ').toLowerCase()
      const text = [d.text?.ar, d.text?.en].filter(Boolean).join(' ').toLowerCase()
      let score = -1
      if (title.startsWith(q)) score = 0
      else if (title.includes(q)) score = 1
      else if (text.includes(q)) score = 2
      return { d, score }
    }).filter((s) => s.score >= 0)
    scored.sort((a, b) => a.score - b.score)
    return scored.slice(0, 10).map((s) => s.d)
  }, [query])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 30)
    setSel(0)
  }, [open, query])

  function go(doc: SearchDoc) {
    setOpen(false)
    setQuery('')
    setRecent((prev) => {
      const next = [doc.id, ...prev.filter((id) => id !== doc.id)].slice(0, 5)
      try {
        localStorage.setItem('pg.recent', JSON.stringify(next))
      } catch { /* noop */ }
      return next
    })
    navigate(doc.path)
  }

  const recentDocs = useMemo(
    () => recent.map((id) => INDEX.find((d) => d.id === id)).filter((d): d is SearchDoc => Boolean(d)),
    [recent],
  )

  return (
    <>
      <button className="icon-btn search-btn" onClick={() => setOpen(true)} aria-label={t('searchOpen')} title="Ctrl+K">
        🔍
      </button>

      {open && (
        <div className="search-overlay" onClick={() => setOpen(false)}>
          <div
            className="search-modal"
            onClick={(e) => e.stopPropagation()}
            dir={pick({ ar: 'rtl', en: 'ltr' })}
            role="dialog"
            aria-modal="true"
            aria-label={t('searchOpen')}
          >
            <div className="search-input-row">
              <span aria-hidden="true">🔍</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('searchPlaceholder')}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown') setSel((s) => Math.min(s + 1, results.length - 1))
                  if (e.key === 'ArrowUp') setSel((s) => Math.max(s - 1, 0))
                  if (e.key === 'Enter' && results[sel]) go(results[sel])
                }}
              />
              <kbd>Esc</kbd>
            </div>

            {!query && recentDocs.length > 0 && (
              <div className="search-results">
                <div className="search-group-label">{t('recentSearches')}</div>
                {recentDocs.map((doc) => (
                  <button
                    key={'recent-' + doc.id + doc.type}
                    className="search-item"
                    onClick={() => go(doc)}
                  >
                    <span className="search-type">{t(TYPE_KEY[doc.type])}</span>
                    <span className="search-title">{pick(doc.title)}</span>
                  </button>
                ))}
              </div>
            )}

            {query && (
              <div className="search-results">
                {results.length === 0 && <div className="search-empty">{t('searchEmpty')}</div>}
                {results.map((doc, i) => (
                  <button
                    key={doc.id + doc.type}
                    className={`search-item ${i === sel ? 'active' : ''}`}
                    onClick={() => go(doc)}
                    onMouseEnter={() => setSel(i)}
                  >
                    <span className="search-type">{t(TYPE_KEY[doc.type])}</span>
                    <span className="search-title">{pick(doc.title)}</span>
                    {doc.text && <span className="search-snippet">{pick(doc.text).slice(0, 80)}…</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
