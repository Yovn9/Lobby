'use client'
import Link from 'next/link'
import { TrendingUp, Zap, Cpu, Users, BarChart3, Star, ArrowRight, Eye, Heart, Share2, Flame } from 'lucide-react'
import AppLayout from '@/components/layout/AppLayout'
import { mockPosts, trendingTopics, suggestedCreators, creatorStats, currentUser } from '@/data/mockData'

export default function DashboardPage() {
  const topTrending = trendingTopics.slice(0, 5)
  const recentPosts = mockPosts.slice(0, 3)

  return (
    <AppLayout>
      <div className="px-4 md:px-8 py-6 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-xs text-[#4B5563] font-mono tracking-widest mb-1">// DASHBOARD</div>
            <h1 className="text-2xl md:text-3xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>
              GM, <span className="gradient-cyan">{currentUser.username}</span>
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00FF87] pulse-dot" />
            <span className="text-xs text-[#4B5563] font-mono">LIVE</span>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Views', value: creatorStats.totalViews, icon: Eye, color: '#00F5FF', delta: '+12%' },
            { label: 'Total Likes', value: creatorStats.totalLikes, icon: Heart, color: '#FF2D78', delta: '+8%' },
            { label: 'Followers', value: creatorStats.followers, icon: Users, color: '#8B5CF6', delta: '+3%' },
            { label: 'Engagement', value: creatorStats.engagementRate, icon: BarChart3, color: '#00FF87', delta: '+0.4%' },
          ].map(stat => (
            <div key={stat.label} className="stat-card card-hover">
              <div className="flex items-center justify-between mb-3">
                <stat.icon size={16} style={{ color: stat.color }} />
                <span className="text-[10px] font-mono text-[#00FF87] bg-[#00FF87]/10 px-2 py-0.5 rounded-full">
                  {stat.delta}
                </span>
              </div>
              <div className="text-2xl font-black text-white mb-0.5" style={{ fontFamily: 'var(--font-display)', fontSize: '20px' }}>
                {stat.value}
              </div>
              <div className="text-xs text-[#4B5563]">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - trending + recent posts */}
          <div className="lg:col-span-2 space-y-6">
            {/* Trending now */}
            <div className="bg-[#0D1117] border border-[#1E2A3A] rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <TrendingUp size={15} className="text-[#00F5FF]" />
                  <h2 className="text-sm font-black text-white tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>TRENDING NOW</h2>
                </div>
                <Link href="/trending" className="text-xs text-[#00F5FF] hover:underline flex items-center gap-1">
                  View all <ArrowRight size={12} />
                </Link>
              </div>
              <div className="space-y-3">
                {topTrending.map((topic, i) => (
                  <div key={topic.id} className="flex items-center gap-4 group cursor-pointer">
                    <span className="text-[#1E2A3A] font-black text-sm w-4" style={{ fontFamily: 'var(--font-display)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-white font-semibold group-hover:text-[#00F5FF] transition-colors">{topic.title}</span>
                        <span className="text-xs text-[#4B5563] font-mono">{topic.posts} posts</span>
                      </div>
                      <div className="w-full bg-[#1E2A3A] rounded-full h-0.5">
                        <div className="score-bar-fill" style={{ width: `${topic.score}%` }} />
                      </div>
                    </div>
                    <span className="text-xs font-black" style={{ color: topic.color, fontFamily: 'var(--font-display)' }}>
                      {topic.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent posts */}
            <div className="bg-[#0D1117] border border-[#1E2A3A] rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-black text-white tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>RECENT POSTS</h2>
                <Link href="/feed" className="text-xs text-[#00F5FF] hover:underline flex items-center gap-1">
                  Full feed <ArrowRight size={12} />
                </Link>
              </div>
              <div className="space-y-4">
                {recentPosts.map(post => (
                  <div key={post.id} className="card-hover bg-[#080B11] rounded-xl border border-[#1E2A3A] p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-black flex-shrink-0"
                        style={{ background: `linear-gradient(135deg, ${post.user.color}, ${post.user.color}88)` }}>
                        {post.user.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className="text-sm font-semibold text-white">{post.user.username}</span>
                          <span className="tag-pill text-[10px]" style={{ background: `${post.tagColor}20`, color: post.tagColor, border: `1px solid ${post.tagColor}40` }}>
                            {post.tag}
                          </span>
                          {post.trending && (
                            <span className="flex items-center gap-1 tag-pill text-[10px] bg-[#FF2D78]/10 text-[#FF2D78] border border-[#FF2D78]/20">
                              <Flame size={9} fill="currentColor" /> HOT
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-2">{post.content}</p>
                        <div className="flex items-center gap-4 mt-2 text-[10px] text-[#4B5563] font-mono">
                          <span>❤ {(post.likes / 1000).toFixed(1)}K</span>
                          <span>💬 {post.comments}</span>
                          <span className="ml-auto">{post.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Quick AI card */}
            <div className="relative overflow-hidden rounded-2xl border border-[#8B5CF6]/30 p-5"
              style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(0,245,255,0.05))' }}>
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
              <div className="flex items-center gap-2 mb-3">
                <Cpu size={14} className="text-[#8B5CF6]" />
                <span className="text-xs font-black tracking-wider text-[#8B5CF6]" style={{ fontFamily: 'var(--font-display)' }}>AI GENERATOR</span>
              </div>
              <p className="text-sm text-[#94A3B8] mb-4">Generate gaming content in seconds. Scripts, hooks, captions & more.</p>
              <Link href="/ai-generator"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold tracking-wider text-white transition-all hover:opacity-90"
                style={{ fontFamily: 'var(--font-display)', background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', fontSize: '11px' }}>
                <Zap size={12} />
                GENERATE CONTENT
              </Link>
            </div>

            {/* Suggested creators */}
            <div className="bg-[#0D1117] border border-[#1E2A3A] rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-black text-white tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>CREATORS TO FOLLOW</h2>
              </div>
              <div className="space-y-3">
                {suggestedCreators.map(creator => (
                  <div key={creator.id} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-black flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${creator.color}, ${creator.color}88)` }}>
                      {creator.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-white truncate">{creator.username}</div>
                      <div className="text-[10px] text-[#4B5563]">{creator.mutualFollowers} mutual follows</div>
                    </div>
                    <button className="text-[10px] text-[#00F5FF] border border-[#00F5FF]/30 px-3 py-1.5 rounded-lg hover:bg-[#00F5FF]/10 transition-all font-bold"
                      style={{ fontFamily: 'var(--font-display)' }}>
                      FOLLOW
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* My stats */}
            <div className="bg-[#0D1117] border border-[#1E2A3A] rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Star size={14} className="text-[#FFB800]" />
                <h2 className="text-sm font-black text-white tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>CREATOR STATS</h2>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Posts this month', value: creatorStats.postsThisMonth },
                  { label: 'Top content', value: creatorStats.topContent },
                  { label: 'Engagement rate', value: creatorStats.engagementRate },
                ].map(s => (
                  <div key={s.label} className="flex items-center justify-between">
                    <span className="text-xs text-[#4B5563]">{s.label}</span>
                    <span className="text-xs font-bold text-white">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
