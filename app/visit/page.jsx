export const metadata = { title: 'Plan Your Visit' }

export default function VisitPage() {
  return (
    <main className="py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="heading text-4xl mb-6">Plan Your Visit</h1>
        <div className="grid gap-6 sm:grid-cols-2">
          <section aria-labelledby="hours">
            <h2 id="hours" className="heading text-2xl mb-2">Hours & Tickets</h2>
            <ul className="text-stone-300">
              <li>Mon–Fri: 10:00–18:00</li>
              <li>Sat–Sun: 10:00–20:00</li>
              <li className="mt-2">General admission: $18 • Students: $12</li>
            </ul>
          </section>
          <section aria-labelledby="accessibility">
            <h2 id="accessibility" className="heading text-2xl mb-2">Accessibility</h2>
            <p className="text-stone-300">Wheelchair accessible entrances, tactile exhibits, audio descriptions, and ASL tours available upon request.</p>
          </section>
        </div>
        <section aria-labelledby="directions" className="mt-8">
          <h2 id="directions" className="heading text-2xl mb-2">Directions</h2>
          <p className="text-stone-300">123 Antiquity Ave, Knowledge City. Public transport: Line A (Museum Stop).</p>
        </section>
      </div>
    </main>
  )
}
