export default function Footer() {
  return (
    <footer className="bg-peacock-900 text-parchment-100 border-t-4 border-gold mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <div className="ornament-divider mb-6">
          <span>🪶</span>
        </div>
        <p className="font-serif italic text-lg text-gold-light mb-2">
          "Without weapons, without magic — only courage and a flute."
        </p>
        <p className="text-sm text-parchment-200">
          A manga inspired by the tales of Lord Krishna · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}