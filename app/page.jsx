import { Hero } from './components/Hero'
import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
  return (
    <main>
      <Hero />

      <section aria-labelledby="intro" className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 id="intro" className="heading text-3xl mb-4">About the Museum</h2>
          <p className="text-stone-300 leading-relaxed max-w-3xl">
            The Ancient Technology Museum curates artifacts that reveal the ingenuity of early civilizations. From timekeeping to navigation, these innovations laid the groundwork for modern science and engineering.
          </p>
        </div>
      </section>

      <section aria-labelledby="cta" className="py-8 border-y border-stone-800/60 bg-black/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-lg border border-stone-800/60 p-6 hover:border-bronze/60 transition-colors" aria-labelledby="cta-exhibits">
            <h3 id="cta-exhibits" className="heading text-2xl mb-2">Explore Exhibits</h3>
            <p className="text-stone-300 mb-4">Browse artifacts by era, region, and theme.</p>
            <Link className="btn-primary" href="/exhibits">View exhibits</Link>
          </article>
          <article className="rounded-lg border border-stone-800/60 p-6 hover:border-bronze/60 transition-colors" aria-labelledby="cta-tours">
            <h3 id="cta-tours" className="heading text-2xl mb-2">Take a Virtual Tour</h3>
            <p className="text-stone-300 mb-4">Walk through galleries from anywhere in the world.</p>
            <Link className="btn-primary" href="/tours">Start tour</Link>
          </article>
          <article className="rounded-lg border border-stone-800/60 p-6 hover:border-bronze/60 transition-colors" aria-labelledby="cta-visit">
            <h3 id="cta-visit" className="heading text-2xl mb-2">Plan Your Visit</h3>
            <p className="text-stone-300 mb-4">Find hours, tickets, and accessibility information.</p>
            <Link className="btn-primary" href="/visit">Plan now</Link>
          </article>
        </div>
      </section>

      <section aria-labelledby="featured" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="featured" className="heading text-3xl mb-8">Featured Artifact</h2>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="aspect-video relative rounded-lg overflow-hidden border border-stone-800">
              <Image src="/assets/astrolabe.jpg" alt="Bronze astrolabe with intricate engravings" fill className="object-cover" />
            </div>
            <div>
              <h3 className="heading text-2xl mb-3">Bronze Astrolabe</h3>
              <p className="text-stone-300 mb-4">An ancient astronomical instrument used for solving problems related to time and the position of the Sun and stars.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link className="btn-secondary" href="/exhibits">See more artifacts</Link>
                <Link className="btn-primary" href="/exhibits/bronze-astrolabe">View details</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
