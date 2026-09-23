import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { AssetCard } from '@/components/asset-card'
import { CtaBanner } from '@/components/cta-banner'
import { JETSKIS } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Jet Skis',
  description:
    'A sample of the luxury runabouts and performance jet skis Snapbug sources, purchases, ships and delivers worldwide.',
}

export default function JetSkisPage() {
  return (
    <>
      <PageHero
        eyebrow="Jet skis we source"
        title="Personal watercraft, ready for open water."
        description="From plush luxury runabouts to supercharged race skis, tell us what you want on the water and we return a tailored shortlist with landed cost estimates — we are not limited to what you see here."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {JETSKIS.map((ski, i) => (
              <Reveal key={ski.id} delay={(i % 3) * 90}>
                <AssetCard
                  image={ski.image}
                  name={ski.name}
                  category={ski.category}
                  year={ski.year}
                  location={ski.location}
                  metaLabel="Hours"
                  metaValue={ski.hours}
                  price={ski.price}
                  landed={ski.landed}
                  spec={ski.spec}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want a specific ski?"
        description="Share the make, model, year and budget you have in mind. Our sourcing team will find matching jet skis and send you a shortlist."
      />
    </>
  )
}
