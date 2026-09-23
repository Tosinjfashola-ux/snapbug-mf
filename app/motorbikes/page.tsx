import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { AssetCard } from '@/components/asset-card'
import { CtaBanner } from '@/components/cta-banner'
import { MOTORBIKES } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Motorbikes',
  description:
    'A sample of the superbikes, cruisers and adventure touring motorbikes Snapbug sources, purchases, ships and delivers worldwide.',
}

export default function MotorbikesPage() {
  return (
    <>
      <PageHero
        eyebrow="Motorbikes we source"
        title="Superbikes, cruisers and everything between."
        description="From track-ready superbikes to long-haul tourers, tell us the machine you want and we return a tailored shortlist with landed cost estimates — we are not limited to what you see here."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MOTORBIKES.map((bike, i) => (
              <Reveal key={bike.id} delay={(i % 3) * 90}>
                <AssetCard
                  image={bike.image}
                  name={bike.name}
                  category={bike.category}
                  year={bike.year}
                  location={bike.location}
                  metaLabel="Mileage"
                  metaValue={bike.mileage}
                  price={bike.price}
                  landed={bike.landed}
                  spec={bike.spec}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Chasing a specific ride?"
        description="Share the make, model, year and budget you have in mind. Our sourcing team will find matching motorbikes and send you a shortlist."
      />
    </>
  )
}
