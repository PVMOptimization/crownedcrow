import { motion } from 'framer-motion'
import CrowIcon from './CrowIcon'

export default function Masthead() {
  return (
    <header className="relative">
      {/* edition strip — like a newspaper folio */}
      <div className="mx-auto max-w-[1400px] px-5 pt-6 md:px-10 md:pt-10">
        <div className="flex items-end justify-between gap-6 pb-3">
          <p className="font-body text-[11px] uppercase tracking-[0.22em] text-ink-700">
            Vol. I &nbsp;·&nbsp; Fort Worth, Texas
          </p>
          <p className="hidden font-body text-[11px] uppercase tracking-[0.22em] text-ink-700 md:block">
            Established 2023 &nbsp;·&nbsp; By appointment
          </p>
          <p className="font-body text-[11px] uppercase tracking-[0.22em] text-ink-700">
            Tattoo Studio &nbsp;·&nbsp; LLC
          </p>
        </div>
        <div className="rule-double" />
      </div>

      {/* The wordmark + crow — asymmetric, the crow overlaps the type */}
      <div className="relative mx-auto max-w-[1400px] px-5 pb-10 pt-8 md:px-10 md:pb-20 md:pt-14">
        <div className="grid grid-cols-12 gap-4">
          {/* Crow lives in the negative space left of the wordmark on desktop */}
          <div className="col-span-3 hidden md:flex md:col-span-3 lg:col-span-2 items-start justify-end pt-2">
            <CrowIcon animate className="h-44 w-auto -mr-4 lg:-mr-8" />
          </div>

          <div className="col-span-12 md:col-span-9 lg:col-span-10">
            {/* Mobile crow */}
            <div className="md:hidden mb-4">
              <CrowIcon animate className="h-24 w-auto" />
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.2, 0.7, 0.2, 1], delay: 0.15 }}
              className="font-display font-light leading-[0.86] tracking-masthead text-ink-900"
              style={{
                // unusually large but not just to fill space — it IS the page
                fontSize: 'clamp(3.4rem, 12vw, 11rem)',
                fontVariationSettings: '"opsz" 144, "SOFT" 60',
              }}
            >
              <span className="block">Crowned</span>
              <span className="block italic font-normal pl-[0.18em]" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
                Crow
              </span>
            </motion.h1>

            {/* sub-line — sits in a tight gutter, NOT centered */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0, delay: 0.7 }}
              className="mt-6 grid grid-cols-12 gap-4"
            >
              <p className="col-span-12 md:col-span-7 lg:col-span-6 font-body text-base md:text-lg text-ink-800 leading-relaxed">
                A small Fort Worth studio. Two artists who don&rsquo;t rush.{' '}
                <span className="font-hand text-2xl text-oxblood">Sierra</span>{' '}
                works in colour and kawaii. <span className="font-hand text-2xl text-oxblood">Josh</span> works in black.
                Both work by appointment, and both will tell you no when something
                shouldn&rsquo;t go on your skin.
              </p>

              <div className="col-span-12 md:col-span-5 lg:col-span-6 flex flex-wrap items-end justify-start gap-3 md:justify-end pt-2">
                <a
                  href="#ritual"
                  className="cta-glow inline-flex items-center gap-2 bg-ink-900 px-6 py-3.5 font-body text-[15px] text-parchment-100 hover:bg-oxblood transition-colors duration-300"
                >
                  Book a consultation
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="tel:+18177370770"
                  className="inline-flex items-center gap-2 border border-ink-900/70 px-6 py-3.5 font-body text-[15px] text-ink-900 hover:bg-ink-900 hover:text-parchment-100 transition-colors duration-300"
                >
                  Call the shop
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* tiny editor's mark sits low — like a printer's signature */}
        <div className="absolute bottom-2 right-5 md:right-10 hidden md:block">
          <p className="font-hand text-ink-700/70 text-lg rotate-[-4deg]">
            — five stars, thirty-two times
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="rule-thin" />
      </div>
    </header>
  )
}
