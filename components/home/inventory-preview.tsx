import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Eyebrow } from '@/components/eyebrow'
import { Reveal } from '@/components/reveal'
import { AssetCard } from '@/components/asset-card'
import { CARS, BOATS } from '@/lib/site-data'

export function InventoryPreview() {
  const cars = CARS.slice(0, 2)
  const boat = BOATS[0]

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal className="max-w-2xl">
            <Eyebrow>A sample of what we source</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-5xl">
              Cars and boats, curated to your brief.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-muted-foreground">
              These are examples of recent sourcing. Tell us your requirements
              and our team returns a tailored shortlist with landed cost
              estimates.
            </p>
          </Reveal>
          <Reveal delay={120} className="flex gap-3">
            <Link
              href="/cars"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              View Cars
            </Link>
            <Link
              href="/boats"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              View Boats
              <ArrowRight className="size-4 text-gold transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cars.map((car, i) => (
            <Reveal key={car.id} delay={i * 90}>
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
          <Reveal delay={180}>
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
        </div>
      </div>
    </section>
  )
}
