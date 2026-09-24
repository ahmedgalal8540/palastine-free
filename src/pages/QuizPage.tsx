import { useState } from 'react'
import { useLang } from '../i18n/LangContext'
import { quizQuestions, type QuizQuestion } from '../data/quiz'

const ROUND_SIZE = 10

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

interface RoundQuestion extends QuizQuestion {
  options: QuizQuestion['options']
  correct: number
}

function buildRound(): RoundQuestion[] {
  return shuffle(quizQuestions)
    .slice(0, ROUND_SIZE)
    .map((q) => {
      const correctOption = q.options[q.correct]
      const opts = shuffle(q.options)
      return { ...q, options: opts, correct: opts.indexOf(correctOption) }
    })
}

export function QuizPage() {
  const { t, pick } = useLang()
  const [started, setStarted] = useState(false)
  const [round, setRound] = useState<RoundQuestion[]>([])
  const [idx, setIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState<number | null>(null)
  const [done, setDone] = useState(false)

  const total = round.length
  const q = round[idx]

  function start() {
    setRound(buildRound())
    setStarted(true)
    setIdx(0)
    setScore(0)
    setAnswered(null)
    setDone(false)
  }

  function choose(i: number) {
    if (answered !== null) return
    setAnswered(i)
    if (i === q.correct) setScore((s) => s + 1)
  }

  function next() {
    if (idx + 1 >= total) {
      setDone(true)
    } else {
      setIdx((i) => i + 1)
      setAnswered(null)
    }
  }

  if (!started) {
    return (
      <div className="container page">
        <div className="page-head">
          <h1>{t('quiz')}</h1>
          <p className="lead">{t('quizIntro')}</p>
        </div>
        <div className="quiz-box" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '2.6rem', margin: '10px 0' }}>🎯</p>
          <p className="muted">
            {t('quizBankSize')}: {quizQuestions.length} · {t('quizRoundInfo')}
          </p>
          <button className="btn btn-primary" onClick={start}>
            {t('startQuiz')}
          </button>
        </div>
      </div>
    )
  }

  if (done) {
    const pct = Math.round((score / total) * 100)
    const msg = pct >= 90 ? t('quizPerfect') : pct >= 60 ? t('quizGood') : t('quizOk')
    return (
      <div className="container page">
        <div className="quiz-box quiz-score">
          <p className="big">{score} / {total}</p>
          <p style={{ fontSize: '1.1rem', fontWeight: 700 }}>{msg}</p>
          <button className="btn btn-primary" onClick={start}>
            {t('tryAgain')}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container page">
      <div className="page-head">
        <h1>{t('quiz')}</h1>
      </div>
      <div className="quiz-box">
        <div className="quiz-progress" aria-hidden="true">
          <div style={{ width: `${((idx + (answered !== null ? 1 : 0)) / total) * 100}%` }} />
        </div>
        <p className="muted">
          {t('yourScore')}: {score} · {idx + 1}/{total}
        </p>
        <h2 className="quiz-q">{pick(q.q)}</h2>
        <div className="quiz-options">
          {q.options.map((opt, i) => (
            <button
              key={i}
              className={
                'quiz-option ' +
                (answered === null ? '' : i === q.correct ? 'correct' : answered === i ? 'wrong' : '')
              }
              disabled={answered !== null}
              onClick={() => choose(i)}
            >
              {pick(opt)}
            </button>
          ))}
        </div>
        {answered !== null && (
          <p className={'quiz-feedback ' + (answered === q.correct ? 'good' : 'bad')}>
            {answered === q.correct ? '✓ ' + t('quizCorrect') : '✗ ' + t('quizWrong')}
          </p>
        )}
        {answered !== null && (
          <button className="btn btn-primary" style={{ marginTop: 12 }} onClick={next}>
            {idx + 1 >= total ? t('yourScore') : t('nextQuestion')}
          </button>
        )}
      </div>
    </div>
  )
}
