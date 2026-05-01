import Link from 'next/link'
import type { Character } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CharacterCard({ character }: { character: Character }) {
  const portrait = character.metadata?.portrait
  const name = getMetafieldValue(character.metadata?.name) || character.title
  const role = getMetafieldValue(character.metadata?.role)
  const age = character.metadata?.age

  return (
    <Link href={`/characters/${character.slug}`} className="block group">
      <article className="manga-panel overflow-hidden h-full">
        {portrait && (
          <div className="relative overflow-hidden bg-saffron-100">
            <img
              src={`${portrait.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
              alt={name}
              width={300}
              height={300}
              className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-4 text-center bg-parchment-100">
          <h3 className="font-display text-lg text-peacock-900 group-hover:text-saffron-600 transition-colors">
            {name}
          </h3>
          {role && (
            <p className="font-serif italic text-sm text-saffron-700 mt-1">
              {role}
            </p>
          )}
          {age !== undefined && age !== null && age !== '' && (
            <p className="text-xs text-peacock-600 mt-1 uppercase tracking-wider">
              Age: {String(age)}
            </p>
          )}
        </div>
      </article>
    </Link>
  )
}