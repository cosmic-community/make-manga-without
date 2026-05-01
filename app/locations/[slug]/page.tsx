// app/locations/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getLocationBySlug, getMetafieldValue } from '@/lib/cosmic'

export default async function LocationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const location = await getLocationBySlug(slug)

  if (!location) {
    notFound()
  }

  const name = getMetafieldValue(location.metadata?.name) || location.title
  const description = getMetafieldValue(location.metadata?.description)
  const image = location.metadata?.image

  return (
    <div className="bg-parchment-50">
      {image && (
        <div className="relative bg-peacock-900">
          <img
            src={`${image.imgix_url}?w=2000&h=900&fit=crop&auto=format,compress`}
            alt={name}
            width={1200}
            height={500}
            className="w-full h-64 md:h-96 object-cover opacity-70"
          />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full text-parchment-50">
              <p className="font-display tracking-widest text-gold-light mb-2">LOCATION</p>
              <h1 className="font-display text-3xl md:text-5xl text-gold-light">
                {name}
              </h1>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!image && (
          <h1 className="font-display text-4xl md:text-5xl text-peacock-900 mb-6">
            {name}
          </h1>
        )}

        {description && (
          <div className="prose prose-lg max-w-none font-serif text-peacock-900 leading-relaxed">
            {description.split('\n').filter(p => p.trim()).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link href="/locations" className="text-saffron-600 hover:text-saffron-800 font-display tracking-wider">
            ← BACK TO LOCATIONS
          </Link>
        </div>
      </div>
    </div>
  )
}