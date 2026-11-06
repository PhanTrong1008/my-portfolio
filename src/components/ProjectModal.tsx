import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { D, focus, projectOrg } from '../data/portfolio'
import { fmtDuration, monthsOf } from '../data/period'
import { Contribs, Icon, Pic, StackMap } from './common'

export default function ProjectModal({
  index,
  onNavigate,
  onClose,
}: {
  index: number
  onNavigate: (index: number) => void
  onClose: () => void
}) {
  const list = D.projects
  const n = list.length
  const p = list[index]
  const panelRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const downOnBackdrop = useRef(false)
  const [dir, setDir] = useState(0)
  const [closing, setClosing] = useState(false)
  const go = (k: number) => {
    setDir(k)
    onNavigate((index + k + n) % n)
  }
  const close = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onClose()
      return
    }
    setClosing(true)
    setTimeout(onClose, 170)
  }

  useEffect(() => {
    /* Hiding the page scrollbar must not shift the page behind the dialog */
    const root = document.documentElement
    const prev = document.body.style.overflow
    const returnFocus = document.activeElement as HTMLElement | null
    root.style.scrollbarGutter = 'stable'
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
      root.style.scrollbarGutter = ''
      returnFocus?.focus({ preventScroll: true })
    }
  }, [])

  useEffect(() => {
    closeRef.current?.focus({ preventScroll: true })
    if (scrollRef.current) scrollRef.current.scrollTop = 0
  }, [index])

  /* Re-subscribes each render so the handlers always see the current project */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
      else if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && scrollRef.current) {
        e.preventDefault()
        scrollRef.current.scrollBy({ top: e.key === 'ArrowDown' ? 90 : -90, behavior: 'smooth' })
      } else if (e.key === 'Tab' && panelRef.current) {
        const f = panelRef.current.querySelectorAll<HTMLElement>('button, a[href]')
        if (!f.length) return
        const first = f[0]
        const last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const prevP = list[(index - 1 + n) % n]
  const nextP = list[(index + 1) % n]

  return (
    <div
      className={`modal${closing ? ' is-closing' : ''}`}
      onMouseDown={(e) => {
        downOnBackdrop.current = e.target === e.currentTarget
      }}
      onClick={(e) => {
        if (downOnBackdrop.current && e.target === e.currentTarget) close()
      }}
    >
      <div ref={panelRef} className="modal__panel" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="modal__bar">
          <span>
            Case study 02.{index + 1}, {index + 1} of {n}
          </span>
          <div className="modal__ctrls">
            <button type="button" className="iconbtn" onClick={() => go(-1)} aria-label="Previous project">
              <Icon name="chevron-left" size={15} />
            </button>
            <button type="button" className="iconbtn" onClick={() => go(1)} aria-label="Next project">
              <Icon name="chevron-right" size={15} />
            </button>
            <button ref={closeRef} type="button" className="iconbtn" onClick={close} aria-label="Close case study">
              <Icon name="close" size={15} />
            </button>
          </div>
        </div>
        <div ref={scrollRef} className="modal__scroll">
          <div key={p.slug} className="modal__swap" style={{ '--dir': dir } as CSSProperties}>
            <Pic src={p.image} alt={`${p.title} interface`} className="modal__shot" />
            <div className="modal__body">
              <div>
                <div className="case__kicker">
                  <span>{projectOrg(p)}</span>
                  <span>{p.period}</span>
                </div>
                <h2 id="modal-title" className="modal__title">
                  {p.title}
                </h2>
                <p className="modal__desc">{p.desc}</p>
                <h3 className="micro modal__h">Responsibilities</h3>
                <Contribs items={p.responsibilities} focus={focus[p.slug]} />
              </div>
              <aside className="modal__aside">
                <dl className="kv">
                  <div>
                    <dt>company</dt>
                    <dd>{projectOrg(p)}</dd>
                  </div>
                  <div>
                    <dt>type</dt>
                    <dd>{p.kind}</dd>
                  </div>
                  <div>
                    <dt>role</dt>
                    <dd>{p.role}</dd>
                  </div>
                  {p.team && (
                    <div>
                      <dt>team</dt>
                      <dd>{p.team}</dd>
                    </div>
                  )}
                  <div>
                    <dt>period</dt>
                    <dd>{p.period}</dd>
                  </div>
                  <div>
                    <dt>duration</dt>
                    <dd>{fmtDuration(monthsOf(p))}</dd>
                  </div>
                </dl>
                <h3 className="micro modal__h">Tech stack</h3>
                <StackMap stack={p.stack} />
              </aside>
            </div>
          </div>
        </div>
        <div className="modal__foot">
          <button type="button" className="modal__nav" onClick={() => go(-1)}>
            <span className="micro">Previous</span>
            <span>{prevP.title}</span>
          </button>
          <button type="button" className="modal__nav modal__nav--next" onClick={() => go(1)}>
            <span className="micro">Next</span>
            <span>{nextP.title}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
