import { useState } from 'react'
import cvFile from '../assets/PhanNguyenDucTrong_CV.pdf'
import logoImg from '../../public/tp_logo.png'
import downloadIcon from '../assets/images/download.png';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }

  return (
    <>
      <div className="bg-white h-[96px] shrink-0 sticky top-0 w-full z-[8]">
        <div className="flex flex-row items-center overflow-clip size-full">
          <div className="flex items-center justify-between px-4 relative w-full h-full">
            {/* Hamburger + divider + logo */}
            <div className="flex gap-4 items-center shrink-0">
              <button
                onClick={() => setIsOpen(true)}
                className="relative shrink-0 size-10 flex items-center justify-center cursor-pointer"
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <path d="M3 6H21M3 12H21M3 18H21" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              <div className="w-px h-6 bg-gray-border" />
              <a href="#">
                <div className="h-[56px] relative shrink-0 w-[37.07px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={logoImg} />
                </div>
              </a>
            </div>

            <a
              href={cvFile}
              download="PhanNguyenDucTrong_CV.pdf"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded border border-[#64c2db]"
            >
              <img className='w-5 h-5' src={downloadIcon} alt="Download" />
              <span className="gradient-text font-medium text-base leading-6 whitespace-nowrap">My Resum&eacute;</span>
            </a>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#dfe4ea] border-b border-solid inset-0 pointer-events-none" />
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-white flex flex-col overflow-hidden transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center gap-4 px-4 h-[96px] shrink-0 border-b border-[#dfe4ea]">
          <button
            onClick={() => setIsOpen(false)}
            className="size-10 flex items-center justify-center cursor-pointer shrink-0"
            aria-label="Close menu"
          >
            <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 18 18">
              <path d="M1 1L17 17M17 1L1 17" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <div className="flex items-center gap-[5.6px]">
            <img src={logoImg} alt="" className="w-[37px] h-[56px] object-contain" />
            <span className="text-[#111928] text-[39.2px] font-semibold leading-[56px]">ortfolio</span>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col px-4 py-10 gap-6 overflow-hidden">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-[#111928] text-[30px] font-bold leading-[38px] cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Information Section */}
        <div className="flex-1 flex flex-col px-4 py-10 gap-3 overflow-hidden border-t border-[#dfe4ea]">
          <h3 className="text-2xl font-semibold leading-[30px] text-[#64C2DB]">Information</h3>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-text-muted leading-[22px]">LOCATION</p>
              <p className="text-lg font-medium text-[#111928] leading-[26px]">Ho Chi Minh City, Vietnam</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-text-muted leading-[22px]">PHONE</p>
              <p className="text-lg font-medium text-[#111928] leading-[26px]">(+84) 934 128 854</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-text-muted leading-[22px]">MAIL</p>
              <p className="text-lg font-medium text-[#111928] leading-[26px]">phanductrong1008@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Follow Me Gradient Footer */}
        <div className="gradient-bg px-4 py-4 shrink-0 flex flex-col items-center gap-1">
          <p className="text-base font-semibold text-white leading-6 text-center">FOLLOW ME:</p>
          <div className="flex items-center justify-center gap-4">
            <a href="https://linkedin.com/in/pndtr" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg className="w-[23px] h-[23px]" viewBox="0 0 32 32" fill="none">
                <path d="M27.26 0H4.74A4.74 4.74 0 000 4.74v22.52A4.74 4.74 0 004.74 32h22.52A4.74 4.74 0 0032 27.26V4.74A4.74 4.74 0 0027.26 0z" fill="#0A66C2" />
                <path d="M11.52 24.32h-3.2V12.48h3.2v11.84zM9.92 11.2a1.92 1.92 0 110-3.84 1.92 1.92 0 010 3.84zm14.4 13.12h-3.2v-5.76c0-1.38-.03-3.15-1.92-3.15-1.92 0-2.21 1.5-2.21 3.05v5.86h-3.2V12.48h3.07v1.62h.04c.43-.81 1.47-1.67 3.03-1.67 3.24 0 3.84 2.13 3.84 4.9v6.99z" fill="white" />
              </svg>
            </a>
            <a href="https://github.com/PhanTrong1008" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg className="w-[23px] h-[23px]" viewBox="0 0 24 24" fill="white">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg className="w-[23px] h-[23px]" viewBox="0 0 24 24" fill="#111928">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
