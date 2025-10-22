import Link from 'next/link'
import Image from 'next/image'

export function ExhibitCard({ exhibit }) {
  return (
    <article className="group rounded-lg overflow-hidden border border-stone-800/80 hover:border-bronze/60 transition-colors" aria-labelledby={`${exhibit.slug}-title`}>
      <div className="relative aspect-[4/3]">
        <Image src={exhibit.image} alt={exhibit.imageAlt} fill className="object-cover group-hover:opacity-95" />
      </div>
      <div className="p-4">
        <h3 id={`${exhibit.slug}-title`} className="heading text-xl mb-1">
          <Link href={`/exhibits/${exhibit.slug}`} className="hover:text-bronze">{exhibit.title}</Link>
        </h3>
        <p className="text-stone-400 text-sm">{exhibit.era} • {exhibit.region}</p>
      </div>
    </article>
  )
}
