import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useLang } from '../i18n/LangContext'
import { ui } from '../i18n/ui'
import type { Lang } from '../types'
import { Header } from './Header'
import { Footer } from './Footer'
import { ScrollTop } from './ScrollTop'

const TITLES: Record<string, [string, string]> = {
  '/': ['دليل فلسطين — الأرض والناس', 'Palestine Guide — Land & People'],
  '/geography': ['الجغرافيا — دليل فلسطين', 'Geography — Palestine Guide'],
  '/history': ['التاريخ — دليل فلسطين', 'History — Palestine Guide'],
  '/news': ['الأخبار — دليل فلسطين', 'News — Palestine Guide'],
  '/population': ['السكان — دليل فلسطين', 'Population — Palestine Guide'],
  '/flag': ['العلم — دليل فلسطين', 'Flag — Palestine Guide'],
  '/culture': ['الثقافة — دليل فلسطين', 'Culture — Palestine Guide'],
  '/figures': ['شخصيات — دليل فلسطين', 'Figures — Palestine Guide'],
  '/quiz': ['اختبر معرفتك — دليل فلسطين', 'Quiz — Palestine Guide'],
  '/about': ['حول — دليل فلسطين', 'About — Palestine Guide'],
}

export function Layout() {
  const { lang } = useLang()
  const { pathname } = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  // Dynamic document title per route+language
  useEffect(() => {
    const entry = TITLES[pathname]
    document.title = entry ? (lang === 'ar' ? entry[0] : entry[1]) : lang === 'ar' ? 'دليل فلسطين' : 'Palestine Guide'
  }, [pathname, lang])

  return (
    <>
      <a href="#main" className="skip-link">
        {ui.skipToContent[lang as Lang]}
      </a>
      <Header />
      <main id="main" className="page-enter" key={pathname}>
        <Outlet />
        <ScrollTop />
      </main>
      <Footer />
    </>
  )
}
