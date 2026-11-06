import { useEffect, useLayoutEffect, useState } from 'react'
import { fmtDuration } from '../data/period'

export function useScrolled() {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 16)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return scrolled
}

/* `ids` must be stable: pass a module-level constant */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState('')
  useEffect(() => {
    const on = () => {
      let cur = ''
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.38) cur = id
      })
      const h = document.documentElement
      if (cur && window.innerHeight + window.scrollY >= h.scrollHeight - 4) cur = ids[ids.length - 1]
      setActive(cur)
    }
    on()
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on)
    return () => {
      window.removeEventListener('scroll', on)
      window.removeEventListener('resize', on)
    }
  }, [ids])
  return active
}

const easternTime = () =>
  new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: 'America/New_York' }).format(new Date())

export function useClock() {
  const [time, setTime] = useState(easternTime)
  useEffect(() => {
    const id = setInterval(() => setTime(easternTime()), 20000)
    return () => clearInterval(id)
  }, [])
  return time
}

/* A duration counts up while its bar draws */
function countUp(el: HTMLElement, delay: number) {
  const months = Number(el.dataset.months)
  const t0 = performance.now() + delay
  el.style.minWidth = `${el.offsetWidth}px`
  const tick = (now: number) => {
    const p = Math.min(1, Math.max(0, (now - t0) / 1000))
    el.textContent = fmtDuration(Math.max(1, Math.round(months * (1 - Math.pow(1 - p, 3.2)))))
    if (p < 1) requestAnimationFrame(tick)
    else el.style.minWidth = ''
  }
  requestAnimationFrame(tick)
}

const REVEAL_PARTS = '.sbar, .shead__row, .role__co, .tl__axis, .tl__group, .case, .skill, .about__main .h2, .cap, .contact__title'
const REVEAL_WHOLE = '.role__id, .role__title, .role__when, .about__side, .bio, .contact__grid > *'

/* Entrance motion, once per element, plus the reading-progress bar under the nav. Everything starts
   from the layout's final position, and none of it runs when the viewer prefers reduced motion. */
export function useMotion() {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const io = new IntersectionObserver(
      (entries) => {
        entries
          .filter((e) => e.isIntersecting)
          .forEach((e, i) => {
            const el = e.target as HTMLElement
            const delay = Math.min(i, 7) * 55
            io.unobserve(el)
            el.style.setProperty('--d', `${delay}ms`)
            el.setAttribute('data-in', '')
            el.setAttribute('data-seen', '')
            el.querySelectorAll<HTMLElement>('[data-months]').forEach((n) => countUp(n, delay + 180))
            /* Back to the plain styles, without replaying their transitions */
            setTimeout(() => {
              el.style.transition = 'none'
              el.removeAttribute('data-rv')
              el.removeAttribute('data-in')
              el.style.removeProperty('--d')
              void el.offsetWidth
              el.style.removeProperty('transition')
            }, 2000)
          })
      },
      { rootMargin: '0px 0px -7% 0px', threshold: 0.01 },
    )
    document.querySelectorAll(`${REVEAL_PARTS}, ${REVEAL_WHOLE}`).forEach((el) => {
      el.setAttribute('data-rv', el.matches(REVEAL_PARTS) ? 'parts' : 'whole')
      io.observe(el)
    })
    document.documentElement.classList.add('motion')

    const bar = document.querySelector<HTMLElement>('.nav__prog')
    let queued = false
    const paint = () => {
      queued = false
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`
    }
    const queue = () => {
      if (!queued) {
        queued = true
        requestAnimationFrame(paint)
      }
    }
    window.addEventListener('scroll', queue, { passive: true })
    window.addEventListener('resize', queue)
    paint()

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', queue)
      window.removeEventListener('resize', queue)
      document.documentElement.classList.remove('motion')
    }
  }, [])
}
