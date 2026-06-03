'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Zap, TrendingUp, Cpu, Users, ChevronRight, Play, Star, ArrowRight } from 'lucide-react'

const TAGLINES = [
  'discover what\'s trending.',
  'create faster with AI.',
  'connect with real gamers.',
  'build your creator brand.',
]

export default function LandingPage() {
  const [taglineIndex, setTaglineIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setTaglineIndex(i => (i + 1) % TAGLINES.length)
        setVisible(true)
      }, 400)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#080B11] overflow-x-hidden">
      {/* Scanline overlay */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.015) 2px, rgba(0,0,0,0.015) 4px)'
      }} />

      {/* Grid background */}
      <div className="fixed inset-0 bg-grid opacity-100 pointer-events-none z-0" />

      {/* Ambient glows */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.06) 0%, transparent 70%)' }} />
      <div className="fixed top-1/2 right-1/4 w-80 h-80 rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)' }} />

      {/* NAV */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-5 border-b border-[#1E2A3A]/60">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #00F5FF, #8B5CF6)' }}>
            <Zap size={16} fill="white" className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-wider text-white" style={{ fontFamily: 'var(--font-display)' }}>
            LOBBY
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-[#94A3B8] font-medium">
          <Link href="#features" className="hover:text-[#00F5FF] transition-colors">Features</Link>
          <Link href="#trending" className="hover:text-[#00F5FF] transition-colors">Trending</Link>
          <Link href="#creators" className="hover:text-[#00F5FF] transition-colors">Creators</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/auth" className="text-sm text-[#94A3B8] hover:text-white transition-colors px-4 py-2">
            Sign in
          </Link>
          <Link href="/auth" className="btn-neon text-xs px-5 py-2.5 rounded-lg font-bold tracking-widest"
            style={{ fontFamily: 'var(--font-display)' }}>
            JOIN BETA
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative z-10 pt-20 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Beta badge */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#00F5FF]/30 bg-[#00F5FF]/5 text-xs text-[#00F5FF] font-mono">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00F5FF] pulse-dot" />
            <span>PRIVATE BETA — NOW OPEN</span>
          </div>
        </div>

        <h1 className="text-center text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-none tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}>
          <span className="block text-white">THE PLATFORM</span>
          <span className="block text-white">FOR</span>
          <span className="block gradient-full">GAMERS.</span>
        </h1>

        {/* Animated tagline */}
        <div className="flex justify-center mt-6 mb-8 h-10">
          <div className="text-xl md:text-2xl text-[#94A3B8] font-medium text-center flex gap-2 items-center">
            <span className="text-white">The place to</span>
            <span
              className="text-[#00F5FF] font-semibold transition-opacity duration-300"
              style={{ opacity: visible ? 1 : 0, minWidth: '260px', display: 'inline-block', textAlign: 'left' }}>
              {TAGLINES[taglineIndex]}
            </span>
          </div>
        </div>

        <p className="text-center text-[#94A3B8] text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Lobby is the social platform built for gamers, creators, and gaming culture.
          See what&apos;s trending. Create content with AI. Connect with your community.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/dashboard"
            className="group flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-black text-sm tracking-widest transition-all duration-200 hover:shadow-neon-cyan hover:scale-105"
            style={{ fontFamily: 'var(--font-display)', background: 'linear-gradient(135deg, #00F5FF, #0080FF)' }}>
            ENTER LOBBY
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/dashboard"
            className="flex items-center gap-2 px-8 py-4 rounded-xl text-sm text-[#00F5FF] border border-[#00F5FF]/30 hover:bg-[#00F5FF]/5 transition-all">
            <Play size={14} fill="currentColor" />
            Watch Demo
          </Link>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          {[
            { value: '142K+', label: 'Active Gamers' },
            { value: '2.4M', label: 'Posts Created' },
            { value: '98%', label: 'Creator Satisfaction' },
            { value: '340+', label: 'Games Tracked' },
          ].map(stat => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-black gradient-cyan" style={{ fontFamily: 'var(--font-display)' }}>
                {stat.value}
              </div>
              <div className="text-xs text-[#4B5563] mt-1 tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MOCK UI PREVIEW */}
      <section className="relative z-10 px-6 md:px-12 pb-24 max-w-7xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden border border-[#1E2A3A]"
          style={{ background: 'linear-gradient(135deg, #0D1117, #111827)' }}>
          {/* Mock browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1E2A3A] bg-[#080B11]">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            <div className="flex-1 mx-4 bg-[#111827] rounded-md px-3 py-1 text-xs text-[#4B5563] font-mono">
              app.lobby.gg/dashboard
            </div>
          </div>

          {/* Mock dashboard preview */}
          <div className="flex h-80 md:h-96 overflow-hidden">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-48 bg-[#080B11] border-r border-[#1E2A3A] p-4 gap-2">
              {['Dashboard', 'Feed', 'Trending', 'Create', 'AI Tools', 'Profile'].map((item, i) => (
                <div key={item} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium ${i === 0 ? 'bg-[#00F5FF]/10 text-[#00F5FF] border-l-2 border-[#00F5FF]' : 'text-[#4B5563]'}`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-[#00F5FF]' : 'bg-[#1E2A3A]'}`} />
                  {item}
                </div>
              ))}
            </div>

            {/* Main content preview */}
            <div className="flex-1 p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Trending card */}
              <div className="bg-[#080B11] rounded-xl border border-[#1E2A3A] p-4">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={12} className="text-[#00F5FF]" />
                  <span className="text-xs text-[#00F5FF] font-mono tracking-wider">TRENDING NOW</span>
                </div>
                {['GTA 6', '007 First Light', 'State of Play', 'Wolverine'].map((t, i) => (
                  <div key={t} className="flex items-center justify-between py-1.5 border-b border-[#1E2A3A]/50 last:border-0">
                    <span className="text-xs text-[#E2E8F0] font-medium">{t}</span>
                    <span className="text-[10px] text-[#4B5563] font-mono">{98 - i * 6}K posts</span>
                  </div>
                ))}
              </div>

              {/* Post card */}
              <div className="bg-[#080B11] rounded-xl border border-[#1E2A3A] p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#FF2D78] to-[#8B5CF6] flex items-center justify-center text-[8px] font-bold text-white">LF</div>
                  <div>
                    <div className="text-xs text-white font-medium">LuciaFanatic</div>
                    <div className="text-[9px] text-[#4B5563]">2h ago · GTA 6</div>
                  </div>
                </div>
                <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                  GTA 6&apos;s Jason might become one of Rockstar&apos;s most talked-about protagonists ever...
                </p>
                <div className="flex items-center gap-4 mt-3 pt-3 border-t border-[#1E2A3A]">
                  {['14.2K', '892', '3.4K'].map((n, i) => (
                    <span key={i} className="text-[10px] text-[#4B5563] font-mono">{n}</span>
                  ))}
                </div>
              </div>

              {/* AI generator card */}
              <div className="md:col-span-2 bg-gradient-to-r from-[#8B5CF6]/10 to-[#00F5FF]/10 rounded-xl border border-[#8B5CF6]/30 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu size={12} className="text-[#8B5CF6]" />
                  <span className="text-xs text-[#8B5CF6] font-mono tracking-wider">AI CONTENT GENERATOR</span>
                </div>
                <p className="text-xs text-[#94A3B8]">Generate hooks, scripts, captions, and hashtags for your gaming content in seconds.</p>
                <div className="mt-3 flex gap-2">
                  {['GTA 6', 'Hype', 'Instagram Reels'].map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] font-mono border border-[#8B5CF6]/30">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative z-10 px-6 md:px-12 pb-24 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs text-[#00F5FF] font-mono tracking-widest mb-3">// WHAT LOBBY DOES</div>
          <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>
            BUILT FOR CREATORS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: TrendingUp,
              title: 'Real-Time Trending',
              desc: 'See what\'s trending across games, hardware, and gaming culture before anyone else. Stay ahead of the curve.',
              color: '#00F5FF',
              gradient: 'from-cyan-500/10 to-transparent',
            },
            {
              icon: Cpu,
              title: 'AI Content Generator',
              desc: 'Generate hooks, scripts, captions, carousels, and video ideas for TikTok, Reels, and Shorts — in your tone, instantly.',
              color: '#8B5CF6',
              gradient: 'from-purple-500/10 to-transparent',
            },
            {
              icon: Users,
              title: 'Gamer Community',
              desc: 'Follow the creators and players you respect. Build your following. Discover gaming content that actually hits.',
              color: '#FF2D78',
              gradient: 'from-pink-500/10 to-transparent',
            },
            {
              icon: Zap,
              title: 'Creator Dashboard',
              desc: 'Track your performance, manage your content, and understand your audience — all from one clean creator hub.',
              color: '#00FF87',
              gradient: 'from-green-500/10 to-transparent',
            },
            {
              icon: Star,
              title: 'Save & Organize',
              desc: 'Save AI-generated content, bookmark posts, and build your content library — ready to publish when you are.',
              color: '#FFB800',
              gradient: 'from-amber-500/10 to-transparent',
            },
            {
              icon: Play,
              title: 'Gaming Feed',
              desc: 'A feed built for gamers — not general social media. Every post, every take, every trend is gaming-first.',
              color: '#0080FF',
              gradient: 'from-blue-500/10 to-transparent',
            },
          ].map(feature => (
            <div key={feature.title}
              className={`card-hover relative overflow-hidden rounded-2xl border border-[#1E2A3A] p-6 bg-gradient-to-br ${feature.gradient} bg-[#0D1117]`}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${feature.color}15`, border: `1px solid ${feature.color}30` }}>
                <feature.icon size={18} style={{ color: feature.color }} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '14px', letterSpacing: '0.05em' }}>
                {feature.title}
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRENDING PREVIEW */}
      <section id="trending" className="relative z-10 px-6 md:px-12 pb-24 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs text-[#FF2D78] font-mono tracking-widest mb-3">// TRENDING RIGHT NOW</div>
          <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>
            WHAT&apos;S HOT
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { title: 'GTA 6', score: 98, color: '#00F5FF' },
            { title: 'State of Play', score: 93, color: '#FF2D78' },
            { title: '007 First Light', score: 87, color: '#8B5CF6' },
            { title: 'Call of Duty', score: 85, color: '#0080FF' },
            { title: 'Wolverine', score: 89, color: '#FFB800' },
            { title: 'Console vs PC', score: 82, color: '#A78BFA' },
            { title: 'Fable 4', score: 79, color: '#4ADE80' },
            { title: 'PS5 Pro', score: 77, color: '#F472B6' },
            { title: 'Crimson Desert', score: 71, color: '#FF6B35' },
            { title: 'PS5 Monitor', score: 74, color: '#00FF87' },
          ].map(topic => (
            <div key={topic.title}
              className="card-hover rounded-xl border border-[#1E2A3A] p-4 bg-[#0D1117] text-center cursor-pointer">
              <div className="text-2xl font-black mb-1" style={{ fontFamily: 'var(--font-display)', color: topic.color, fontSize: '20px' }}>
                {topic.score}
              </div>
              <div className="w-full bg-[#1E2A3A] rounded-full h-0.5 mb-2">
                <div className="score-bar-fill" style={{ width: `${topic.score}%` }} />
              </div>
              <div className="text-xs text-[#E2E8F0] font-semibold">{topic.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 md:px-12 pb-32 max-w-4xl mx-auto text-center">
        <div className="relative overflow-hidden rounded-2xl border border-[#1E2A3A] p-12 md:p-16"
          style={{ background: 'linear-gradient(135deg, #0D1117, #111827)' }}>
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0,245,255,0.06) 0%, transparent 70%)' }} />

          <div className="relative z-10">
            <div className="text-xs text-[#00F5FF] font-mono tracking-widest mb-4">// READY TO LEVEL UP?</div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              JOIN THE
              <span className="gradient-full block">LOBBY.</span>
            </h2>
            <p className="text-[#94A3B8] text-lg mb-10 max-w-xl mx-auto">
              The social platform built for gamers, creators, and gaming culture.
            </p>
            <Link href="/dashboard"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-black text-sm tracking-widest transition-all duration-200 hover:shadow-neon-cyan hover:scale-105"
              style={{ fontFamily: 'var(--font-display)', background: 'linear-gradient(135deg, #00F5FF, #0080FF)' }}>
              ENTER LOBBY <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#1E2A3A] px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #00F5FF, #8B5CF6)' }}>
              <Zap size={12} fill="white" className="text-white" />
            </div>
            <span className="text-sm font-bold text-[#94A3B8]" style={{ fontFamily: 'var(--font-display)' }}>LOBBY</span>
          </div>
          <div className="text-xs text-[#4B5563] font-mono">
            © 2025 Lobby · Built for gamers · Version 1.0 Beta
          </div>
          <div className="flex gap-6 text-xs text-[#4B5563]">
            <span className="hover:text-[#00F5FF] cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-[#00F5FF] cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-[#00F5FF] cursor-pointer transition-colors">Contact</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
