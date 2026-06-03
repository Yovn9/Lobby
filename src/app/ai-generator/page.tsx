'use client'
import { useState } from 'react'
import { Cpu, Zap, Copy, Bookmark, RefreshCw, ChevronDown, Sparkles } from 'lucide-react'
import AppLayout from '@/components/layout/AppLayout'
import { GAMES, PLATFORMS, CONTENT_TYPES, TONES } from '@/data/mockData'

interface GeneratedContent {
  hook: string
  script: string
  caption: string
  hashtags: string[]
  thumbnailIdea: string
  videoPrompt: string
}

function generateMockContent(game: string, platform: string, tone: string, contentType: string): GeneratedContent {
  const toneMap: Record<string, { hook: string; style: string }> = {
    Hype: {
      hook: `🔥 ${game} just changed EVERYTHING and nobody is ready for this —`,
      style: 'explosive, energetic',
    },
    Controversial: {
      hook: `Unpopular opinion: ${game} is NOT what people think it is. Here's the truth —`,
      style: 'bold, debate-driving',
    },
    Funny: {
      hook: `When ${game} gamers realize what they've been doing wrong this entire time 💀`,
      style: 'relatable, comedic',
    },
    Cinematic: {
      hook: `Some games don't just arrive. They make history. ${game} is one of them.`,
      style: 'dramatic, cinematic',
    },
    Informative: {
      hook: `Everything you need to know about ${game} — explained in 30 seconds.`,
      style: 'clear, educational',
    },
  }

  const t = toneMap[tone] || toneMap['Hype']

  return {
    hook: t.hook,
    script: `[OPENING — 0–3 sec]\n${t.hook}\n\n[BODY — 4–22 sec]\nHere's what makes ${game} different from everything else out right now. The world-building is unmatched. The mechanics feel fresh. And the community response has been unlike anything we've seen this year.\n\nThree things you need to understand:\nOne — the stakes have never been higher for this franchise.\nTwo — the developers actually listened to the community this time.\nThree — this release window is going to define the next 12 months of gaming conversations.\n\n[CTA — 23–30 sec]\nFollow for daily ${game} takes. Drop your thoughts in the comments — are you in or out?`,
    caption: `${t.hook}\n\n${game} is the conversation right now and I'm not waiting to break it down. Whether you're day one or still on the fence, this matters. Like if you agree. Comment if you don't.\n\n↓ Full breakdown in the video.`,
    hashtags: [
      `#${game.replace(/\s/g, '').replace(/[^a-zA-Z0-9]/g, '')}`,
      `#Gaming`,
      `#GamingContent`,
      `#GamingCommunity`,
      platform === 'TikTok' ? '#GamingTikTok' : platform === 'Instagram Reels' ? '#GamingReels' : '#GamingYouTube',
      `#GamersOfInstagram`,
      `#GameReview`,
      `#GamingCreator`,
      `#NewGame`,
      `#GamingNews`,
    ],
    thumbnailIdea: `Split-screen: Left side — dramatic in-game screenshot or logo with heavy shadow. Right side — creator reaction face (shocked/hyped expression). Bold font overlay: "${tone === 'Controversial' ? 'THE TRUTH ABOUT' : tone === 'Hype' ? 'THIS IS BIG' : 'EVERYTHING ABOUT'} ${game.toUpperCase()}". Neon accent color: ${tone === 'Hype' ? 'cyan' : tone === 'Controversial' ? 'red' : 'purple'}.`,
    videoPrompt: `${platform} ${contentType.toLowerCase()} about ${game} with ${t.style} tone. 30-second vertical video. Open with the hook line on screen. Use ${game} gameplay footage or logo in background. Fast cuts every 2–3 seconds. Text overlays for key points. End with CTA slide asking for comments. Music: ${tone === 'Cinematic' ? 'epic orchestral build' : tone === 'Hype' ? 'high-energy trap beat' : tone === 'Funny' ? 'ironic/meme track' : 'ambient gaming soundtrack'}.`,
  }
}

export default function AIGeneratorPage() {
  const [game, setGame] = useState('')
  const [platform, setPlatform] = useState('')
  const [contentType, setContentType] = useState('')
  const [tone, setTone] = useState('')
  const [generated, setGenerated] = useState<GeneratedContent | null>(null)
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)

  const canGenerate = game && platform && contentType && tone

  const handleGenerate = async () => {
    if (!canGenerate) return
    setLoading(true)
    setGenerated(null)
    setSaved(false)
    await new Promise(r => setTimeout(r, 1800))
    setGenerated(generateMockContent(game, platform, tone, contentType))
    setLoading(false)
  }

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 1500)
  }

  const SelectField = ({ label, value, onChange, options }: {
    label: string; value: string; onChange: (v: string) => void; options: string[]
  }) => (
    <div>
      <label className="block text-xs text-[#94A3B8] font-mono tracking-wider mb-2">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={e => onChange(e.target.value)}
          className="w-full bg-[#080B11] border border-[#1E2A3A] rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#8B5CF6]/50 appearance-none cursor-pointer transition-all"
          style={{ fontFamily: 'var(--font-body)' }}>
          <option value="" className="bg-[#080B11]">Select {label.toLowerCase()}...</option>
          {options.map(opt => (
            <option key={opt} value={opt} className="bg-[#080B11]">{opt}</option>
          ))}
        </select>
        <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#4B5563] pointer-events-none" />
      </div>
    </div>
  )

  return (
    <AppLayout>
      <div className="px-4 md:px-8 py-6 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="text-xs text-[#8B5CF6] font-mono tracking-widest mb-1">// AI TOOLS</div>
          <h1 className="text-2xl md:text-3xl font-black text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>
            AI CONTENT <span className="gradient-purple">GENERATOR</span>
          </h1>
          <p className="text-sm text-[#94A3B8]">Generate scripts, hooks, captions, and more for your gaming content in seconds.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Input panel */}
          <div className="lg:col-span-2">
            <div className="bg-[#0D1117] border border-[#1E2A3A] rounded-2xl p-5 sticky top-6">
              <div className="flex items-center gap-2 mb-5">
                <Cpu size={14} className="text-[#8B5CF6]" />
                <span className="text-xs font-black tracking-wider text-[#8B5CF6]" style={{ fontFamily: 'var(--font-display)' }}>
                  CONFIGURE
                </span>
              </div>

              <div className="space-y-4">
                <SelectField label="GAME / TOPIC" value={game} onChange={setGame} options={GAMES} />
                <SelectField label="PLATFORM" value={platform} onChange={setPlatform} options={PLATFORMS} />
                <SelectField label="CONTENT TYPE" value={contentType} onChange={setContentType} options={CONTENT_TYPES} />
                <SelectField label="TONE" value={tone} onChange={setTone} options={TONES} />
              </div>

              {/* Tone previews */}
              {tone && (
                <div className="mt-4 p-3 rounded-xl bg-[#080B11] border border-[#1E2A3A]">
                  <div className="text-[10px] text-[#4B5563] font-mono mb-1">TONE STYLE</div>
                  <div className="text-xs text-[#94A3B8]">
                    {tone === 'Hype' && '🔥 High energy. Bold claims. Makes people stop scrolling.'}
                    {tone === 'Controversial' && '⚡ Debate-sparking. Bold takes. Drives comments and shares.'}
                    {tone === 'Funny' && '😂 Relatable humor. Meme-aware. Broad appeal.'}
                    {tone === 'Cinematic' && '🎬 Dramatic. Slow-burn. Premium feel. Best for long-form.'}
                    {tone === 'Informative' && '📊 Educational. Clear structure. Trust-building content.'}
                  </div>
                </div>
              )}

              <button
                onClick={handleGenerate}
                disabled={!canGenerate || loading}
                className="mt-5 w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-bold tracking-widest transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-neon-purple"
                style={{
                  fontFamily: 'var(--font-display)',
                  background: canGenerate ? 'linear-gradient(135deg, #8B5CF6, #EC4899)' : '#1E2A3A',
                  color: canGenerate ? 'white' : '#4B5563',
                  fontSize: '11px',
                }}>
                {loading ? (
                  <>
                    <RefreshCw size={14} className="animate-spin" />
                    GENERATING...
                  </>
                ) : (
                  <>
                    <Sparkles size={14} />
                    GENERATE CONTENT
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Output panel */}
          <div className="lg:col-span-3">
            {!generated && !loading && (
              <div className="bg-[#0D1117] border border-[#1E2A3A] rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(236,72,153,0.1))', border: '1px solid rgba(139,92,246,0.3)' }}>
                  <Sparkles size={24} className="text-[#8B5CF6]" />
                </div>
                <h3 className="text-lg font-black text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  READY TO GENERATE
                </h3>
                <p className="text-sm text-[#94A3B8] max-w-xs">
                  Select your game, platform, content type, and tone — then hit generate.
                </p>
              </div>
            )}

            {loading && (
              <div className="bg-[#0D1117] border border-[#8B5CF6]/30 rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.05), rgba(0,245,255,0.03))' }}>
                <div className="flex gap-1 mb-4">
                  {[0, 1, 2].map(i => (
                    <div key={i} className="w-2 h-2 rounded-full bg-[#8B5CF6]"
                      style={{ animation: `pulse 1s ease-in-out ${i * 0.2}s infinite` }} />
                  ))}
                </div>
                <p className="text-sm text-[#8B5CF6] font-mono">Generating your {tone?.toLowerCase()} {contentType?.toLowerCase()}...</p>
                <p className="text-xs text-[#4B5563] mt-1 font-mono">for {game} · {platform}</p>
              </div>
            )}

            {generated && (
              <div className="space-y-4">
                {/* Top bar */}
                <div className="flex items-center justify-between bg-[#0D1117] border border-[#1E2A3A] rounded-2xl px-5 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#00FF87] pulse-dot" />
                    <span className="text-xs text-white font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                      {game} · {platform} · {tone}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => setSaved(true)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        saved ? 'bg-[#00FF87]/10 text-[#00FF87] border border-[#00FF87]/30' : 'text-[#4B5563] hover:text-white border border-[#1E2A3A]'
                      }`}>
                      <Bookmark size={12} fill={saved ? 'currentColor' : 'none'} />
                      {saved ? 'SAVED' : 'SAVE'}
                    </button>
                    <button onClick={handleGenerate}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border border-[#1E2A3A] text-[#4B5563] hover:text-white transition-all">
                      <RefreshCw size={12} /> Regenerate
                    </button>
                  </div>
                </div>

                {/* Hook */}
                <OutputBlock
                  label="🎣 HOOK"
                  color="#00F5FF"
                  content={generated.hook}
                  onCopy={() => copyText(generated.hook, 'hook')}
                  copied={copied === 'hook'}
                />

                {/* Script */}
                <OutputBlock
                  label="📝 30-SECOND SCRIPT"
                  color="#8B5CF6"
                  content={generated.script}
                  onCopy={() => copyText(generated.script, 'script')}
                  copied={copied === 'script'}
                  mono
                />

                {/* Caption */}
                <OutputBlock
                  label="💬 CAPTION"
                  color="#FF2D78"
                  content={generated.caption}
                  onCopy={() => copyText(generated.caption, 'caption')}
                  copied={copied === 'caption'}
                />

                {/* Hashtags */}
                <div className="bg-[#0D1117] border border-[#1E2A3A] rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00FF87]" />
                      <span className="text-[10px] font-mono tracking-widest text-[#00FF87]">#️⃣ HASHTAGS</span>
                    </div>
                    <button onClick={() => copyText(generated.hashtags.join(' '), 'hashtags')}
                      className={`flex items-center gap-1 text-[10px] px-2 py-1 rounded-lg transition-all ${
                        copied === 'hashtags' ? 'text-[#00FF87] bg-[#00FF87]/10' : 'text-[#4B5563] hover:text-white'
                      }`}>
                      <Copy size={10} /> {copied === 'hashtags' ? 'Copied!' : 'Copy all'}
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {generated.hashtags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-lg text-xs text-[#00FF87] bg-[#00FF87]/10 border border-[#00FF87]/20 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Thumbnail + Video */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <OutputBlock
                    label="🖼 THUMBNAIL IDEA"
                    color="#FFB800"
                    content={generated.thumbnailIdea}
                    onCopy={() => copyText(generated.thumbnailIdea, 'thumb')}
                    copied={copied === 'thumb'}
                    small
                  />
                  <OutputBlock
                    label="🎬 VIDEO PROMPT"
                    color="#FF6B35"
                    content={generated.videoPrompt}
                    onCopy={() => copyText(generated.videoPrompt, 'video')}
                    copied={copied === 'video'}
                    small
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

function OutputBlock({
  label, color, content, onCopy, copied, mono = false, small = false
}: {
  label: string; color: string; content: string; onCopy: () => void; copied: boolean; mono?: boolean; small?: boolean
}) {
  return (
    <div className="bg-[#0D1117] border border-[#1E2A3A] rounded-2xl p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
          <span className="text-[10px] font-mono tracking-widest" style={{ color }}>{label}</span>
        </div>
        <button onClick={onCopy}
          className={`flex items-center gap-1 text-[10px] px-2 py-1 rounded-lg transition-all ${
            copied ? `bg-[${color}]/10` : 'text-[#4B5563] hover:text-white'
          }`}
          style={{ color: copied ? color : undefined }}>
          <Copy size={10} /> {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <p className={`text-[#E2E8F0] leading-relaxed whitespace-pre-wrap ${small ? 'text-xs' : 'text-sm'} ${mono ? 'font-mono text-xs' : ''}`}>
        {content}
      </p>
    </div>
  )
}
