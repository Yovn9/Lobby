import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080B11] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-8xl font-black gradient-cyan mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          404
        </div>
        <h1 className="text-2xl font-black text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          PAGE NOT FOUND
        </h1>
        <p className="text-[#94A3B8] mb-8">This page doesn&apos;t exist in the Lobby.</p>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-black text-sm tracking-widest"
          style={{ fontFamily: 'var(--font-display)', background: 'linear-gradient(135deg, #00F5FF, #0080FF)', fontSize: '11px' }}>
          BACK TO LOBBY
        </Link>
      </div>
    </div>
  )
}
