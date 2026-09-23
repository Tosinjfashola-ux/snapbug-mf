import { Check, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { TrackStage } from '@/lib/site-data'

export function OrderTimeline({ stages }: { stages: TrackStage[] }) {
  return (
    <ol className="relative">
      {stages.map((stage, i) => {
        const isLast = i === stages.length - 1
        return (
          <li key={stage.label} className="relative flex gap-4 pb-7 last:pb-0">
            {!isLast && (
              <span
                className={cn(
                  'absolute left-[15px] top-8 h-[calc(100%-8px)] w-px',
                  stage.state === 'done' ? 'bg-gold/50' : 'bg-border',
                )}
                aria-hidden
              />
            )}
            <span
              className={cn(
                'z-10 flex size-8 shrink-0 items-center justify-center rounded-full border',
                stage.state === 'done' &&
                  'border-gold bg-gold text-gold-foreground',
                stage.state === 'current' &&
                  'border-gold bg-background text-gold',
                stage.state === 'upcoming' &&
                  'border-border bg-background text-muted-foreground',
              )}
            >
              {stage.state === 'done' ? (
                <Check className="size-4" />
              ) : stage.state === 'current' ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <span className="size-1.5 rounded-full bg-current" />
              )}
            </span>
            <div className="pt-1">
              <p
                className={cn(
                  'text-sm font-medium',
                  stage.state === 'upcoming'
                    ? 'text-muted-foreground'
                    : 'text-foreground',
                )}
              >
                {stage.label}
              </p>
              {stage.state === 'current' && (
                <p className="mt-0.5 text-xs font-medium text-gold">
                  In progress
                </p>
              )}
            </div>
          </li>
        )
      })}
    </ol>
  )
}
