import Link from 'next/link'
import { Anchor } from 'lucide-react'

const COLUMNS = [
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/how-it-works', label: 'How It Works' },
      { href: '/faq', label: 'FAQ' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { href: '/cars', label: 'Cars' },
      { href: '/boats', label: 'Boats' },
      { href: '/options', label: 'Sourced Options' },
      { href: '/track', label: 'Track My Order' },
    ],
  },
  {
    title: 'Get Started',
    links: [
      { href: '/request', label: 'Start a Request' },
      { href: '/track', label: 'Track My Vehicle' },
      { href: '/how-it-works', label: 'The Process' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-full border border-white/30 font-serif text-[0.95rem] font-semibold">
                M
              </span>
              <span className="font-serif text-lg font-semibold">Meridian & Co.</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/70">
              A white-glove sourcing and logistics house. You name the car or
              the boat — we find it, buy it, ship it across oceans, clear
              customs and deliver it to your door.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-primary-foreground/60">
              <Anchor className="size-4 text-gold" />
              <span>Serving clients in 40+ countries</span>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-serif text-sm font-semibold uppercase tracking-[0.15em] text-primary-foreground/90">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/65 transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-primary-foreground/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Meridian & Co. All rights reserved.</p>
          <p className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Bonded & Insured</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
