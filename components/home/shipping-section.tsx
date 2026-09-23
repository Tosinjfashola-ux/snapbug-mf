import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Globe, PackageCheck, Radar } from 'lucide-react'
import { Eyebrow } from '@/components/eyebrow'
import { Reveal } from '@/components/reveal'

const POINTS = [
  {
    icon: Globe,
    title: 'Global shipping network',
    body: 'Ocean freight partners across major trade routes, with the right vessel for every vehicle or vessel.',
  },
  {
    icon: PackageCheck,
    title: 'Customs & clearing handled',
    body: 'Export and destination clearance managed end to end — documentation, duties and release.',
  },
  {
    icon: Radar,
    title: 'Track like a package',
    body: 'Live status from port of origin to your door, with a clear timeline at every milestone.',
  },
]

const STATS = [
  { value: '40+', label: 'Countries served' },
  { value: '2,800+', label: 'Vehicles delivered' },
  { value: '98%', label: 'On-time clearance' },
]

export function ShippingSection() {
  return (
    <section className="bg-secondary/60">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/images/shipping-port.png"
                alt="Vehicles being loaded at an international shipping port"
                width={900}
                height={1100}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-card p-6 shadow-lg sm:block">
              <div className="flex gap-8">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <p className="font-serif text-2xl font-semibold">{s.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <Eyebrow>Global logistics</Eyebrow>
              <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-5xl">
                Oceans, ports and paperwork — all managed for you.
              </h2>
            </Reveal>
            <div className="mt-9 space-y-7">
              {POINTS.map((p, i) => (
                <Reveal key={p.title} delay={i * 90} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-background text-gold">
                    <p.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={280}>
              <Link
                href="/track"
                className="group mt-9 inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                Track a vehicle
                <ArrowRight className="size-4 text-gold transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
