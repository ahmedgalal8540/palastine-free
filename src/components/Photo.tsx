import { useState } from 'react'
import type { Loc } from '../types'
import { useLang } from '../i18n/LangContext'

/** Image with lazy loading, bilingual alt text, credit line and graceful fallback. */
export function Photo({
  src,
  alt,
  credit,
  className = '',
}: {
  src: string
  alt: Loc
  credit?: string
  className?: string
}) {
  const { pick } = useLang()
  const [failed, setFailed] = useState(false)
  if (!src || failed) return null
  return (
    <figure className={`photo ${className}`}>
      <img src={src} alt={pick(alt)} loading="lazy" onError={() => setFailed(true)} />
      {credit && <figcaption>{credit}</figcaption>}
    </figure>
  )
}
