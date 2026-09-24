import { HashRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LangContext'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { GeographyPage } from './pages/GeographyPage'
import { HistoryPage } from './pages/HistoryPage'
import { NewsPage } from './pages/NewsPage'
import { PopulationPage } from './pages/PopulationPage'
import { FlagPage } from './pages/FlagPage'
import { CulturePage } from './pages/CulturePage'
import { FiguresPage } from './pages/FiguresPage'
import { QuizPage } from './pages/QuizPage'
import { AboutPage } from './pages/AboutPage'
import { NotFoundPage } from './pages/NotFoundPage'

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/geography" element={<GeographyPage />} />
            <Route path="/history" element={<HistoryPage />} />
          <Route path="/news" element={<NewsPage />} />
            <Route path="/population" element={<PopulationPage />} />
            <Route path="/flag" element={<FlagPage />} />
            <Route path="/culture" element={<CulturePage />} />
            <Route path="/figures" element={<FiguresPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </LanguageProvider>
  )
}
