'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Eyebrow } from '@/components/eyebrow'
import { Reveal } from '@/components/reveal'
import { AssetCard } from '@/components/asset-card'
import { CARS, BOATS, MOTORBIKES, JETSKIS } from '@/lib/site-data'
import { cn } from '@/lib/utils'

type Card = {
  id: string
  image: string
  name: string
  category: string
  year: number
  location: string
  metaLabel: string
  metaValue: string
  price: string
  landed: string
  spec: string
}

const TABS: { key: string; label: string; href: string; items: Card[] }[] = [
  {
    key: 'cars',
    label: 'Cars',
    href: '/cars',
    items: CARS.slice(0, 3).map((c) => ({
      id: c.id,
      image: c.image,
      name: c.name,
      category: c.category,
      year: c.year,
      location: c.location,
      metaLabel: 'Mileage',
      metaValue: c.mileage,
      price: c.price,
      landed: c.landed,
      spec: c.spec,
    })),
  },
  {
    key: 'boats',
    label: 'Boats',
    href: '/boats',
    items: BOATS.slice(0, 3).map((b) => ({
      id: b.id,
      image: b.image,
      name: b.name,
      category: b.type,
      year: b.year,
      location: b.location,
      metaLabel: 'Length',
      metaValue: b.length,
      price: b.price,
      landed: b.landed,
      spec: b.spec,
    })),
  },
  {
    key: 'motorbikes',
    label: 'Motorbikes',
    href: '/motorbikes',
    items: MOTORBIKES.slice(0, 3).map((m) => ({
      id: m.id,
      image: m.image,
      name: m.name,
      category: m.category,
      year: m.year,
      location: m.location,
      metaLabel: 'Mileage',
      metaValue: m.mileage,
      price: m.price,
      landed: m.landed,
      spec: m.spec,
    })),
  },
  {
    key: 'jetskis',
    label: 'Jet Skis',
    href: '/jetskis',
    items: JETSKIS.slice(0, 3).map((j) => ({
      id: j.id,
      image: j.image,
      name: j.name,
      category: j.category,
      year: j.year,
      location: j.location,
      metaLabel: 'Hours',
      metaValue: j.hours,
      price: j.price,
      landed: j.landed,
      spec: j.spec,
    })),
  },
]

export function InventoryPreview() {
  const [active, setActive] = useState(TABS[0].key)
  const current = TABS.find((t) => t.key === active) ?? TABS[0]

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal className="max-w-2xl">
            <Eyebrow>A sample of what we source</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-5xl">
              Cars, boats, bikes and jet skis — curated to your brief.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-muted-foreground">
              Browse a few examples of recent sourcing. Tell us your
              requirements and our team returns a tailored shortlist with landed
              cost estimates.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link
              href={current.href}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
            >
              View all {current.label}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Asset categories">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={active === tab.key}
                onClick={() => setActive(tab.key)}
                className={cn(
                  'rounded-full px-5 py-2.5 text-sm font-medium transition-all',
                  active === tab.key
                    ? 'bg-gold text-gold-foreground shadow-sm'
                    : 'border border-border text-muted-foreground hover:border-gold/50 hover:text-foreground',
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div key={active} className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {current.items.map((item, i) => (
            <div
              key={item.id}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <AssetCard
                image={item.image}
                name={item.name}
                category={item.category}
                year={item.year}
                location={item.location}
                metaLabel={item.metaLabel}
                metaValue={item.metaValue}
                price={item.price}
                landed={item.landed}
                spec={item.spec}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
