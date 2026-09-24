import { useLang } from '../i18n/LangContext'
import { FlagExplorer } from '../components/FlagExplorer'
import { flagColors, flagSpecs, nationalSymbols } from '../data/flag'
import { Reveal } from '../components/Reveal'

function PaletteCard({ hex, name, meaning }: { hex: string; name: { ar: string; en: string }; meaning: { ar: string; en: string } }) {
  const { pick } = useLang()
  return (
    <div className="card palette-card">
      <span
        className="palette-swatch"
        aria-hidden="true"
        style={{
          background: hex,
          border: hex === '#FFFFFF' ? '1px solid var(--border)' : 'none',
        }}
      />
      <h3>{pick(name)}</h3>
      <p>{pick(meaning)}</p>
    </div>
  )
}

export function FlagPage() {
  const { t, pick } = useLang()

  return (
    <div className="container page">
      <div className="page-head">
        <h1>{t('flagTitle')}</h1>
        <p className="lead">{t('flagLead')}</p>
      </div>

      <Reveal>
        <FlagExplorer />
      </Reveal>

      <section className="section" aria-labelledby="palette-h">
        <div className="section-head">
          <h2 id="palette-h">{t('flagPaletteTitle')}</h2>
        </div>
        <div className="cards-grid">
          {flagColors.map((c) => (
            <PaletteCard key={c.id} hex={c.hex} name={c.name} meaning={c.meaning} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>{t('flagSpecsTitle')}</h2>
        </div>
        <table className="info-table">
          <tbody>
            {flagSpecs.map((s) => (
              <tr key={s.label.en}>
                <th scope="row">{pick(s.label)}</th>
                <td>{pick(s.value)}</td>
              </tr>
            ))}
          </tbody>
      </table>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>{t('emblemTitle')}</h2>
        </div>
        <div className="cards-grid">
          {nationalSymbols.map((s, i) => (
            <Reveal key={s.label.en} delay={Math.min(i * 50, 250)}>
              <div className="card">
                <span className="tag">🇵🇸</span>
                <h3>{pick(s.label)}</h3>
                <p>{pick(s.value)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>{t('flagHistoryTitle')}</h2>
        </div>
        <p className="lead" style={{ margin: 0 }}>{t('flagHistory')}</p>
      </section>
    </div>
  )
}
