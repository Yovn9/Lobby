'use client'
import Link from 'next/link'
import { TrendingUp, Zap, ArrowRight, Flame } from 'lucide-react'
import AppLayout from '@/components/layout/AppLayout'
import { trendingTopics } from '@/data/mockData'

const CATEGORY_COLORS: Record<string, string> = {
  'Upcoming Release': '#00F5FF',
  'Showcase': '#FF2D78',
  'Rumor': '#FFB800',
  'Hardware': '#00FF87',
  'PC Gaming': '#8B5CF6',
}

export default function TrendingPage() {
  const topThree = trendingTopics.sort((a, b) => b.score - a.score).slice(0, 3)

  return (
    <AppLayout>
      <div className="px-4 md:px-8 py-6 max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-xs text-[#4B5563] font-mono tracking-widest mb-1">// TRENDING</div>
            <h1 className="text-2xl md:text-3xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>
              WHAT&apos;S <span className="gradient-cyan">TRENDING</span>
            </h1>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#00FF87] bg-[#00FF87]/10 border border-[#00FF87]/20 px-3 py-1.5 rounded-full font-mono">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00FF87] pulse-dot" />
            LIVE DATA
          </div>
        </div>

        {/* Top 3 hero cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {topThree.map((topic, i) => (
            <div key={topic.id}
              className={`relative overflow-hidden rounded-2xl border p-6 ${topic.border} bg-gradient-to-br ${topic.gradient} bg-[#0D1117]`}>
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full pointer-events-none"
                style={{ background: `radial-gradient(circle, ${topic.color}20 0%, transparent 70%)`, transform: 'translate(40%, -40%)' }} />

              <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl font-black" style={{ fontFamily: 'var(--font-display)', color: topic.color, fontSize: '28px' }}>
                  #{i + 1}
                </div>
                {i === 0 && <Flame size={18} className="text-[#FF2D78]" fill="currentColor" />}
              </div>

              <div className="mb-1">
                <span className="tag-pill" style={{
                  background: `${CATEGORY_COLORS[topic.category] || '#00F5FF'}15`,
                  color: CATEGORY_COLORS[topic.category] || '#00F5FF',
                  border: `1px solid ${CATEGORY_COLORS[topic.category] || '#00F5FF'}30`,
                }}>
                  {topic.category}
                </span>
              </div>

              <h3 className="text-xl font-black text-white mt-3 mb-1" style={{ fontFamily: 'var(--font-display)', fontSize: '18px' }}>
                {topic.title}
              </h3>
              <p className="text-xs text-[#4B5563] mb-4">{topic.subtitle}</p>

              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-[#94A3B8] font-mono">{topic.posts} posts</span>
                <span className="text-lg font-black" style={{ fontFamily: 'var(--font-display)', color: topic.color }}>
                  {topic.score}
                </span>
              </div>

              <div className="w-full bg-[#1E2A3A] rounded-full h-1 mb-4">
                <div className="score-bar-fill" style={{ width: `${topic.score}%` }} />
              </div>

              <Link href="/ai-generator"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all hover:opacity-90"
                style={{
                  fontFamily: 'var(--font-display)',
                  background: `linear-gradient(135deg, ${topic.color}30, ${topic.color}15)`,
                  border: `1px solid ${topic.color}40`,
                  color: topic.color,
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                }}>
                <Zap size={11} /> CREATE CONTENT
              </Link>
            </div>
          ))}
        </div>

        {/* All trends grid */}
        <div className="mb-4">
          <h2 className="text-sm font-black text-white tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>
            ALL TRENDS
          </h2>
        </div>

        <div className="space-y-3">
          {trendingTopics.map((topic, i) => (
            <div key={topic.id}
              className={`card-hover relative overflow-hidden rounded-2xl border ${topic.border} bg-[#0D1117] p-5`}>
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Rank + score */}
                <div className="flex md:flex-col items-center md:items-center gap-3 md:gap-1 md:w-16 flex-shrink-0">
                  <span className="text-3xl font-black text-[#1E2A3A]" style={{ fontFamily: 'var(--font-display)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-lg font-black" style={{ fontFamily: 'var(--font-display)', color: topic.color }}>
                    {topic.score}
                  </span>
                </div>

                {/* Main info */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-lg font-black text-white" style={{ fontFamily: 'var(--font-display)', fontSize: '16px' }}>
                      {topic.title}
                    </h3>
                    <span className="tag-pill" style={{
                      background: `${CATEGORY_COLORS[topic.category] || '#00F5FF'}15`,
                      color: CATEGORY_COLORS[topic.category] || '#00F5FF',
                      border: `1px solid ${CATEGORY_COLORS[topic.category] || '#00F5FF'}30`,
                    }}>
                      {topic.category}
                    </span>
                    <span className="text-xs text-[#4B5563] font-mono ml-auto">{topic.posts} posts</span>
                  </div>

                  <p className="text-xs text-[#4B5563] mb-1">{topic.subtitle}</p>
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-3">{topic.description}</p>

                  <div className="bg-[#080B11] border border-[#1E2A3A] rounded-xl p-3 mb-3">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <TrendingUp size={11} className="text-[#8B5CF6]" />
                      <span className="text-[10px] text-[#8B5CF6] font-mono tracking-wider">CONTENT ANGLE</span>
                    </div>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">{topic.angle}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-[#1E2A3A] rounded-full h-1">
                      <div className="score-bar-fill" style={{ width: `${topic.score}%` }} />
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="md:ml-4 flex-shrink-0">
                  <Link href="/ai-generator"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider whitespace-nowrap transition-all hover:opacity-90"
                    style={{
                      fontFamily: 'var(--font-display)',
                      background: `linear-gradient(135deg, ${topic.color}25, ${topic.color}10)`,
                      border: `1px solid ${topic.color}40`,
                      color: topic.color,
                      fontSize: '10px',
                      letterSpacing: '0.08em',
                    }}>
                    <Zap size={11} /> CREATE CONTENT
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}
