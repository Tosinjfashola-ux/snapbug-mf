import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Eyebrow } from '@/components/eyebrow'
import { Reveal } from '@/components/reveal'

const CATEGORIES = [
  'Luxury SUVs',
  'Executive Sedans',
  'Sports Cars',
  'Pickup Trucks',
  'Commercial Vehicles',
  'Motor Yachts',
  'Sailing Yachts',
  'Sport Boats',
]

export function Intro() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Not a dealership — your sourcing partner</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-5xl">
              Tell us what you want. We handle everything from sourcing to your
              doorstep.
            </h2>
          </Reveal>
          <Reveal delay={120} className="flex flex-col justify-center">
            <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              You want access to quality cars and boats without personally
              dealing with sellers, payment coordination, shipping companies,
              ports, customs, clearing agents or delivery logistics. That is
              exactly what we do — a single, accountable partner managing your
              vehicle&apos;s entire journey.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {CATEGORIES.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-foreground/75"
                >
                  {c}
                </span>
              ))}
            </div>
            <Link
              href="/request"
              className="group mt-9 inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground"
            >
              Start your request
              <ArrowRight className="size-4 text-gold transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
