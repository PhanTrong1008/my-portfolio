import type { CSSProperties } from 'react'
import { D } from '../data/portfolio'
import { SectionHead } from './common'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <SectionHead index="03" label="Technical skills" title="Skills & expertise." />
        <ul className="skills">
          {D.skills.map((s) => (
            <li key={s.title} className="skill">
              <h3 className="skill__t">{s.title}</h3>
              <ul className="skill__tools" aria-label={`${s.title} tools`}>
                {s.tags.map((t, i) => (
                  <li key={t} style={{ '--i': i } as CSSProperties}>
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
