import { getAllCharacters } from '@/lib/cosmic'
import CharacterCard from '@/components/CharacterCard'

export const metadata = {
  title: 'Characters · Make Manga Without',
}

export default async function CharactersPage() {
  const characters = await getAllCharacters()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <p className="font-serif italic text-saffron-600 mb-2">The Five Heroes</p>
        <h1 className="font-display text-4xl md:text-5xl text-peacock-900">
          Characters
        </h1>
        <div className="ornament-divider mt-4"><span>👦</span></div>
      </div>

      {characters.length === 0 ? (
        <p className="text-center text-peacock-700 font-serif italic py-20">
          No characters yet.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  )
}