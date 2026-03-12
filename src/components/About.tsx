import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { FollowMe } from './Footer'
import avatarImg from '../assets/images/avatar_portfolio.png'
// import cvFile from '../assets/PhanNguyenDucTrong_CV.pdf'

export default function About() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="about" className="relative bg-white">
      <div ref={sectionRef} className="fade-in-section max-w-[1440px] mx-auto px-[192px] max-xl:px-24 max-lg:px-10 max-md:px-6 py-20">
        <div className="absolute right-[13%] top-[37px] pointer-events-none">
          <p className="bg-text-watermark text-[120px] max-lg:text-[80px] font-black text-right leading-normal">ABOUT</p>
        </div>

        <div className="flex gap-6 items-start max-md:flex-col relative">
          <div className="flex-1 max-w-[665px] flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-text-muted" />
                <p className="text-lg font-medium text-text-muted leading-[26px]">WHO I AM</p>
              </div>
              <div className="flex gap-3 items-start text-[48px] max-md:text-[36px] font-bold leading-[58px] max-md:leading-[44px]">
                <span className="text-dark">More about</span>
                <span className="gradient-text">Myself</span>
              </div>
            </div>

            <p className="text-base font-normal text-text-body leading-6">
              Lorem ipsum dolor sit amet consectetur. Blandit facilisi non donec sed lacus. Id sem lectus tellus hendrerit lacinia. Sollicitudin elit vestibulum quis sit. Sit nec aliquet fringilla vel nisl pharetra vulputate erat. Vulputate orci leo porttitor massa cras. Dictum sit adipiscing nulla cras cursus egestas ultrices sed. Consequat habitant sit faucibus volutpat netus suspendisse.
            </p>

            <div className="w-full h-px bg-gray-border" />

            <div className="flex flex-col gap-3">
              <h3 className="text-[28px] font-semibold leading-[40px] gradient-text">Information</h3>
              <div className="flex flex-col gap-2 font-medium">
                <InfoItem label="LOCATION" value="Ho Chi Minh City, Vietnam" />
                <InfoItem label="PHONE" value="(+84) 934 128 854" />
                <InfoItem label="MAIL" value="phanductrong1008@gmail.com" />
              </div>
            </div>

            <div className="w-full h-px bg-gray-border" />

            <div className="flex flex-col gap-3">
              <h3 className="text-[28px] font-semibold leading-[40px] gradient-text">Education</h3>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <p className="text-lg font-semibold text-dark leading-[26px]">
                      International Program: Bachelor of Computer and Information Sciences AUT
                    </p>
                    <p className="text-sm font-normal text-text-body leading-[22px]">
                      University of Science (HCMUS) and Auckland University of Technology (New Zealand)
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <DetailRow label="Classification:" value="Computer Science" />
                    <DetailRow label="GPA:" value="3.72 / 4.0" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-lg font-semibold text-dark leading-[26px]">English Qualification</p>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-text-gray" />
                    <span className="text-base font-normal text-text-gray leading-6">Level:</span>
                    <span className="text-base font-medium text-dark leading-6">Proficient</span>
                    <span className="text-base font-medium text-primary-mid leading-6">(IELTS 6.5)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-[665px] max-md:w-full flex flex-col items-center justify-center pl-20 max-md:pl-0 py-10 gap-6">
            <div className="relative w-full aspect-square max-w-[475px]">
              <img
                src={avatarImg}
                alt="Trong Phan"
                className="w-full h-full object-contain rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  target.parentElement!.innerHTML =
                    '<div class="w-full h-full bg-gradient-to-br from-[#5475e5] to-[#1c3fb7] rounded-2xl flex items-center justify-center text-white text-8xl font-bold">TP</div>'
                }}
              />
              <div className="absolute top-4 right-4 bg-[#f9fafb] flex items-center gap-2 px-4 py-2 rounded-full">
                <div className="w-3 h-3 bg-green rounded-full" />
                <span className="text-base font-medium text-dark leading-6">Open to Work</span>
              </div>
            </div>

            <div className="flex gap-4 w-full">
              <a href="#contact" className="flex-1 gradient-bg text-white font-medium text-base px-6 py-3 rounded flex items-center justify-center gap-2 leading-6">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <path d="M3 5L10 10L17 5M3 15H17V5H3V15Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Contact Me
              </a>
              {/* <a href={cvFile} download="PhanNguyenDucTrong_CV.pdf" className="flex-1 border border-primary rounded px-6 py-3 flex items-center justify-center gap-2 leading-6">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <path d="M10 3.75V12.5M10 12.5L6.875 9.375M10 12.5L13.125 9.375M5 16.25H15" stroke="#5475e5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="gradient-text font-medium">My Resumé</span>
              </a> */}
            </div>

            <FollowMe />
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

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-1.5 h-1.5 bg-text-gray" />
      <span className="text-base font-normal text-text-gray leading-6">{label}</span>
      <span className="text-base font-medium text-dark leading-6">{value}</span>
    </div>
  )
}
