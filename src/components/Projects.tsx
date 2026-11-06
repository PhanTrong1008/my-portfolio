import { useState } from 'react'
import { D, projectOrg, type Project } from '../data/portfolio'
import { fmtDuration, monthsOf } from '../data/period'
import { Icon, SectionHead, StackMap, Words } from './common'

/* Size follows weight: the three long projects get a row each, the two short ones share the last */
const CASE_LAYOUT = ['full', 'flip', 'full', 'half', 'half']

/* Every project keeps a frame for its image. Until `image` is set the frame stands as a placeholder, at the size
   the image will take, so filling it in does not move anything on the page */
function CaseShot({ p, open }: { p: Project; open: () => void }) {
  const [ok, setOk] = useState(!!p.image)
  if (!ok)
    return (
      <div className="case__shot case__shot--empty" aria-hidden="true">
        <span>
          <b>Project image</b>1920 × 1042
        </span>
      </div>
    )
  return (
    <button type="button" className="case__shot" onClick={open} aria-label={`Open case study: ${p.title}`}>
      <img src={p.image} alt="" width="1920" height="1042" loading="lazy" onError={() => setOk(false)} />
    </button>
  )
}

function CaseStudy({ p, i, onOpen }: { p: Project; i: number; onOpen: (slug: string) => void }) {
  const open = () => onOpen(p.slug)
  return (
    <article className={`case case--${CASE_LAYOUT[i % CASE_LAYOUT.length]}`} aria-labelledby={`pt-${p.slug}`}>
      <div className="case__main">
        <div className="case__kicker">
          <span>02.{i + 1}</span>
          <span>{projectOrg(p)}</span>
        </div>
        <h3 className="case__title" id={`pt-${p.slug}`}>
          <button type="button" onClick={open}>
            <Words text={p.title} />
          </button>
        </h3>
        <div className="case__when">
          <b>{p.period}</b>
          <span>{fmtDuration(monthsOf(p))}</span>
        </div>
        <p className="case__sum">{p.tagline}</p>
        <p className="case__role">
          <span>Role</span>
          {p.role}
        </p>
        <ul className="case__points">
          {p.points.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
        <StackMap stack={p.stack} />
      </div>
      <div className="case__side">
        <CaseShot p={p} open={open} />
        <div className="case__cta">
          <button type="button" className="tlink" onClick={open}>
            Read case study
            <Icon name="arrow-right" size={13} />
          </button>
        </div>
      </div>
    </article>
  )
}

export default function Projects({ onOpen }: { onOpen: (slug: string) => void }) {
  return (
    <section id="projects" className="section band">
      <div className="wrap">
        <SectionHead index="02" label="Projects" title="Selected projects." />
        <div className="mosaic">
          {D.projects.map((p, i) => (
            <CaseStudy key={p.slug} p={p} i={i} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  )
}
