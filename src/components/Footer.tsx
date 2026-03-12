export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 opacity-[0.02] bg-repeat" style={{ backgroundSize: '1024px 1024px' }} />

      <div className="relative max-w-[1440px] mx-auto px-[192px] max-xl:px-24 max-lg:px-12 max-md:px-6 pt-10 pb-20">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl font-semibold text-white leading-[30px] text-center">FOLLOW ME:</p>
            <p className="text-xs font-normal text-[#ced4da] leading-5 text-center">
              I'm always open to discussing new projects, opportunities, or technical collaborations.
            </p>
          </div>

          <div className="flex items-center gap-0 w-[400px] max-w-full justify-center">
            <div className="flex-1 h-px bg-[#ced4da] max-w-[94px]" />
            <div className="w-2 h-2 bg-accent rotate-45 mx-4" />
            <div className="flex-1 h-px bg-[#ced4da] max-w-[94px]" />
          </div>

          <div className="flex items-center gap-2">
            <a href="https://linkedin.com/in/pndtr" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
                <path d="M27.26 0H4.74A4.74 4.74 0 000 4.74v22.52A4.74 4.74 0 004.74 32h22.52A4.74 4.74 0 0032 27.26V4.74A4.74 4.74 0 0027.26 0z" fill="#0A66C2"/>
                <path d="M11.52 24.32h-3.2V12.48h3.2v11.84zM9.92 11.2a1.92 1.92 0 110-3.84 1.92 1.92 0 010 3.84zm14.4 13.12h-3.2v-5.76c0-1.38-.03-3.15-1.92-3.15-1.92 0-2.21 1.5-2.21 3.05v5.86h-3.2V12.48h3.07v1.62h.04c.43-.81 1.47-1.67 3.03-1.67 3.24 0 3.84 2.13 3.84 4.9v6.99z" fill="white"/>
              </svg>
            </a>
            <a href="https://github.com/PhanTrong1008" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function FollowMe() {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-base font-medium text-dark leading-6">FOLLOW ME:</p>
      <div className="flex items-center gap-2">
        <a href="https://linkedin.com/in/pndtr" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
            <path d="M27.26 0H4.74A4.74 4.74 0 000 4.74v22.52A4.74 4.74 0 004.74 32h22.52A4.74 4.74 0 0032 27.26V4.74A4.74 4.74 0 0027.26 0z" fill="#0A66C2"/>
            <path d="M11.52 24.32h-3.2V12.48h3.2v11.84zM9.92 11.2a1.92 1.92 0 110-3.84 1.92 1.92 0 010 3.84zm14.4 13.12h-3.2v-5.76c0-1.38-.03-3.15-1.92-3.15-1.92 0-2.21 1.5-2.21 3.05v5.86h-3.2V12.48h3.07v1.62h.04c.43-.81 1.47-1.67 3.03-1.67 3.24 0 3.84 2.13 3.84 4.9v6.99z" fill="white"/>
          </svg>
        </a>
        <a href="https://github.com/PhanTrong1008" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="black">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#1877F2">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
