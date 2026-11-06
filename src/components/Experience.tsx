import type { CSSProperties, MouseEvent } from 'react'
import { D, type Role } from '../data/portfolio'
import { MONTHS, fmtDuration, monthsOf, parsePeriod } from '../data/period'
import { Pic, SectionHead, Words } from './common'

/* One timeline per employer, at one width per month for every company, so they compare across jobs.
   An employer with stages shows them as segments of that same bar, with a row for each below it.
   What was done on each project lives in the Projects section. */
function RoleTimeline({ role, longest }: { role: Role; longest: number }) {
  const t = parsePeriod(role.period)
  const pct = (months: number) => `${(months / t.months) * 100}%`
  /* Reads off the month under the pointer, snapped to the middle of that month */
  const scrub = (e: MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const i = Math.max(0, Math.min(t.months - 1, Math.floor(((e.clientX - r.left) / r.width) * t.months)))
    const mo = t.start.m + i
    el.style.setProperty('--x', `${((i + 0.5) / t.months) * r.width}px`)
    el.querySelector('.tl__tip')!.textContent = `${MONTHS[mo % 12]} ${t.start.y + Math.floor(mo / 12)}`
  }
  const segments: { period: string; key?: string }[] = role.stages ?? [role]
  return (
    <div className="tl" style={{ '--scale': `${(monthsOf(role) / longest) * 100}%` } as CSSProperties}>
      <div className="tl__axis">
        <div className="tl__scale tl__track" aria-hidden="true" onMouseMove={scrub}>
          {segments.map((s) => {
            const d = parsePeriod(s.period)
            const offset = (d.start.y - t.start.y) * 12 + (d.start.m - t.start.m)
            const cls = [d.end.open && 'is-open', s.key && `is-${s.key}`].filter(Boolean).join(' ')
            return <b key={s.period} className={cls || undefined} style={{ left: pct(offset), width: pct(d.months) }}></b>
          })}
          <span className="tl__tip"></span>
        </div>
      </div>
      {role.stages?.map((s) => (
        <div key={s.key} className="tl__group">
          <div className="tl__line">
            <div className="tl__name">
              <i className={`tl__key is-${s.key}`} aria-hidden="true"></i>
              <h4>{s.role}</h4>
              <span>{s.type}</span>
            </div>
            <div className="tl__when">
              <b>{s.period}</b>
              <span>{fmtDuration(monthsOf(s))}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Experience() {
  const longest = Math.max(...D.experience.map(monthsOf))
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <SectionHead index="01" label="Experience" title="Where I've worked." />
        <ol className="roles">
          {D.experience.map((e, i) => {
            const months = monthsOf(e)
            return (
              <li key={e.company} className="role">
                <div className="role__top">
                  <div className="role__name">
                    <div className="role__id">01.{i + 1}</div>
                    <h3 className="role__co">
                      <Words text={e.company} />
                    </h3>
                    <div className="role__title">{e.role}</div>
                  </div>
                  <div className="role__when">
                    <Pic src={e.logo} className="role__logo" />
                    <div className="role__period">
                      {e.period}
                      <span data-months={months}>{fmtDuration(months)}</span>
                    </div>
                    <div className="role__sub">
                      {e.workMode}, {e.location}
                    </div>
                  </div>
                </div>
                <RoleTimeline role={e} longest={longest} />
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
