import { motion } from 'framer-motion'

type Review = {
  body: string
  name: string
  meta: string
  tilt: 'tilt-l' | 'tilt-r' | 'tilt-c'
  artist: 'Sierra' | 'Josh' | 'Both'
}

const REVIEWS: Review[] = [
  {
    body:
      "Got a lovely cute tattoo done by Sierra. She was extremely kind and professional and answered all my questions. Her business partner Josh was also super rad — everyone was so welcoming.",
    name: 'Andrew O.',
    meta: 'four months ago',
    tilt: 'tilt-l',
    artist: 'Sierra',
  },
  {
    body:
      "I've been tattooed by both Sierra and Josh and would happily get more from both of them. I love the kawaii style Sierra has and Josh's blackwork is awesome. They're both extremely talented.",
    name: 'Lucy R.',
    meta: 'two months ago',
    tilt: 'tilt-r',
    artist: 'Both',
  },
  {
    body:
      "Sierra was such a sweetheart! Made sure I was well taken care of and answered any and all questions. The shop environment was super welcoming, especially for someone like me who deals with social anxiety. I felt so great.",
    name: 'Kite H.',
    meta: 'six months ago',
    tilt: 'tilt-c',
    artist: 'Sierra',
  },
]

export default function Words() {
  return (
    <section id="words" className="relative bg-ink-900 text-parchment-100 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-12 gap-6 mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-7">
            <p className="font-body text-[11px] uppercase tracking-[0.24em] text-parchment-300">
              From the chair
            </p>
            <h2
              className="mt-2 font-display font-light leading-[0.95]"
              style={{ fontSize: 'clamp(2.6rem, 7vw, 5.2rem)' }}
            >
              People talk.
              <span className="italic"> We listen.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:pl-10 flex items-end">
            <div>
              <p className="font-display italic text-2xl md:text-3xl text-[#d8c084]">
                Five stars, thirty-two times.
              </p>
              <p className="mt-2 font-body text-sm text-parchment-300">
                Google reviews. We didn&rsquo;t ask for them — they just kept arriving.
              </p>
            </div>
          </div>
        </div>

        {/* Notes pinned to the wall — staggered, overlapping slightly */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{
                duration: 0.8,
                ease: [0.2, 0.7, 0.2, 1],
                delay: 0.12 * i,
              }}
              className={`note-paper ${r.tilt} p-7 md:p-9 shadow-pinned text-ink-900 relative`}
            >
              {/* the "pin" */}
              <span
                aria-hidden
                className="absolute left-1/2 -top-2 h-3 w-3 rounded-full bg-oxblood -translate-x-1/2"
                style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.35)' }}
              />
              <blockquote className="font-display text-lg md:text-xl leading-snug text-ink-900">
                &ldquo;{r.body}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-baseline justify-between gap-3 font-body text-sm">
                <span className="font-hand text-2xl text-oxblood">— {r.name}</span>
                <span className="text-ink-700">{r.meta}</span>
              </figcaption>
              <p className="mt-1 font-body text-[11px] uppercase tracking-[0.18em] text-ink-600">
                Tattooed by {r.artist === 'Both' ? 'Sierra & Josh' : r.artist}
              </p>
            </motion.figure>
          ))}
        </div>

        <p className="mt-16 font-display italic text-xl md:text-2xl text-parchment-300 max-w-xl">
          Read the rest on{' '}
          <a
            href="https://www.google.com/maps/place/Crowned+Crow+Tattoo+Studio+LLC"
            target="_blank"
            rel="noreferrer"
            className="text-[#d8c084] underline-offset-4 hover:underline"
          >
            Google
          </a>
          , where they live.
        </p>
      </div>
    </section>
  )
}
