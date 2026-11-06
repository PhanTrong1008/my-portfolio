import { useCallback, useEffect, useState, type MouseEvent } from 'react'
import { flushSync } from 'react-dom'
import { D } from './data/portfolio'
import { useMotion } from './hooks/usePortfolio'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProjectModal from './components/ProjectModal'
import Projects from './components/Projects'
import Skills from './components/Skills'

const storedTheme = () => {
  try {
    return localStorage.getItem('pf-theme') === 'dark' ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

export default function App() {
  /* Beige is the identity, so it is the default for everyone; dark is opt-in */
  const [theme, setTheme] = useState(storedTheme)
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])
  useMotion()

  const toggleTheme = (ev: MouseEvent<HTMLButtonElement>) => {
    const next = theme === 'dark' ? 'light' : 'dark'
    const apply = () => {
      flushSync(() => setTheme(next))
      document.documentElement.dataset.theme = next
    }
    try {
      localStorage.setItem('pf-theme', next)
    } catch {
      /* The theme just won't persist */
    }
    if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      apply()
      return
    }
    /* The new theme spreads out in a circle from the button */
    const r = ev.currentTarget.getBoundingClientRect()
    const x = r.left + r.width / 2
    const y = r.top + r.height / 2
    const reach = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))
    document
      .startViewTransition(apply)
      .ready.then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${reach}px at ${x}px ${y}px)`] },
          { duration: 560, easing: 'cubic-bezier(.2,.7,.2,1)', pseudoElement: '::view-transition-new(root)' },
        )
      })
      .catch(() => {})
  }

  const openProject = useCallback((slug: string) => {
    setOpenIdx(D.projects.findIndex((p) => p.slug === slug))
  }, [])
  const closeProject = useCallback(() => setOpenIdx(null), [])

  return (
    <>
      <a href="#main" className="skip">
        Skip to content
      </a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <Experience />
        <Projects onOpen={openProject} />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
      {openIdx !== null && <ProjectModal index={openIdx} onNavigate={setOpenIdx} onClose={closeProject} />}
    </>
  )
}
