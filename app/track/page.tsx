import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { TrackView } from '@/components/track/track-view'

export const metadata: Metadata = {
  title: 'Track My Order',
  description:
    'Follow your vehicle from purchase to your door — live status, shipping details, cost breakdown and documents in one place.',
}

export default function TrackPage() {
  return (
    <>
      <PageHero
        eyebrow="Track my order"
        title="Follow your vehicle, every mile home."
        description="Enter your order reference to see live status, shipping details, your cost breakdown and all documents — like tracking a premium package."
      />
      <section className="bg-background">
        <TrackView />
      </section>
    </>
  )
}
