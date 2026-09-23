import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, MapPin } from 'lucide-react'

export type AssetCardProps = {
  image: string
  name: string
  category: string
  year: number
  location: string
  metaLabel: string
  metaValue: string
  price: string
  landed: string
  spec: string
}

export function AssetCard(props: AssetCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.3)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <Image
          src={props.image || '/placeholder.svg'}
          alt={props.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium tracking-wide text-foreground backdrop-blur-sm">
          {props.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-serif text-lg font-semibold leading-tight">
              {props.name}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{props.spec}</p>
          </div>
          <span className="shrink-0 text-sm font-medium text-muted-foreground">
            {props.year}
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4 border-t border-border pt-5 text-sm">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              {props.metaLabel}
            </p>
            <p className="mt-1 font-medium">{props.metaValue}</p>
          </div>
          <div>
            <p className="flex items-center gap-1 text-xs uppercase tracking-wide text-muted-foreground">
              <MapPin className="size-3" /> Location
            </p>
            <p className="mt-1 font-medium">{props.location}</p>
          </div>
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 pt-6">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              From
            </p>
            <p className="font-serif text-xl font-semibold">{props.price}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Est. landed {props.landed}
            </p>
          </div>
          <Link
            href="/request"
            className="group/btn inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
          >
            Enquire
            <ArrowUpRight className="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  )
}
