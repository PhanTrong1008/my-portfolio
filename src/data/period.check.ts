/* Run with: node --experimental-strip-types src/data/period.check.ts */
import { fmtDuration, monthsOf, parsePeriod } from './period.ts'

const eq = (got: unknown, want: unknown) => {
  if (got !== want) throw new Error(`got ${got}, want ${want}`)
}

eq(parsePeriod('Feb 2023 — Apr 2023').months, 3) // both end months count
eq(parsePeriod('Feb 2023 — Dec 2024').months, 23) // across a year boundary
eq(parsePeriod('Apr 2023 — Dec 2024').start.m, 3)
eq(parsePeriod('Jun 2026 — Present').end.open, true)
eq(parsePeriod('Jun 2026 — Dec 2026').end.open, false)
eq(monthsOf({ period: 'Apr 2025 — Apr 2026', months: 12 }), 12) // a stated length wins over the count
eq(monthsOf({ period: 'Apr 2025 — Apr 2026' }), 13)
eq(fmtDuration(11), '11 mo')
eq(fmtDuration(12), '1 yr')
eq(fmtDuration(23), '1 yr 11 mo')
eq(fmtDuration(24), '2 yrs')
console.log('period checks passed')
