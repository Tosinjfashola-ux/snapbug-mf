import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { AssetCard } from '@/components/asset-card'
import { CtaBanner } from '@/components/cta-banner'
import { Eyebrow } from '@/components/eyebrow'
import { CARS, BOATS } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Sourced Options',
  description:
    'A sample of the curated shortlist you receive after submitting a request — verified cars and boats with full detail, inspection notes and estimated landed cost.',
}

const SHORTLIST = [
  ...CARS.slice(0, 3).map((c) => ({
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
  ...BOATS.slice(0, 3).map((b) => ({
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
]

const CHECKLIST = [
  'Verified condition with inspection notes',
  'VIN or vessel identification confirmed',
  'Transparent purchase price and fees',
  'Estimated landed cost to your door',
  'Photos and full specification',
  'Availability and lead time',
]

export default function OptionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sourced options"
        title="A shortlist, curated for you."
        description="After you submit a request, our sourcing network returns a tailored set of verified options like the ones below. Each comes with full detail so you can decide with confidence — then we handle the rest."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>What every option includes</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              No guesswork, no hidden surprises
            </h2>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-4xl gap-x-8 gap-y-4 sm:grid-cols-2">
            {CHECKLIST.map((item, i) => (
              <Reveal
                key={item}
                delay={(i % 2) * 80}
                className="flex items-center gap-3 border-b border-border/70 py-4"
              >
                <span
                  aria-hidden
                  className="flex size-6 shrink-0 items-center justify-center rounded-full bg-gold/15 font-serif text-xs text-gold"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[15px] text-foreground/85">{item}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <Reveal className="mb-12 max-w-2xl">
            <Eyebrow>Sample shortlist</Eyebrow>
            <h2 className="mt-4 text-balance font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              An example of what lands in your inbox
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A representative mix of cars and boats recently sourced across our
              network. Your shortlist is built entirely around your brief.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SHORTLIST.map((item, i) => (
              <Reveal key={item.id} delay={(i % 3) * 90}>
                <AssetCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to receive your shortlist?"
        description="Start a request with your requirements and budget. We will return curated, verified options — usually within a few business days."
      />
    </>
  )
}
