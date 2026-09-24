import { useLang } from '../i18n/LangContext'
import { dishes, crafts, holidays, heritage } from '../data/culture'

export function CulturePage() {
  const { pick } = useLang()

  return (
    <div className="container page">
      <div className="page-head">
        <h1>{pick({ ar: 'الثقافة الفلسطينية', en: 'Palestinian Culture' })}</h1>
        <p className="lead">
          {pick({
            ar: 'المطبخ، الحرف، الأعياد، والتراث الشعبي — هوية حية تنتقل من جيل إلى جيل.',
            en: 'Cuisine, crafts, holidays and folk heritage — a living identity passed down through generations.',
          })}
        </p>
      </div>

      <section className="section">
        <div className="section-head">
          <h2>{pick({ ar: 'المطبخ', en: 'Cuisine' })}</h2>
        </div>
        <div className="cards-grid">
          {dishes.map((d) => (
            <article className="card" key={d.id}>
              <h3>{pick(d.name)}</h3>
              <p>{pick(d.desc)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>{pick({ ar: 'الحرف التقليدية', en: 'Traditional crafts' })}</h2>
        </div>
        <div className="cards-grid">
          {crafts.map((c) => (
            <article className="card" key={c.id}>
              <h3>{pick(c.name)}</h3>
              <p>{pick(c.desc)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>{pick({ ar: 'الأعياد والمناسبات', en: 'Holidays & occasions' })}</h2>
        </div>
        <div className="culture-list">
          {holidays.map((h) => (
            <div className="culture-row" key={h.id}>
              <strong>{pick(h.name)}</strong>
              <span>{pick(h.desc)}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>{pick({ ar: 'تراث شعبي', en: 'Folk heritage' })}</h2>
        </div>
        <div className="cards-grid">
          {heritage.map((h) => (
            <article className="card" key={h.title.en}>
              <h3>{pick(h.title)}</h3>
              <p>{pick(h.text)}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
