import { ExhibitCard } from './ExhibitCard'

export function ExhibitGrid({ exhibits }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {exhibits.map((ex) => (
        <ExhibitCard key={ex.slug} exhibit={ex} />
      ))}
    </div>
  )
}
