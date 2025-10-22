"use client"
import Link from 'next/link'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { useState } from 'react'

const serif = Cormorant_Garamond({ subsets: ['latin'], weight: ['400','600','700'], display: 'swap', variable: '--font-serif' })
const sans = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-sans' })

export function Container({ children, className = '' }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}

export function SkipToContent() {
  return (
    <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 z-[100] bg-bronze text-charcoal px-3 py-2 rounded">
      Skip to content
    </a>
  )
}

export function MuseoLayout({ children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`${serif.variable} ${sans.variable} font-sans min-h-screen flex flex-col`}>
      <SkipToContent />
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-charcoal/70 bg-charcoal border-b border-stone-800/80">
        <Container className="flex items-center justify-between py-4">
          <Link className="text-lg font-serif tracking-wide text-bronze" href="/">Ancient Tech Museum</Link>
          <nav aria-label="Primary" className="hidden md:flex gap-6 text-sm">
            <Link className="hover:text-bronze" href="/exhibits">Exhibits</Link>
            <Link className="hover:text-bronze" href="/tours">Virtual Tours</Link>
            <Link className="hover:text-bronze" href="/resources">Resources</Link>
            <Link className="hover:text-bronze" href="/events">Events</Link>
            <Link className="hover:text-bronze" href="/visit">Plan Your Visit</Link>
          </nav>
          <button aria-label="Open menu" aria-expanded={open} className="md:hidden btn-secondary px-3 py-2" onClick={() => setOpen(v => !v)}>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </Container>
        {open && (
          <div className="md:hidden border-t border-stone-800">
            <Container className="py-3 grid gap-2">
              <Link onClick={() => setOpen(false)} className="py-2 hover:text-bronze" href="/exhibits">Exhibits</Link>
              <Link onClick={() => setOpen(false)} className="py-2 hover:text-bronze" href="/tours">Virtual Tours</Link>
              <Link onClick={() => setOpen(false)} className="py-2 hover:text-bronze" href="/resources">Resources</Link>
              <Link onClick={() => setOpen(false)} className="py-2 hover:text-bronze" href="/events">Events</Link>
              <Link onClick={() => setOpen(false)} className="py-2 hover:text-bronze" href="/visit">Plan Your Visit</Link>
            </Container>
          </div>
        )}
      </header>
      <main id="content" className="flex-1">{children}</main>
      <footer className="mt-16 border-t border-stone-700">
        <Container className="py-8 text-sm text-stone-400">
          <p>© {new Date().getFullYear()} Ancient Technology Museum</p>
        </Container>
      </footer>
    </div>
  )
}
