import { ExhibitGrid } from '../components/ExhibitGrid'
import data from '../../content/exhibits.json'

export const metadata = { title: 'Exhibits' }

export default function ExhibitsPage() {
  return (
    <main className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="heading text-4xl mb-6">Exhibits</h1>
        <p className="text-stone-300 mb-8 max-w-2xl">A curated selection of devices and designs that powered ancient societies.</p>
        <ExhibitGrid exhibits={data.exhibits} />
      </div>
    </main>
  )
}
