import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { AssetCard } from '@/components/asset-card'
import { CtaBanner } from '@/components/cta-banner'
import { CARS } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Cars',
  description:
    'A sample of the luxury SUVs, executive sedans, sports cars and trucks we source, purchase, ship and deliver worldwide.',
}

export default function CarsPage() {
  return (
    <>
      <PageHero
        eyebrow="Cars we source"
        title="Curated cars, sourced to your brief."
        description="These are examples of recent sourcing across our network. Tell us your requirements and we return a tailored shortlist with landed cost estimates — we are not limited to what you see here."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CARS.map((car, i) => (
              <Reveal key={car.id} delay={(i % 3) * 90}>
                <AssetCard
                  image={car.image}
                  name={car.name}
                  category={car.category}
                  year={car.year}
                  location={car.location}
                  metaLabel="Mileage"
                  metaValue={car.mileage}
                  price={car.price}
                  landed={car.landed}
                  spec={car.spec}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Looking for something specific?"
        description="Share the make, model, year and budget you have in mind. Our sourcing team will find matching options and send you a shortlist."
      />
    </>
  )
}
