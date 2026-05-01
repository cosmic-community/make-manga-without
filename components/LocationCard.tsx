import Link from 'next/link'
import type { Location } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function LocationCard({ location }: { location: Location }) {
  const image = location.metadata?.image
  const name = getMetafieldValue(location.metadata?.name) || location.title
  const description = getMetafieldValue(location.metadata?.description)

  return (
    <Link href={`/locations/${location.slug}`} className="block group">
      <article className="manga-panel overflow-hidden h-full flex flex-col">
        {image && (
          <div className="relative overflow-hidden bg-peacock-100">
            <img
              src={`${image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
              alt={name}
              width={400}
              height={250}
              className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-5 flex-1 flex flex-col bg-parchment-100">
          <h3 className="font-display text-xl text-peacock-900 mb-2 group-hover:text-saffron-600 transition-colors">
            {name}
          </h3>
          {description && (
            <p className="font-serif text-peacock-700 leading-relaxed line-clamp-3">
              {description}
            </p>
          )}
        </div>
      </article>
    </Link>
  )
}