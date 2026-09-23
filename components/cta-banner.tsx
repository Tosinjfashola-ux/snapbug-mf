import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function CtaBanner({
  title = 'Your search starts here.',
  description = 'Tell us the car or boat you have in mind. Our sourcing team reviews your requirements and returns a tailored shortlist with landed cost estimates.',
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center sm:px-16 lg:py-20">
          <div className="pointer-events-none absolute -left-16 -top-16 size-64 rounded-full bg-gold/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 size-72 rounded-full bg-navy/25 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-primary-foreground/75">
              {description}
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/request"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-primary transition-colors hover:bg-white/90"
              >
                Start a Request
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                How It Works
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
