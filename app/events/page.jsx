export const metadata = { title: 'Events' }

const events = [
  { title: 'Curator Talk: Navigating by the Stars', date: '2025-11-05', desc: 'An evening lecture on celestial navigation and the evolution of the astrolabe.' },
  { title: 'Workshop: Water Clocks', date: '2025-12-02', desc: 'Hands-on reconstruction of a simple clepsydra and discussion of timekeeping.' },
]

export default function EventsPage() {
  return (
    <main className="py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="heading text-4xl mb-6">Events</h1>
        <ul className="grid gap-4">
          {events.map((e) => (
            <li key={e.title} className="rounded-lg border border-stone-800 p-6">
              <h2 className="heading text-2xl mb-2">{e.title}</h2>
              <p className="text-stone-400 mb-1">{new Date(e.date).toLocaleDateString()}</p>
              <p className="text-stone-300">{e.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
