'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Image, Hash, Smile, Send, X } from 'lucide-react'
import AppLayout from '@/components/layout/AppLayout'
import { currentUser, GAMES } from '@/data/mockData'

export default function CreatePostPage() {
  const [content, setContent] = useState('')
  const [selectedGame, setSelectedGame] = useState('')
  const [posted, setPosted] = useState(false)
  const maxChars = 500

  const handlePost = () => {
    if (content.trim()) {
      setPosted(true)
      setTimeout(() => {
        setPosted(false)
        setContent('')
        setSelectedGame('')
      }, 2000)
    }
  }

  return (
    <AppLayout>
      <div className="px-4 md:px-8 py-6 max-w-2xl">
        <div className="mb-6">
          <div className="text-xs text-[#4B5563] font-mono tracking-widest mb-1">// POST</div>
          <h1 className="text-2xl md:text-3xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>
            CREATE POST
          </h1>
        </div>

        {posted ? (
          <div className="bg-[#0D1117] border border-[#00FF87]/30 rounded-2xl p-12 text-center">
            <div className="text-4xl mb-4">🎮</div>
            <div className="text-xl font-black text-[#00FF87] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              POST SENT!
            </div>
            <p className="text-sm text-[#94A3B8]">Your post is live on the feed.</p>
          </div>
        ) : (
          <div className="bg-[#0D1117] border border-[#1E2A3A] rounded-2xl p-6">
            {/* User info */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-black flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #00F5FF, #0080FF)' }}>
                {currentUser.initials}
              </div>
              <div>
                <div className="font-bold text-white">{currentUser.username}</div>
                <div className="text-xs text-[#4B5563]">Posting to Gaming Feed</div>
              </div>
            </div>

            {/* Game selector */}
            <div className="mb-4">
              <label className="text-xs text-[#94A3B8] font-mono tracking-wider mb-2 block">TAG A GAME / TOPIC</label>
              <div className="flex flex-wrap gap-2">
                {GAMES.slice(0, 8).map(game => (
                  <button key={game} onClick={() => setSelectedGame(selectedGame === game ? '' : game)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                    style={{
                      background: selectedGame === game ? 'rgba(0,245,255,0.15)' : '#080B11',
                      border: selectedGame === game ? '1px solid rgba(0,245,255,0.4)' : '1px solid #1E2A3A',
                      color: selectedGame === game ? '#00F5FF' : '#4B5563',
                    }}>
                    #{game}
                  </button>
                ))}
              </div>
            </div>

            {/* Text area */}
            <div className="relative mb-4">
              <textarea
                value={content}
                onChange={e => setContent(e.target.value.slice(0, maxChars))}
                placeholder="Drop your gaming take. Be real. Be bold."
                className="w-full bg-[#080B11] border border-[#1E2A3A] rounded-xl px-4 py-4 text-white text-sm outline-none focus:border-[#00F5FF]/40 transition-all placeholder:text-[#4B5563] resize-none leading-relaxed"
                rows={6}
              />
              <div className="absolute bottom-3 right-3 text-xs font-mono text-[#4B5563]">
                {content.length}/{maxChars}
              </div>
            </div>

            {/* Toolbar */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#1E2A3A]">
              <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs text-[#4B5563] hover:text-[#00F5FF] hover:bg-[#00F5FF]/5 transition-all">
                <Image size={14} /> Image
              </button>
              <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs text-[#4B5563] hover:text-[#00F5FF] hover:bg-[#00F5FF]/5 transition-all">
                <Hash size={14} /> Hashtag
              </button>
              <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs text-[#4B5563] hover:text-[#00F5FF] hover:bg-[#00F5FF]/5 transition-all">
                <Smile size={14} /> Emoji
              </button>
            </div>

            {/* Preview if content */}
            {(content || selectedGame) && (
              <div className="bg-[#080B11] border border-[#1E2A3A] rounded-xl p-4 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] text-[#4B5563] font-mono">PREVIEW</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-black flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #00F5FF, #0080FF)' }}>
                    {currentUser.initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-white">{currentUser.username}</span>
                      {selectedGame && (
                        <span className="tag-pill bg-[#00F5FF]/10 text-[#00F5FF] border border-[#00F5FF]/20">
                          {selectedGame}
                        </span>
                      )}
                    </div>
                    {content && <p className="text-xs text-[#94A3B8] leading-relaxed">{content}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Post button */}
            <div className="flex items-center justify-between">
              <button onClick={() => { setContent(''); setSelectedGame('') }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs text-[#4B5563] hover:text-white transition-colors">
                <X size={14} /> Clear
              </button>
              <button
                onClick={handlePost}
                disabled={!content.trim()}
                className="flex items-center gap-2 px-8 py-3 rounded-xl text-xs font-bold tracking-widest transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-neon-cyan"
                style={{
                  fontFamily: 'var(--font-display)',
                  background: content.trim() ? 'linear-gradient(135deg, #00F5FF, #0080FF)' : '#1E2A3A',
                  color: content.trim() ? '#000' : '#4B5563',
                  fontSize: '11px',
                }}>
                <Send size={13} /> POST TO FEED
              </button>
            </div>
          </div>
        )}

        {/* Tips */}
        <div className="mt-6 bg-[#0D1117] border border-[#1E2A3A] rounded-2xl p-5">
          <h3 className="text-xs font-black text-white tracking-wider mb-3" style={{ fontFamily: 'var(--font-display)' }}>
            💡 TIPS FOR VIRAL POSTS
          </h3>
          <div className="space-y-2">
            {[
              'Bold takes get more comments — don\'t be neutral.',
              'Tag the right game to reach the right audience.',
              'Ask a question at the end to drive replies.',
              'Use the AI Generator for hooks that actually work.',
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-[#94A3B8]">
                <span className="text-[#00F5FF] font-mono mt-0.5">{i + 1}.</span>
                {tip}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/ai-generator" className="text-xs text-[#8B5CF6] hover:underline flex items-center gap-1">
              Generate content with AI →
            </Link>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
