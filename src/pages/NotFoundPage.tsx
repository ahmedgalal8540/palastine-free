import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LangContext'

export function NotFoundPage() {
  const { t } = useLang()
  return (
    <div className="container page" style={{ textAlign: 'center' }}>
      <p style={{ fontSize: '4rem', margin: '40px 0 0' }}>🧭</p>
      <h1>{t('notFound')}</h1>
      <Link to="/" className="btn btn-primary" style={{ marginTop: 16 }}>
        {t('backHome')}
      </Link>
    </div>
  )
}
