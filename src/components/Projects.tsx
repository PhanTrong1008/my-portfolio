import { useScrollAnimationMultiple } from '../hooks/useScrollAnimation'
import { logoMap } from './Skills'
import imgKompact from '../assets/images/project_kompact.jpg'
import imgRestaff from '../assets/images/project_restaff.jpg'
import imgTimes from '../assets/images/project_times.jpg'
import imgTinher from '../assets/images/project_tinher.jpg'

const projects = [
  {
    title: 'Kompact Task Management',
    role: 'Fullstack Developer',
    period: 'June 2025 - April 2026',
    teamSize: '2 members',
    description:
      'Kompact Task Management is an internal task management and collaboration platform designed to streamline daily workflows within the company. The system includes task tracking, dashboard analytics, and a real-time group chat module that enables direct communication and collaboration between employees inside the application.',
    responsibilities: [
      'Developed and maintained frontend features using Vue.js, implementing pixel accurate UI from Figma designs, ensuring high performance and cross-browser compatibility.',
      'Developed and maintained frontend features using Vue.js, implementing pixel accurate UI from Figma designs, ensuring high performance and cross-browser compatibility.',
      'Contributed to the development of a real-time group chat module, enabling team collaboration, task-related discussions, and in-app communication across departments',
      'Collaborated closely with Business Analysts, Designer, and Engineers to analyze requirements, estimate tasks, and deliver features on schedule following Agile practices',
    ],
    technologies: ['Vue JS', 'Express JS', 'MongoDB'],
    image: imgKompact,
  },
  {
    title: 'Jupiter - Restaff',
    role: 'Frontend Developer',
    period: 'September 2024 - January 2025',
    teamSize: '2 members',
    description:
      'Maintained and developed modules for a web-based human resources management platform and enhanced system functionality. Focused on implementing new features and supporting ongoing system improvements.',
    responsibilities: [
      'Created UI using Angular, focusing on performance and user experience',
      'Maintained existing features to ensure system stability and efficiency',
      'Developed the leave transfer module',
      'Developed RESTful APIs using DotNet',
    ],
    technologies: ['Angular', 'NgRx', 'NgPrime', 'SCSS', 'C#', '.NET', 'Microsoft SQL Server'],
    image: imgRestaff,
  },
  {
    title: 'Times – Jobframe',
    role: 'Fullstack Developer',
    period: 'May 2023 - August 2024',
    teamSize: '4 members',
    description:
      'Developed a web-based platform for tracking work hours across assignments. It also provides organization, employees, their employee activity logs, and assignments management services for the time manager who has access to the premium version in the system.',
    responsibilities: [
      'Created UI using Angular, focusing on performance and user experience',
      'Developed a free version for users to track assignment times and manage their activity logs',
      'Developed business version for time managers to administrate their employee timesheet, organizations information, persons, assignments, and work time models',
      'Implemented caching techniques to reduce page load times',
      'Developed RESTful APIs using Express.js and Node.js',
    ],
    technologies: ['Angular', 'RxJS', 'SCSS', 'Express JS', 'Gremlin', 'Redis', 'JanusGraph'],
    image: imgTimes,
  },
  {
    title: 'Dating App',
    role: 'Team leader & Backend Developer',
    period: 'February 2023 - April 2023',
    teamSize: '4 members',
    description:
      'Developed a web-based platform for users to connect to their perfect match. Featuring personalized profiles, real-time chat, and finding the nearest friends allows users to create profiles according to personal preferences and communicate with their matched friends',
    responsibilities: [
      'Developed RESTful APIs using NestJS and Node.js',
      'Participated in code reviews and provided feedback to improve the quality with mentors',
      'Coordinated team activities, ensuring smooth collaboration and maintaining high team performance',
      'Managed tasks and ensured the team consistently delivered new features and improvements in each sprint, as agreed with mentors',
      'Collaborated closely with front-end developers to integrate back-end APIs, ensuring a seamless user experience',
    ],
    technologies: ['Next JS', 'SCSS', 'Nest JS', 'TypeORM', 'Tailwind CSS', 'Ant Design', 'React', 'Redux', 'PostgreSQL', 'Cloudinary'],
    image: imgTinher,
  },
]

export default function Projects() {
  const containerRef = useScrollAnimationMultiple(0.08)

  return (
    <section id="projects" className="bg-gray-light relative pt-20 max-md:pt-6">
      <div className="absolute inset-x-[13.33%] max-md:inset-x-0 max-md:left-[21px] top-10 max-md:top-6 pointer-events-none">
        <p className="bg-text-watermark max-md:bg-none max-md:text-[#F3F4F6] max-md:opacity-80 text-[120px] max-md:text-[64px] font-black text-center max-md:text-left leading-normal">PROJECTS</p>
      </div>

      <div ref={containerRef} className="section-container max-lg:px-6 max-md:px-4 flex flex-col items-center gap-6 relative">
        <div className="flex flex-col items-center gap-2 mb-10 max-md:mb-0">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-text-muted" />
            <p className="text-lg max-md:text-base font-medium text-text-muted leading-[26px] max-md:leading-6">THINGS I'VE WORKED ON</p>
          </div>
          <h2 className="text-[48px] max-md:text-[30px] font-bold text-dark leading-[58px] max-md:leading-[38px] text-center">Projects</h2>
        </div>

        {/* Full timeline — arrow + projects + bottom line, all in one continuous flow */}
        <div className="flex flex-col items-center w-full">
          {/* Timeline arrow start — desktop only */}
          <div className="hidden md:flex gap-4 lg:gap-10 w-full">
            <div className="flex-1" />
            <div className="flex flex-col items-center">
              <svg width="7" height="83" viewBox="0 0 6 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="3" y1="0" x2="3" y2="74" stroke="#111928" strokeWidth="1" />
                <path d="M3 74L0.113 77.887L3 82L5.887 77.887L3 74Z" fill="#111928" />
              </svg>
            </div>
            <div className="flex-1 max-w-[560px]" />
          </div>

          {projects.map((project, index) => (
            <div key={project.title} className="w-full">
              {/* ─── Desktop/Tablet: 3-column layout ─── */}
              <div className="hidden md:flex gap-4 lg:gap-10 w-full">
                {/* Left content — slides up */}
                <div
                  className="animate-on-scroll slide-up-project flex-1 flex flex-col gap-4"
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-center gap-4 h-10">
                    <div className="flex-1 h-px bg-dark" />
                    <span className="text-[18px] lg:text-[20px] font-semibold text-primary-mid leading-[26px] lg:leading-[40px] whitespace-nowrap">{project.period}</span>
                  </div>
                  <ProjectImage project={project} />
                  <TechTags technologies={project.technologies} />
                </div>

                {/* Center timeline — STATIC, always visible */}
                <div className="flex flex-col items-center">
                  <div className="w-px h-2 bg-dark" />
                  <TimelineDot />
                  <div className="flex-1 w-px bg-dark" />
                </div>

                {/* Right content — slides up */}
                <div
                  className="animate-on-scroll slide-up-project flex-1 flex flex-col gap-4 max-w-[560px] overflow-hidden"
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-[28px] font-semibold leading-[40px] gradient-text">{project.title}</h3>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-px bg-dark" />
                          <span className="text-base font-medium text-dark leading-6">{project.role}</span>
                        </div>
                        <div className="flex items-center justify-end gap-2 text-base leading-6">
                          <span className="text-[#d1d5db] font-normal">Teamsize:</span>
                          <span className="text-dark font-medium">{project.teamSize}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm font-normal text-text-body leading-[22px]">{project.description}</p>
                  </div>
                  <div className="w-full h-px bg-gray-border" />
                  <div className="flex flex-col gap-1.5">
                    <p className="text-base font-semibold text-dark leading-6">Responsibilities:</p>
                    {project.responsibilities.map((item, i) => (
                      <ul key={i} className="list-disc ml-[21px] text-sm font-normal text-dark leading-[22px]">
                        <li>{item}</li>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>

              {/* ─── Mobile: 2-column layout ─── */}
              <div className="md:hidden flex gap-2 w-full">
                {/* Left timeline — STATIC, always visible */}
                <div className="flex flex-col items-center flex-shrink-0 w-6">
                  <TimelineDot />
                  <div className="flex-1 w-px bg-dark" />
                </div>

                {/* Right content — slides up */}
                <div
                  className="animate-on-scroll slide-up-project flex-1 flex flex-col gap-4 min-w-0"
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <div className="flex flex-col gap-1">
                    <div className="h-6 flex items-center gap-4">
                      <span className="text-base font-semibold text-primary-mid leading-6 whitespace-nowrap">{project.period}</span>
                      <div className="flex-1 h-px bg-dark" />
                    </div>
                    <ProjectImage project={project} />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[30px] font-bold leading-[38px] gradient-text">{project.title}</h3>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-px bg-dark" />
                        <span className="text-sm font-medium text-dark leading-[22px]">{project.role}</span>
                      </div>
                      <div className="flex items-center justify-end gap-2">
                        <span className="text-sm font-normal text-[#d1d5db] leading-[22px]">Teamsize:</span>
                        <span className="text-sm font-normal text-dark leading-[22px]">{project.teamSize}</span>
                      </div>
                    </div>
                    <p className="text-sm font-normal text-text-body leading-[22px]">{project.description}</p>
                  </div>
                  <TechTags technologies={project.technologies} />
                  <div className="w-full h-px bg-gray-border" />
                  <div className="flex flex-col gap-1.5">
                    <p className="text-base font-semibold text-dark leading-6">Responsibilities:</p>
                    {project.responsibilities.map((item, i) => (
                      <ul key={i} className="list-disc ml-[21px] text-sm font-normal text-dark leading-[22px]">
                        <li>{item}</li>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connecting lines between projects — always visible, no animation */}
              {index < projects.length - 1 && (
                <div className="hidden md:flex gap-4 lg:gap-10 w-full">
                  <div className="flex-1" />
                  <div className="flex flex-col items-center">
                    <div className="w-px h-20 lg:h-40 bg-dark" />
                  </div>
                  <div className="flex-1 max-w-[560px]" />
                </div>
              )}
              {index < projects.length - 1 && (
                <div className="hidden max-md:flex gap-2">
                  <div className="w-6 flex-shrink-0 flex justify-center">
                    <div className="w-px h-12 bg-dark" />
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Bottom line — always visible */}
          <div className="hidden md:flex gap-4 lg:gap-10 w-full">
            <div className="flex-1" />
            <div className="flex flex-col items-center">
              <div className="w-px h-20 lg:h-40 bg-dark" />
            </div>
            <div className="flex-1 max-w-[560px]" />
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectImage({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="relative w-full lg:aspect-[476/260] md:aspect-[320/180] max-md:aspect-[326/180] rounded-lg overflow-hidden border border-gray-border bg-gray-50">
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-contain"
        onError={(e) => {
          const target = e.target as HTMLImageElement
          target.style.display = 'none'
          target.parentElement!.innerHTML = `
            <div class="absolute inset-0 gradient-bg flex items-center justify-center">
              <div class="text-center text-white p-8">
                <div class="text-3xl font-bold mb-2">${project.title}</div>
                <div class="text-base opacity-80">${project.role}</div>
              </div>
            </div>
          `
        }}
      />
    </div>
  )
}

function TechTags({ technologies }: { technologies: string[] }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-base font-semibold md:font-semibold max-md:font-medium text-dark leading-6">Technologies:</p>
      <div className="flex flex-wrap gap-4 max-md:gap-2">
        {technologies.map((tech) => (
          <div key={tech} className="flex items-center gap-1 border border-gray-tag rounded-lg p-2">
            {logoMap[tech] ? (
              <img src={logoMap[tech]} alt={tech} className="w-6 h-6 object-contain" />
            ) : (
              <div className="w-6 h-6 bg-gray-100 rounded" />
            )}
            <span className="text-sm font-medium text-text-light leading-[22px] max-md:hidden">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function TimelineDot() {
  return (
    <div className="w-6 h-6 rounded-full p-[2px] bg-[linear-gradient(78.4deg,#64C2DB_4.49%,#2662D9_87.94%)] flex items-center justify-center flex-shrink-0">
      <div className="w-full h-full rounded-full bg-[#fcfcfd] flex items-center justify-center">
        <div className="w-2 h-2 bg-accent rotate-45" />
      </div>
    </div>
  )
}

