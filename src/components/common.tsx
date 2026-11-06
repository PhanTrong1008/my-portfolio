/* Shared icons and layout primitives */
import { Fragment, useState, type CSSProperties, type ImgHTMLAttributes, type ReactNode } from 'react'
import { D, layersOf } from '../data/portfolio'

const ICONS = {
  'arrow-right': <path d="M5 12h14M13 6l6 6-6 6" />,
  'arrow-down': <path d="M12 5v14M6 13l6 6 6-6" />,
  'arrow-up': <path d="M12 19V5M6 11l6-6 6 6" />,
  'arrow-up-right': <path d="M7 17 17 7M8 7h9v9" />,
  download: <path d="M12 4v11M7 10.5l5 5 5-5M5 20h14" />,
  'chevron-left': <path d="m15 18-6-6 6-6" />,
  'chevron-right': <path d="m9 18 6-6-6-6" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  menu: <path d="M4 9h16M4 15h16" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </>
  ),
  moon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />,
  copy: (
    <>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V6a2 2 0 0 1 2-2h8" />
    </>
  ),
  check: <path d="M5 12.5 10 17 19 7" />,
}

export function Icon({ name, size = 16 }: { name: keyof typeof ICONS; size?: number }) {
  return (
    <svg
      className={`i i-${name}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  )
}

/* The logo is drawn inline so its three planes follow the theme: --logo-t, --logo-l and --logo-r */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <svg className={`logo ${className}`} viewBox="-0.896 -3.030 3.264 4.910" aria-hidden="true" focusable="false">
      <path
        className="logo__l"
        d="M-0.866 1.350L0.000 1.850L0.000 0.700L0.736 1.125L0.736 0.275L0.736 0.125L0.000 -0.300L0.000 -1.150L-0.866 -1.650L-0.866 0.200ZM-0.130 -2.075L-0.866 -2.500L-0.866 -2.200L-0.390 -1.925Z"
      />
      <path
        className="logo__r"
        d="M0.260 0.850L0.000 0.700L0.000 1.850L0.260 1.700ZM1.472 -1.150L1.472 -0.300L0.736 0.125L0.736 1.125L1.472 0.700L2.338 0.200L2.338 -1.650Z"
      />
      <path
        className="logo__t"
        d="M-0.130 -2.075L-0.866 -1.650L0.000 -1.150L0.736 -1.575L1.472 -1.150L2.338 -1.650L0.736 -2.575L0.000 -3.000L-0.866 -2.500Z"
      />
    </svg>
  )
}

/* A headline split into words, so each can rise from behind its own line */
export function Words({ text }: { text: string }) {
  return text.split(' ').map((w, i, all) => (
    <Fragment key={i}>
      <span className="w" style={{ '--i': i } as CSSProperties}>
        <span>{w}</span>
      </span>
      {i < all.length - 1 ? ' ' : ''}
    </Fragment>
  ))
}

export function ResumeButton() {
  return (
    <a href={D.identity.resume} download={D.identity.resumeName} className="btn btn--line btn--sm" aria-label="Download Resume">
      Resume
      <Icon name="download" size={14} />
    </a>
  )
}

/* Image that renders a fallback instead of a broken-image icon */
export function Pic({
  src,
  alt = '',
  fallback = null,
  ...rest
}: ImgHTMLAttributes<HTMLImageElement> & { fallback?: ReactNode }) {
  const [failed, setFailed] = useState(!src)
  if (failed) return fallback
  return <img src={src} alt={alt} onError={() => setFailed(true)} {...rest} />
}

/* Picks out the technical terms so a recruiter can skim a contribution */
const KEY_TERMS =
  /(multi-tenant healthcare SaaS platform|Value Analysis Committee \(VAC\)|role-based access control \(RBAC\)|organization-level data isolation|sequential requests|Claude Code|production-ready features|pixel-accurate|RESTful APIs|real-time chat module|Leave Transfer module|C#\/\.NET APIs|Redis caching|JanusGraph|Clean Architecture|100% on-time delivery|rigorous code reviews)/g

/* Contributions as tagged rows: what kind of work, then the sentence */
export function Contribs({ items, focus = [] }: { items: string[]; focus?: string[] }) {
  return (
    <ul className="contribs">
      {items.map((t, i) => (
        <li key={i} className="contrib" style={{ '--i': i } as CSSProperties}>
          <span className="contrib__k">{focus[i] || ''}</span>
          <span className="contrib__t">{t.split(KEY_TERMS).map((s, j) => (j % 2 ? <strong key={j}>{s}</strong> : s))}</span>
        </li>
      ))}
    </ul>
  )
}

/* A thin-line section through the stack: interface, API, data */
export function StackMap({ stack }: { stack: string[] }) {
  return (
    <dl className="stackmap">
      {layersOf(stack).map((r) => (
        <div key={r.label} className="stackmap__row">
          <dt>{r.label}</dt>
          <dd>
            <ul className="tags">
              {r.tools.map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  )
}

export function SectionHead({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <header className="shead">
      <div className="sbar">
        <span>
          <b>{index}</b> / {label}
        </span>
      </div>
      <div className="shead__row">
        <h2 className="h2">
          <Words text={title} />
        </h2>
      </div>
    </header>
  )
}
