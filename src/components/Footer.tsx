import linkedInLogo from '../assets/images/linkedin.png';
import facebookLogo from '../assets/images/fb.png';
import githubLogo from '../assets/images/github.png';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 opacity-[0.02] bg-repeat" style={{ backgroundSize: '1024px 1024px' }} />

      <div className="relative section-container max-lg:px-[192px] max-md:px-4 pt-10 max-md:pt-6 pb-20 max-md:pb-10">
        <div className="flex flex-col items-center gap-4 max-md:gap-3">
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl max-md:text-lg font-semibold max-md:font-bold text-white leading-[30px] max-md:leading-[26px] text-center">FOLLOW ME:</p>
            <p className="text-xs font-normal text-[#ced4da] leading-5 text-center">
              I'm always open to discussing new projects, opportunities, or technical collaborations.
            </p>
          </div>

          <div className="flex items-center gap-0 w-[400px] max-w-full justify-center">
            <div className="flex-1 h-px bg-[#ced4da] max-w-[94px] max-md:max-w-[80px]" />
            <div className="w-2 h-2 bg-accent rotate-45 mx-4" />
            <div className="flex-1 h-px bg-[#ced4da] max-w-[94px] max-md:max-w-[80px]" />
          </div>

          <div className="flex items-center gap-2">
            <a href="https://linkedin.com/in/pndtr" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full flex items-center justify-center">
              <img className='w-8 h-8' src={linkedInLogo} alt="" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full flex items-center justify-center">
              <img className='w-8 h-8' src={facebookLogo} alt="" />
            </a>
            <a href="https://github.com/PhanTrong1008" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full flex items-center justify-center">
              <img className='w-8 h-8' src={githubLogo} alt="" />
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
          <img className='w-8 h-8' src={linkedInLogo} alt="" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full flex items-center justify-center">
          <img className='w-8 h-8' src={facebookLogo} alt="" />
        </a>
        <a href="https://github.com/PhanTrong1008" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full flex items-center justify-center">
          <img className='w-8 h-8' src={githubLogo} alt="" />
        </a>
      </div>
    </div>
  )
}
