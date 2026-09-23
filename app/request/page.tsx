import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { RequestWizard } from '@/components/request/request-wizard'

export const metadata: Metadata = {
  title: 'Start a Request',
  description:
    'Tell us the car or boat you have in mind and where it needs to arrive. Our sourcing team returns a curated shortlist with landed cost estimates.',
}

export default async function RequestPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>
}) {
  const { type } = await searchParams
  const valid = ['car', 'boat', 'motorbike', 'jetski'] as const
  const defaultAsset = (valid as readonly string[]).includes(type ?? '')
    ? (type as (typeof valid)[number])
    : 'car'

  return (
    <>
      <PageHero
        eyebrow="Start a request"
        title="Tell us what you're looking for."
        description="Share your brief in a few quick steps. There is no obligation — you will receive a curated shortlist with transparent landed costs before deciding anything."
      />
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <RequestWizard defaultAsset={defaultAsset} />
        </div>
      </section>
    </>
  )
}
