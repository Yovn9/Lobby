'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Bookmark, Copy, Edit3, Trash2, Cpu, Search } from 'lucide-react'
import AppLayout from '@/components/layout/AppLayout'
import { savedGenerations } from '@/data/mockData'

const PLATFORM_COLORS: Record<string, string> = {
  'TikTok': '#FF2D78',
  'Instagram Reels': '#8B5CF6',
  'YouTube Shorts': '#FF4444',
  'Instagram': '#E1306C',
}

const TONE_COLORS: Record<string, string> = {
  'Hype': '#00F5FF',
  'Controversial': '#FF2D78',
  'Funny': '#FFB800',
  'Cinematic': '#8B5CF6',
  'Informative': '#00FF87',
}

export default function SavedPage() {
  const [search, setSearch] = useState('')
  const [copied, setCopied] = useState<string | null>(null)
  const [deleted, setDeleted] = useState<Set<string>>(new Set())

  const copy = (id: string, text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 1500)
  }

  const del = (id: string) => setDeleted(prev => { const n = new Set(prev); n.add(id); return n })

  const visible = savedGenerations.filter(g =>
    !deleted.has(g.id) &&
    (g.title.toLowerCase().includes(search.toLowerCase()) ||
     g.game.toLowerCase().includes(search.toLowerCase()) ||
     g.platform.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <AppLayout>
      <div className="px-4 md:px-8 py-6 max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-xs text-[#4B5563] font-mono tracking-widest mb-1">// SAVED</div>
            <h1 className="text-2xl md:text-3xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>
              SAVED <span className="gradient-purple">CREATIONS</span>
            </h1>
          </div>
          <div className="text-xs text-[#4B5563] font-mono bg-[#0D1117] border border-[#1E2A3A] px-3 py-1.5 rounded-lg">
            {visible.length} saved
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4B5563]" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search saved content..."
            className="w-full bg-[#0D1117] border border-[#1E2A3A] rounded-xl pl-10 pr-4 py-3 text-sm text-white outline-none focus:border-[#8B5CF6]/40 placeholder:text-[#4B5563] transition-all"
          />
        </div>

        {visible.length === 0 && (
          <div className="bg-[#0D1117] border border-[#1E2A3A] rounded-2xl p-16 text-center">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
              style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}>
              <Bookmark size={24} className="text-[#8B5CF6]" />
            </div>
            <h3 className="text-lg font-black text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              {search ? 'NO RESULTS' : 'NOTHING SAVED YET'}
            </h3>
            <p className="text-sm text-[#94A3B8] mb-6">
              {search
                ? 'Try a different search term.'
                : 'Generate content with AI and save your best outputs here.'}
            </p>
            {!search && (
              <Link href="/ai-generator"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold tracking-wider transition-all"
                style={{ fontFamily: 'var(--font-display)', background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', color: 'white', fontSize: '11px' }}>
                <Cpu size={13} /> OPEN AI GENERATOR
              </Link>
            )}
          </div>
        )}

        <div className="space-y-4">
          {visible.map(gen => {
            const platformColor = PLATFORM_COLORS[gen.platform] || '#00F5FF'
            const toneColor = TONE_COLORS[gen.tone] || '#00F5FF'
            return (
              <div key={gen.id} className="card-hover bg-[#0D1117] border border-[#1E2A3A] rounded-2xl p-5">
                {/* Top row */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[10px] px-2 py-0.5 rounded font-mono bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/20">AI</span>
                  <span className="tag-pill" style={{ background: `${platformColor}15`, color: platformColor, border: `1px solid ${platformColor}30` }}>
                    {gen.platform}
                  </span>
                  <span className="tag-pill" style={{ background: `${toneColor}15`, color: toneColor, border: `1px solid ${toneColor}30` }}>
                    {gen.tone}
                  </span>
                  <span className="text-[10px] text-[#4B5563] font-mono ml-auto">{gen.createdAt}</span>
                </div>

                <h3 className="font-black text-white mb-0.5" style={{ fontFamily: 'var(--font-display)', fontSize: '14px' }}>
                  {gen.title}
                </h3>
                <div className="text-[11px] text-[#4B5563] font-mono mb-4">
                  {gen.game} · {gen.contentType}
                </div>

                {/* Preview */}
                <div className="bg-[#080B11] border border-[#1E2A3A] rounded-xl p-4 mb-4">
                  <div className="text-[10px] text-[#4B5563] font-mono mb-2">PREVIEW</div>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">{gen.preview}</p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copy(gen.id, gen.preview)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                      copied === gen.id
                        ? 'bg-[#00FF87]/10 text-[#00FF87] border border-[#00FF87]/20'
                        : 'border border-[#1E2A3A] text-[#4B5563] hover:text-white'
                    }`}>
                    <Copy size={12} />
                    {copied === gen.id ? 'Copied!' : 'Copy'}
                  </button>

                  <Link href="/ai-generator"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold border border-[#1E2A3A] text-[#4B5563] hover:text-[#8B5CF6] transition-all">
                    <Edit3 size={12} /> Edit in AI
                  </Link>

                  <button
                    onClick={() => del(gen.id)}
                    className="ml-auto flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs text-[#4B5563] hover:text-[#FF2D78] transition-all">
                    <Trash2 size={12} /> Delete
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {visible.length > 0 && (
          <div className="mt-8 text-center">
            <Link href="/ai-generator"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold tracking-wider border border-[#8B5CF6]/30 text-[#8B5CF6] hover:bg-[#8B5CF6]/10 transition-all"
              style={{ fontFamily: 'var(--font-display)', fontSize: '10px', letterSpacing: '0.1em' }}>
              <Cpu size={13} /> GENERATE MORE CONTENT
            </Link>
          </div>
        )}
      </div>
    </AppLayout>
  )
}
