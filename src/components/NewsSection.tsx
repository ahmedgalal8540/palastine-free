import { useCallback, useEffect, useState } from 'react'
import { useLang } from '../i18n/LangContext'

interface NewsItem {
  id: string
  title: string
  date: string
  source: string
  url: string
  excerpt: string
  live: boolean
}

const FEEDS = {
  en: [
    {
      source: 'UN News',
      rss: 'https://news.un.org/feed/subscribe/en/news/region/middle-east/feed/rss.xml',
    },
    {
      source: 'Al Jazeera',
      rss: 'https://www.aljazeera.com/xml/rss/all.xml',
    },
  ],
  ar: [
    {
      source: 'أخبار الأمم المتحدة',
      rss: 'https://news.un.org/feed/subscribe/ar/news/region/middle-east/feed/rss.xml',
    },
  ],
} as const

const PALESTINE_RE_EN = /palestin|gaza|west bank|east jerusalem|unrwa|nakba|jenin|nablus|hebron|rafah|ramallah/i
const PALESTINE_RE_AR = /فلسطين|غزة|الضفة|القدس|أونروا|النكبة|جنين|نابلس|الخليل|رفح|رام الله|خان يونس|شهيد|الأقصى/i
/** Violence/casualty reporting floats to the top. */
const VIOLENCE_RE =
  /kill|dead|death|casualt|strike|raid|displac|airstrike|bomb|shelling|attack|wound|siege|demolish|settlers? attack|قتل|شهيد|جرح|قصف|غارة|عدوان|نازح|نزوح|حصار|هدم|اقتحام|مجزرة|استشهاد/i

function stripHtml(s: string): string {
  return s.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').trim()
}

interface RawItem {
  title?: string
  pubDate?: string
  link?: string
  description?: string
}

async function fetchFeed(rss: string, signal: AbortSignal): Promise<RawItem[]> {
  const res = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rss)}`,
    { signal },
  )
  if (!res.ok) throw new Error(`RSS proxy HTTP ${res.status}`)
  const d = (await res.json()) as { status?: string; items?: RawItem[] }
  if (d.status !== 'ok' || !Array.isArray(d.items)) throw new Error('RSS proxy error')
  return d.items
}

async function fetchReliefWeb(limit: number, signal: AbortSignal): Promise<NewsItem[]> {
  const appname = (import.meta.env.VITE_RELIEFWEB_APPNAME as string | undefined) ?? ''
  if (!appname) throw new Error('no appname')
  const res = await fetch(`https://api.reliefweb.int/v2/reports?appname=${encodeURIComponent(appname)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: { value: 'occupied Palestinian territory' },
      limit,
      sort: ['date:desc'],
      fields: { include: ['title', 'date.created', 'source.name', 'url', 'body-html'] },
    }),
    signal,
  })
  if (!res.ok) throw new Error(`ReliefWeb HTTP ${res.status}`)
  const d = (await res.json()) as { data?: Array<Record<string, unknown>> }
  const list = (d.data ?? []).map((e) => {
    const f = (e.fields ?? {}) as Record<string, unknown>
    const src = Array.isArray(f.source) && f.source.length > 0
      ? String((f.source[0] as Record<string, unknown>).name ?? 'ReliefWeb')
      : 'ReliefWeb'
    const dateObj = f.date as Record<string, string> | undefined
    const raw = String(
      (f.url as string | undefined) ??
        `https://reliefweb.int/updates?search=${encodeURIComponent('occupied Palestinian territory')}`,
    )
    return {
      id: String(e.id ?? raw),
      title: String((f.title as string | undefined) ?? 'Untitled update'),
      date: String(dateObj?.created ?? ''),
      source: src,
      url: raw,
      excerpt: stripHtml(String((f.body as string | undefined) ?? '')).slice(0, 220),
      live: true,
    }
  })
  if (list.length === 0) throw new Error('ReliefWeb empty')
  return list
}

/** Auto-updating news, language-aware: UN News (+ Al Jazeera in English),
 *  Palestine-filtered, violence reporting ranked first, static links fallback. */
export function useAutoNews(limit = 12): {
  items: NewsItem[]
  updatedAt: string | null
  live: boolean
  loading: boolean
  refresh: () => void
} {
  const { lang } = useLang()
  const [items, setItems] = useState<NewsItem[]>([])
  const [updatedAt, setUpdatedAt] = useState<string | null>(null)
  const [live, setLive] = useState(false)
  const [loading, setLoading] = useState(true)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const ctrl = new AbortController()
    setLoading(true)
    ;(async () => {
      try {
        const feeds = FEEDS[lang]
        const settled = await Promise.allSettled(
          feeds.map(async (f) => ({ items: await fetchFeed(f.rss, ctrl.signal), source: f.source })),
        )
        const merged: NewsItem[] = []
        const seen = new Set<string>()
        for (const r of settled) {
          if (r.status !== 'fulfilled') continue
          const re = lang === 'ar' ? PALESTINE_RE_AR : PALESTINE_RE_EN
          for (const it of r.value.items) {
            const hay = `${it.title ?? ''} ${it.description ?? ''}`
            if (!re.test(hay)) continue
            const url = it.link ?? ''
            if (!url || seen.has(url)) continue
            seen.add(url)
            merged.push({
              id: url,
              title: stripHtml(it.title ?? 'Untitled'),
              date: it.pubDate ?? '',
              source: r.value.source,
              url,
              excerpt: stripHtml(it.description ?? '').slice(0, 220),
              live: true,
            })
          }
        }
        if (merged.length > 0) {
          merged.sort((a, b) => {
            const av = VIOLENCE_RE.test(`${a.title} ${a.excerpt}`) ? 0 : 1
            const bv = VIOLENCE_RE.test(`${b.title} ${b.excerpt}`) ? 0 : 1
            if (av !== bv) return av - bv
            return +new Date(b.date || 0) - +new Date(a.date || 0)
          })
          setItems(merged.slice(0, limit))
          setLive(true)
          setUpdatedAt(new Date().toISOString())
          return
        }
        const rw = await fetchReliefWeb(limit, ctrl.signal)
        setItems(rw)
        setLive(true)
        setUpdatedAt(new Date().toISOString())
      } catch {
        if (!ctrl.signal.aborted) {
          setLive(false)
          setItems([])
        }
      } finally {
        if (!ctrl.signal.aborted) setLoading(false)
      }
    })()
    return () => ctrl.abort()
  }, [limit, tick, lang])

  const refresh = useCallback(() => setTick((v) => v + 1), [])
  return { items, updatedAt, live, loading, refresh }
}

const FALLBACK_DEFS: { id: string; source: string; url: string; title: { ar: string; en: string }; excerpt: { ar: string; en: string } }[] = [
  {
    id: 'ocha-opt',
    source: 'UN OCHA',
    url: 'https://www.ochaopt.org/',
    title: {
      ar: 'أوتشا — تحديثات الأرض الفلسطينية المحتلة',
      en: 'UN OCHA — occupied Palestinian territory updates',
    },
    excerpt: {
      ar: 'تقارير الأوضاع وأرقام الضحايا والاحتياجات الإنسانية (يفتح ochaopt.org).',
      en: 'Situation reports, casualty figures and humanitarian needs (opens ochaopt.org).',
    },
  },
  {
    id: 'un-news',
    title: { ar: 'أخبار الأمم المتحدة — الشرق الأوسط', en: 'UN News — Middle East focus' },
    source: 'United Nations',
    url: 'https://news.un.org/en/focus/middle-east',
    excerpt: {
      ar: 'أحدث تغطية الأمم المتحدة (يفتح news.un.org).',
      en: 'Latest UN coverage (opens news.un.org).',
    },
  },
  {
    id: 'reliefweb',
    title: { ar: 'ريليف ويب — الأرض الفلسطينية المحتلة', en: 'ReliefWeb — occupied Palestinian territory feed' },
    source: 'ReliefWeb',
    url: 'https://reliefweb.int/country/opt',
    excerpt: {
      ar: 'تقارير ومناشدات إنسانية (يفتح reliefweb.int).',
      en: 'Humanitarian reports and appeals (opens reliefweb.int).',
    },
  },
]

export function NewsSection({ limit = 12 }: { limit?: number }) {
  const { t, pick } = useLang()
  const { items, updatedAt, live, loading, refresh } = useAutoNews(limit)
  const shown: NewsItem[] = live
    ? items
    : FALLBACK_DEFS.map((f) => ({
        id: f.id,
        title: pick(f.title),
        date: '',
        source: f.source,
        url: f.url,
        excerpt: pick(f.excerpt),
        live: false,
      }))

  return (
    <div>
      <div className="news-status">
        <span className={`live-dot ${live ? 'on' : 'off'}`} aria-hidden="true" />
        <span>
          {loading
            ? '…'
            : live
              ? `${t('newsLive')} · ${updatedAt ? new Date(updatedAt).toLocaleString() : ''}`
              : t('newsOffline')}
        </span>
        <button className="btn btn-ghost btn-sm" onClick={refresh} disabled={loading}>
          {t('newsRefresh')}
        </button>
      </div>
      <div className="cards-grid">
        {shown.map((n) => (
          <article className="card" key={n.id}>
            <span className="tag">{n.source}</span>
            <h3>
              <a href={n.url} target="_blank" rel="noreferrer">
                {n.title}
              </a>
            </h3>
            {n.date && <div className="muted">{new Date(n.date).toLocaleDateString()}</div>}
            {n.excerpt && <p>{n.excerpt}…</p>}
          </article>
        ))}
      </div>
    </div>
  )
}
