'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const BROWSE = [
  { href: '/cars', label: 'Cars', desc: 'Luxury SUVs, sedans, sports & trucks' },
  { href: '/boats', label: 'Boats', desc: 'Yachts, sport boats & sailing' },
  { href: '/motorbikes', label: 'Motorbikes', desc: 'Superbikes, cruisers & touring' },
  { href: '/jetskis', label: 'Jet Skis', desc: 'Runabouts & performance skis' },
  { href: '/options', label: 'Sourced Options', desc: 'A sample curated shortlist' },
]

const NAV = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/track', label: 'Track My Order' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [browseOpen, setBrowseOpen] = useState(false)
  const browseRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setBrowseOpen(false)
  }, [pathname])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (browseRef.current && !browseRef.current.contains(e.target as Node)) {
        setBrowseOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const isHome = pathname === '/'
  const onDark = isHome && !scrolled && !open

  const browseActive = BROWSE.some((b) => pathname.startsWith(b.href))

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'border-b border-border/70 bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:h-20">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Snapbug home">
          <span className="flex size-9 items-center justify-center rounded-full bg-gold font-serif text-[0.95rem] font-semibold tracking-tight text-gold-foreground transition-transform group-hover:scale-105">
            S
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                'font-serif text-lg font-semibold tracking-tight transition-colors',
                onDark && 'text-white',
              )}
            >
              Snapbug
            </span>
            <span
              className={cn(
                'mt-0.5 text-[0.6rem] font-medium uppercase tracking-[0.22em] transition-colors',
                onDark ? 'text-white/70' : 'text-muted-foreground',
              )}
            >
              Source · Ship · Deliver
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          <Link
            href="/how-it-works"
            className={cn(
              'relative text-sm font-medium tracking-wide transition-colors',
              onDark
                ? pathname.startsWith('/how-it-works')
                  ? 'text-white'
                  : 'text-white/70 hover:text-white'
                : pathname.startsWith('/how-it-works')
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground',
            )}
          >
            How It Works
            {pathname.startsWith('/how-it-works') && (
              <span className="absolute -bottom-1.5 left-0 h-px w-full bg-gold" />
            )}
          </Link>

          <div ref={browseRef} className="relative">
            <button
              type="button"
              onClick={() => setBrowseOpen((v) => !v)}
              className={cn(
                'relative inline-flex items-center gap-1 text-sm font-medium tracking-wide transition-colors',
                onDark
                  ? browseActive
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                  : browseActive
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
              )}
              aria-expanded={browseOpen}
            >
              Browse
              <ChevronDown
                className={cn('size-3.5 transition-transform', browseOpen && 'rotate-180')}
              />
              {browseActive && (
                <span className="absolute -bottom-1.5 left-0 h-px w-full bg-gold" />
              )}
            </button>

            {browseOpen && (
              <div className="absolute left-1/2 top-full z-50 mt-4 w-80 -translate-x-1/2 animate-fade-up rounded-2xl border border-border bg-popover p-2 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.35)]">
                {BROWSE.map((b) => (
                  <Link
                    key={b.href}
                    href={b.href}
                    className="group/item flex items-start gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-secondary"
                  >
                    <span className="mt-0.5 size-2 shrink-0 rounded-full bg-gold transition-transform group-hover/item:scale-125" />
                    <span>
                      <span className="block text-sm font-semibold text-foreground">
                        {b.label}
                      </span>
                      <span className="block text-xs text-muted-foreground">{b.desc}</span>
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {NAV.slice(1).map((item) => {
            const active = pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative text-sm font-medium tracking-wide transition-colors',
                  onDark
                    ? active
                      ? 'text-white'
                      : 'text-white/70 hover:text-white'
                    : active
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {item.label}
                {active && <span className="absolute -bottom-1.5 left-0 h-px w-full bg-gold" />}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/request"
            className={cn(
              'hidden rounded-full px-6 py-2.5 text-sm font-medium transition-colors sm:inline-flex',
              onDark
                ? 'bg-gold text-gold-foreground hover:bg-gold/90'
                : 'bg-primary text-primary-foreground hover:bg-primary/85',
            )}
          >
            Start a Request
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              'inline-flex size-10 items-center justify-center rounded-full border transition-colors lg:hidden',
              onDark ? 'border-white/40 text-white' : 'border-border text-foreground',
            )}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/70 bg-background/95 backdrop-blur-md lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8"
            aria-label="Mobile"
          >
            <Link
              href="/how-it-works"
              className="rounded-lg px-3 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-muted"
            >
              How It Works
            </Link>

            <p className="px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              Browse
            </p>
            {BROWSE.map((b) => (
              <Link
                key={b.href}
                href={b.href}
                className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-base font-medium text-foreground/90 transition-colors hover:bg-muted"
              >
                <span className="size-1.5 rounded-full bg-gold" />
                {b.label}
              </Link>
            ))}

            <div className="my-1 h-px bg-border" />
            {NAV.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/request"
              className="mt-2 rounded-full bg-primary px-6 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Start a Request
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
