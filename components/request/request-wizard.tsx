'use client'

import { useState } from 'react'
import { Car, Sailboat, ArrowRight, ArrowLeft, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type AssetType = 'car' | 'boat'

const STEPS = ['Asset', 'Details', 'Delivery', 'Contact'] as const

const initial = {
  assetType: 'car' as AssetType,
  make: '',
  model: '',
  yearRange: '',
  budget: '',
  colour: '',
  mileage: '',
  country: '',
  city: '',
  name: '',
  email: '',
  phone: '',
  notes: '',
}

export function RequestWizard({
  defaultAsset = 'car',
}: {
  defaultAsset?: AssetType
}) {
  const [step, setStep] = useState(0)
  const [data, setData] = useState({ ...initial, assetType: defaultAsset })
  const [done, setDone] = useState(false)

  const set = (k: keyof typeof data, v: string) =>
    setData((d) => ({ ...d, [k]: v }))

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1))
  const back = () => setStep((s) => Math.max(s - 1, 0))

  if (done) {
    return (
      <div className="mx-auto max-w-xl rounded-3xl border border-border bg-card p-10 text-center">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-gold text-gold-foreground">
          <Check className="size-8" />
        </div>
        <h2 className="mt-6 font-serif text-3xl font-semibold">
          Request received
        </h2>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          Thank you, {data.name || 'there'}. Our sourcing team will review your
          brief for a {data.assetType} and send a curated shortlist with landed
          cost estimates, typically within two business days.
        </p>
        <div className="mt-6 rounded-2xl bg-secondary px-6 py-4 text-left text-sm">
          <p className="text-muted-foreground">Your reference</p>
          <p className="mt-1 font-serif text-lg font-semibold">
            REQ-{new Date().getFullYear()}-
            {Math.floor(1000 + Math.random() * 9000)}
          </p>
        </div>
        <Button
          className="mt-8 rounded-full"
          size="lg"
          onClick={() => {
            setData({ ...initial, assetType: defaultAsset })
            setStep(0)
            setDone(false)
          }}
        >
          Start another request
        </Button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl">
      {/* Stepper */}
      <ol className="mb-10 flex items-center gap-2">
        {STEPS.map((label, i) => (
          <li key={label} className="flex flex-1 items-center gap-2">
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  'flex size-8 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-colors',
                  i < step && 'border-gold bg-gold text-gold-foreground',
                  i === step && 'border-foreground bg-foreground text-background',
                  i > step && 'border-border text-muted-foreground',
                )}
              >
                {i < step ? <Check className="size-4" /> : i + 1}
              </span>
              <span
                className={cn(
                  'hidden text-sm font-medium sm:block',
                  i === step ? 'text-foreground' : 'text-muted-foreground',
                )}
              >
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <span
                className={cn(
                  'h-px flex-1',
                  i < step ? 'bg-gold' : 'bg-border',
                )}
              />
            )}
          </li>
        ))}
      </ol>

      <div className="rounded-3xl border border-border bg-card p-7 sm:p-10">
        {step === 0 && (
          <Step title="What are you looking for?">
            <div className="grid grid-cols-2 gap-4">
              {(
                [
                  { key: 'car', label: 'A car', icon: Car },
                  { key: 'boat', label: 'A boat', icon: Sailboat },
                ] as const
              ).map((opt) => (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => set('assetType', opt.key)}
                  className={cn(
                    'flex flex-col items-center gap-3 rounded-2xl border p-8 transition-all',
                    data.assetType === opt.key
                      ? 'border-foreground bg-secondary'
                      : 'border-border hover:border-foreground/30',
                  )}
                >
                  <opt.icon className="size-8" />
                  <span className="font-medium">{opt.label}</span>
                </button>
              ))}
            </div>
          </Step>
        )}

        {step === 1 && (
          <Step title="Tell us the details">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Preferred make"
                placeholder={data.assetType === 'car' ? 'Mercedes-Benz' : 'Azimut'}
                value={data.make}
                onChange={(v) => set('make', v)}
              />
              <Field
                label="Model"
                placeholder={data.assetType === 'car' ? 'GLE 450' : '62 Flybridge'}
                value={data.model}
                onChange={(v) => set('model', v)}
              />
              <Field
                label="Year range"
                placeholder="2022 – 2024"
                value={data.yearRange}
                onChange={(v) => set('yearRange', v)}
              />
              <Field
                label="Budget (USD)"
                placeholder="$50,000 – $70,000"
                value={data.budget}
                onChange={(v) => set('budget', v)}
              />
              <Field
                label="Colour preference"
                placeholder="Obsidian black"
                value={data.colour}
                onChange={(v) => set('colour', v)}
              />
              <Field
                label={data.assetType === 'car' ? 'Max mileage' : 'Max engine hours'}
                placeholder={data.assetType === 'car' ? '20,000 mi' : '500 hrs'}
                value={data.mileage}
                onChange={(v) => set('mileage', v)}
              />
            </div>
          </Step>
        )}

        {step === 2 && (
          <Step title="Where should it be delivered?">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Destination country"
                placeholder="Ghana"
                value={data.country}
                onChange={(v) => set('country', v)}
              />
              <Field
                label="Destination city"
                placeholder="Accra"
                value={data.city}
                onChange={(v) => set('city', v)}
              />
            </div>
            <Field
              label="Anything else we should know? (optional)"
              placeholder="Specific trim, options, timing or delivery notes…"
              value={data.notes}
              onChange={(v) => set('notes', v)}
              textarea
            />
          </Step>
        )}

        {step === 3 && (
          <Step title="How can we reach you?">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Full name"
                placeholder="Jordan Mensah"
                value={data.name}
                onChange={(v) => set('name', v)}
              />
              <Field
                label="Email"
                type="email"
                placeholder="you@email.com"
                value={data.email}
                onChange={(v) => set('email', v)}
              />
              <Field
                label="Phone / WhatsApp"
                placeholder="+233 …"
                value={data.phone}
                onChange={(v) => set('phone', v)}
              />
            </div>

            <div className="mt-6 rounded-2xl bg-secondary p-5 text-sm">
              <p className="font-medium">Request summary</p>
              <p className="mt-2 text-muted-foreground">
                {data.assetType === 'car' ? 'Car' : 'Boat'}
                {data.make && ` · ${data.make}`}
                {data.model && ` ${data.model}`}
                {data.budget && ` · ${data.budget}`}
                {data.country && ` · to ${data.city ? `${data.city}, ` : ''}${data.country}`}
              </p>
            </div>
          </Step>
        )}

        {/* Nav */}
        <div className="mt-9 flex items-center justify-between gap-4">
          <Button
            type="button"
            variant="ghost"
            onClick={back}
            disabled={step === 0}
            className={cn('rounded-full', step === 0 && 'invisible')}
          >
            <ArrowLeft className="size-4" />
            Back
          </Button>
          {step < STEPS.length - 1 ? (
            <Button type="button" onClick={next} className="rounded-full px-7">
              Continue
              <ArrowRight className="size-4" />
            </Button>
          ) : (
            <Button
              type="button"
              onClick={() => setDone(true)}
              disabled={!data.name || !data.email}
              className="rounded-full px-7"
            >
              Submit request
              <ArrowRight className="size-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

function Step({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h2 className="font-serif text-2xl font-semibold">{title}</h2>
      <div className="mt-7 space-y-5">{children}</div>
    </div>
  )
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  textarea,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
  textarea?: boolean
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">{label}</span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={3}
          className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground/40"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition-colors focus:border-foreground/40"
        />
      )}
    </label>
  )
}
