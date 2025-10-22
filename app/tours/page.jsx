export const metadata = { title: 'Virtual Tours' }

export default function ToursPage() {
  return (
    <main className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="heading text-4xl mb-6">Virtual Tours</h1>
        <p className="text-stone-300 mb-8 max-w-2xl">Experience the museum remotely with guided tours, 360° galleries, and narrated walkthroughs.</p>
        <div className="grid gap-6 sm:grid-cols-2">
          <iframe className="w-full aspect-video rounded-lg border border-stone-800" src="https://www.youtube.com/embed/2iVovj1U_8k" title="Ancient tech tour" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          <iframe className="w-full aspect-video rounded-lg border border-stone-800" src="https://www.youtube.com/embed/TOuZgTnXKpg" title="Old world inventions" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
      </div>
    </main>
  )
}
