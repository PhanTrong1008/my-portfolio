export const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/* Periods in the data above are always 'Mon YYYY — Mon YYYY' or 'Mon YYYY — Present' */
const parseMonth = (s: string) => {
  if (s === 'Present') {
    const now = new Date()
    return { m: now.getMonth(), y: now.getFullYear(), open: true }
  }
  const [mon, y] = s.split(' ')
  return { m: MONTHS.indexOf(mon), y: +y, open: false }
}
export function parsePeriod(period: string) {
  const [start, end] = period.split(' — ').map(parseMonth)
  return { months: (end.y - start.y) * 12 + (end.m - start.m) + 1, start, end }
}

/* Length of a role or project. Counting calendar months includes both end months, so an entry can state its real length */
export const monthsOf = (x: { months?: number; period: string }) => x.months || parsePeriod(x.period).months

export function fmtDuration(months: number) {
  if (months < 12) return `${months} mo`
  const y = Math.floor(months / 12)
  const m = months % 12
  return `${y} yr${y > 1 ? 's' : ''}${m ? ` ${m} mo` : ''}`
}
