import { Search, ShieldCheck, Ship, FileCheck2, Truck } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const ITEMS = [
  { icon: Search, label: 'Verified Sourcing' },
  { icon: ShieldCheck, label: 'Transparent Process' },
  { icon: Ship, label: 'International Shipping' },
  { icon: FileCheck2, label: 'Customs & Clearing' },
  { icon: Truck, label: 'Doorstep Delivery' },
]

export function TrustStrip() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <Reveal className="flex flex-col items-center gap-8 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            End-to-End Service · Sourcing → Procurement → Shipping → Clearing → Delivery
          </p>
          <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {ITEMS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 text-center"
              >
                <span className="flex size-11 items-center justify-center rounded-full border border-border bg-secondary text-foreground/80">
                  <Icon className="size-5" />
                </span>
                <span className="text-sm font-medium text-foreground/80">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
