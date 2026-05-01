// app/chapters/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getChapterBySlug, getMetafieldValue } from '@/lib/cosmic'
import CharacterCard from '@/components/CharacterCard'

export default async function ChapterDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const chapter = await getChapterBySlug(slug)

  if (!chapter) {
    notFound()
  }

  const title = getMetafieldValue(chapter.metadata?.title) || chapter.title
  const chapterNumber = chapter.metadata?.chapter_number
  const synopsis = getMetafieldValue(chapter.metadata?.synopsis)
  const storyContent = getMetafieldValue(chapter.metadata?.story_content)
  const coverArt = chapter.metadata?.cover_art
  const pageArtwork = chapter.metadata?.page_artwork || []
  const featuredCharacters = chapter.metadata?.featured_characters || []
  const location = chapter.metadata?.location

  return (
    <article className="bg-parchment-50">
      {/* Cover Hero */}
      {coverArt && (
        <div className="relative bg-peacock-900">
          <img
            src={`${coverArt.imgix_url}?w=2000&h=900&fit=crop&auto=format,compress`}
            alt={title}
            width={1200}
            height={500}
            className="w-full h-64 md:h-96 object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full text-parchment-50">
              {chapterNumber !== undefined && chapterNumber !== null && (
                <p className="font-display tracking-widest text-gold-light mb-2">
                  CHAPTER {String(chapterNumber)}
                </p>
              )}
              <h1 className="font-display text-3xl md:text-5xl text-gold-light">
                {title}
              </h1>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!coverArt && (
          <div className="mb-10">
            {chapterNumber !== undefined && chapterNumber !== null && (
              <p className="font-display tracking-widest text-saffron-600 mb-2">
                CHAPTER {String(chapterNumber)}
              </p>
            )}
            <h1 className="font-display text-4xl md:text-5xl text-peacock-900">
              {title}
            </h1>
          </div>
        )}

        {/* Synopsis */}
        {synopsis && (
          <div className="bg-saffron-50 border-l-4 border-saffron-500 p-6 mb-10">
            <p className="font-serif italic text-lg text-peacock-900 leading-relaxed">
              {synopsis}
            </p>
          </div>
        )}

        {/* Location */}
        {location && (
          <div className="mb-10 flex items-center gap-3 text-peacock-700">
            <span className="text-2xl">🌄</span>
            <span className="font-serif">
              Location:{' '}
              <Link href={`/locations/${location.slug}`} className="font-semibold text-saffron-700 hover:underline">
                {getMetafieldValue(location.metadata?.name) || location.title}
              </Link>
            </span>
          </div>
        )}

        {/* Story Content */}
        {storyContent && (
          <div className="prose prose-lg max-w-none font-serif text-peacock-900 leading-relaxed mb-12 prose-headings:font-display prose-headings:text-peacock-900">
            {storyContent.split('\n').filter(p => p.trim()).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        )}

        {/* Page Artwork */}
        {pageArtwork.length > 0 && (
          <div className="mb-12">
            <div className="ornament-divider"><span>🎨</span></div>
            <h2 className="font-display text-2xl text-center text-peacock-900 mb-6">
              Page Artwork
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {pageArtwork.map((art, idx) => (
                <div key={idx} className="manga-panel p-2 bg-white">
                  <img
                    src={`${art.imgix_url}?w=1200&h=1600&fit=max&auto=format,compress`}
                    alt={`Page ${idx + 1}`}
                    width={600}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Featured Characters */}
        {featuredCharacters.length > 0 && (
          <div className="mb-12">
            <div className="ornament-divider"><span>👦</span></div>
            <h2 className="font-display text-2xl text-center text-peacock-900 mb-6">
              Featured Characters
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {featuredCharacters.map((char) => (
                <CharacterCard key={char.id} character={char} />
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <Link href="/chapters" className="text-saffron-600 hover:text-saffron-800 font-display tracking-wider">
            ← BACK TO ALL CHAPTERS
          </Link>
        </div>
      </div>
    </article>
  )
}