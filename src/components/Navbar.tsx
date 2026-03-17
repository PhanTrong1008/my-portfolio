import { useState, useEffect } from 'react'
import cvFile from '../assets/PhanNguyenDucTrong_CV.pdf'
import logoTP from '../../public/tp_logo.png';
import downloadIcon from '../assets/images/download.png';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${scrolled ? 'shadow-[0_1px_0_#dfe4ea]' : 'border-b border-gray-border'
        }`}
    >
      <div className="section-container max-lg:px-6 max-md:px-3.5 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-1">
          <div className="content-stretch flex gap-[5.6px] items-center max-w-[931px] relative shrink-0" data-name="logo">
            <div className="h-[56px] relative shrink-0 w-[37.07px]" data-name="logo 2">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={logoTP} />
            </div>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[56px] not-italic relative shrink-0 text-[#111928] text-[39.2px] whitespace-nowrap max-lg:hidden">ortfolio</p>
          </div>
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
          href={cvFile}
          download="PhanNguyenDucTrong_CV.pdf"
          className="inline-flex items-center gap-2 px-6 py-3 rounded border border-primary"
        >
          <img className='w-5 h-5' src={downloadIcon} alt="Download" />
          <span className="gradient-text font-medium text-base leading-6">My Resumé</span>
        </a>
      </div>
    </nav>
  )
}
