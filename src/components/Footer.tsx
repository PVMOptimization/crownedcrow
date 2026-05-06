import CrowIcon from './CrowIcon'

export default function Footer() {
  return (
    <footer className="relative bg-parchment-200">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="rule-double" />
      </div>

      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="flex items-end gap-4 md:gap-6">
              <CrowIcon className="h-20 w-auto md:h-28 -mb-2 md:-mb-3 shrink-0" />
              <h3
                className="font-display font-light leading-[0.85] text-ink-900"
                style={{
                  fontSize: 'clamp(2.4rem, 6vw, 5rem)',
                  fontVariationSettings: '"opsz" 144, "SOFT" 60',
                }}
              >
                Crowned <span className="italic font-normal">Crow</span>
              </h3>
            </div>
            <p className="mt-4 font-body text-ink-800 max-w-md">
              A small Fort Worth tattoo studio.
              By appointment, by hand, with care.
            </p>
          </div>

          <div className="col-span-12 md:col-span-4 md:text-right space-y-2 font-body text-sm text-ink-700">
            <p>© {new Date().getFullYear()} Crowned Crow Tattoo Studio LLC</p>
            <p>
              <a href="tel:+18177370770" className="hover:text-ink-900">
                (817) 737-0770
              </a>
              {' · '}
              <a
                href="https://instagram.com/crownedcrowtattoo"
                target="_blank"
                rel="noreferrer"
                className="hover:text-ink-900"
              >
                @crownedcrowtattoo
              </a>
            </p>
            <p className="font-hand text-xl text-oxblood">
              See you in the chair.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
