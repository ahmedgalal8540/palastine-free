import { useLang } from '../i18n/LangContext'
import { faq } from '../data/faq'
import { Reveal } from '../components/Reveal'

const SOURCES = [
  {
    ar: 'الجهاز المركزي للإحصاء الفلسطيني (PCBS) — الأرقام السكانية والديموغرافية.',
    en: 'Palestinian Central Bureau of Statistics (PCBS) — population and demographic figures.',
  },
  {
    ar: 'الأونروا (UNRWA) — بيانات اللاجئين الفلسطينيين المسجلين.',
    en: 'UNRWA — registered Palestinian refugees data.',
  },
  {
    ar: 'منظمة اليونسكو — مواقع التراث العالمي في فلسطين.',
    en: 'UNESCO — World Heritage sites in Palestine.',
  },
  {
    ar: 'موسوعات التاريخ العربي ومراجع تاريخ المشرق العاملة بالعربية.',
    en: 'Arabic-language encyclopedias of Arab and Levant history.',
  },
  {
    ar: 'وثائق وخطابات تاريخية عامة (وعد بلفور، إعلان الاستقلال، معاهدة العمريّة).',
    en: 'Public historical documents (Balfour Declaration, Declaration of Independence, Umar’s covenant).',
  },
]

export function AboutPage() {
  const { t, pick } = useLang()

  return (
    <div className="container page">
      <div className="page-head">
        <h1>{t('aboutTitle')}</h1>
        <p className="lead">{t('missionText')}</p>
      </div>

      <Reveal>
        <section className="card mb-20">
          <h2 style={{ marginTop: 0 }}>{t('audienceTitle')}</h2>
          <p>{t('audienceText')}</p>
        </section>
      </Reveal>

      <section className="section">
        <div className="section-head">
          <h2>{t('faqTitle')}</h2>
        </div>
        <p className="muted mb-20">{t('faqLead')}</p>
        <div>
          {faq.map((f, i) => (
            <Reveal key={f.id} delay={Math.min(i * 40, 200)}>
              <details className="faq-item">
                <summary>{pick(f.q)}</summary>
                <div className="faq-body">{pick(f.a)}</div>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>{t('sourcesTitle')}</h2>
        </div>
        <p className="muted mb-20">{t('sourcesIntro')}</p>
        <div className="culture-list">
          {SOURCES.map((s, i) => (
            <Reveal key={i} delay={Math.min(i * 40, 200)}>
              <div className="culture-row">
                <strong>📘</strong>
                <span>{pick(s)}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
