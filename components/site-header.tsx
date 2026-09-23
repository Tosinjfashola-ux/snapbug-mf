'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/cars', label: 'Cars' },
  { href: '/boats', label: 'Boats' },
  { href: '/track', label: 'Track My Order' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isHome = pathname === '/'
  const onDark = isHome && !scrolled && !open

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
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="Meridian and Company home"
        >
          <span
            className={cn(
              'flex size-9 items-center justify-center rounded-full border font-serif text-[0.95rem] font-semibold tracking-tight transition-colors',
              onDark ? 'border-white/40 text-white' : 'border-foreground/25',
            )}
          >
            M
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                'font-serif text-base font-semibold tracking-tight transition-colors',
                onDark && 'text-white',
              )}
            >
              Meridian & Co.
            </span>
            <span
              className={cn(
                'mt-0.5 text-[0.6rem] font-medium uppercase tracking-[0.22em] transition-colors',
                onDark ? 'text-white/70' : 'text-muted-foreground',
              )}
            >
              Sourcing · Shipping · Delivery
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href)
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
                {active && (
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-gold" />
                )}
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
                ? 'bg-white text-primary hover:bg-white/90'
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
            {NAV.map((item) => (
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
