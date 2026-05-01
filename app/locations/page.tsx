import { getAllLocations } from '@/lib/cosmic'
import LocationCard from '@/components/LocationCard'

export const metadata = {
  title: 'Locations · Make Manga Without',
}

export default async function LocationsPage() {
  const locations = await getAllLocations()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <p className="font-serif italic text-saffron-600 mb-2">Where the Story Unfolds</p>
        <h1 className="font-display text-4xl md:text-5xl text-peacock-900">
          Locations
        </h1>
        <div className="ornament-divider mt-4"><span>🌄</span></div>
      </div>

      {locations.length === 0 ? (
        <p className="text-center text-peacock-700 font-serif italic py-20">
          No locations yet.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      )}
    </div>
  )
}