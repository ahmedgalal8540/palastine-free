import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useLang } from '../i18n/LangContext'
import { useTheme } from '../theme/useTheme'
import { langLabel } from '../i18n/helpers'
import { Flag } from './Flag'
import { Search } from './Search'
import { ACCENTS } from '../theme/themeStore'

const NAV = [
  { to: '/', key: 'home' },
  { to: '/geography', key: 'geography' },
  { to: '/history', key: 'history' },
  { to: '/news', key: 'news' },
  { to: '/population', key: 'population' },
  { to: '/flag', key: 'flag' },
  { to: '/culture', key: 'culture' },
  { to: '/figures', key: 'figures' },
  { to: '/quiz', key: 'quiz' },
  { to: '/about', key: 'about' },
] as const

export function Header() {
  const { t, lang, toggle } = useLang()
  const { theme, toggle: toggleTheme, accent, setAccent } = useTheme()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [lang])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <Flag mini />
          <span>{t('appName')}</span>
        </Link>

        <nav className={`main-nav ${open ? 'open' : ''}`} aria-label={t('menu')}>
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {t(item.key)}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <Search />
          <div className="accent-dots" role="group" aria-label={t('accentTheme')}>
            {ACCENTS.map((a) => (
              <button
                key={a.id}
                className={`accent-dot ${accent === a.id ? 'active' : ''}`}
                style={{ background: a.color }}
                onClick={() => setAccent(a.id)}
                aria-label={a.id}
                aria-pressed={accent === a.id}
                title={a.id}
              />
            ))}
          </div>
          <button
            className="lang-btn"
            onClick={toggle}
            aria-label={`${t('language')}: ${langLabel(lang)}`}
            title={langLabel(lang === 'ar' ? 'en' : 'ar')}
          >
            {lang === 'ar' ? 'EN' : 'ع'}
          </button>
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={t('toggleTheme')}
            title={theme === 'dark' ? t('themeLight') : t('themeDark')}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
            <span className="visually-hidden">{theme === 'dark' ? t('themeLight') : t('themeDark')}</span>
          </button>
          <button
            className="icon-btn menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={t('menu')}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}
