import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CtaBanner } from '@/components/cta-banner'
import { PROCESS_STEPS } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'From your first request to your keys — eight considered steps covering sourcing, purchase, shipping, customs clearing and doorstep delivery.',
}

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="From your first request to your keys."
        description="A single, accountable partner managing every stage of your vehicle's journey. Here is exactly what happens after you reach out."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="relative">
            <div
              className="absolute left-[27px] top-2 bottom-2 hidden w-px bg-border lg:block"
              aria-hidden
            />
            <ol className="space-y-12 lg:space-y-16">
              {PROCESS_STEPS.map((step) => (
                <li key={step.n}>
                  <Reveal className="grid gap-6 lg:grid-cols-[56px_1fr]">
                    <div className="relative flex lg:justify-center">
                      <span className="z-10 flex size-14 items-center justify-center rounded-full border border-border bg-card font-serif text-lg font-semibold text-foreground shadow-sm">
                        {String(step.n).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="grid gap-6 rounded-2xl border border-border bg-card p-7 md:grid-cols-[1fr_1fr] md:p-9">
                      <div>
                        <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
                          {step.status}
                        </span>
                        <h2 className="mt-4 font-serif text-2xl font-semibold">
                          {step.title}
                        </h2>
                        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                          {step.body}
                        </p>
                      </div>
                      <ul className="flex flex-col justify-center gap-3 border-t border-border pt-6 md:border-l md:border-t-0 md:pl-9 md:pt-0">
                        {step.details.map((d) => (
                          <li key={d} className="flex items-start gap-3 text-sm">
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                            <span className="text-foreground/80">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to begin?"
        description="Start a request and our sourcing team will guide you through every step from here."
      />
    </>
  )
}
