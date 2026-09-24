import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LangContext'
import { Flag } from '../components/Flag'
import { areaFacts } from '../data/geo'

export function HomePage() {
  const { t, pick } = useLang()

  const stats = [
    { num: '≈ 27,000 كم²', numEn: '≈ 27,000 km²', lbl: t('statLandArea'), to: '/geography' },
    { num: '≈ 14 مليون', numEn: '≈ 14 million', lbl: t('statPopulation'), to: '/population' },
    { num: '16', numEn: '16', lbl: t('statGovernorates'), to: '/geography' },
    { num: 'القدس', numEn: 'Al-Quds', lbl: t('statCapital'), to: '/geography' },
    { num: '4 ألوان', numEn: '4 colors', lbl: t('statFlag'), to: '/flag' },
  ]

  const sections = [
    { to: '/geography', icon: '🗺️', key: 'geography' },
    { to: '/history', icon: '📜', key: 'history' },
    { to: '/news', icon: '📰', key: 'news' },
    { to: '/population', icon: '👥', key: 'population' },
    { to: '/flag', icon: '🏴', key: 'flag' },
    { to: '/culture', icon: '🍽️', key: 'culture' },
    { to: '/figures', icon: '✍️', key: 'figures' },
    { to: '/quiz', icon: '🎯', key: 'quiz' },
    { to: '/about', icon: 'ℹ️', key: 'about' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>{t('heroTitle')}</h1>
          <p className="lead">{t('heroSubtitle')}</p>
          <div className="cta-row">
            <Link to="/geography" className="btn btn-primary">
              {t('heroCta')}
            </Link>
            <Link to="/history" className="btn btn-ghost">
              {t('heroCta2')}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="container">
        <div className="stats-strip">
          {stats.map((s) => (
            <Link key={s.lbl} to={s.to} className="stat-card card-link">
              <div className="num">{pick({ ar: s.num, en: s.numEn })}</div>
              <div className="lbl">{s.lbl}</div>
            </Link>
          ))}
        </div>

        {/* Featured: quick area facts */}
        <section className="section">
          <div className="section-head">
            <h2>{t('geoTitle')}</h2>
            <Link className="more" to="/geography">
              {t('readMore')} ←
            </Link>
          </div>
          <div className="two-col">
            <div>
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
            </div>
            <Flag />
          </div>
        </section>

        {/* Sections grid */}
        <section className="section">
          <div className="section-head">
            <h2>{t('sections')}</h2>
          </div>
          <p className="muted mb-20">{t('sectionsIntro')}</p>
          <div className="cards-grid">
            {sections.map((s) => (
              <Link key={s.to} to={s.to} className="card card-link">
                <span className="tag">{s.icon}</span>
                <h3>{t(s.key)}</h3>
                <p>{pick(SECTION_BLURBS[s.key])}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

const SECTION_BLURBS: Record<string, { ar: string; en: string }> = {
  geography: {
    ar: 'المناطق الطبيعية، الحدود، المياه والمناخ في فلسطين.',
    en: 'Natural regions, borders, waters and climate of Palestine.',
  },
  history: {
    ar: 'محطات تاريخية من الكنعانيين إلى اليوم، برواية عربية.',
    en: 'Milestones from the Canaanites to today, told from Arabic sources.',
  },
  news: {
    ar: 'آخر الأخبار حول فلسطين بتحديث تلقائي.',
    en: 'The latest news on Palestine, auto-updated.',
  },
  population: {
    ar: 'من هم الفلسطينيون؟ كم عددهم في الأرض والشتات؟',
    en: 'Who are the Palestinians? How many at home and in the diaspora?',
  },
  flag: {
    ar: 'علم فلسطين ودلالة ألوانه والرموز الوطنية.',
    en: 'The Palestinian flag, its color meanings and national symbols.',
  },
  culture: {
    ar: 'المطبخ، التطريز، الدبكة، والأعياد الفلسطينية.',
    en: 'Palestinian cuisine, tatreez, dabke and holidays.',
  },
  figures: {
    ar: 'شعراء وكتّاب ومفكرون بارزون من فلسطين.',
    en: 'Prominent poets, writers and thinkers of Palestine.',
  },
  quiz: {
    ar: 'اختبر معرفتك بعشرة أسئلة سريعة.',
    en: 'Test your knowledge with ten quick questions.',
  },
  about: {
    ar: 'عن هذا الدليل وكيفية توسعته لاحقًا.',
    en: 'About this guide and how to extend it later.',
  },
}
