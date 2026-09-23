import { cn } from '@/lib/utils'

export function Eyebrow({
  children,
  className,
  onDark = false,
}: {
  children: React.ReactNode
  className?: string
  onDark?: boolean
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em]',
        onDark ? 'text-gold' : 'text-gold',
        className,
      )}
    >
      <span className="h-px w-6 bg-gold/60" />
      {children}
    </span>
  )
}
