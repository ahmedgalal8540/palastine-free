import { useLang } from '../i18n/LangContext'

/** Palestinian flag — standard 2:1, drawn as SVG so it stays crisp at any size. */
export function Flag({ mini = false, label }: { mini?: boolean; label?: string }) {
  const { t } = useLang()
  if (mini) {
    return (
      <span className="flag-mini" role="img" aria-label={label ?? t('flagTitle')}>
        <svg viewBox="0 0 24 12" width="100%" height="100%" aria-hidden="true">
          <rect width="24" height="4" fill="#141414" />
          <rect y="4" width="24" height="4" fill="#ffffff" />
          <rect y="8" width="24" height="4" fill="#007A3D" />
          <polygon points="0,0 9,6 0,12" fill="#CE1126" />
        </svg>
      </span>
    )
  }
  return (
    <div className="flag-big" role="img" aria-label={label ?? t('flagTitle')}>
      <svg viewBox="0 0 60 30" width="100%" aria-hidden="true">
        <rect width="60" height="10" fill="#141414" />
        <rect y="10" width="60" height="10" fill="#ffffff" />
        <rect y="20" width="60" height="10" fill="#007A3D" />
        <polygon points="0,0 22.5,15 0,30" fill="#CE1126" />
      </svg>
    </div>
  )
}
