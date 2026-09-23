'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight, Car, Ship, Bike, Waves } from 'lucide-react'
import { cn } from '@/lib/utils'

type Choice = 'car' | 'boat' | 'motorbike' | 'jetski'

const OPTIONS: {
  key: Choice
  label: string
  icon: typeof Car
  image: string
  alt: string
  type: string
}[] = [
  { key: 'car', label: 'Car', icon: Car, image: '/images/hero-main.png', alt: 'Luxury vehicle at dusk', type: 'car' },
  { key: 'boat', label: 'Boat', icon: Ship, image: '/images/hero-boat.png', alt: 'Premium motor yacht on open water', type: 'boat' },
  { key: 'motorbike', label: 'Motorbike', icon: Bike, image: '/images/hero-bike.png', alt: 'Sport motorbike on a coastal highway', type: 'motorbike' },
  { key: 'jetski', label: 'Jet Ski', icon: Waves, image: '/images/hero-jetski.png', alt: 'Jet ski carving across turquoise water', type: 'jetski' },
]

export function Hero() {
  const [choice, setChoice] = useState<Choice>('car')
  const current = OPTIONS.find((o) => o.key === choice) ?? OPTIONS[0]

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
      {OPTIONS.map((o) => (
        <Image
          key={o.key}
          src={o.image || '/placeholder.svg'}
          alt={o.alt}
          fill
          priority={o.key === 'car'}
          sizes="100vw"
          className={cn(
            'object-cover transition-opacity duration-700',
            choice === o.key ? 'opacity-100' : 'opacity-0',
          )}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-8 lg:pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-gold animate-fade-in">
            <span className="h-px w-6 bg-gold/70" />
            Sourcing · Shipping · Clearing · Delivery
          </span>

          <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.03] text-white sm:text-6xl lg:text-7xl animate-fade-up">
            Your Ride. Sourced, Shipped &amp; Delivered.
          </h1>

          <p
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg animate-fade-up"
            style={{ animationDelay: '120ms' }}
          >
            From finding the right car, boat, motorbike or jet ski to
            purchasing, international shipping, customs clearance and final
            delivery — Snapbug manages the entire process for you.
          </p>

          <div className="mt-9 animate-fade-up" style={{ animationDelay: '220ms' }}>
            <p className="text-sm font-medium text-white/70">I&apos;m looking for a…</p>
            <div className="mt-3 inline-flex flex-wrap gap-1 rounded-2xl border border-white/20 bg-white/10 p-1 backdrop-blur-sm">
              {OPTIONS.map((option) => (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => setChoice(option.key)}
                  className={cn(
                    'inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all',
                    choice === option.key
                      ? 'bg-gold text-gold-foreground shadow-sm'
                      : 'text-white/80 hover:text-white',
                  )}
                  aria-pressed={choice === option.key}
                >
                  <option.icon className="size-4" />
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div
            className="mt-9 flex flex-col gap-3 sm:flex-row animate-fade-up"
            style={{ animationDelay: '320ms' }}
          >
            <Link
              href={`/request?type=${current.type}`}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium text-gold-foreground transition-colors hover:bg-gold/90"
            >
              Start Your Request
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
