import { motion } from 'framer-motion'

const HOURS_DISPLAY = [
  { day: 'Monday',    when: 'Closed' },
  { day: 'Tuesday',   when: '12 — 10' },
  { day: 'Wednesday', when: '12 — 10' },
  { day: 'Thursday',  when: '12 — 10' },
  { day: 'Friday',    when: '12 — 10' },
  { day: 'Saturday',  when: '12 — 10' },
  { day: 'Sunday',    when: '12 —  6' },
]

export default function Visit() {
  return (
    <section id="visit" className="relative">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {/* The "calling card" panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
            className="col-span-12 md:col-span-5 md:col-start-1"
          >
            <p className="font-body text-[11px] uppercase tracking-[0.24em] text-ink-700">
              Coming in
            </p>
            <h2
              className="mt-2 font-display font-light leading-[0.95] text-ink-900"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
            >
              Find us
              <br />
              <span className="italic">in Oakmont.</span>
            </h2>

            <address className="mt-8 not-italic font-display text-2xl md:text-3xl text-ink-900 leading-tight">
              6351 Oakmont Boulevard
              <br />
              Suite 156
              <br />
              <span className="italic">Fort Worth, Texas 76132</span>
            </address>

            <div className="mt-8 space-y-3">
              <a
                href="tel:+18177370770"
                className="cta-glow inline-flex items-center gap-3 bg-ink-900 px-6 py-4 font-body text-parchment-100 hover:bg-oxblood transition-colors duration-300"
              >
                <span className="font-display italic text-lg">Call</span>
                <span className="text-parchment-300">·</span>
                <span>(817) 737-0770</span>
              </a>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/?q=Crowned+Crow+Tattoo+Studio+6351+Oakmont+Blvd+Fort+Worth+TX"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-ink-900/70 px-5 py-3 font-body text-sm text-ink-900 hover:bg-ink-900 hover:text-parchment-100 transition-colors"
                >
                  Open in Maps
                </a>
                <a
                  href="https://instagram.com/crownedcrowtattoo"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-ink-900/70 px-5 py-3 font-body text-sm text-ink-900 hover:bg-ink-900 hover:text-parchment-100 transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>

            {/* Hours table — like a printed schedule */}
            <div className="mt-12">
              <p className="font-body text-[11px] uppercase tracking-[0.24em] text-ink-700 mb-3">
                Hours
              </p>
              <div className="rule-thin" />
              <dl className="font-body">
                {HOURS_DISPLAY.map(h => (
                  <div
                    key={h.day}
                    className="flex items-baseline justify-between border-b border-ink-900/10 py-2.5"
                  >
                    <dt className="text-ink-800">{h.day}</dt>
                    <dd
                      className={`tabular-nums ${
                        h.when === 'Closed' ? 'italic text-ink-600' : 'text-ink-900'
                      }`}
                    >
                      {h.when}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 font-display italic text-ink-700">
                Always by appointment. Walk-ins when the schedule allows.
              </p>
            </div>
          </motion.div>

          {/* Map — embedded, treated like a framed plate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1], delay: 0.15 }}
            className="col-span-12 md:col-span-7 md:col-start-6"
          >
            <div className="bg-parchment-100 shadow-card p-3 md:p-4">
              <div className="aspect-[4/5] md:aspect-[5/6] w-full overflow-hidden bg-ink-800 relative">
                <iframe
                  title="Crowned Crow Tattoo Studio location"
                  src="https://www.google.com/maps?q=6351+Oakmont+Blvd+Fort+Worth+TX+76132&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* a fine inner frame line */}
                <div className="pointer-events-none absolute inset-0 border border-ink-900/10" />
              </div>
              <div className="mt-3 flex items-baseline justify-between font-body text-[11px] uppercase tracking-[0.18em] text-ink-700">
                <span>Plate · The studio</span>
                <span>32.6831° N · 97.4011° W</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
