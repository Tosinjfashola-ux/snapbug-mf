import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { Eyebrow } from '@/components/eyebrow'
import { Reveal } from '@/components/reveal'
import { CtaBanner } from '@/components/cta-banner'
import { VALUES } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'About',
  description:
    'We are a global vehicle sourcing and logistics partner — one accountable team managing sourcing, purchase, shipping, clearing and delivery.',
}

const STATS = [
  { value: '40+', label: 'Countries served' },
  { value: '2,800+', label: 'Vehicles delivered' },
  { value: '98%', label: 'On-time clearance' },
  { value: '12 yrs', label: 'In global logistics' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Your single, accountable partner for vehicles worldwide."
        description="We exist for people who want access to quality cars and boats without personally dealing with sellers, payments, shipping lines, ports, customs and clearing agents. We manage all of it."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src="/images/about-logistics.png"
                  alt="Global vehicle logistics operation"
                  width={900}
                  height={1000}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <Eyebrow>Who we are</Eyebrow>
                <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
                  Not a dealership. A dedicated sourcing and logistics team.
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
                  <p>
                    Buying a vehicle from abroad usually means juggling sellers,
                    inspectors, banks, freight forwarders, ports, customs
                    officials and clearing agents — often across languages and
                    time zones. It is stressful, opaque and easy to get wrong.
                  </p>
                  <p>
                    We replace all of that with one relationship. You tell us
                    what you want; we source it, verify it, purchase it on your
                    behalf, ship it, clear it through customs and deliver it to
                    your door — keeping you informed at every milestone.
                  </p>
                </div>
              </Reveal>
              <div className="mt-9 grid grid-cols-2 gap-6">
                {STATS.map((s, i) => (
                  <Reveal key={s.label} delay={i * 70}>
                    <p className="font-serif text-3xl font-semibold">
                      {s.value}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {s.label}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <Reveal className="max-w-2xl">
            <Eyebrow>What we stand for</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
              Principles that guide every order we handle.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 90}>
                <div className="h-full rounded-2xl border border-border bg-card p-8">
                  <span className="font-serif text-sm text-gold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">{v.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
