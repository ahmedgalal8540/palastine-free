import { useState } from 'react'
import { useLang } from '../i18n/LangContext'
import { flagColors } from '../data/flag'

/** Interactive flag: hover/tap each band or the triangle to learn its meaning.
 *  Hoist (red triangle) stays on the physical left in all languages.
 *  Hover previews, click pins the selection. Keyboard: Tab to focus, Enter/Space
 *  to pin, Escape to clear. */
export function FlagExplorer() {
  const { t, pick } = useLang()
  const [selected, setSelected] = useState<string | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)

  const active = hovered ?? selected
  const byId = Object.fromEntries(flagColors.map((c) => [c.id, c]))

  function Zone({
    id,
    className,
    label,
    onDark,
  }: {
    id: 'black' | 'white' | 'green' | 'red'
    className: string
    label: string
    onDark?: boolean
  }) {
    const isActive = active === id
    const isPinned = selected === id
    const color = byId[id]
    return (
      <button
        className={`flag-zone ${className} ${isActive ? 'active' : ''} ${isPinned ? 'pinned' : ''}`}
        onClick={() => {
          setSelected(isPinned ? null : id)
        }}
        onMouseEnter={() => setHovered(id)}
        onMouseLeave={() => setHovered(null)}
        onFocus={() => setHovered(id)}
        onBlur={() => setHovered(null)}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            setSelected(null)
            setHovered(null)
          }
        }}
        aria-pressed={isPinned}
        aria-label={`${label} — ${pick(color.meaning)}`}
        title={label}
        style={{
          color: onDark ? '#fff' : '#1c1a16',
        }}
      >
        <span className="flag-zone-label" style={onDark ? { color: '#fff', textShadow: '0 1px 4px rgba(0,0,0,.7)' } : { color: '#1c1a16' }}>
          {label}
        </span>
      </button>
    )
  }

  return (
    <div>
      <p className="muted mb-20">{t('flagHint')}</p>

      <div className="flag-explorer" role="group" aria-label={t('flagMeaning')}>
        <div className="flag-explorer-stripes">
          <Zone id="black" className="zone-black" label={pick(byId.black.name)} onDark />
          <Zone id="white" className="zone-white" label={pick(byId.white.name)} />
          <Zone id="green" className="zone-green" label={pick(byId.green.name)} onDark />
        </div>
        <Zone id="red" className="zone-triangle" label={pick(byId.red.name)} onDark />
      </div>

      <div className="flag-meaning-box" aria-live="polite">
        {active ? (
          <>
            <span className="swatch" style={{ background: byId[active as keyof typeof byId].hex }} />
            <div>
              <h3>{pick(byId[active as keyof typeof byId].name)}</h3>
              <p>{pick(byId[active as keyof typeof byId].meaning)}</p>
            </div>
          </>
        ) : (
          <p className="muted">{t('flagHint')}</p>
      )}
      </div>
    </div>
  )
}
