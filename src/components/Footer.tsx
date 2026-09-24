import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LangContext'
import { Flag } from './Flag'

export function Footer() {
  const { t } = useLang()
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link to="/" className="brand" style={{ textDecoration: 'none' }}>
          <Flag mini />
          <span>{t('appName')}</span>
        </Link>
        <p>{t('footerSource')}</p>
        <p>
          © {new Date().getFullYear()} · {t('footerNote')}
        </p>
      </div>
    </footer>
  )
}
