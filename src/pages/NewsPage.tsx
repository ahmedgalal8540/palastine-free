import { useLang } from '../i18n/LangContext'
import { NewsSection } from '../components/NewsSection'

export function NewsPage() {
  const { t, pick } = useLang()
  return (
    <div className="container page">
      <div className="page-head">
        <h1>{t('news')}</h1>
        <p className="lead">
          {pick({
            ar: 'آخر المستجدات حول فلسطين من أخبار الأمم المتحدة — تتحدث تلقائيًا عند فتح الصفحة، مع روابط احتياطية عند انقطاع الاتصال.',
            en: 'The latest updates on Palestine from UN News — auto-refreshed when the page opens, with fallback links when offline.',
          })}
        </p>
      </div>
      <section className="section">
        <NewsSection limit={10} />
      </section>
    </div>
  )
}
