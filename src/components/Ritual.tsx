import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type FormState = {
  artist: '' | 'sierra' | 'josh' | 'either'
  idea: string
  size: '' | 'small' | 'medium' | 'large'
  placement: string
  reference: string
  contact: string
  preferred: string
}

const initialForm: FormState = {
  artist: '',
  idea: '',
  size: '',
  placement: '',
  reference: '',
  contact: '',
  preferred: '',
}

const steps = [
  { numeral: 'I',   label: 'The artist' },
  { numeral: 'II',  label: 'The piece' },
  { numeral: 'III', label: 'You' },
  { numeral: 'IV',  label: 'Send it' },
]

export default function Ritual() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm(f => ({ ...f, [k]: v }))

  const canAdvance =
    (step === 0 && form.artist !== '') ||
    (step === 1 && form.idea.trim().length > 4 && form.size !== '') ||
    (step === 2 && form.contact.trim().length > 3) ||
    step === 3

  const submit = () => {
    // In production, POST to a serverless function or formspree.
    // For now this just shows the confirmation state.
    setSubmitted(true)
  }

  return (
    <section id="ritual" className="relative bg-parchment-100">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-12 gap-6 mb-10 md:mb-14">
          <div className="col-span-12 md:col-span-8">
            <p className="font-body text-[11px] uppercase tracking-[0.24em] text-ink-700">
              How to book
            </p>
            <h2
              className="mt-2 font-display font-light leading-[0.95] text-ink-900"
              style={{ fontSize: 'clamp(2.6rem, 7vw, 5.2rem)' }}
            >
              The ritual,
              <span className="italic"> in four parts.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:pl-10">
            <p className="font-body text-ink-800">
              No deposit until we&rsquo;ve talked. Tell us what you&rsquo;re thinking,
              and one of us will reply within a day or two — usually less.
            </p>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-parchment-50 shadow-card border border-ink-900/5"
            >
              {/* progress indicator — roman numerals on a thin rule */}
              <div className="border-b border-ink-900/10 px-5 md:px-10 py-5">
                <ol className="flex items-center justify-between gap-2 font-body text-sm">
                  {steps.map((s, i) => (
                    <li key={s.numeral} className="flex-1">
                      <button
                        type="button"
                        onClick={() => i <= step && setStep(i)}
                        className="w-full text-left"
                        disabled={i > step}
                      >
                        <div className="flex items-baseline gap-3">
                          <span
                            className={`font-display italic text-lg transition-colors ${
                              i === step
                                ? 'text-oxblood'
                                : i < step
                                ? 'text-ink-900'
                                : 'text-ink-500'
                            }`}
                          >
                            {s.numeral}.
                          </span>
                          <span
                            className={`hidden md:inline transition-colors ${
                              i === step ? 'text-ink-900' : 'text-ink-600'
                            }`}
                          >
                            {s.label}
                          </span>
                        </div>
                        <div
                          className={`mt-2 h-px transition-colors ${
                            i <= step ? 'bg-oxblood' : 'bg-ink-900/15'
                          }`}
                        />
                      </button>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="px-5 md:px-10 py-10 md:py-14 min-h-[360px]">
                <AnimatePresence mode="wait">
                  {/* STEP I — the artist */}
                  {step === 0 && (
                    <motion.div
                      key="s0"
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
                    >
                      <h3 className="font-display text-2xl md:text-3xl italic text-ink-900">
                        Who would you like to work with?
                      </h3>
                      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {(
                          [
                            { id: 'sierra', name: 'Sierra', sub: 'Colour, kawaii, illustrative.' },
                            { id: 'josh',   name: 'Josh',   sub: 'Blackwork, ornament, geometry.' },
                            { id: 'either', name: 'Either', sub: 'Show me whoever has the date.' },
                          ] as const
                        ).map(opt => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => update('artist', opt.id)}
                            className={`text-left p-5 border transition-all duration-300 ${
                              form.artist === opt.id
                                ? 'border-oxblood bg-oxblood/5 shadow-paper'
                                : 'border-ink-900/15 hover:border-ink-900/40'
                            }`}
                          >
                            <p className="font-display text-2xl text-ink-900">{opt.name}</p>
                            <p className="mt-1 font-body text-sm text-ink-700">{opt.sub}</p>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* STEP II — the piece */}
                  {step === 1 && (
                    <motion.div
                      key="s1"
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
                    >
                      <h3 className="font-display text-2xl md:text-3xl italic text-ink-900">
                        Tell us what you&rsquo;re thinking.
                      </h3>
                      <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6">
                        <label className="col-span-12 md:col-span-7 block">
                          <span className="font-body text-sm text-ink-700">
                            The idea, in your words
                          </span>
                          <textarea
                            value={form.idea}
                            onChange={e => update('idea', e.target.value)}
                            rows={5}
                            placeholder="A small bee on the inside of my ankle, with a banner that says…"
                            className="mt-2 w-full bg-parchment-100 border border-ink-900/15 px-4 py-3 font-body text-ink-900 placeholder:text-ink-500/60 focus:border-oxblood focus:outline-none"
                          />
                        </label>
                        <div className="col-span-12 md:col-span-5 space-y-6">
                          <div>
                            <span className="font-body text-sm text-ink-700">Rough size</span>
                            <div className="mt-2 grid grid-cols-3 gap-2">
                              {(['small', 'medium', 'large'] as const).map(s => (
                                <button
                                  key={s}
                                  type="button"
                                  onClick={() => update('size', s)}
                                  className={`py-2.5 font-body text-sm capitalize transition-colors ${
                                    form.size === s
                                      ? 'bg-ink-900 text-parchment-100'
                                      : 'border border-ink-900/15 text-ink-800 hover:border-ink-900/40'
                                  }`}
                                >
                                  {s}
                                </button>
                              ))}
                            </div>
                          </div>
                          <label className="block">
                            <span className="font-body text-sm text-ink-700">
                              Placement (forearm, ribs, etc.)
                            </span>
                            <input
                              value={form.placement}
                              onChange={e => update('placement', e.target.value)}
                              className="mt-2 w-full bg-parchment-100 border border-ink-900/15 px-4 py-2.5 font-body focus:border-oxblood focus:outline-none"
                            />
                          </label>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP III — you */}
                  {step === 2 && (
                    <motion.div
                      key="s2"
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
                    >
                      <h3 className="font-display text-2xl md:text-3xl italic text-ink-900">
                        And how do we reach you?
                      </h3>
                      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
                        <label className="block">
                          <span className="font-body text-sm text-ink-700">
                            Email or phone
                          </span>
                          <input
                            value={form.contact}
                            onChange={e => update('contact', e.target.value)}
                            placeholder="you@somewhere.com or 817 555 0000"
                            className="mt-2 w-full bg-parchment-100 border border-ink-900/15 px-4 py-2.5 font-body focus:border-oxblood focus:outline-none"
                          />
                        </label>
                        <label className="block">
                          <span className="font-body text-sm text-ink-700">
                            When works for you?
                          </span>
                          <input
                            value={form.preferred}
                            onChange={e => update('preferred', e.target.value)}
                            placeholder="Weekday afternoons, late October"
                            className="mt-2 w-full bg-parchment-100 border border-ink-900/15 px-4 py-2.5 font-body focus:border-oxblood focus:outline-none"
                          />
                        </label>
                        <label className="md:col-span-2 block">
                          <span className="font-body text-sm text-ink-700">
                            Reference link, if any (Pinterest, Insta, etc.)
                          </span>
                          <input
                            value={form.reference}
                            onChange={e => update('reference', e.target.value)}
                            className="mt-2 w-full bg-parchment-100 border border-ink-900/15 px-4 py-2.5 font-body focus:border-oxblood focus:outline-none"
                          />
                        </label>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP IV — review */}
                  {step === 3 && (
                    <motion.div
                      key="s3"
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
                    >
                      <h3 className="font-display text-2xl md:text-3xl italic text-ink-900">
                        Look it over.
                      </h3>
                      <dl className="mt-8 grid grid-cols-12 gap-y-3 gap-x-6 max-w-3xl font-body">
                        <dt className="col-span-4 md:col-span-3 text-ink-600">Artist</dt>
                        <dd className="col-span-8 md:col-span-9 text-ink-900 capitalize">
                          {form.artist || '—'}
                        </dd>
                        <dt className="col-span-4 md:col-span-3 text-ink-600">Idea</dt>
                        <dd className="col-span-8 md:col-span-9 text-ink-900 italic">
                          &ldquo;{form.idea || '—'}&rdquo;
                        </dd>
                        <dt className="col-span-4 md:col-span-3 text-ink-600">Size</dt>
                        <dd className="col-span-8 md:col-span-9 text-ink-900 capitalize">
                          {form.size || '—'}
                        </dd>
                        <dt className="col-span-4 md:col-span-3 text-ink-600">Placement</dt>
                        <dd className="col-span-8 md:col-span-9 text-ink-900">
                          {form.placement || '—'}
                        </dd>
                        <dt className="col-span-4 md:col-span-3 text-ink-600">Contact</dt>
                        <dd className="col-span-8 md:col-span-9 text-ink-900">
                          {form.contact || '—'}
                        </dd>
                        <dt className="col-span-4 md:col-span-3 text-ink-600">Window</dt>
                        <dd className="col-span-8 md:col-span-9 text-ink-900">
                          {form.preferred || '—'}
                        </dd>
                      </dl>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="border-t border-ink-900/10 px-5 md:px-10 py-5 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setStep(s => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="font-body text-sm text-ink-700 hover:text-ink-900 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  ← Back
                </button>

                {step < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => canAdvance && setStep(s => Math.min(steps.length - 1, s + 1))}
                    disabled={!canAdvance}
                    className="cta-glow inline-flex items-center gap-2 bg-ink-900 px-6 py-3 font-body text-[15px] text-parchment-100 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-oxblood transition-colors duration-300"
                  >
                    Continue <span aria-hidden>→</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={submit}
                    className="cta-glow inline-flex items-center gap-2 bg-oxblood px-6 py-3 font-body text-[15px] text-parchment-100 hover:bg-oxblood-dark transition-colors duration-300"
                  >
                    Send the request
                  </button>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-parchment-50 shadow-card border border-ink-900/5 p-10 md:p-16 text-center"
            >
              <p className="font-hand text-3xl text-oxblood">— sent —</p>
              <h3 className="mt-4 font-display italic text-3xl md:text-5xl text-ink-900 leading-tight">
                We&rsquo;ll write back soon.
              </h3>
              <p className="mt-6 max-w-lg mx-auto font-body text-ink-800">
                Usually within a day or two. If it&rsquo;s urgent, the easiest
                thing is to call the shop or message us on Instagram.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="tel:+18177370770"
                  className="inline-flex items-center gap-2 border border-ink-900/70 px-5 py-3 font-body text-sm text-ink-900 hover:bg-ink-900 hover:text-parchment-100 transition-colors"
                >
                  Call the shop
                </a>
                <a
                  href="https://instagram.com/crownedcrowtattoo"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-ink-900 px-5 py-3 font-body text-sm text-parchment-100 hover:bg-oxblood transition-colors"
                >
                  Message on Instagram
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
