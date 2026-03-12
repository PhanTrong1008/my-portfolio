import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? 'shadow-[0_1px_0_#dfe4ea]' : 'border-b border-gray-border'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-[135px] max-xl:px-16 max-lg:px-6 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-1">
          <span className="bg-dark text-white text-lg px-2 py-1.5 rounded-lg shadow-[0_4px_12px_rgba(13,10,44,0.06)] hidden lg:flex items-center gap-1 leading-[26px]">
            <span className="font-normal">&lt;/</span>
            <span className="font-semibold">Dev</span>
            <span className="font-normal">&gt;</span>
          </span>
          <span className="text-[28px] font-semibold text-dark leading-[40px]">.Portfolio</span>
        </a>

        <div className="flex items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-lg font-normal text-dark rounded-lg hover:bg-[#f0f5ff] hover:text-primary-mid transition-colors leading-[26px]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-2 px-6 py-3 rounded border border-primary"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
            <path d="M10 3.75V12.5M10 12.5L6.875 9.375M10 12.5L13.125 9.375M5 16.25H15" stroke="#5475e5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="gradient-text font-medium text-base leading-6">My Resumé</span>
        </a>
      </div>
    </nav>
  )
}
