import { D } from '../data/portfolio'
import { useClock } from '../hooks/usePortfolio'
import { Icon, Pic, Words } from './common'

export default function Hero() {
  const id = D.identity
  const time = useClock()
  return (
    <section id="top" className="hero band">
      <div className="wrap">
        <div className="hero__in">
          <div className="hero__meta">
            <span className="status">
              <span className="status__dot" aria-hidden="true"></span>Open to full-time opportunities
            </span>
            <span className="hero__place">{id.location}</span>
            <span className="hero__time">
              {time} {id.timezone}
            </span>
            <span className="hero__links">
              <a className="tlink" href={D.social.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
                <Icon name="arrow-up-right" size={12} />
              </a>
              <a className="tlink" href={D.social.github} target="_blank" rel="noopener noreferrer">
                GitHub
                <Icon name="arrow-up-right" size={12} />
              </a>
            </span>
          </div>
          <div className="hero__main">
            <div className="hero__cols">
              <div className="hero__lead">
                <p className="hero__eyebrow">
                  {id.role} · {id.location}
                </p>
                <h1 className="hero__title">
                  <Words text={id.name} />
                </h1>
                <p className="hero__intro">
                  I build scalable web applications and B2B SaaS platforms, from pixel-perfect interfaces to the APIs behind them.
                </p>
                <div className="hero__actions">
                  <a href="#projects" className="btn btn--solid">
                    View Projects
                    <Icon name="arrow-down" size={15} />
                  </a>
                  <a href="#contact" className="btn btn--line">
                    Contact Me
                    <Icon name="arrow-up-right" size={15} />
                  </a>
                </div>
              </div>
              <figure className="hero__photo">
                <Pic src={id.portrait} alt={`Portrait of ${id.name}`} width="880" height="1100" />
              </figure>
            </div>
            <dl className="hero__facts">
              <div>
                <dt>Experience</dt>
                <dd>{id.years}+ years</dd>
              </div>
              <div>
                <dt>Stack</dt>
                <dd>React, Angular, Vue.js, Node.js, .NET, PostgreSQL, AWS</dd>
              </div>
              <div>
                <dt>Work Authorization</dt>
                <dd>{id.workAuth}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
