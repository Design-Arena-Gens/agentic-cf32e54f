import './globals.css'
import { MuseoLayout } from './components/MuseoLayout'
import Script from 'next/script'

export const metadata = {
  title: 'Ancient Technology Museum',
  description: 'Explore the marvels of ancient innovations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-charcoal text-stone-200">
      <head>
        <Script src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" strategy="beforeInteractive" />
      </head>
      <body>
        <MuseoLayout>{children}</MuseoLayout>
      </body>
    </html>
  )
}
