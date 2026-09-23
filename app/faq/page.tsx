import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { FaqAccordion } from '@/components/faq-accordion'
import { CtaBanner } from '@/components/cta-banner'
import { FAQ_GROUPS } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers to common questions about sourcing, payment, shipping, customs clearing and delivery of cars and boats worldwide.',
}

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Questions & answers"
        title="Everything you need to know."
        description="If you cannot find what you are looking for, start a request and our team will answer any questions directly."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="space-y-16">
            {FAQ_GROUPS.map((group) => (
              <Reveal key={group.category}>
                <h2 className="font-serif text-2xl font-semibold">
                  {group.category}
                </h2>
                <div className="mt-6">
                  <FaqAccordion items={group.items} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Still have questions?"
        description="Start a request and our sourcing team will get back to you with clear, direct answers."
      />
    </>
  )
}
