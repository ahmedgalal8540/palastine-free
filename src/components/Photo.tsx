import { useState } from 'react'
import type { Loc } from '../types'
import { useLang } from '../i18n/LangContext'

/** Rewrite a full-size upload.wikimedia.org file URL to a fast thumbnail URL.
 *  Cards never need multi-megabyte originals; 500px is plenty (retina-safe).
 *  Note: thumbnails are served from thumb.wikimedia.org and only at
 *  allow-listed widths (120/250/330/500) — other widths return HTTP 400. */
export function toThumb(src: string, width = 500): string {
  const m = src.match(/^https:\/\/upload\.wikimedia\.org\/wikipedia\/(commons|en)\/(?!thumb\/)(.*\/)?([^/]+)$/)
  if (!m) return src
  const [, project, dirs = '', file] = m
  return `https://thumb.wikimedia.org/wikipedia/${project}/thumb/${dirs}${file}/${width}px-${file}`
}

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
      <img
        src={toThumb(src)}
        alt={pick(alt)}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
      {credit && <figcaption>{credit}</figcaption>}
    </figure>
  )
}
