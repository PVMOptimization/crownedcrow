import { motion } from 'framer-motion'

export default function Manifesto() {
  return (
    <section className="relative bg-ink-900 text-parchment-100 overflow-hidden">
      {/* Top depth layer — section sits "above" the parchment */}
      <div className="absolute inset-x-0 top-0 h-px bg-parchment-300/20" />

      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <p className="font-body text-[11px] uppercase tracking-[0.24em] text-parchment-300">
              On the work
            </p>
            <p className="mt-3 font-hand text-2xl text-[#d8c084]">
              n° 01
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 1.0, ease: [0.2, 0.7, 0.2, 1] }}
            className="col-span-12 md:col-span-9"
          >
            <p
              className="font-display font-light leading-[1.05] text-parchment-100"
              style={{
                fontSize: 'clamp(1.8rem, 4.2vw, 3.6rem)',
                fontVariationSettings: '"opsz" 144, "SOFT" 80',
              }}
            >
              A tattoo is a small permanent decision. We treat it like one.
              We will draw the thing twice if it needs drawing twice. We will
              tell you the placement is wrong if the placement is wrong.
              Then, when it&rsquo;s right, we{' '}
              <span className="italic text-[#d8c084]">put it on you for the rest of your life</span>.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <span className="block h-px w-16 bg-parchment-300/50" />
              <p className="font-body text-sm tracking-wide text-parchment-300">
                Sierra &amp; Josh, the studio
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
