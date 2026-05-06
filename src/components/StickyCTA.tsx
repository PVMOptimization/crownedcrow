import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function StickyCTA() {
  const [show, setShow] = useState(false)
  const [openContact, setOpenContact] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // appear after the masthead
      setShow(window.scrollY > 700)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Sticky bottom bar with the primary CTA */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-40"
          >
            <a
              href="#ritual"
              className="cta-glow group flex items-center justify-between gap-4 bg-ink-900 text-parchment-100 px-5 py-4 md:px-7 md:py-4 shadow-card hover:bg-oxblood transition-colors duration-300 max-w-md md:max-w-none mx-auto"
            >
              <div>
                <p className="font-hand text-[#d8c084] text-lg leading-none">Ready when you are</p>
                <p className="font-display italic text-lg md:text-xl mt-0.5">
                  Book a consultation
                </p>
              </div>
              <span
                aria-hidden
                className="font-display text-2xl group-hover:translate-x-1 transition-transform duration-300"
              >
                →
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating help / contact button (top layer) */}
      <div className="fixed bottom-24 left-4 md:left-8 md:bottom-8 z-40">
        <AnimatePresence>
          {openContact && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-16 left-0 w-[280px] bg-parchment-50 shadow-card border border-ink-900/10 p-5"
            >
              <p className="font-display italic text-xl text-ink-900 leading-tight">
                Quickest way to reach us:
              </p>
              <div className="mt-4 space-y-2 font-body text-sm">
                <a
                  href="tel:+18177370770"
                  className="flex items-center justify-between bg-ink-900 text-parchment-100 px-4 py-3 hover:bg-oxblood transition-colors"
                >
                  <span>Call (817) 737-0770</span>
                  <span aria-hidden>↗</span>
                </a>
                <a
                  href="https://instagram.com/crownedcrowtattoo"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between border border-ink-900/40 px-4 py-3 hover:bg-ink-900 hover:text-parchment-100 transition-colors"
                >
                  <span>DM on Instagram</span>
                  <span aria-hidden>↗</span>
                </a>
                <a
                  href="#ritual"
                  onClick={() => setOpenContact(false)}
                  className="block px-4 py-3 text-ink-700 hover:text-ink-900 italic"
                >
                  — or, book a consult
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setOpenContact(v => !v)}
          aria-label={openContact ? 'Close contact menu' : 'Open contact menu'}
          aria-expanded={openContact}
          className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-oxblood text-parchment-100 shadow-card flex items-center justify-center hover:bg-oxblood-dark transition-colors duration-300"
        >
          <motion.span
            animate={{ rotate: openContact ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="block text-2xl leading-none"
            aria-hidden
          >
            {openContact ? '+' : '?'}
          </motion.span>
        </button>
      </div>
    </>
  )
}
