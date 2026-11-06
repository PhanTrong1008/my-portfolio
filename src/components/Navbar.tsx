import { Fragment, useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type MouseEvent } from 'react'
import { D } from '../data/portfolio'
import { useActiveSection, useScrolled } from '../hooks/usePortfolio'
import { Icon, Logo, ResumeButton } from './common'

const NAV_ITEMS = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]
const NAV_IDS = NAV_ITEMS.map((i) => i.id)

export default function Navbar({ theme, onToggleTheme }: { theme: string; onToggleTheme: (ev: MouseEvent<HTMLButtonElement>) => void }) {
  const scrolled = useScrolled()
  const active = useActiveSection(NAV_IDS)
  const [menu, setMenu] = useState(false)
  const listRef = useRef<HTMLElement>(null)
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const [ind, setInd] = useState({ x: 0, w: 0, on: false, ready: false })

  useLayoutEffect(() => {
    const measure = () => {
      const el = linkRefs.current[active]
      const c = listRef.current
      if (!el || !c || !c.offsetParent) {
        setInd((s) => ({ ...s, on: false }))
        return
      }
      const r = el.getBoundingClientRect()
      const cr = c.getBoundingClientRect()
      setInd((s) => ({ x: r.left - cr.left, w: r.width, on: true, ready: s.ready || s.on }))
    }
    measure()
    window.addEventListener('resize', measure)
    document.fonts.ready.then(measure)
    return () => window.removeEventListener('resize', measure)
  }, [active])

  useEffect(() => {
    if (!menu) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenu(false)
    }
    const onResize = () => {
      if (window.innerWidth > 960) setMenu(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [menu])

  return (
    <Fragment>
      <header className={`nav${scrolled || menu ? ' is-scrolled' : ''}`}>
        <div className="wrap nav__in">
          <a href="#top" className="brand" aria-label={`${D.identity.name}, back to top`}>
            <Logo className="brand__mark" />
            <span className="brand__text">
              <span className="brand__name">{D.identity.name}</span>
              <span className="brand__role">{D.identity.role}</span>
            </span>
          </a>
          <div className="nav__right">
            <nav ref={listRef} className="navlinks" aria-label="Primary">
              <span
                aria-hidden="true"
                className={`navlinks__ind${ind.ready ? ' is-ready' : ''}`}
                style={{ transform: `translateX(${ind.x}px)`, width: ind.w, opacity: ind.on ? 1 : 0 }}
              ></span>
              {NAV_ITEMS.map((it) => (
                <a
                  key={it.id}
                  href={`#${it.id}`}
                  ref={(el) => {
                    linkRefs.current[it.id] = el
                  }}
                  className={`navlink${active === it.id ? ' is-active' : ''}`}
                  aria-current={active === it.id ? 'true' : undefined}
                >
                  {it.label}
                </a>
              ))}
            </nav>
            <ResumeButton />
            <button
              type="button"
              className="iconbtn"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              <Icon key={theme} name={theme === 'dark' ? 'sun' : 'moon'} size={15} />
            </button>
            <button
              type="button"
              className="iconbtn nav__menu"
              onClick={() => setMenu((m) => !m)}
              aria-expanded={menu}
              aria-controls="mobile-menu"
              aria-label={menu ? 'Close menu' : 'Open menu'}
            >
              <Icon name={menu ? 'close' : 'menu'} size={15} />
            </button>
          </div>
        </div>
        <i className="nav__prog" aria-hidden="true"></i>
      </header>
      {menu && (
        <nav id="mobile-menu" className="sheet" aria-label="Mobile">
          {NAV_ITEMS.map((it, i) => (
            <a key={it.id} href={`#${it.id}`} style={{ '--i': i } as CSSProperties} onClick={() => setMenu(false)}>
              <span className="sheet__n">0{i + 1}</span>
              {it.label}
            </a>
          ))}
        </nav>
      )}
    </Fragment>
  )
}
