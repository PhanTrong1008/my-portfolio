import clsx from 'clsx'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const skillRows = [
  [
    { name: 'Angular', imageSrc: '../src/assets/images/logo_angular.png' },
    { name: 'Vue JS', imageSrc: '../src/assets/images/logo_vue.png' },
    { name: 'Next JS', imageSrc: '../src/assets/images/logo_nextjs.png' },
    { name: 'React', imageSrc: '../src/assets/images/logo_react.png' },
    { name: 'RxJS', imageSrc: '../src/assets/images/logo_rxjs.png' },
    { name: 'TypeORM', imageSrc: '../src/assets/images/logo_typeorm.png' },
  ],
  [
    { name: '.NET', imageSrc: '../src/assets/images/logo_net.png' },
    { name: 'Express JS', imageSrc: '../src/assets/images/logo_express.png' },
    { name: 'Nest JS', imageSrc: '../src/assets/images/logo_nestjs.png' },
    { name: 'JanusGraph', imageSrc: '../src/assets/images/logo_janusgraph.png' },
    { name: 'PostgreSQL', imageSrc: '../src/assets/images/logo_postgresql.png' },
    { name: 'SCSS', imageSrc: '../src/assets/images/logo_scss.png' },
  ],
  [
    { name: 'MongoDB', imageSrc: '../src/assets/images/logo_mongodb.png' },
    { name: 'C#', imageSrc: '../src/assets/images/logo_csharp.png' },
    { name: 'Typescript', imageSrc: '../src/assets/images/logo_ts.png' },
    { name: 'Javascript', imageSrc: '../src/assets/images/logo_js.png' },
    { name: 'NgRx', imageSrc: '../src/assets/images/logo_ngrx.png' },
    { name: 'Redux', imageSrc: '../src/assets/images/logo_redux.png' },
  ],
  [
    { name: 'NgPrime', imageSrc: '../src/assets/images/logo_ngprime.png' },
    { name: 'Microsoft SQL Server', imageSrc: '../src/assets/images/logo_microsoft.png' },
    { name: 'Cloudinary', imageSrc: '../src/assets/images/logo_cloudinary.png' },
    { name: 'Tailwind CSS', imageSrc: '../src/assets/images/logo_tailwind_css.png' },
    { name: 'Ant Design', imageSrc: '../src/assets/images/logo_ant_design.png' },
  ],
]

export default function Skills() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="skills" className="bg-gray-light">
      <div ref={sectionRef} className="fade-in-section max-w-[1440px] mx-auto px-[192px] max-xl:px-24 max-lg:px-10 max-md:px-6 flex flex-col items-center gap-10">
        <div className="flex flex-col items-center">
          <div className="w-px h-20 bg-gray-border" />
          <div className="w-6 h-px bg-gray-border" />
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-text-muted" />
            <p className="text-lg font-medium text-text-muted leading-[26px]">WHAT I HAVE</p>
          </div>
          <h2 className="text-[48px] max-md:text-[36px] font-bold leading-[58px] max-md:leading-[44px]">
            <span className="text-dark">Skills & </span>
            <span className="gradient-text">Expertise</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6 items-center w-full max-w-[876px]">
          {skillRows.map((row, rowIdx) => (
            <div key={rowIdx} className="flex gap-6 items-center justify-center flex-wrap">
              {row.map((skill) => (
                <SkillTag key={skill.name} name={skill.name} imageSrc={skill.imageSrc} />
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <div className="w-6 h-px bg-gray-border" />
          <div className="w-px h-20 bg-gray-border" />
        </div>
      </div>
    </section>
  )
}

function SkillTag({ name, imageSrc }: { name: string, imageSrc: string }) {
  return (
    <div className="tag-hover flex items-center gap-[4.8px] p-[9.6px] rounded-[9.6px] border-[1.2px] border-gray-tag bg-white/50 cursor-default group">
      <div className={clsx("relative shrink-0", "size-[28.8px]")}>
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imageSrc} />
      </div>
      <span className="text-[16.8px] font-medium text-text-light leading-[26.4px] group-hover:gradient-text whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

export function TechTag({ name, imageSrc }: { name: string, imageSrc: string }) {
  return (
    <div className="tag-hover flex items-center gap-1 p-2 rounded-lg border border-gray-tag bg-white/50 cursor-default group">
      <div className={clsx("relative shrink-0", "size-[28.8px]")}>
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imageSrc} />
      </div>
      <span className="text-sm font-medium text-text-light leading-[22px] group-hover:gradient-text whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}
