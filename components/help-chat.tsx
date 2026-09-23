'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { MessageCircle, X, ArrowRight, RotateCcw } from 'lucide-react'
import { FAQ_GROUPS } from '@/lib/site-data'
import { cn } from '@/lib/utils'

type Msg = { role: 'bot' | 'user'; text: string; cta?: boolean }

const QUICK = FAQ_GROUPS.flatMap((g) => g.items).slice(0, 6)

const WELCOME: Msg = {
  role: 'bot',
  text: "Hi, I'm Buggy — Snapbug's quick help assistant. Pick a question below and I'll answer right away, or start a request any time.",
}

export function HelpChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([WELCOME])
  const [answered, setAnswered] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, open])

  function ask(q: string, a: string) {
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: q },
      { role: 'bot', text: a },
      {
        role: 'bot',
        text: 'Anything else? Pick another question, or start your request and our team takes it from there.',
        cta: true,
      },
    ])
    setAnswered(true)
  }

  function reset() {
    setMessages([WELCOME])
    setAnswered(false)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3.5 text-sm font-semibold text-gold-foreground shadow-[0_12px_36px_-8px_rgba(0,0,0,0.4)] transition-all hover:scale-105 active:scale-95',
          open && 'scale-0 opacity-0',
        )}
        aria-label="Open quick help chat"
      >
        <MessageCircle className="size-5" />
        Quick Help
      </button>

      <div
        className={cn(
          'fixed bottom-5 right-5 z-[60] flex w-[calc(100vw-2.5rem)] max-w-sm origin-bottom-right flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[0_24px_70px_-20px_rgba(0,0,0,0.45)] transition-all duration-300',
          open
            ? 'pointer-events-auto scale-100 opacity-100'
            : 'pointer-events-none scale-90 opacity-0',
        )}
        role="dialog"
        aria-label="Quick help"
        aria-hidden={!open}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 bg-primary px-5 py-4 text-primary-foreground">
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-full bg-gold font-serif text-sm font-semibold text-gold-foreground">
              S
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Snapbug Help</p>
              <p className="flex items-center gap-1.5 text-xs text-primary-foreground/70">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                Typically replies instantly
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {answered && (
              <button
                type="button"
                onClick={reset}
                className="rounded-full p-2 text-primary-foreground/70 transition-colors hover:bg-white/10 hover:text-primary-foreground"
                aria-label="Reset conversation"
              >
                <RotateCcw className="size-4" />
              </button>
            )}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-primary-foreground/70 transition-colors hover:bg-white/10 hover:text-primary-foreground"
              aria-label="Close chat"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex max-h-80 flex-col gap-3 overflow-y-auto bg-secondary/40 px-4 py-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={cn(
                'max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed',
                m.role === 'bot'
                  ? 'self-start rounded-bl-sm bg-card text-foreground shadow-sm'
                  : 'self-end rounded-br-sm bg-primary text-primary-foreground',
              )}
            >
              {m.text}
              {m.cta && (
                <Link
                  href="/request"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:underline"
                >
                  Start a request
                  <ArrowRight className="size-3.5" />
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Quick FAQ list */}
        <div className="border-t border-border bg-card px-4 py-3">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Frequently asked
          </p>
          <div className="flex max-h-36 flex-col gap-1.5 overflow-y-auto">
            {QUICK.map((item) => (
              <button
                key={item.q}
                type="button"
                onClick={() => ask(item.q, item.a)}
                className="flex items-center justify-between gap-2 rounded-xl border border-border px-3 py-2 text-left text-sm font-medium text-foreground transition-colors hover:border-gold/60 hover:bg-gold/10"
              >
                {item.q}
                <ArrowRight className="size-3.5 shrink-0 text-gold" />
              </button>
            ))}
          </div>
          <Link
            href="/faq"
            className="mt-2.5 block text-center text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View the full FAQ
          </Link>
        </div>
      </div>
    </>
  )
}
