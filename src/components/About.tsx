import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { FollowMe } from './Footer'
import avatarImg from '../assets/images/avatar_portfolio.png'

export default function About() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="about" className="relative bg-white">
      <div ref={sectionRef} className="fade-in-section relative h-[1024px] max-lg:h-[938px] max-md:h-[1207px] overflow-clip">
        {/* Avatar - desktop: centered at bottom, tablet: right side, mobile: bottom left */}
        <div className="z-10 absolute bottom-0 left-1/2 -translate-x-1/2 h-[712px] w-[523px] max-xl:w-[400px] max-xl:h-[550px] max-lg:left-auto max-lg:right-[98px] max-lg:top-[373px] max-lg:bottom-auto max-lg:translate-x-0 max-lg:h-[565px] max-lg:w-[415px] max-lg:ml-0 max-md:left-[16px] max-md:right-auto max-md:top-[720px] max-md:bottom-auto max-md:translate-x-0 max-md:w-[358px] max-md:h-[487px] max-md:ml-0 -ml-[10.5px]">
          <img
            src={avatarImg}
            alt="Trong Phan"
            className="absolute inset-0 w-full h-full object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              target.parentElement!.innerHTML =
                '<div class="w-full h-full bg-gradient-to-br from-[#5475e5] to-[#1c3fb7] rounded-2xl flex items-center justify-center text-white text-8xl font-bold">TP</div>'
            }}
          />
        </div>

        {/* Centered max-width container */}
        <div className="relative h-full section-container max-lg:max-w-none max-lg:px-0">
          {/* Background watermark - desktop */}
          <div className="absolute bottom-0 h-[1024px] max-lg:hidden pointer-events-none right-0">
            <p className="bg-text-watermark text-[160px] font-black leading-normal text-right sticky top-0 translate-y-full whitespace-nowrap">ABOUT</p>
          </div>

          {/* Background watermark - tablet & mobile (rotated 90°) */}
          <div className="hidden max-lg:block absolute top-[-45px] max-md:top-[629px] bottom-0 right-[40px] max-md:right-[16px] h-[983px] max-md:h-[578px] pointer-events-none">
            <div className="flex h-[545.6px] max-md:h-[294px] items-center justify-center sticky top-0 w-[145px] max-md:w-[97px]">
              <div className="flex-none rotate-90">
                <p className="bg-text-watermark text-[120px] max-md:text-[80px] font-black leading-normal text-right w-[545.6px] max-md:w-auto whitespace-nowrap">ABOUT</p>
              </div>
            </div>
          </div>

          {/* Section header + description - top left */}
          <div className="absolute top-[120px] left-0 max-lg:top-[40px] max-lg:left-[40px] max-lg:max-w-[440px] max-md:top-[24px] max-md:left-[16px] max-md:max-w-[348px] flex flex-col gap-4 max-w-[520px]">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-text-muted" />
                <p className="text-lg font-medium text-text-muted leading-[26px]">WHO I AM</p>
              </div>
              <div className="flex gap-3 items-start text-[48px] font-bold leading-[58px] whitespace-nowrap max-lg:flex-col max-lg:gap-0">
                <span className="text-dark">More about</span>
                <span className="gradient-text">Myself</span>
              </div>
            </div>

            <p className="text-base font-normal leading-6">
              <span className="text-dark">A full-stack web developer with almost </span>
              <span className="font-semibold text-primary-mid">3 years of experience</span>
              <span className="text-dark"> in front-end and back-end technologies. Passionate about learning new technologies, building scalable web applications, and collaborating with teams. Eager to grow skills and contribute to company success.</span>
            </p>
          </div>

          {/* Information section - left side */}
          <div className="absolute bottom-[404px] left-0 max-lg:bottom-auto max-lg:top-[366px] max-lg:left-[40px] max-md:top-[382px] max-md:left-[16px] flex flex-col gap-3 whitespace-nowrap">
            <h3 className="text-[28px] font-semibold leading-[40px] gradient-text">Information</h3>
            <div className="flex flex-col gap-2 font-medium">
              <InfoItem label="LOCATION" value="Ho Chi Minh City, Vietnam" />
              <InfoItem label="PHONE" value="(+84) 934 128 854" />
              <InfoItem label="MAIL" value="phanductrong1008@gmail.com" />
            </div>
          </div>

          {/* Follow Me - bottom left */}
          <div className="absolute bottom-[80px] left-0 max-lg:bottom-[40px] max-lg:left-[40px] max-md:bottom-auto max-md:top-[654px] max-md:left-[16px] w-[270px]">
            <FollowMe />
          </div>

          {/* Open to Work + FULL STACK CODER - bottom right */}
          <div className="z-20 absolute bottom-[80px] right-0 max-lg:bottom-[126px] max-lg:right-[40px] max-md:bottom-[43px] max-md:right-[16px] flex flex-col gap-6 max-md:gap-4 items-end justify-center">
            <div className="bg-[#f9fafb] flex items-center gap-2 px-4 py-2 rounded-full">
              <div className="w-3 h-3 bg-green rounded-full" />
              <span className="text-base font-medium text-dark leading-6 whitespace-nowrap">Open to Work</span>
            </div>
            <div className="flex flex-col items-end font-black text-[104px] max-xl:text-[80px] max-lg:text-[60px] max-md:text-[40px] leading-none tracking-[3px] whitespace-nowrap">
              <p className="gradient-text">FULL</p>
              <p className="gradient-text">STACK</p>
              <p className="gradient-text">CODER</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm text-text-body leading-[22px]">{label}</span>
      <span className="text-lg font-medium text-dark leading-[26px]">{value}</span>
    </div>
  )
}
