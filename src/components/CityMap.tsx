import { useMemo, useState } from 'react'
import type { City } from '../types'
import { useLang } from '../i18n/LangContext'
import { Photo } from './Photo'

/**
 * Schematic (not to scale) SVG map of Palestine — professional edition.
 * - Search filters cities; permanent labels keep the map readable without hover.
 * - Hover previews, click pins; Escape / Clear resets. Full keyboard support.
 * - Compass, legend and schematic disclaimer for a trustworthy presentation.
 */
export function CityMap({ cities }: { cities: City[] }) {
  const { t, pick, lang } = useLang()
  const [query, setQuery] = useState('')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [hoverId, setHoverId] = useState<string | null>(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [expanded, setExpanded] = useState(false)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return cities
    return cities.filter(
      (c) =>
        c.name.ar.includes(query.trim()) ||
        c.name.en.toLowerCase().includes(q) ||
        c.governorate.ar.includes(query.trim()) ||
        c.governorate.en.toLowerCase().includes(q),
    )
  }, [cities, query])

  const visibleIds = useMemo(() => new Set(filtered.map((c) => c.id)), [filtered])
  const selected = cities.find((c) => c.id === selectedId) ?? null
  const hovered = cities.find((c) => c.id === hoverId) ?? null
  const active = hovered ?? selected

  function choose(c: City) {
    setSelectedId(c.id)
    setExpanded(false)
  }
  function clear() {
    setSelectedId(null)
    setHoverId(null)
    setExpanded(false)
  }

  function onMove(e: React.MouseEvent) {
    const host = (e.currentTarget as HTMLElement).getBoundingClientRect()
    setCursor({ x: e.clientX - host.left, y: e.clientY - host.top })
  }

  return (
    <div>
      <div className="map-toolbar">
        <input
          className="map-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('searchCities')}
          aria-label={t('searchCities')}
          dir={lang === 'ar' ? 'rtl' : 'ltr'}
        />
        <span className="muted map-count" aria-live="polite">
          {filtered.length} {t('citiesCount')}
        </span>
        {(selectedId || query) && (
          <button className="btn btn-ghost btn-sm" onClick={clear}>
            {t('clearSelection')}
          </button>
        )}
      </div>

      <div
        className="map-wrap"
        onMouseMove={onMove}
        onMouseLeave={() => setHoverId(null)}
        onKeyDown={(e) => {
          if (e.key === 'Escape') clear()
        }}
      >
        <svg
          viewBox="0 0 100 108"
          className="map-svg"
          role="group"
          aria-label={t('mapTitle')}
          style={{ aspectRatio: '100/108' }}
        >
          {/* Land silhouette — schematic, stylized */}
          <path
            className="map-region"
            d="M42,2 C46,4 50,3 54,6 C58,9 56,14 60,17 C64,20 62,26 66,29
               C70,32 68,38 72,42 C76,46 74,52 72,56 C70,60 72,66 70,72
               C68,78 64,84 62,92 L56,98 C52,99 46,99 42,97 C38,95 36,90 34,84
               C32,78 34,72 32,66 C30,60 34,54 32,48 C30,42 34,36 32,30
               C30,24 34,18 36,12 C37,8 39,4 42,2 Z"
          />

          {/* Compass */}
          <g className="map-compass" transform="translate(89,10)" aria-hidden="true">
            <circle r="6.5" />
            <text y="-0.5">N</text>
            <path d="M0,3.2 L0,-4 M-2.2,-1.8 L0,-4 L2.2,-1.8" />
          </g>

          {filtered.map((c) => {
            const isSel = selectedId === c.id
            const isHov = hoverId === c.id
            const dimmed = false
            return (
              <g
                key={c.id}
                className={`map-hit${isSel ? ' is-sel' : ''}${isHov ? ' is-hov' : ''}`}
                tabIndex={0}
                role="button"
                aria-label={pick(c.name)}
                aria-pressed={isSel}
                onClick={() => choose(c)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    choose(c)
                  }
                }}
                onFocus={() => setHoverId(c.id)}
                onBlur={() => setHoverId(null)}
                onMouseEnter={() => setHoverId(c.id)}
                onMouseLeave={() => setHoverId(null)}
                opacity={dimmed ? 0.35 : 1}
              >
                <circle cx={c.coords.x} cy={c.coords.y} r={isSel ? 3.0 : isHov ? 2.6 : 1.9} />
                {isHov && <circle cx={c.coords.x} cy={c.coords.y} r="4.5" className="map-ring" />}
              </g>
            )
          })}
        </svg>

        {/* Cursor-following tooltip, clamped so it never leaves the map */}
        {hovered && visibleIds.has(hovered.id) && (
          <div
            className="map-tooltip"
            style={{
              left: cursor.x > 170 ? cursor.x - 158 : cursor.x + 14,
              top: Math.max(cursor.y - 10, 4),
            }}
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
          >
            <strong>{pick(hovered.name)}</strong>
            <span>{pick(hovered.governorate)}</span>
            <em>{pick(hovered.blurb)}</em>
          </div>
        )}

        <div className="map-legend" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          <span className="legend-item">
            <i className="legend-dot" /> {t('mapLegendTitle')}
          </span>
          <span className="muted">{t('schematicNote')}</span>
        </div>
      </div>

      {/* Quick city list — touch & keyboard friendly */}
      <div className="map-chips" role="list">
        {filtered.map((c) => (
          <button
            key={c.id}
            role="listitem"
            className={`chip${selectedId === c.id ? ' chip-active' : ''}`}
            onClick={() => (selectedId === c.id ? clear() : choose(c))}
            aria-pressed={selectedId === c.id}
          >
            {pick(c.name)}
          </button>
        ))}
        {filtered.length === 0 && <span className="muted">{t('searchEmpty')}</span>}
      </div>

      {/* Selected city summary + show-more */}
      {selected && (
        <div className="city-panel" key={selected.id}>
          <div className="city-panel-head">
            <div>
              <h3>{pick(selected.name)}</h3>
              <div className="meta">
                {t('governorate')}: {pick(selected.governorate)} · {t('established')}: {pick(selected.established)}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn btn-ghost btn-sm" onClick={() => setExpanded((v) => !v)}>
                {expanded ? t('close') : t('showMore')} ↓
              </button>
              <button className="btn btn-ghost btn-sm" onClick={clear} aria-label={t('clearSelection')}>
                ✕
              </button>
            </div>
          </div>
          <p style={{ margin: '8px 0 0' }}>{pick(selected.blurb)}</p>
          {selected.photo && (
            <Photo src={selected.photo.src} alt={selected.name} credit={selected.photo.credit} className="city-photo" />
          )}

          {expanded && (
            <div className="city-more">
              <div className="stat-grid">
                <div className="stat">
                  <span className="stat-k">{t('population')}</span>
                  <span className="stat-v">{pick(selected.population)}</span>
                </div>
                <div className="stat">
                  <span className="stat-k">{t('governorate')}</span>
                  <span className="stat-v">{pick(selected.governorate)}</span>
                </div>
                <div className="stat">
                  <span className="stat-k">{t('established')}</span>
                  <span className="stat-v">{pick(selected.established)}</span>
                </div>
              </div>
              <ul>
                {selected.facts.map((f, i) => (
                  <li key={i}>{pick(f)}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {active && !selected && (
        <p className="muted" style={{ marginTop: 10 }} aria-live="polite">
          {pick(active.name)} — {pick(active.governorate)}
        </p>
      )}
    </div>
  )
}
