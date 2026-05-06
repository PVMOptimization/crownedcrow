import { motion } from 'framer-motion'

/**
 * Two artists, two visual treatments.
 * Sierra (kawaii / colour) gets warmer crimson treatment with circular wash.
 * Josh (blackwork) gets stark high-contrast block.
 *
 * Real artist photos can replace the inline art. The decorative SVGs
 * are intentional placeholders that already feel branded — so launching
 * before the photoshoot is fine.
 */

function SierraPortrait() {
  return (
    <svg viewBox="0 0 320 380" className="w-full h-auto" aria-hidden>
      {/* circular wash like a stamp */}
      <circle cx="160" cy="180" r="150" fill="#7a1a1a" opacity="0.08" />
      <circle cx="160" cy="180" r="120" fill="#7a1a1a" opacity="0.12" />

      {/* simple cute ghost — kawaii reference */}
      <g transform="translate(80 90)">
        <path
          d="M0 50 C 0 22, 35 0, 80 0 C 125 0, 160 22, 160 50
             L 160 195
             L 144 175 L 128 195 L 112 175 L 96 195 L 80 175 L 64 195 L 48 175 L 32 195 L 16 175 L 0 195 Z"
          fill="#1a1411"
        />
        {/* pink cheeks */}
        <circle cx="48" cy="78" r="9" fill="#7a1a1a" opacity="0.5" />
        <circle cx="112" cy="78" r="9" fill="#7a1a1a" opacity="0.5" />
        {/* eyes */}
        <ellipse cx="58" cy="60" rx="6" ry="9" fill="#ece1c4" />
        <ellipse cx="102" cy="60" rx="6" ry="9" fill="#ece1c4" />
        <circle cx="59.5" cy="62" r="2" fill="#1a1411" />
        <circle cx="103.5" cy="62" r="2" fill="#1a1411" />
        {/* mouth */}
        <path d="M70 84 Q 80 92 90 84" stroke="#ece1c4" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>

      {/* tiny stars / sparkles */}
      <g fill="#a07d3a">
        <path d="M40 60 l4 4 l-4 4 l-4 -4 z" />
        <path d="M280 90 l5 5 l-5 5 l-5 -5 z" />
        <path d="M270 290 l4 4 l-4 4 l-4 -4 z" />
        <path d="M50 320 l5 5 l-5 5 l-5 -5 z" />
      </g>
    </svg>
  )
}

function JoshPortrait() {
  return (
    <svg viewBox="0 0 320 380" className="w-full h-auto" aria-hidden>
      {/* full ink block */}
      <rect x="0" y="0" width="320" height="380" fill="#1a1411" />

      {/* stark blackwork-style geometric ornament */}
      <g stroke="#ece1c4" strokeWidth="1.5" fill="none">
        <circle cx="160" cy="190" r="110" />
        <circle cx="160" cy="190" r="80" />
        <circle cx="160" cy="190" r="50" />
        {/* radiating spokes */}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 12
          return (
            <line
              key={i}
              x1={160 + Math.cos(a) * 50}
              y1={190 + Math.sin(a) * 50}
              x2={160 + Math.cos(a) * 110}
              y2={190 + Math.sin(a) * 110}
            />
          )
        })}
      </g>
      {/* solid filled core */}
      <circle cx="160" cy="190" r="22" fill="#ece1c4" />
      <circle cx="160" cy="190" r="10" fill="#1a1411" />

      {/* corner mark */}
      <g fill="#7a1a1a">
        <rect x="20" y="20" width="14" height="2" />
        <rect x="20" y="20" width="2" height="14" />
        <rect x="286" y="358" width="14" height="2" />
        <rect x="298" y="346" width="2" height="14" />
      </g>
    </svg>
  )
}

export default function Artists() {
  return (
    <section id="artists" className="relative">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        {/* Section folio */}
        <div className="flex items-baseline justify-between mb-12 md:mb-20">
          <div>
            <p className="font-body text-[11px] uppercase tracking-[0.24em] text-ink-700">
              The artists
            </p>
            <h2
              className="mt-2 font-display font-light leading-none text-ink-900"
              style={{
                fontSize: 'clamp(2.6rem, 7vw, 5.2rem)',
                fontVariationSettings: '"opsz" 144, "SOFT" 60',
              }}
            >
              Two hands.
              <span className="italic font-normal"> Two languages.</span>
            </h2>
          </div>
          <p className="hidden md:block font-hand text-3xl text-oxblood -rotate-3">
            n° 02
          </p>
        </div>

        {/* SIERRA — crimson wash side, image right, text left */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
          className="grid grid-cols-12 gap-6 md:gap-10 items-center"
        >
          <div className="col-span-12 md:col-span-7 order-2 md:order-1">
            <p className="font-hand text-3xl text-oxblood">Sierra</p>
            <h3
              className="mt-1 font-display font-normal italic leading-[0.95] text-ink-900"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)' }}
            >
              Colour, kawaii,
              <br /> the soft permanent.
            </h3>
            <p className="mt-6 max-w-xl font-body text-ink-800 text-[17px] leading-[1.65]">
              Sierra draws the kind of tattoo someone shows their grandmother
              and then their best friend within the same hour. Bright palettes,
              clean linework, characters with a face. She&rsquo;ll sit with you
              for an hour before the needle touches you.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-y-3 gap-x-8 max-w-md font-body text-sm">
              <dt className="text-ink-600">Works in</dt>
              <dd className="text-ink-900">Colour, illustrative, kawaii</dd>
              <dt className="text-ink-600">Booking</dt>
              <dd className="text-ink-900">By appointment</dd>
              <dt className="text-ink-600">Consultations</dt>
              <dd className="text-ink-900">Free, ~30 min</dd>
            </dl>

            <a
              href="#ritual"
              className="mt-8 inline-flex items-center gap-2 border-b-2 border-oxblood pb-1 font-display text-lg italic text-ink-900 hover:text-oxblood transition-colors"
            >
              Book with Sierra <span aria-hidden>→</span>
            </a>
          </div>
          <div className="col-span-12 md:col-span-5 order-1 md:order-2">
            <div className="bg-parchment-100 shadow-card p-4 md:p-6">
              <SierraPortrait />
              <p className="mt-3 font-body text-[11px] uppercase tracking-[0.18em] text-ink-700">
                Plate · Sierra
              </p>
            </div>
          </div>
        </motion.article>

        {/* divider — staggered, not centered */}
        <div className="my-20 md:my-28 grid grid-cols-12">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <div className="rule-thin" />
            <p className="mt-4 font-display italic text-center text-ink-700">
              and, on the other chair —
            </p>
          </div>
        </div>

        {/* JOSH — black-block side, image LEFT this time, text right (intentional inversion) */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
          className="grid grid-cols-12 gap-6 md:gap-10 items-center"
        >
          <div className="col-span-12 md:col-span-5">
            <div className="shadow-card">
              <JoshPortrait />
            </div>
            <p className="mt-3 font-body text-[11px] uppercase tracking-[0.18em] text-ink-700">
              Plate · Josh
            </p>
          </div>
          <div className="col-span-12 md:col-span-7 md:pl-10">
            <p className="font-hand text-3xl text-oxblood">Josh</p>
            <h3
              className="mt-1 font-display font-light leading-[0.95] text-ink-900"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)' }}
            >
              Blackwork.
              <br />
              <span className="italic">Geometry that holds.</span>
            </h3>
            <p className="mt-6 max-w-xl font-body text-ink-800 text-[17px] leading-[1.65]">
              Josh works in solid black — bold linework, ornament, geometry,
              the kind of piece that ages straight. He cares about how a tattoo
              looks in twenty years more than how it looks the day it heals.
              That is, frankly, what you want.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-y-3 gap-x-8 max-w-md font-body text-sm">
              <dt className="text-ink-600">Works in</dt>
              <dd className="text-ink-900">Blackwork, ornament, linework</dd>
              <dt className="text-ink-600">Booking</dt>
              <dd className="text-ink-900">By appointment</dd>
              <dt className="text-ink-600">Consultations</dt>
              <dd className="text-ink-900">Free, ~30 min</dd>
            </dl>

            <a
              href="#ritual"
              className="mt-8 inline-flex items-center gap-2 border-b-2 border-oxblood pb-1 font-display text-lg italic text-ink-900 hover:text-oxblood transition-colors"
            >
              Book with Josh <span aria-hidden>→</span>
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
