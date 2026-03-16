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
    <section className="relative bg-white py-20 max-md:py-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="section-container max-lg:px-6 max-md:px-4">
          <p className="bg-text-watermark text-[120px] max-md:text-[64px] font-black text-center leading-normal mt-10 max-md:mt-6">Experience</p>
        </div>
      </div>

      <div ref={sectionRef} className="fade-in-section section-container max-lg:px-6 max-md:px-4 flex flex-col items-center gap-10 max-md:gap-6 relative">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-text-muted" />
            <p className="text-lg max-md:text-base font-medium text-text-muted leading-[26px] max-md:leading-6">MY PROFESSIONAL JOURNEY</p>
          </div>
          <h2 className="text-[48px] max-md:text-[30px] font-bold text-dark leading-[58px] max-md:leading-[38px] text-center">Experience</h2>
        </div>

        <div className="flex flex-col gap-10 max-md:gap-6 w-full">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-[40px] max-md:rounded-2xl border border-gray-border p-10 max-md:p-4 overflow-hidden transition-all duration-200 ease-out lg:hover:border-primary cursor-default"
            >
              <div className="flex flex-col gap-6 max-md:gap-4">
                <div className="flex items-center justify-between">
                  <div className="h-12 max-md:h-10 flex items-center">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="h-12 max-md:h-10 w-auto object-contain transition-all duration-200 ease-out lg:grayscale lg:brightness-75 lg:group-hover:grayscale-0 lg:group-hover:brightness-100"
                    />
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-sm font-normal leading-[22px] text-text-muted max-md:text-dark transition-colors duration-200 ease-out lg:group-hover:text-dark">
                      {exp.role}
                    </p>
                    <p className="text-sm font-medium leading-[22px] text-primary-mid">
                      {exp.period}
                    </p>
                  </div>
                </div>

                <p className="text-base max-md:text-sm font-normal leading-6 max-md:leading-[22px] text-text-muted max-md:text-dark transition-colors duration-200 ease-out lg:group-hover:text-dark">
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
