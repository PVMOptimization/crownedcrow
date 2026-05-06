import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Each plate is a placeholder SVG composition that already feels branded.
 * Owner can replace with real photos by swapping the `art` field for an <img />.
 */
type Plate = {
  id: string
  numeral: string
  title: string
  artist: 'Sierra' | 'Josh'
  caption: string
  art: React.ReactNode
  // visual-spec for asymmetric layout
  span: 'wide' | 'tall' | 'square' | 'narrow'
  offset?: 'left' | 'right' | 'center'
}

const PlateA = (
  <svg viewBox="0 0 400 500" className="block w-full h-auto" aria-hidden>
    <rect width="400" height="500" fill="#ece1c4" />
    {/* rose / floral kawaii reference */}
    <g transform="translate(200 250)">
      <circle r="120" fill="#7a1a1a" opacity="0.1" />
      <g>
        <circle cx="0" cy="0" r="60" fill="#7a1a1a" />
        <circle cx="0" cy="0" r="40" fill="#9a2424" />
        <circle cx="0" cy="0" r="20" fill="#561010" />
        {/* petals */}
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 8
          return (
            <ellipse
              key={i}
              cx={Math.cos(a) * 80}
              cy={Math.sin(a) * 80}
              rx="28"
              ry="44"
              transform={`rotate(${(i * 45)} ${Math.cos(a) * 80} ${Math.sin(a) * 80})`}
              fill="#7a1a1a"
              opacity="0.55"
            />
          )
        })}
      </g>
      <g stroke="#1a1411" strokeWidth="2.5" fill="none" strokeLinecap="round">
        <path d="M -50 100 Q -80 130 -90 180" />
        <path d="M 50 100 Q 80 130 90 180" />
        <path d="M 0 100 L 0 200" />
      </g>
    </g>
  </svg>
)

const PlateB = (
  <svg viewBox="0 0 400 400" className="block w-full h-auto" aria-hidden>
    <rect width="400" height="400" fill="#1a1411" />
    {/* blackwork ornamental panel */}
    <g stroke="#ece1c4" strokeWidth="1.4" fill="none">
      <rect x="40" y="40" width="320" height="320" />
      <rect x="60" y="60" width="280" height="280" />
      {/* inner mandala */}
      <circle cx="200" cy="200" r="120" />
      <circle cx="200" cy="200" r="90" />
      <circle cx="200" cy="200" r="60" />
      {Array.from({ length: 16 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 16
        return (
          <line
            key={i}
            x1={200 + Math.cos(a) * 60}
            y1={200 + Math.sin(a) * 60}
            x2={200 + Math.cos(a) * 120}
            y2={200 + Math.sin(a) * 120}
          />
        )
      })}
    </g>
    <circle cx="200" cy="200" r="22" fill="#ece1c4" />
  </svg>
)

const PlateC = (
  <svg viewBox="0 0 320 420" className="block w-full h-auto" aria-hidden>
    <rect width="320" height="420" fill="#ece1c4" />
    {/* tall illustrative — a simple cute character with crown */}
    <g transform="translate(160 200)">
      {/* crown */}
      <g fill="#7a1a1a">
        <path d="M-50 -110 L-35 -140 L-20 -120 L0 -150 L20 -120 L35 -140 L50 -110 L50 -100 L-50 -100 Z" />
      </g>
      <circle cx="-35" cy="-140" r="3" fill="#a07d3a" />
      <circle cx="0" cy="-150" r="3" fill="#a07d3a" />
      <circle cx="35" cy="-140" r="3" fill="#a07d3a" />
      {/* round body / ghost */}
      <path d="M-70 -90 C -70 -130, -40 -150, 0 -150 C 40 -150, 70 -130, 70 -90 L 70 70 L 56 50 L 42 70 L 28 50 L 14 70 L 0 50 L -14 70 L -28 50 L -42 70 L -56 50 L -70 70 Z"
        fill="#1a1411" transform="translate(0 60)" />
      {/* face */}
      <ellipse cx="-22" cy="-30" rx="6" ry="9" fill="#ece1c4" />
      <ellipse cx="22" cy="-30" rx="6" ry="9" fill="#ece1c4" />
      <circle cx="-30" cy="0" r="6" fill="#7a1a1a" opacity="0.5" />
      <circle cx="30" cy="0" r="6" fill="#7a1a1a" opacity="0.5" />
    </g>
  </svg>
)

const PlateD = (
  <svg viewBox="0 0 500 360" className="block w-full h-auto" aria-hidden>
    <rect width="500" height="360" fill="#1a1411" />
    {/* horizontal blackwork composition — banner style */}
    <g stroke="#ece1c4" strokeWidth="1.5" fill="none">
      <line x1="40" y1="180" x2="460" y2="180" />
      <line x1="40" y1="160" x2="460" y2="160" />
      <line x1="40" y1="200" x2="460" y2="200" />
    </g>
    <g fill="#ece1c4">
      <polygon points="100,180 130,140 160,180 130,220" />
      <polygon points="220,180 250,140 280,180 250,220" />
      <polygon points="340,180 370,140 400,180 370,220" />
    </g>
    <g stroke="#7a1a1a" strokeWidth="2" fill="none">
      <circle cx="130" cy="180" r="60" />
      <circle cx="250" cy="180" r="60" />
      <circle cx="370" cy="180" r="60" />
    </g>
  </svg>
)

const PlateE = (
  <svg viewBox="0 0 360 360" className="block w-full h-auto" aria-hidden>
    <rect width="360" height="360" fill="#ece1c4" />
    {/* small kawaii heart cluster */}
    <g>
      <g transform="translate(180 180)">
        <path
          d="M0 30 C -50 -10, -50 -60, 0 -40 C 50 -60, 50 -10, 0 30 Z"
          fill="#7a1a1a"
          transform="scale(2.4)"
        />
        <path
          d="M0 30 C -50 -10, -50 -60, 0 -40 C 50 -60, 50 -10, 0 30 Z"
          fill="#9a2424"
          transform="scale(1.6)"
        />
        <ellipse cx="-20" cy="-40" rx="14" ry="18" fill="#ece1c4" opacity="0.4" />
      </g>
    </g>
  </svg>
)

const PlateF = (
  <svg viewBox="0 0 320 480" className="block w-full h-auto" aria-hidden>
    <rect width="320" height="480" fill="#1a1411" />
    {/* tall blackwork totem */}
    <g stroke="#ece1c4" strokeWidth="1.5" fill="none">
      <line x1="160" y1="40" x2="160" y2="440" />
      <circle cx="160" cy="100" r="40" />
      <circle cx="160" cy="100" r="20" />
      <rect x="120" y="180" width="80" height="80" />
      <rect x="135" y="195" width="50" height="50" />
      <polygon points="160,300 200,360 160,420 120,360" />
    </g>
    <circle cx="160" cy="100" r="6" fill="#7a1a1a" />
    <rect x="155" y="215" width="10" height="10" fill="#7a1a1a" />
    <circle cx="160" cy="360" r="5" fill="#7a1a1a" />
  </svg>
)

const PLATES: Plate[] = [
  { id: 'i', numeral: 'I',   title: 'Bloom',         artist: 'Sierra', caption: 'Forearm. Three sittings, one of them spent on the leaf only.', art: PlateA, span: 'tall',   offset: 'left' },
  { id: 'ii', numeral: 'II', title: 'Wheel',         artist: 'Josh',   caption: 'Inside bicep. Geometric ornament. About four hours.',           art: PlateB, span: 'square', offset: 'right' },
  { id: 'iii', numeral: 'III', title: 'Little Royal', artist: 'Sierra', caption: 'Calf. Came in with a sketch on a napkin.',                   art: PlateC, span: 'tall',   offset: 'center' },
  { id: 'iv', numeral: 'IV', title: 'Marquee',       artist: 'Josh',   caption: 'Sternum. Banner-style blackwork.',                              art: PlateD, span: 'wide',   offset: 'right' },
  { id: 'v', numeral: 'V',   title: 'Soft thing',    artist: 'Sierra', caption: 'Above the elbow. Walk-in.',                                     art: PlateE, span: 'square', offset: 'left' },
  { id: 'vi', numeral: 'VI', title: 'Totem',         artist: 'Josh',   caption: 'Spine, top to mid-back. Two sessions, three coffees.',         art: PlateF, span: 'tall',   offset: 'right' },
]

const filterTabs = [
  { id: 'all', label: 'Everything' },
  { id: 'sierra', label: 'Sierra' },
  { id: 'josh', label: 'Josh' },
] as const

export default function Gallery() {
  const [filter, setFilter] = useState<typeof filterTabs[number]['id']>('all')

  const filtered = PLATES.filter(p =>
    filter === 'all' ? true : p.artist.toLowerCase() === filter
  )

  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-7">
            <p className="font-body text-[11px] uppercase tracking-[0.24em] text-ink-700">
              Selected plates
            </p>
            <h2
              className="mt-2 font-display font-light leading-[0.95] text-ink-900"
              style={{ fontSize: 'clamp(2.6rem, 7vw, 5.2rem)' }}
            >
              The work,
              <span className="italic"> on paper.</span>
            </h2>
            <p className="mt-4 max-w-md font-body text-ink-800">
              A small selection. The rest lives on Instagram, in skin, and in
              the binder on the front desk.
            </p>
          </div>

          {/* The unique-mechanism filter — a margin tab strip, not a pill row */}
          <div className="col-span-12 md:col-span-5 md:pl-10 flex items-end">
            <div className="w-full">
              <div className="rule-thin mb-3" />
              <div className="flex items-center gap-1 font-body text-sm">
                {filterTabs.map((t, i) => (
                  <button
                    key={t.id}
                    onClick={() => setFilter(t.id)}
                    className={`px-3 py-1.5 transition-colors duration-300 ${
                      filter === t.id
                        ? 'bg-ink-900 text-parchment-100'
                        : 'text-ink-700 hover:text-ink-900'
                    }`}
                  >
                    {t.label}
                    {i < filterTabs.length - 1 && (
                      <span className="ml-3 text-ink-500/50">/</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Asymmetric plate book.
            Mobile: single column.
            Desktop: 12-col with intentional offsets per plate. */}
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-12 gap-y-12 md:gap-y-20 gap-x-6">
            {filtered.map((p, i) => {
              const placement = (() => {
                // every plate gets a different col-span / col-start to break grid
                if (p.span === 'wide')   return 'md:col-span-9 md:col-start-3'
                if (p.span === 'tall' && p.offset === 'left')   return 'md:col-span-5 md:col-start-1'
                if (p.span === 'tall' && p.offset === 'right')  return 'md:col-span-5 md:col-start-8'
                if (p.span === 'tall' && p.offset === 'center') return 'md:col-span-5 md:col-start-4'
                if (p.span === 'square' && p.offset === 'left')   return 'md:col-span-6 md:col-start-1'
                if (p.span === 'square' && p.offset === 'right')  return 'md:col-span-6 md:col-start-7'
                return 'md:col-span-6 md:col-start-4'
              })()

              return (
                <motion.figure
                  layout
                  key={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{
                    // intentional varied easing — NOT all the same fade
                    duration: 0.7 + (i % 3) * 0.15,
                    ease: i % 2 === 0 ? [0.2, 0.7, 0.2, 1] : [0.4, 0.05, 0.2, 1],
                    delay: 0.05 * (i % 3),
                  }}
                  className={`col-span-12 ${placement}`}
                >
                  <div className="grid grid-cols-12 gap-3">
                    {/* Roman numeral in the margin — like a printed plate */}
                    <div className="col-span-2 md:col-span-1">
                      <span className="font-display italic text-2xl text-ink-700">
                        {p.numeral}
                      </span>
                    </div>
                    <div className="col-span-10 md:col-span-11">
                      <div className="plate shadow-paper">{p.art}</div>
                      <figcaption className="mt-3 flex items-baseline justify-between gap-4 font-body text-sm">
                        <span className="font-display italic text-ink-900 text-base">
                          {p.title}
                        </span>
                        <span className="text-ink-700">{p.caption}</span>
                        <span className="hidden md:inline text-ink-700/70 whitespace-nowrap">
                          — {p.artist}
                        </span>
                      </figcaption>
                    </div>
                  </div>
                </motion.figure>
              )
            })}
          </div>
        </AnimatePresence>

        <p className="mt-16 md:mt-24 max-w-md font-display italic text-xl text-ink-700">
          More work, regularly, on{' '}
          <a
            href="https://instagram.com/crownedcrowtattoo"
            target="_blank"
            rel="noreferrer"
            className="text-oxblood underline-offset-4 hover:underline"
          >
            Instagram
          </a>
          .
        </p>
      </div>
    </section>
  )
}
