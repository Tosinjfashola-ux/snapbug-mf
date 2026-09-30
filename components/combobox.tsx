'use client'

import { useId, useMemo, useRef, useState } from 'react'
import { Check, ChevronDown, X } from 'lucide-react'
import { cn } from '@/lib/utils'

type ComboboxProps = {
  label?: string
  value: string
  onChange: (value: string) => void
  options: readonly string[]
  placeholder?: string
  allowCustom?: boolean
  emptyText?: string
  disabled?: boolean
  className?: string
  inputClassName?: string
  icon?: React.ReactNode
  ariaLabel?: string
}

export function Combobox({
  label,
  value,
  onChange,
  options,
  placeholder = 'Select or type…',
  allowCustom = true,
  emptyText = 'No matches',
  disabled,
  className,
  inputClassName,
  icon,
  ariaLabel,
}: ComboboxProps) {
  const id = useId()
  const listId = `${id}-list`
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState<string | null>(null)
  const [active, setActive] = useState(0)
  const listRef = useRef<HTMLUListElement>(null)

  const text = query ?? value
  const filtered = useMemo(() => {
    const q = (query ?? '').trim().toLowerCase()
    if (!q) return [...options]
    const starts = options.filter((o) => o.toLowerCase().startsWith(q))
    const contains = options.filter(
      (o) => !o.toLowerCase().startsWith(q) && o.toLowerCase().includes(q),
    )
    return [...starts, ...contains]
  }, [options, query])

  const trimmed = (query ?? '').trim()
  const showCustom =
    allowCustom &&
    trimmed.length > 0 &&
    !options.some((o) => o.toLowerCase() === trimmed.toLowerCase())
  const items = showCustom ? [...filtered, trimmed] : filtered

  function commit(v: string) {
    onChange(v)
    setQuery(null)
    setOpen(false)
  }

  function close() {
    if (query !== null) {
      if (allowCustom) onChange(query.trim())
      else {
        const exact = options.find(
          (o) => o.toLowerCase() === query.trim().toLowerCase(),
        )
        if (exact) onChange(exact)
      }
    }
    setQuery(null)
    setOpen(false)
  }

  function scrollTo(i: number) {
    const el = listRef.current?.children[i] as HTMLElement | undefined
    el?.scrollIntoView({ block: 'nearest' })
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (!open) return setOpen(true)
      const n = Math.min(active + 1, items.length - 1)
      setActive(n)
      scrollTo(n)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const n = Math.max(active - 1, 0)
      setActive(n)
      scrollTo(n)
    } else if (e.key === 'Enter') {
      if (e.nativeEvent.isComposing || e.keyCode === 229) return
      if (open && items[active] !== undefined) {
        e.preventDefault()
        commit(items[active])
      }
    } else if (e.key === 'Escape') {
      setQuery(null)
      setOpen(false)
    }
  }

  const input = (
    <div className={cn('relative', className)}>
      {icon && (
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
          {icon}
        </span>
      )}
      <input
        id={id}
        role="combobox"
        aria-expanded={open}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-label={label ? undefined : ariaLabel}
        aria-activedescendant={open && items[active] !== undefined ? `${id}-opt-${active}` : undefined}
        autoComplete="off"
        disabled={disabled}
        value={text}
        placeholder={placeholder}
        onFocus={() => {
          setOpen(true)
          setActive(0)
        }}
        onClick={() => setOpen(true)}
        onBlur={close}
        onChange={(e) => {
          setQuery(e.target.value)
          setActive(0)
          setOpen(true)
        }}
        onKeyDown={onKeyDown}
        className={cn(
          'h-12 w-full rounded-xl border border-border bg-background pr-16 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15 disabled:cursor-not-allowed disabled:opacity-50',
          icon ? 'pl-11' : 'pl-4',
          inputClassName,
        )}
      />
      <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center">
        {value && !disabled && (
          <button
            type="button"
            tabIndex={-1}
            aria-label="Clear selection"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => commit('')}
            className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <X className="size-3.5" />
          </button>
        )}
        <button
          type="button"
          tabIndex={-1}
          aria-label="Show options"
          disabled={disabled}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => {
            setOpen((o) => !o)
            document.getElementById(id)?.focus()
          }}
          className="rounded-md p-1.5 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronDown className={cn('size-4 transition-transform', open && 'rotate-180')} />
        </button>
      </div>

      {open && (
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          className="absolute left-0 right-0 top-full z-50 mt-2 max-h-64 overflow-y-auto rounded-xl border border-border bg-popover p-1.5 text-popover-foreground shadow-xl animate-in fade-in-0 zoom-in-95"
        >
          {items.length === 0 && (
            <li className="px-3 py-2.5 text-sm text-muted-foreground">{emptyText}</li>
          )}
          {items.map((opt, i) => {
            const isCustom = showCustom && i === items.length - 1
            const selected = !isCustom && opt === value
            return (
              <li
                key={`${opt}-${i}`}
                id={`${id}-opt-${i}`}
                role="option"
                aria-selected={selected}
                onMouseDown={(e) => e.preventDefault()}
                onMouseEnter={() => setActive(i)}
                onClick={() => commit(opt)}
                className={cn(
                  'flex cursor-pointer items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm',
                  i === active && 'bg-secondary',
                  isCustom && 'border-t border-border text-primary',
                )}
              >
                <span className="truncate">
                  {isCustom ? `Use “${opt}”` : <Highlight text={opt} query={trimmed} />}
                </span>
                {selected && <Check className="size-4 shrink-0 text-primary" />}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )

  if (!label) return input
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      {input}
    </div>
  )
}

function Highlight({ text, query }: { text: string; query: string }) {
  if (!query) return <>{text}</>
  const i = text.toLowerCase().indexOf(query.toLowerCase())
  if (i === -1) return <>{text}</>
  return (
    <>
      {text.slice(0, i)}
      <mark className="rounded-sm bg-gold/30 text-foreground">{text.slice(i, i + query.length)}</mark>
      {text.slice(i + query.length)}
    </>
  )
}
