import { useState } from 'react'
import { useLang } from '../i18n/LangContext'
import { timeline } from '../data/timeline'
import { violations } from '../data/violations'
import { Reveal } from '../components/Reveal'
import { Photo } from '../components/Photo'
import { NewsSection } from '../components/NewsSection'

type Era = 'all' | 'ancient' | 'islamic' | 'modern'

export function HistoryPage() {
  const { t, pick, lang } = useLang()
  const [era, setEra] = useState<Era>('all')

  const filtered = timeline.filter((ev) => {
    if (era === 'all') return true
    if (era === 'ancient') return ['jericho', 'canaan', 'egypt', 'philistines', 'roman-biz'].includes(ev.id)
    if (era === 'islamic') return ['islamic', 'umayyad-abbasid', 'crusades', 'mamluk', 'ottoman'].includes(ev.id)
    return ['balfour', 'mandate', 'nakba', 'naksa', 'intifada1', 'declaration', 'oslo', 'intifada2', 'unesco', 'recognition'].includes(ev.id)
  })

  return (
    <div className="container page">
      <div className="page-head">
        <h1>{t('history')}</h1>
        <p className="lead">
          {pick({
            ar: 'رحلة عبر آلاف السنين — من أريحا إلى اليوم، مرتبة زمنيًا وتُعصر حسب الحقبة.',
            en: 'A journey across millennia — from Jericho to today, ordered chronologically and filterable by era.',
          })}
        </p>
      </div>

      {/* Era filter chips */}
      <div className="chips" role="tablist" aria-label={t('history')}>
        {(
          [
            ['all', { ar: 'كل الحقب', en: 'All eras' }],
            ['ancient', { ar: 'الحقبة القديمة', en: 'Ancient' }],
            ['islamic', { ar: 'الحقبة الإسلامية', en: 'Islamic eras' }],
            ['modern', { ar: 'العصر الحديث', en: 'Modern' }],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            className={`chip ${era === id ? 'active' : ''}`}
            onClick={() => setEra(id)}
            role="tab"
            aria-selected={era === id}
          >
            {pick(label)}
          </button>
        ))}
      </div>

      <div className="timeline">
        {filtered.map((ev, i) => (
          <Reveal key={ev.id} delay={Math.min(i * 40, 240)}>
            <article className="timeline-item">
              <span className="year">{lang === 'ar' ? ev.year : ev.yearEn ?? ev.year}</span>
              <h3>{pick(ev.title)}</h3>
              {ev.photo && <Photo src={ev.photo.src} alt={ev.title} credit={ev.photo.credit} className="timeline-photo" />}
              <p>{pick(ev.text)}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <section className="section" aria-labelledby="violations-h">
        <div className="section-head">
          <h2 id="violations-h">{t('violationsTitle')}</h2>
        </div>
        <p className="muted mb-20">{t('violationsLead')}</p>
        <div className="timeline">
          {violations.map((v, i) => (
            <Reveal key={v.id} delay={Math.min(i * 40, 240)}>
              <article className="timeline-item violation">
                <span className="year">{pick(v.year)}</span>
                <h3>{pick(v.title)}</h3>
                <p>{pick(v.text)}</p>
                <div className="muted violation-source">{pick(v.source)}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="news-h">
        <div className="section-head">
          <h2 id="news-h">{t('news')}</h2>
        </div>
        <NewsSection limit={6} />
      </section>
    </div>
  )
}
