import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { AssetCard } from '@/components/asset-card'
import { CtaBanner } from '@/components/cta-banner'
import { BOATS } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Boats',
  description:
    'Motor yachts, sailing yachts and sport boats — sourced, purchased, shipped and delivered to your marina anywhere in the world.',
}

export default function BoatsPage() {
  return (
    <>
      <PageHero
        eyebrow="Boats we source"
        title="Yachts and boats, delivered to your marina."
        description="From day cruisers to blue-water yachts, we source and manage the full logistics of getting your vessel home. These are examples of recent sourcing — tell us what you are after."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BOATS.map((boat, i) => (
              <Reveal key={boat.id} delay={(i % 3) * 90}>
                <AssetCard
                  image={boat.image}
                  name={boat.name}
                  category={boat.type}
                  year={boat.year}
                  location={boat.location}
                  metaLabel="Length"
                  metaValue={boat.length}
                  price={boat.price}
                  landed={boat.landed}
                  spec={boat.spec}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Have a vessel in mind?"
        description="Tell us the type, length and budget you are considering. We will source options and handle shipping, clearing and delivery to your marina."
      />
    </>
  )
}
