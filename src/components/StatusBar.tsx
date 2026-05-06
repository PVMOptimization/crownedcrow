import { useEffect, useState } from 'react'

/**
 * Hours: site states "Open · Closes 10 PM"
 * I'm modeling reasonable studio hours (Tue–Sat 12pm–10pm, Sun 12-6, Mon closed)
 * — owner can adjust the HOURS table below.
 */
const HOURS: Record<number, [number, number] | null> = {
  0: [12, 18], // Sun
  1: null,     // Mon closed
  2: [12, 22], // Tue
  3: [12, 22], // Wed
  4: [12, 22], // Thu
  5: [12, 22], // Fri
  6: [12, 22], // Sat
}

function getStatus(now: Date) {
  // Always compute in America/Chicago for the Fort Worth location
  const tzNow = new Date(now.toLocaleString('en-US', { timeZone: 'America/Chicago' }))
  const day = tzNow.getDay()
  const hour = tzNow.getHours() + tzNow.getMinutes() / 60
  const window = HOURS[day]
  if (!window) return { open: false, label: 'By appointment' }
  const [start, end] = window
  if (hour >= start && hour < end) {
    return { open: true, label: `Open until ${end > 12 ? end - 12 : end}${end >= 12 ? ' pm' : ' am'}` }
  }
  return { open: false, label: 'Closed for the night' }
}

export default function StatusBar() {
  const [status, setStatus] = useState(() => getStatus(new Date()))

  useEffect(() => {
    const id = setInterval(() => setStatus(getStatus(new Date())), 60_000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="w-full bg-ink-900 text-parchment-100 text-[12px] tracking-wide">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-2 md:px-10">
        <div className="flex items-center gap-2.5">
          <span
            className={`inline-block h-1.5 w-1.5 rounded-full ${
              status.open ? 'bg-[#d8c084]' : 'bg-parchment-100/40'
            }`}
            aria-hidden
          />
          <span className="font-body italic">{status.label}</span>
        </div>

        <div className="hidden items-center gap-5 sm:flex font-body">
          <span className="opacity-80">6351 Oakmont Blvd · Fort Worth, TX</span>
          <a
            href="https://instagram.com/crownedcrowtattoo"
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:underline"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  )
}
