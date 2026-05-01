import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-peacock-900 text-parchment-50 border-b-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-3xl">🪈</span>
            <div>
              <h1 className="font-display text-xl sm:text-2xl text-gold-light tracking-wider">
                Make Manga Without
              </h1>
              <p className="font-serif italic text-xs text-parchment-200">
                Inspired by Lord Krishna
              </p>
            </div>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-gold-light transition-colors uppercase tracking-widest">Home</Link>
            <Link href="/chapters" className="hover:text-gold-light transition-colors uppercase tracking-widest">Chapters</Link>
            <Link href="/characters" className="hover:text-gold-light transition-colors uppercase tracking-widest">Characters</Link>
            <Link href="/locations" className="hover:text-gold-light transition-colors uppercase tracking-widest">Locations</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}