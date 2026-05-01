// app/characters/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCharacterBySlug, getMetafieldValue } from '@/lib/cosmic'

export default async function CharacterDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const character = await getCharacterBySlug(slug)

  if (!character) {
    notFound()
  }

  const name = getMetafieldValue(character.metadata?.name) || character.title
  const role = getMetafieldValue(character.metadata?.role)
  const age = character.metadata?.age
  const personality = getMetafieldValue(character.metadata?.personality)
  const background = getMetafieldValue(character.metadata?.background)
  const portrait = character.metadata?.portrait

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {portrait && (
          <div className="manga-panel p-2 bg-white">
            <img
              src={`${portrait.imgix_url}?w=1200&h=1200&fit=crop&auto=format,compress`}
              alt={name}
              width={600}
              height={600}
              className="w-full aspect-square object-cover"
            />
          </div>
        )}
        <div>
          <p className="font-serif italic text-saffron-600 mb-2">Character Profile</p>
          <h1 className="font-display text-4xl md:text-5xl text-peacock-900 mb-4">
            {name}
          </h1>
          <div className="space-y-3 mb-6">
            {role && (
              <div className="flex items-center gap-3">
                <span className="font-display text-sm tracking-widest text-saffron-700">ROLE:</span>
                <span className="font-serif text-peacock-900">{role}</span>
              </div>
            )}
            {age !== undefined && age !== null && age !== '' && (
              <div className="flex items-center gap-3">
                <span className="font-display text-sm tracking-widest text-saffron-700">AGE:</span>
                <span className="font-serif text-peacock-900">{String(age)}</span>
              </div>
            )}
          </div>

          {personality && (
            <div className="mb-6">
              <h2 className="font-display text-lg text-peacock-900 mb-2 border-b-2 border-gold pb-1">
                Personality
              </h2>
              <p className="font-serif text-peacock-800 leading-relaxed">{personality}</p>
            </div>
          )}

          {background && (
            <div className="mb-6">
              <h2 className="font-display text-lg text-peacock-900 mb-2 border-b-2 border-gold pb-1">
                Background
              </h2>
              <p className="font-serif text-peacock-800 leading-relaxed">{background}</p>
            </div>
          )}

          <Link href="/characters" className="inline-block mt-6 text-saffron-600 hover:text-saffron-800 font-display tracking-wider">
            ← BACK TO CHARACTERS
          </Link>
        </div>
      </div>
    </div>
  )
}