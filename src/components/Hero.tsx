import { FollowMe } from './Footer'
import { TechTag } from './Skills'
import cvFile from '../assets/PhanNguyenDucTrong_CV.pdf'
import logoJs from '../assets/images/logo_js.png'
import logoTs from '../assets/images/logo_ts.png'
import logoAngular from '../assets/images/logo_angular.png'

const techTags = [
  { name: 'Javascript', imageSrc: logoJs },
  { name: 'Typescript', imageSrc: logoTs },
  { name: 'Angular', imageSrc: logoAngular },
]

export default function Hero() {
  return (
    <section id="hero" className="relative h-[1024px] max-md:min-h-screen flex items-center overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/video_portfolio.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 27.73%)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-[192px] max-xl:px-24 max-lg:px-10 max-md:px-6 w-full">
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="flex flex-col items-center gap-2">
            <p className="text-lg font-medium text-text-muted leading-[26px]">Welcome to my site.</p>

            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col items-center gap-2 text-[60px] max-lg:text-[44px] max-md:text-[32px] font-bold leading-[1.2]">
                <div className="flex items-start gap-2 flex-wrap justify-center">
                  <span className="text-dark">I'm</span>
                  <span>
                    <span className="gradient-text">Trọng Phan</span>
                    <span className="text-dark">,</span>
                  </span>
                </div>
                <span className="text-dark">Software Engineer.</span>
              </div>

              <div className="flex items-center gap-4 flex-wrap justify-center">
                {techTags.map((tag) => (
                  <TechTag key={tag.name} name={tag.name} imageSrc={tag.imageSrc} />
                ))}
                <div className="flex items-center gap-1 p-2 cursor-pointer">
                  <span className="text-sm font-normal text-text-light">...more</span>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path d="M9 5L16 12L9 19" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <p className="text-base font-normal text-dark leading-6 max-w-[770px]">
            A full-stack web developer with {' '}
            <span className="gradient-text font-semibold">3 years of experience</span>{' '}
            in front-end and back-end technologies. Passionate about learning new technologies,
            building scalable web applications, and collaborating with teams. Eager to grow
            skills and contribute to company success.
          </p>

          <div className="flex items-start gap-4 flex-wrap justify-center">
            <a href="#contact" className="gradient-bg text-white font-medium text-base px-6 py-3 rounded flex items-center gap-2 leading-6">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                <path d="M15 3.5C13.5 2.5 11.5 2.5 10 4C8.5 2.5 6.5 2.5 5 3.5C2.5 5.5 3 9 10 15C17 9 17.5 5.5 15 3.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Get Started
            </a>
            <a href={cvFile} download="PhanNguyenDucTrong_CV.pdf" className="border border-primary rounded px-6 py-3 flex items-center gap-2 leading-6">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                <path d="M10 3.75V12.5M10 12.5L6.875 9.375M10 12.5L13.125 9.375M5 16.25H15" stroke="#5475e5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="gradient-text font-medium">My Resumé</span>
            </a>
          </div>

          {/* Follow me */}
          <FollowMe />
        </div>
      </div>
    </section>
  )
}
