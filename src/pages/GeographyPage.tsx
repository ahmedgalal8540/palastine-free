import { useLang } from '../i18n/LangContext'
import { CityMap } from '../components/CityMap'
import { regions, borders, waterBodies, climateZones, areaFacts } from '../data/geo'
import { cities } from '../data/cities'

export function GeographyPage() {
  const { t, pick } = useLang()

  return (
    <div className="container page">
      <div className="page-head">
        <h1>{t('geoTitle')}</h1>
        <p className="lead">{t('geoLead')}</p>
      </div>

      {/* Whole-land map (OpenStreetMap embed) */}
      <section className="section" aria-labelledby="land-h">
        <div className="section-head">
          <h2 id="land-h">{t('wholeLandTitle')}</h2>
        </div>
        <figure className="land-embed">
          <iframe
            title={t('wholeLandTitle')}
            loading="lazy"
            src="https://www.openstreetmap.org/export/embed.html?bbox=34.1%2C29.4%2C35.9%2C33.3&layer=mapnik&marker=31.77%2C35.21"
          />
          <figcaption>
            {t('wholeLandCaption')}{' '}
            <a href="https://www.openstreetmap.org/#map=8/31.35/35.0" target="_blank" rel="noreferrer">
              OpenStreetMap
            </a>{' '}
            ·{' '}
            <a
              href="https://www.openstreetmap.org/#map=8/31.35/35.0"
              target="_blank"
              rel="noreferrer"
              className="more"
            >
              {pick({ ar: 'افتح الخريطة بحجم كامل', en: 'Open full-size map' })}
            </a>
          </figcaption>
        </figure>
      </section>

      {/* Key figures */}
      <section className="section" aria-labelledby="areas-h">
        <div className="section-head">
          <h2 id="areas-h">{t('areaTable')}</h2>
        </div>
        <table className="info-table">
          <tbody>
            {areaFacts.map((f) => (
              <tr key={f.label.en}>
                <th scope="row">{pick(f.label)}</th>
                <td>{pick(f.value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Interactive map */}
      <section className="section" aria-labelledby="map-h">
        <div className="section-head">
          <h2 id="map-h">{t('mapTitle')}</h2>
        </div>
        <p className="muted mb-20">{t('hoverHint')}</p>
        <CityMap cities={cities} />
      </section>

      {/* Natural regions */}
      <section className="section" aria-labelledby="regions-h">
        <div className="section-head">
          <h2 id="regions-h">{t('regionsTitle')}</h2>
        </div>
        <div className="cards-grid">
          {regions.map((r) => (
            <article className="card" key={r.id}>
              <span className="tag">{pick(r.climate)}</span>
              <h3>{pick(r.name)}</h3>
              <p>{pick(r.desc)}</p>
              <p className="muted" style={{ marginTop: 10 }}>{pick(r.area)}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Borders */}
      <section className="section" aria-labelledby="borders-h">
        <div className="section-head">
          <h2 id="borders-h">{t('bordersTitle')}</h2>
        </div>
        <table className="info-table">
          <thead>
            <tr>
              <th>{t('border')}</th>
              <th>{t('approxLength')}</th>
              <th>{t('quickFacts')}</th>
            </tr>
          </thead>
          <tbody>
            {borders.map((b) => (
              <tr key={b.id}>
                <th scope="row">{pick(b.side)}</th>
                <td>{pick(b.length)}</td>
                <td style={{ color: 'var(--text-soft)' }}>{pick(b.note)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Water & climate */}
      <div className="two-col section">
        <section aria-labelledby="water-h">
          <div className="section-head">
            <h2 id="water-h">{t('waterTitle')}</h2>
          </div>
          <div className="culture-list">
            {waterBodies.map((w) => (
              <div className="culture-row" key={w.id}>
                <strong>{pick(w.name)}</strong>
                <span>{pick(w.desc)}</span>
              </div>
            ))}
          </div>
        </section>
        <section aria-labelledby="climate-h">
          <div className="section-head">
            <h2 id="climate-h">{t('climateTitle')}</h2>
          </div>
          <div className="culture-list">
            {climateZones.map((c) => (
              <div className="culture-row" key={c.id}>
                <strong>{pick(c.name)}</strong>
                <span>{pick(c.desc)}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
