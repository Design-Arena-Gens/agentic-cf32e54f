import Image from 'next/image'
import Link from 'next/link'
import { Container } from './MuseoLayout'

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/assets/hero.svg" alt="Abstract patina texture" fill priority sizes="100vw" className="object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/60 to-charcoal" aria-hidden="true" />
      </div>
      <Container className="relative py-24 sm:py-32">
        <div className="max-w-2xl reveal revealed">
          <h1 id="hero-heading" className="heading text-4xl sm:text-5xl md:text-6xl mb-6">
            Where Ancient Ingenuity Meets Modern Curiosity
          </h1>
          <p className="text-stone-300/90 text-lg leading-relaxed mb-8">
            Discover the machines, methods, and minds that shaped early civilizations—from water clocks and astrolabes to signal fires and automata.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/exhibits" className="btn-primary">Explore Exhibits</Link>
            <Link href="/visit" className="btn-secondary">Plan Your Visit</Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
