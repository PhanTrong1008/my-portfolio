import clsx from 'clsx'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import logoAngular from '../assets/images/logo_angular.png'
import logoVue from '../assets/images/logo_vue.png'
import logoNextjs from '../assets/images/logo_nextjs.png'
import logoReact from '../assets/images/logo_react.png'
import logoRxjs from '../assets/images/logo_rxjs.png'
import logoNet from '../assets/images/logo_net.png'
import logoExpress from '../assets/images/logo_express.png'
import logoNestjs from '../assets/images/logo_nestjs.png'
import logoPostgres from '../assets/images/logo_postgres.png'
import logoScss from '../assets/images/logo_scss.png'
import logoMongo from '../assets/images/logo_mongo.png'
import logoTs from '../assets/images/logo_ts.png'
import logoJs from '../assets/images/logo_js.png'
import logoMicrosoft from '../assets/images/logo_microsoft.png'
import logoTailwind from '../assets/images/logo_tailwind.png'
import logoFe from '../assets/images/fe.png';
import logoBe from '../assets/images/be.png';
import logoDb from '../assets/images/db.png';
import logoVersion from '../assets/images/version.png';
import logoApi from '../assets/images/api.png';
import logoCollab from '../assets/images/collab.png';
import logoGit from '../assets/images/logo_git.png';
import logoGithub from '../assets/images/logo_github.png';
import logoTeam from '../assets/images/logo_team.png'
import logoNgRx from '../assets/images/logo_ngrx.png';
import logoCSharp from '../assets/images/logo_csharp.png';
import logoRedis from '../assets/images/logo_redis.png';
import logoGremlin from '../assets/images/logo_gremlin.png';
import logoRedux from '../assets/images/logo_redux.png';
import logoCloudinary from '../assets/images/logo_cloudinary.png';

// Logo map for tech tags used in Projects section
export const logoMap: Record<string, string> = {
  'Angular': logoAngular,
  'Vue JS': logoVue,
  'Next JS': logoNextjs,
  'React': logoReact,
  'RxJS': logoRxjs,
  '.NET': logoNet,
  'Express JS': logoExpress,
  'Nest JS': logoNestjs,
  'PostgreSQL': logoPostgres,
  'SCSS': logoScss,
  'MongoDB': logoMongo,
  'Typescript': logoTs,
  'Javascript': logoJs,
  'Microsoft SQL Server': logoMicrosoft,
  'Tailwind CSS': logoTailwind,
  'NgRx': logoNgRx,
  'C#': logoCSharp,
  'Redis': logoRedis,
  'Gremlin': logoGremlin,
  'Redux': logoRedux,
  'Cloudinary': logoCloudinary
}

interface SkillCategory {
  title: string
  description: string
  icon: React.ReactNode
  tags: { name: string; logo: string }[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Front-end Development',
    description: 'Building modern, scalable user interfaces with modern frameworks and component libraries.',
    icon: (
      <img src={logoFe} />
    ),
    tags: [
      { name: 'Angular', logo: logoAngular },
      { name: 'React', logo: logoReact },
      { name: 'Next.JS', logo: logoNextjs },
      { name: 'Vue.JS', logo: logoVue },
      { name: 'RxJS', logo: logoRxjs },
      { name: 'SCSS', logo: logoScss },
      { name: 'Tailwind CSS', logo: logoTailwind },
    ],
  },
  {
    title: 'Back-end Development',
    description: 'Developing robust APIs and server-side systems using scalable backend architectures.',
    icon: (
      <img src={logoBe} />
    ),
    tags: [
      { name: 'Nest JS', logo: logoNestjs },
      { name: '.NET', logo: logoNet },
      { name: 'Express JS', logo: logoExpress },
    ],
  },
  {
    title: 'Database Management',
    description: 'Designing and managing efficient databases for scalable and high-performance applications.',
    icon: (
      <img src={logoDb} />
    ),
    tags: [
      { name: 'PostgreSQL', logo: logoPostgres },
      { name: 'MongoDB', logo: logoMongo },
      { name: 'Microsoft SQL Server', logo: logoMicrosoft },
    ],
  },
  {
    title: 'Version Control',
    description: 'Managing source code, version history, and team collaboration using Git workflows.',
    icon: (
      <img src={logoVersion} />
    ),
    tags: [
      { name: 'Git', logo: logoGit },
      { name: 'GitHub', logo: logoGithub },
    ],
  },
  {
    title: 'API & Integration',
    description: 'Integrating APIs, data services, and third-party platforms into modern applications.',
    icon: (
      <img src={logoApi} />
    ),
    tags: [
      { name: 'TypeORM', logo: '' },
      { name: 'JanusGraph', logo: '' },
      { name: 'Cloudinary', logo: '' },
    ],
  },
  {
    title: 'Product & Business Collaboration',
    description: 'Collaborated with teams to analyze requirements and deliver solutions.',
    icon: (
      <img src={logoCollab} />
    ),
    tags: [
      { name: 'Working with BA, Designers, Engineers', logo: logoTeam },
    ],
  },
]

export default function Skills() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="skills" className="bg-gray-light">
      <div ref={sectionRef} className="fade-in-section section-container max-lg:px-10 max-md:px-4 flex flex-col items-center gap-10 max-md:gap-4">
        <div className="flex flex-col items-center">
          <div className="w-px h-20 max-md:h-10 bg-gray-border" />
          <div className="w-6 h-px bg-gray-border" />
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-text-muted" />
            <p className="text-lg font-medium text-text-muted leading-[26px]">WHAT I HAVE</p>
          </div>
          <h2 className="text-[48px] max-md:text-[30px] font-bold leading-[58px] max-md:leading-[38px]">
            <span className="text-dark">Skills & </span>
            <span className="gradient-text">Expertise</span>
          </h2>
        </div>

        {/* Skill Cards Grid */}
        <div className="flex flex-col gap-6 max-md:gap-4 items-start w-full">
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 max-md:gap-4 w-full">
            {skillCategories.map((category) => (
              <SkillCard key={category.title} category={category} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-6 h-px bg-gray-border" />
          <div className="w-px h-20 max-md:h-10 bg-gray-border" />
        </div>
      </div>
    </section>
  )
}

function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <div className="group relative rounded-lg overflow-hidden border border-gray-border lg:hover:border-primary transition-colors duration-300 bg-white cursor-default lg:h-[362px] flex flex-col">
      {/* Header bar */}
      <div className="bg-[#f3f4f6] relative w-full border-b border-gray-border shrink-0">
        <div className="flex items-center justify-between px-4 py-3">
          <p className="skill-card-title font-semibold text-base leading-6 text-dark whitespace-nowrap">
            {category.title}
          </p>
          {/* Traffic light dots */}
          <div className="flex gap-1 items-center shrink-0">
            <div className="rounded-full size-2 bg-[#f56060]" />
            <div className="rounded-full size-2 bg-[#fcd34d]" />
            <div className="rounded-full size-2 bg-[#2cd673]" />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 items-center px-4 py-5 flex-1">
        {/* Icon */}
        <div className="size-10 rounded-lg lg:group-hover:text-white flex items-center justify-center text-[#0f0f0f] transition-colors duration-300">
          {category.icon}
        </div>

        {/* Description */}
        <p className="text-sm font-normal leading-[22px] text-text-muted text-center lg:group-hover:text-dark max-lg:text-dark transition-colors duration-300 min-h-[44px]">
          {category.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 items-start justify-center w-full">
          {category.tags.map((tag) => (
            <div key={tag.name} className="flex gap-1 items-center p-2 rounded-lg border border-gray-tag relative tag-hover">
              {tag.logo && (
                <div className="relative shrink-0 size-6">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={tag.logo} />
                </div>
              )}
              <span className="text-sm font-medium text-text-light leading-[22px] whitespace-nowrap">
                {tag.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function TechTag({ name, imageSrc }: { name: string, imageSrc: string }) {
  return (
    <div className="tag-hover flex items-center gap-1 p-2 rounded-lg border border-gray-tag bg-white/50 cursor-default group">
      <div className={clsx("relative shrink-0", "size-[24px]")}>
        {imageSrc ? (
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imageSrc} />
        ) : (
          <div className="absolute inset-0 bg-gray-100 rounded" />
        )}
      </div>
      <span className="text-sm font-medium text-text-light leading-[22px] group-hover:gradient-text whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}
