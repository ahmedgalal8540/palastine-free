import { useLang } from '../i18n/LangContext'
import { cities } from '../data/cities'
import { movements } from '../data/movements'

export function PopulationPage() {
  const { t, pick } = useLang()

  return (
    <div className="container page">
      <div className="page-head">
        <h1>{t('popTitle')}</h1>
        <p className="lead">{t('popLead')}</p>
      </div>

      <div className="two-col">
        <section className="card" aria-labelledby="homeland-h">
          <span className="tag">🏡</span>
          <h2 id="homeland-h" style={{ marginTop: 0 }}>{t('homeland')}</h2>
          <p>{t('popInLand')}</p>
          <table className="info-table" style={{ marginTop: 14 }}>
            <tbody>
              <tr>
                <th scope="row">{pick({ ar: 'الضفة الغربية', en: 'West Bank' })}</th>
                <td>≈ 3,000,000</td>
              </tr>
              <tr>
                <th scope="row">{pick({ ar: 'قطاع غزة', en: 'Gaza Strip' })}</th>
                <td>≈ 2,200,000</td>
              </tr>
              <tr>
                <th scope="row">{pick({ ar: 'القدس', en: 'Al-Quds' })}</th>
                <td>≈ 360,000</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="card" aria-labelledby="diaspora-h">
          <span className="tag">🌍</span>
          <h2 id="diaspora-h" style={{ marginTop: 0 }}>{t('diaspora')}</h2>
          <p>{t('popDiaspora')}</p>
          <table className="info-table" style={{ marginTop: 14 }}>
            <tbody>
              <tr>
                <th scope="row">{pick({ ar: 'الأردن', en: 'Jordan' })}</th>
                <td>{pick({ ar: '≈ 2,300,000 مسجل', en: '≈ 2,300,000 registered' })}</td>
              </tr>
              <tr>
                <th scope="row">{pick({ ar: 'سوريا', en: 'Syria' })}</th>
                <td>{pick({ ar: '≈ 600,000 مسجل', en: '≈ 600,000 registered' })}</td>
              </tr>
              <tr>
                <th scope="row">{pick({ ar: 'لبنان', en: 'Lebanon' })}</th>
                <td>{pick({ ar: '≈ 500,000 مسجل', en: '≈ 500,000 registered' })}</td>
              </tr>
              <tr>
                <th scope="row">{pick({ ar: 'تشيلي وأمريكا الجنوبية', en: 'Chile & South America' })}</th>
                <td>≈ 500,000</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      <section className="section">
        <p className="lead" style={{ margin: 0 }}>{t('popHistoryNote')}</p>
      </section>

      <section className="section" aria-labelledby="cities-h">
        <div className="section-head">
          <h2 id="cities-h">{t('citiesTitle')}</h2>
        </div>
        <div className="cards-grid">
          {cities.map((c) => (
            <article className="card" key={c.id}>
              <span className="tag">{pick(c.governorate)}</span>
              <h3>{pick(c.name)}</h3>
              <p>{pick(c.blurb)}</p>
              <p className="muted" style={{ marginTop: 10 }}>
                {t('population')}: {pick(c.population)}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="section" aria-labelledby="movements-h">
        <div className="section-head">
          <h2 id="movements-h">{t('movementsTitle')}</h2>
        </div>
        <p className="muted mb-20">{t('movementsLead')}</p>
        <div className="cards-grid">
          {movements.map((m) => (
            <article className="card" key={m.id}>
              <span className="tag">{m.founded}</span>
              <h3>{pick(m.name)}</h3>
              <p>{pick(m.context)}</p>
              <ul className="compact-list">
                {m.facts.map((f, i) => (
                  <li key={i}>{pick(f)}</li>
                ))}
              </ul>
              <p className="muted" style={{ marginTop: 10 }}>
                {m.sources.map((s) => (
                  <a key={s.url} href={s.url} target="_blank" rel="noreferrer">
                    {s.label}
                  </a>
                ))}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
