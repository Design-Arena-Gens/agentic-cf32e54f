import Image from 'next/image'
import data from '../../../content/exhibits.json'

export async function generateStaticParams() {
  return data.exhibits.map((ex) => ({ slug: ex.slug }))
}

export default function ExhibitDetail({ params }) {
  const exhibit = data.exhibits.find((e) => e.slug === params.slug)
  if (!exhibit) {
    return <main className="py-16"><div className="mx-auto max-w-5xl px-4"><p>Not found.</p></div></main>
  }

  return (
    <main className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="grid gap-4 content-start">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden border border-stone-800">
              <Image src={exhibit.image} alt={exhibit.imageAlt} fill className="object-cover" />
            </div>
            {exhibit.model && (
              <div className="aspect-square rounded-lg overflow-hidden border border-stone-800 bg-black/20">
                {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                <model-viewer src={exhibit.model} ar ar-modes="webxr scene-viewer quick-look" camera-controls shadow-intensity="1" alt={exhibit.title} style={{ width: '100%', height: '100%' }}></model-viewer>
              </div>
            )}
          </div>
          <article aria-labelledby="title">
            <h1 id="title" className="heading text-4xl mb-3">{exhibit.title}</h1>
            <p className="text-stone-400 mb-1">{exhibit.era} • {exhibit.region}</p>
            <p className="text-stone-300 leading-relaxed mb-6">{exhibit.description}</p>
            <section aria-labelledby="context" className="mt-8">
              <h2 id="context" className="heading text-2xl mb-2">Historical Context</h2>
              <p className="text-stone-300 leading-relaxed">{exhibit.context}</p>
            </section>
          </article>
        </div>
      </div>
    </main>
  )
}
