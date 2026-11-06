import { D } from '../data/portfolio'
import { Icon, Words } from './common'

export default function About() {
  const id = D.identity
  const edu = D.education
  return (
    <section id="about" className="section band">
      <div className="wrap">
        <div className="sbar">
          <span>
            <b>04</b> / About
          </span>
          <span>{id.fullName}</span>
        </div>
        <div className="about">
          <aside className="about__side">
            <div className="edu">
              <h3 className="micro">Education</h3>
              <p className="edu__deg">{edu.degree}</p>
              <p className="edu__sch">
                {edu.school}, {edu.years}
              </p>
              <ul className="edu__marks">
                {edu.highlights.map((h) => (
                  <li key={h.label}>
                    <b>
                      {h.value}
                      {h.unit && <small>{h.unit}</small>}
                    </b>{' '}
                    <span>{h.label}</span>
                  </li>
                ))}
              </ul>
              <a className="tlink" href={edu.diploma} target="_blank" rel="noopener noreferrer">
                View diploma
                <Icon name="arrow-up-right" size={12} />
              </a>
            </div>
            <div className="edu">
              <h3 className="micro">Languages</h3>
              <p className="edu__sch">{id.languages}</p>
            </div>
          </aside>
          <div className="about__main">
            <h2 className="h2">
              <Words text="From intern team lead to multi-tenant healthcare SaaS." />
            </h2>
            <p className="bio">{id.bio}</p>
            <ul className="caps">
              {D.milestones.map((c) => (
                <li key={c.title} className="cap">
                  <h3 className="cap__t">{c.title}</h3>
                  <p className="cap__d">{c.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
