'use client'
import { useState } from 'react'
import { Settings, Share2, Users, FileText, Star, Gamepad2, Bookmark, Trophy } from 'lucide-react'
import AppLayout from '@/components/layout/AppLayout'
import { currentUser, mockPosts, savedGenerations, creatorStats } from '@/data/mockData'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'posts' | 'saved' | 'badges'>('posts')

  const userPosts = mockPosts.slice(0, 4)

  return (
    <AppLayout>
      <div className="px-4 md:px-8 py-6 max-w-4xl">
        {/* Profile header */}
        <div className="bg-[#0D1117] border border-[#1E2A3A] rounded-2xl overflow-hidden mb-6">
          {/* Banner */}
          <div className="h-32 md:h-40 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #080B11, #0D1A2D, #080B11)' }}>
            <div className="absolute inset-0 bg-grid opacity-60" />
            <div className="absolute inset-0"
              style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(0,245,255,0.15) 0%, transparent 60%)' }} />
            <div className="absolute bottom-0 right-0 w-48 h-48"
              style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)' }} />
            {/* Edit button */}
            <button className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#080B11]/60 border border-[#1E2A3A] text-xs text-[#94A3B8] hover:text-white transition-colors backdrop-blur-sm">
              <Settings size={12} /> Edit Profile
            </button>
          </div>

          <div className="px-5 pb-6">
            {/* Avatar */}
            <div className="relative -mt-8 mb-4 flex items-end justify-between">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-black text-black border-4 border-[#0D1117]"
                style={{ background: `linear-gradient(135deg, ${currentUser.color}, ${currentUser.color}88)` }}>
                {currentUser.initials}
              </div>
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#00F5FF] border border-[#00F5FF]/30 hover:bg-[#00F5FF]/10 transition-all"
                style={{ fontFamily: 'var(--font-display)', fontSize: '10px', letterSpacing: '0.08em' }}>
                <Share2 size={12} /> SHARE
              </button>
            </div>

            {/* Info */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  {currentUser.username}
                </h1>
                <div className="w-4 h-4 rounded-full bg-[#00F5FF] flex items-center justify-center">
                  <span className="text-[8px] text-black font-black">✓</span>
                </div>
              </div>
              <p className="text-sm text-[#94A3B8] mb-3">{currentUser.bio}</p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {currentUser.badges.map(badge => (
                  <span key={badge} className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/20">
                    <Trophy size={9} /> {badge}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex gap-6">
                {[
                  { label: 'Followers', value: `${(currentUser.followers / 1000).toFixed(1)}K` },
                  { label: 'Following', value: currentUser.following.toLocaleString() },
                  { label: 'Posts', value: currentUser.posts },
                ].map(s => (
                  <div key={s.label}>
                    <div className="text-lg font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>{s.value}</div>
                    <div className="text-[10px] text-[#4B5563] tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Favorite games */}
            <div>
              <div className="text-[10px] text-[#4B5563] font-mono tracking-wider mb-2">
                <Gamepad2 size={10} className="inline mr-1" />FAVORITE GAMES
              </div>
              <div className="flex flex-wrap gap-2">
                {currentUser.favoriteGames.map(game => (
                  <span key={game} className="tag-pill bg-[#00F5FF]/10 text-[#00F5FF] border border-[#00F5FF]/20">
                    {game}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Creator stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: 'Total Views', value: creatorStats.totalViews, color: '#00F5FF' },
            { label: 'Total Likes', value: creatorStats.totalLikes, color: '#FF2D78' },
            { label: 'Engagement', value: creatorStats.engagementRate, color: '#00FF87' },
          ].map(s => (
            <div key={s.label} className="stat-card text-center">
              <div className="text-xl font-black mb-0.5" style={{ fontFamily: 'var(--font-display)', color: s.color }}>
                {s.value}
              </div>
              <div className="text-[10px] text-[#4B5563] tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tab nav */}
        <div className="flex rounded-xl bg-[#0D1117] border border-[#1E2A3A] p-1 mb-6">
          {([
            { key: 'posts', label: 'Posts', icon: FileText },
            { key: 'saved', label: 'Saved', icon: Bookmark },
            { key: 'badges', label: 'Badges', icon: Star },
          ] as const).map(tab => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-bold transition-all duration-200"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '10px',
                letterSpacing: '0.08em',
                background: activeTab === tab.key ? 'linear-gradient(135deg, #00F5FF20, #00F5FF10)' : 'transparent',
                color: activeTab === tab.key ? '#00F5FF' : '#4B5563',
                border: activeTab === tab.key ? '1px solid #00F5FF30' : '1px solid transparent',
              }}>
              <tab.icon size={12} />
              {tab.label.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === 'posts' && (
          <div className="space-y-4">
            {userPosts.map(post => (
              <div key={post.id} className="card-hover bg-[#0D1117] border border-[#1E2A3A] rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="tag-pill" style={{ background: `${post.tagColor}20`, color: post.tagColor, border: `1px solid ${post.tagColor}40` }}>
                    {post.tag}
                  </span>
                  <span className="text-xs text-[#4B5563]">{post.timestamp}</span>
                </div>
                <p className="text-sm text-[#E2E8F0] leading-relaxed mb-3">{post.content}</p>
                <div className="flex items-center gap-4 text-xs text-[#4B5563] font-mono">
                  <span>❤ {(post.likes / 1000).toFixed(1)}K</span>
                  <span>💬 {post.comments}</span>
                  <span>↗ {(post.shares / 1000).toFixed(1)}K</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="space-y-4">
            {savedGenerations.map(gen => (
              <div key={gen.id} className="card-hover bg-[#0D1117] border border-[#1E2A3A] rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/20 font-mono">AI</span>
                  <span className="text-[10px] text-[#4B5563] font-mono">{gen.platform}</span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{gen.title}</h3>
                <p className="text-xs text-[#94A3B8] line-clamp-2 mb-2">{gen.preview}</p>
                <div className="text-[10px] text-[#4B5563] font-mono">{gen.createdAt}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'badges' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: '🏆', name: 'Pro Player', desc: 'Ranked player recognized by the community', color: '#FFB800', earned: true },
              { icon: '✅', name: 'Verified Creator', desc: 'Official content creator on Lobby', color: '#00F5FF', earned: true },
              { icon: '🚀', name: 'Early Adopter', desc: 'Joined Lobby in the first 1,000', color: '#8B5CF6', earned: true },
              { icon: '🔥', name: 'Trending Creator', desc: 'Post hit #1 trending 3+ times', color: '#FF2D78', earned: false },
              { icon: '💎', name: 'Diamond Tier', desc: 'Reach 500K followers', color: '#00F5FF', earned: false },
              { icon: '🎮', name: 'Game Expert', desc: 'Top voice in 5+ game communities', color: '#00FF87', earned: false },
            ].map(badge => (
              <div key={badge.name}
                className={`stat-card text-center ${badge.earned ? '' : 'opacity-40'}`}
                style={{ borderColor: badge.earned ? `${badge.color}30` : '#1E2A3A' }}>
                <div className="text-3xl mb-2">{badge.icon}</div>
                <div className="text-xs font-bold text-white mb-1">{badge.name}</div>
                <div className="text-[10px] text-[#4B5563]">{badge.desc}</div>
                {badge.earned && (
                  <div className="mt-2 text-[9px] font-mono text-[#00FF87] bg-[#00FF87]/10 px-2 py-0.5 rounded-full inline-block">
                    EARNED
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </AppLayout>
  )
}
