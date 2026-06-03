'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Zap, Eye, EyeOff, ArrowRight, Chrome } from 'lucide-react'

export default function AuthPage() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [showPass, setShowPass] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  return (
    <div className="min-h-screen bg-[#080B11] flex overflow-hidden">
      {/* Left panel - branding */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 relative overflow-hidden p-12">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, #080B11 0%, #0D1A2D 60%, #080B11 100%)'
        }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.08) 0%, transparent 70%)' }} />

        <div className="relative z-10 flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #00F5FF, #8B5CF6)' }}>
            <Zap size={20} fill="white" className="text-white" />
          </div>
          <span className="text-2xl font-black tracking-wider text-white" style={{ fontFamily: 'var(--font-display)' }}>LOBBY</span>
        </div>

        <div className="relative z-10">
          <h2 className="text-5xl xl:text-6xl font-black text-white leading-none mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            THE PLATFORM
            <span className="block gradient-full">FOR GAMERS.</span>
          </h2>
          <p className="text-[#94A3B8] text-lg leading-relaxed max-w-sm">
            See what&apos;s trending. Create content with AI. Connect with the gaming community that actually gets it.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {[
              { num: '142K+', label: 'Active Gamers' },
              { num: '2.4M', label: 'Posts Created' },
              { num: '98%', label: 'Satisfaction' },
              { num: '340+', label: 'Games Tracked' },
            ].map(s => (
              <div key={s.label} className="bg-[#0D1117]/60 border border-[#1E2A3A] rounded-xl p-4">
                <div className="text-2xl font-black gradient-cyan mb-1" style={{ fontFamily: 'var(--font-display)' }}>{s.num}</div>
                <div className="text-xs text-[#4B5563] tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 text-xs text-[#4B5563] font-mono">
          LOBBY v1.0 BETA · FOR GAMERS & CREATORS
        </div>
      </div>

      {/* Right panel - auth form */}
      <div className="flex-1 lg:w-1/2 flex items-center justify-center p-6 md:p-12 relative">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="flex lg:hidden items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #00F5FF, #8B5CF6)' }}>
              <Zap size={16} fill="white" className="text-white" />
            </div>
            <span className="text-xl font-black tracking-wider text-white" style={{ fontFamily: 'var(--font-display)' }}>LOBBY</span>
          </div>

          {/* Tab switcher */}
          <div className="flex rounded-xl bg-[#0D1117] border border-[#1E2A3A] p-1 mb-8">
            {(['signin', 'signup'] as const).map(m => (
              <button key={m} onClick={() => setMode(m)}
                className="flex-1 py-2.5 rounded-lg text-sm font-bold transition-all duration-200"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  background: mode === m ? 'linear-gradient(135deg, #00F5FF, #0080FF)' : 'transparent',
                  color: mode === m ? '#000' : '#4B5563',
                }}>
                {m === 'signin' ? 'SIGN IN' : 'JOIN LOBBY'}
              </button>
            ))}
          </div>

          <h2 className="text-2xl font-black text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
            {mode === 'signin' ? 'WELCOME BACK' : 'CREATE ACCOUNT'}
          </h2>
          <p className="text-[#94A3B8] text-sm mb-8">
            {mode === 'signin'
              ? 'Enter your credentials to access your Lobby account.'
              : 'Join thousands of gamers and creators on Lobby.'}
          </p>

          {/* Social auth */}
          <button className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-[#1E2A3A] bg-[#0D1117] text-sm text-[#94A3B8] hover:border-[#00F5FF]/30 hover:text-white transition-all mb-4">
            <Chrome size={16} />
            Continue with Google
          </button>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-[#1E2A3A]" />
            <span className="text-xs text-[#4B5563] font-mono">OR</span>
            <div className="flex-1 h-px bg-[#1E2A3A]" />
          </div>

          {/* Form */}
          <div className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="block text-xs text-[#94A3B8] font-mono tracking-wider mb-2">USERNAME</label>
                <input
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  placeholder="xNova_GG"
                  className="w-full bg-[#0D1117] border border-[#1E2A3A] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#00F5FF]/50 focus:shadow-neon-cyan transition-all placeholder:text-[#4B5563]"
                />
              </div>
            )}

            <div>
              <label className="block text-xs text-[#94A3B8] font-mono tracking-wider mb-2">EMAIL</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="gamer@lobby.gg"
                className="w-full bg-[#0D1117] border border-[#1E2A3A] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#00F5FF]/50 transition-all placeholder:text-[#4B5563]"
              />
            </div>

            <div>
              <label className="block text-xs text-[#94A3B8] font-mono tracking-wider mb-2">PASSWORD</label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  className="w-full bg-[#0D1117] border border-[#1E2A3A] rounded-xl px-4 py-3 pr-12 text-white text-sm outline-none focus:border-[#00F5FF]/50 transition-all placeholder:text-[#4B5563]"
                />
                <button onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#4B5563] hover:text-[#94A3B8] transition-colors">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {mode === 'signin' && (
              <div className="text-right">
                <button className="text-xs text-[#00F5FF] hover:text-[#00F5FF]/80 transition-colors">
                  Forgot password?
                </button>
              </div>
            )}

            <Link href="/dashboard"
              className="group w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-black text-sm tracking-widest transition-all duration-200 hover:shadow-neon-cyan hover:scale-[1.02] mt-2"
              style={{ fontFamily: 'var(--font-display)', background: 'linear-gradient(135deg, #00F5FF, #0080FF)', fontSize: '12px' }}>
              {mode === 'signin' ? 'SIGN IN' : 'CREATE ACCOUNT'}
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {mode === 'signup' && (
            <p className="text-xs text-[#4B5563] text-center mt-4">
              By joining, you agree to our{' '}
              <span className="text-[#00F5FF] cursor-pointer hover:underline">Terms</span>
              {' '}and{' '}
              <span className="text-[#00F5FF] cursor-pointer hover:underline">Privacy Policy</span>.
            </p>
          )}

          <div className="mt-6 text-center">
            <Link href="/" className="text-xs text-[#4B5563] hover:text-[#94A3B8] transition-colors">
              ← Back to Lobby.gg
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
