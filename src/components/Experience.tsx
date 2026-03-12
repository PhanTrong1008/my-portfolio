import { useScrollAnimation } from '../hooks/useScrollAnimation'
import ritaLogo from '../assets/images/rita_logo.png'
import zdnLogo from '../assets/images/zdn_logo.png'

const experiences = [
  {
    company: 'RitaVõ',
    role: 'Fullstack Developer',
    period: 'June 2025 – April 2026',
    description:
      'Developed frontend features with Vue.js, implementing pixel-perfect UI from Figma and ensuring high performance. Built RESTful APIs and scalable backend services using Node.js and Express.js for task, project, and member management with RBAC. Implemented a real-time group chat module and collaborated with cross-functional teams to deliver features in an Agile/Scrum environment.',
    logo: ritaLogo,
  },
  {
    company: 'Zodinet',
    role: 'Fullstack Developer',
    period: 'February 2023 – January 2025',
    description:
      'Developed UI with Angular and maintained system features for stability, while building RESTful APIs using .NET, NestJS, and Node.js. Contributed to code reviews, coordinated team tasks during sprints, and collaborated with frontend developers to integrate APIs and deliver a seamless user experience.',
    logo: zdnLogo,
  },
]

export default function Experience() {
  const sectionRef = useScrollAnimation()

  return (
    <section className="relative bg-white py-20">
      <div className="absolute inset-x-[192px] top-10 pointer-events-none max-xl:inset-x-24 max-lg:inset-x-6">
        <p className="bg-text-watermark text-[120px] max-lg:text-[80px] font-black text-center leading-normal">Experience</p>
      </div>

      <div ref={sectionRef} className="fade-in-section max-w-[1440px] mx-auto px-[192px] max-xl:px-24 max-lg:px-6 max-md:px-6 flex flex-col items-center gap-10 relative">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-text-muted" />
            <p className="text-lg font-medium text-text-muted leading-[26px]">MY PROFESSIONAL JOURNEY</p>
          </div>
          <h2 className="text-[48px] max-md:text-[36px] font-bold text-dark leading-[58px] text-center">Experience</h2>
        </div>

        <div className="flex flex-col gap-10 w-full max-w-[1056px]">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-[40px] max-md:rounded-2xl border border-gray-border p-10 max-md:p-6 overflow-hidden transition-all duration-200 ease-out lg:hover:border-primary cursor-default"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-4">
                  <div className="h-12 flex items-center">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="h-12 w-auto object-contain transition-all duration-200 ease-out lg:grayscale lg:brightness-75 lg:group-hover:grayscale-0 lg:group-hover:brightness-100"
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-end max-md:items-start">
                    <p className="text-sm font-normal leading-[22px] text-text-muted transition-colors duration-200 ease-out lg:group-hover:text-dark">
                      {exp.role}
                    </p>
                    <div className="w-full h-px bg-gray-border" />
                    <p className="text-base font-semibold leading-6 text-dark transition-colors duration-200 ease-out lg:group-hover:text-primary-mid">
                      {exp.period}
                    </p>
                  </div>
                </div>

                <p className="text-base font-normal leading-6 text-text-muted transition-colors duration-200 ease-out lg:group-hover:text-dark">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
