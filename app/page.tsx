import Link from 'next/link'
import { getAllChapters, getAllCharacters, getMetafieldValue } from '@/lib/cosmic'
import ChapterCard from '@/components/ChapterCard'
import CharacterCard from '@/components/CharacterCard'

export default async function HomePage() {
  const [chapters, characters] = await Promise.all([
    getAllChapters(),
    getAllCharacters(),
  ])

  const featuredChapter = chapters[0]
  const featuredTitle = featuredChapter ? (getMetafieldValue(featuredChapter.metadata?.title) || featuredChapter.title) : ''
  const featuredSynopsis = featuredChapter ? getMetafieldValue(featuredChapter.metadata?.synopsis) : ''
  const featuredCover = featuredChapter?.metadata?.cover_art

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-peacock-900 text-parchment-50">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #d4a017 0%, transparent 50%), radial-gradient(circle at 80% 80%, #f08800 0%, transparent 50%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-serif italic text-gold-light mb-3 text-lg">A tale inspired by Lord Krishna</p>
            <h1 className="font-display text-4xl md:text-6xl mb-6 text-gold-light leading-tight">
              Five Children.<br />No Weapons.<br />No Magic.
            </h1>
            <p className="font-serif text-lg md:text-xl text-parchment-100 mb-8 leading-relaxed">
              Follow the journey of five brave kids — armed only with wisdom, courage, and the song of a flute — as they walk in the footsteps of an ancient legend.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/chapters" className="bg-saffron-500 hover:bg-saffron-600 text-white font-display tracking-wider px-8 py-3 transition-colors shadow-lg">
                BEGIN READING
              </Link>
              <Link href="/characters" className="border-2 border-gold-light text-gold-light hover:bg-gold-light hover:text-peacock-900 font-display tracking-wider px-8 py-3 transition-colors">
                MEET THE FIVE
              </Link>
            </div>
          </div>
          {featuredCover && (
            <div className="relative">
              <div className="manga-panel bg-parchment-50 p-2">
                <img
                  src={`${featuredCover.imgix_url}?w=1200&h=900&fit=crop&auto=format,compress`}
                  alt={featuredTitle}
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-saffron-500 text-white px-4 py-2 font-display tracking-wider shadow-xl">
                LATEST CHAPTER
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Featured Chapter */}
      {featuredChapter && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="ornament-divider"><span>❋</span></div>
          <div className="text-center mb-10">
            <p className="font-serif italic text-saffron-600 mb-2">Now Reading</p>
            <h2 className="font-display text-3xl md:text-4xl text-peacock-900">
              {featuredTitle}
            </h2>
          </div>
          {featuredSynopsis && (
            <p className="font-serif text-lg text-peacock-800 max-w-3xl mx-auto text-center leading-relaxed mb-8">
              {featuredSynopsis}
            </p>
          )}
          <div className="text-center">
            <Link href={`/chapters/${featuredChapter.slug}`} className="inline-block bg-peacock-900 hover:bg-peacock-700 text-gold-light font-display tracking-wider px-8 py-3 transition-colors shadow-lg">
              READ THIS CHAPTER →
            </Link>
          </div>
        </section>
      )}

      {/* All Chapters */}
      {chapters.length > 0 && (
        <section className="bg-parchment-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="ornament-divider"><span>📖</span></div>
            <h2 className="font-display text-3xl md:text-4xl text-center text-peacock-900 mb-3">
              All Chapters
            </h2>
            <p className="font-serif italic text-center text-saffron-700 mb-10">
              The journey, page by page
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {chapters.slice(0, 6).map((chapter) => (
                <ChapterCard key={chapter.id} chapter={chapter} />
              ))}
            </div>
            {chapters.length > 6 && (
              <div className="text-center mt-10">
                <Link href="/chapters" className="text-saffron-600 hover:text-saffron-800 font-display tracking-wider underline underline-offset-4">
                  VIEW ALL CHAPTERS →
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Characters Preview */}
      {characters.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="ornament-divider"><span>👦</span></div>
          <h2 className="font-display text-3xl md:text-4xl text-center text-peacock-900 mb-3">
            Meet the Heroes
          </h2>
          <p className="font-serif italic text-center text-saffron-700 mb-10">
            Five children, one unforgettable journey
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {characters.slice(0, 5).map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}