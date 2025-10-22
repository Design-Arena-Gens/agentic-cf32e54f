export const metadata = { title: 'Educational Resources' }

const resources = [
  { title: 'The Antikythera Mechanism Research Project', href: 'https://www.antikythera-mechanism.gr/' },
  { title: 'Stanford Encyclopedia of Philosophy – Ancient Technology', href: 'https://plato.stanford.edu/entries/ancient-technology/' },
  { title: 'Smithsonian – Ancient Engineering', href: 'https://www.si.edu/search/collection-images?edan_q=ancient%20engineering' },
]

export default function ResourcesPage() {
  return (
    <main className="py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="heading text-4xl mb-6">Educational Resources</h1>
        <p className="text-stone-300 mb-6 max-w-2xl">Dive deeper with curated readings, primary sources, and reputable databases.</p>
        <ul className="grid gap-3">
          {resources.map((r) => (
            <li key={r.href}>
              <a className="inline-flex items-center gap-2 hover:text-bronze" href={r.href} target="_blank" rel="noopener noreferrer">
                <span className="i-ri:external-link-line" aria-hidden="true" />
                {r.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
