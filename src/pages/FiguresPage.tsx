import { useLang } from '../i18n/LangContext'
import { figures } from '../data/people'
import { Photo } from '../components/Photo'

export function FiguresPage() {
  const { t, pick } = useLang()

  return (
    <div className="container page">
      <div className="page-head">
        <h1>{t('figuresTitle')}</h1>
        <p className="lead">
          {pick({
            ar: 'شعراء وكتّاب ومفكرون وقادة شكّلوا وجوه الثقافة والفكر الفلسطيني.',
            en: 'Poets, writers, thinkers and commanders who shaped Palestinian culture and thought.',
          })}
        </p>
      </div>

      <div className="cards-grid">
        {figures.map((f) => (
          <article className="card figure-card-full" key={f.id}>
            <div className="figure-card" style={{ display: 'block' }}>
              {f.photo ? (
                <Photo src={f.photo.src} alt={f.name} credit={f.photo.credit} className="figure-photo" />
              ) : (
                <div className="figure-avatar" aria-hidden="true">
                  {pick(f.name).trim().charAt(0)}
                </div>
              )}
              <h3 style={{ margin: '12px 0 2px' }}>{pick(f.name)}</h3>
              <div className="muted">{f.years} · {pick(f.role)}</div>
              {f.quote && <div className="figure-quote">❝ {pick(f.quote)} ❞</div>}
              <p style={{ marginTop: 10 }}>{pick(f.blurb)}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
