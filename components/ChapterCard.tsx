import Link from 'next/link'
import type { Chapter } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ChapterCard({ chapter }: { chapter: Chapter }) {
  const coverArt = chapter.metadata?.cover_art
  const chapterNumber = chapter.metadata?.chapter_number
  const synopsis = getMetafieldValue(chapter.metadata?.synopsis)
  const title = getMetafieldValue(chapter.metadata?.title) || chapter.title

  return (
    <Link href={`/chapters/${chapter.slug}`} className="block group">
      <article className="manga-panel overflow-hidden h-full flex flex-col">
        {coverArt && (
          <div className="relative overflow-hidden bg-peacock-100">
            <img
              src={`${coverArt.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
              alt={title}
              width={400}
              height={250}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {chapterNumber !== undefined && chapterNumber !== null && (
              <div className="absolute top-3 left-3 bg-saffron-500 text-white px-3 py-1 font-display text-sm tracking-wider shadow-md">
                CH. {String(chapterNumber)}
              </div>
            )}
          </div>
        )}
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-display text-xl text-peacock-900 mb-2 group-hover:text-saffron-600 transition-colors">
            {title}
          </h3>
          {synopsis && (
            <p className="font-serif text-peacock-700 text-base leading-relaxed line-clamp-3">
              {synopsis}
            </p>
          )}
          <span className="mt-4 inline-block text-saffron-600 font-semibold text-sm uppercase tracking-widest">
            Read Chapter →
          </span>
        </div>
      </article>
    </Link>
  )
}