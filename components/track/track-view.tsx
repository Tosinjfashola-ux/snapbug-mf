'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search, Download, FileText, Ship } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { OrderTimeline } from '@/components/track/order-timeline'
import { cn } from '@/lib/utils'
import { ORDER_STAGES, SAMPLE_ORDER, DOCUMENTS } from '@/lib/site-data'

const currency = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

export function TrackView() {
  const [reference, setReference] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [notFound, setNotFound] = useState(false)

  const total = SAMPLE_ORDER.financials.reduce((s, f) => s + f.value, 0)
  const remaining = total - SAMPLE_ORDER.paid
  const paidPct = Math.round((SAMPLE_ORDER.paid / total) * 100)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const value = reference.trim().toUpperCase()
    if (!value || value === SAMPLE_ORDER.reference || value === 'DEMO') {
      setSubmitted(true)
      setNotFound(false)
    } else {
      setSubmitted(false)
      setNotFound(true)
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row"
      >
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            placeholder="Enter your order reference (try DEMO)"
            aria-label="Order reference"
            className="h-12 w-full rounded-full border border-border bg-card pl-11 pr-4 text-sm outline-none transition-colors focus:border-foreground/40"
          />
        </div>
        <Button type="submit" size="lg" className="h-12 rounded-full px-7">
          Track Order
        </Button>
      </form>

      {notFound && (
        <p className="mt-6 text-center text-sm text-muted-foreground">
          No order found for that reference. Try{' '}
          <button
            type="button"
            className="font-medium text-foreground underline underline-offset-4"
            onClick={() => {
              setReference('DEMO')
              setSubmitted(true)
              setNotFound(false)
            }}
          >
            the demo order
          </button>
          .
        </p>
      )}

      {submitted && (
        <div className="mt-14 space-y-6">
          {/* Summary */}
          <div className="overflow-hidden rounded-3xl border border-border bg-card">
            <div className="grid gap-8 p-7 md:grid-cols-[300px_1fr] md:p-9">
              <div className="overflow-hidden rounded-2xl bg-secondary">
                <Image
                  src={SAMPLE_ORDER.image || '/placeholder.svg'}
                  alt={SAMPLE_ORDER.vehicle}
                  width={600}
                  height={450}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-gold">
                  <Ship className="size-4" />
                  {SAMPLE_ORDER.status.toUpperCase()}
                </div>
                <h2 className="mt-3 font-serif text-2xl font-semibold sm:text-3xl">
                  {SAMPLE_ORDER.vehicle}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Reference {SAMPLE_ORDER.reference}
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-6">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      Estimated arrival
                    </p>
                    <p className="mt-1 font-medium">{SAMPLE_ORDER.eta}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      Route
                    </p>
                    <p className="mt-1 font-medium">
                      {SAMPLE_ORDER.details.shipping['Origin Port']} →{' '}
                      {SAMPLE_ORDER.details.shipping['Destination Port']}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
            {/* Timeline */}
            <div className="rounded-3xl border border-border bg-card p-7 md:p-8">
              <h3 className="font-serif text-xl font-semibold">
                Shipment progress
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {ORDER_STAGES.filter((s) => s.state === 'done').length} of{' '}
                {ORDER_STAGES.length} milestones complete
              </p>
              <div className="mt-7">
                <OrderTimeline stages={ORDER_STAGES} />
              </div>
            </div>

            <div className="space-y-6">
              {/* Details */}
              {(
                [
                  ['Vehicle', SAMPLE_ORDER.details.vehicle],
                  ['Shipping', SAMPLE_ORDER.details.shipping],
                  ['Destination', SAMPLE_ORDER.details.destination],
                ] as const
              ).map(([title, data]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-border bg-card p-7 md:p-8"
                >
                  <h3 className="font-serif text-xl font-semibold">{title}</h3>
                  <dl className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                    {Object.entries(data).map(([k, v]) => (
                      <div key={k}>
                        <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                          {k}
                        </dt>
                        <dd className="mt-1 text-sm font-medium">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}

              {/* Financials */}
              <div className="rounded-3xl border border-border bg-card p-7 md:p-8">
                <h3 className="font-serif text-xl font-semibold">
                  Cost breakdown
                </h3>
                <dl className="mt-5 space-y-3">
                  {SAMPLE_ORDER.financials.map((f) => (
                    <div
                      key={f.label}
                      className="flex items-center justify-between text-sm"
                    >
                      <dt className="text-muted-foreground">{f.label}</dt>
                      <dd className="font-medium">{currency(f.value)}</dd>
                    </div>
                  ))}
                  <div className="flex items-center justify-between border-t border-border pt-3 text-base">
                    <dt className="font-semibold">Total</dt>
                    <dd className="font-serif font-semibold">
                      {currency(total)}
                    </dd>
                  </div>
                </dl>
                <div className="mt-6">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Paid {currency(SAMPLE_ORDER.paid)}</span>
                    <span>{paidPct}%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-gold"
                      style={{ width: `${paidPct}%` }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {currency(remaining)} remaining on delivery
                  </p>
                </div>
              </div>

              {/* Documents */}
              <div className="rounded-3xl border border-border bg-card p-7 md:p-8">
                <h3 className="font-serif text-xl font-semibold">Documents</h3>
                <ul className="mt-5 divide-y divide-border">
                  {DOCUMENTS.map((doc) => (
                    <li
                      key={doc.name}
                      className="flex items-center justify-between gap-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <FileText
                          className={cn(
                            'size-4',
                            doc.ready ? 'text-gold' : 'text-muted-foreground/50',
                          )}
                        />
                        <div>
                          <p
                            className={cn(
                              'text-sm font-medium',
                              !doc.ready && 'text-muted-foreground',
                            )}
                          >
                            {doc.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {doc.ready
                              ? `${doc.type} · ${doc.size}`
                              : 'Pending'}
                          </p>
                        </div>
                      </div>
                      {doc.ready ? (
                        <button
                          type="button"
                          className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-secondary"
                        >
                          <Download className="size-3.5" />
                          Download
                        </button>
                      ) : (
                        <span className="text-xs text-muted-foreground">
                          Awaiting
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
