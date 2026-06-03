'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import {
  Heart, MessageCircle, Share2, Bookmark, Flame, MoreHorizontal,
  TrendingUp, Zap, ChevronRight, Send, X, UserPlus, CheckCircle2,
  Repeat2, PenSquare, Eye, Radio, ShoppingBag, Plus, Volume2,
  Users, Gamepad2, Monitor, Cpu,
} from 'lucide-react'
import AppLayout from '@/components/layout/AppLayout'
import {
  mockPosts, mockComments, mockStories, mockLiveStreams,
  trendingTopics, suggestedCreators, currentUser,
} from '@/data/mockData'

type Post  = typeof mockPosts[0]
type Story = typeof mockStories[0]
type User  = typeof currentUser

function fmt(n: number) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M'
  if (n >= 1_000)     return (n / 1_000).toFixed(n >= 10_000 ? 0 : 1) + 'K'
  return String(n)
}

function Avatar({ user, size = 10, ring = false, ringColor, online = false }:
  { user: { initials: string; color: string }; size?: number; ring?: boolean; ringColor?: string; online?: boolean }) {
  const px = size * 4
  return (
    <div className="relative flex-shrink-0" style={{ width: px, height: px }}>
      <div className="rounded-full flex items-center justify-center font-black text-black w-full h-full"
        style={{
          fontSize: Math.max(8, px / 3.2),
          background: `linear-gradient(145deg, ${user.color}, ${user.color}88)`,
          boxShadow: ring ? `0 0 0 2px var(--bg), 0 0 0 3.5px ${ringColor ?? user.color}55` : undefined,
        }}>
        {user.initials}
      </div>
      {online && <div className="absolute -bottom-px -right-px w-3.5 h-3.5 rounded-full border-2"
        style={{ background: 'var(--green)', borderColor: 'var(--bg)', boxShadow: '0 0 6px rgba(0,255,138,0.5)' }} />}
    </div>
  )
}

function Verified() {
  return (
    <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0"
      style={{ background: 'var(--cyan)' }}>
      <CheckCircle2 size={9} strokeWidth={3} style={{ color: '#000' }} />
    </div>
  )
}

function ArtCard({ post }: { post: Post }) {
  const c = post.artConfig
  return (
    <div className="relative w-full overflow-hidden" style={{
      height: 252, borderRadius: 16,
      background: `linear-gradient(145deg, ${c.bg1}, ${c.bg2})`,
      border: `1px solid ${post.accent}25`,
    }}>
      <div className="absolute inset-0 art-card-grid opacity-100 pointer-events-none" />
      <div className="absolute inset-0 art-card-scanlines pointer-events-none" />
      <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${c.glowColor} 0%, transparent 70%)` }} />
      <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${post.accent}0E 0%, transparent 70%)` }} />
      <div className="absolute left-0 top-8 bottom-8 flex flex-col gap-2.5 pl-3">
        {c.bars.map((col: string, i: number) => (
          <div key={i} className="rounded-full"
            style={{ width: 3, height: 24 - i * 4, background: col, opacity: 0.7 - i * 0.15 }} />
        ))}
      </div>
      {(['tl','tr','bl','br'] as const).map(corner => (
        <div key={corner} className="absolute" style={{
          width: 18, height: 18,
          top:    corner[0]==='t' ? 10 : undefined,
          bottom: corner[0]==='b' ? 10 : undefined,
          left:   corner[1]==='l' ? 10 : undefined,
          right:  corner[1]==='r' ? 10 : undefined,
          borderTop:    corner[0]==='t' ? `2px solid ${post.accent}70` : undefined,
          borderBottom: corner[0]==='b' ? `2px solid ${post.accent}70` : undefined,
          borderLeft:   corner[1]==='l' ? `2px solid ${post.accent}70` : undefined,
          borderRight:  corner[1]==='r' ? `2px solid ${post.accent}70` : undefined,
          borderRadius: corner==='tl' ? '4px 0 0 0' : corner==='tr' ? '0 4px 0 0'
                      : corner==='bl' ? '0 0 0 4px' : '0 0 4px 0',
        }} />
      ))}
      <div className="absolute inset-x-8 top-8 h-px"
        style={{ background: `linear-gradient(90deg,transparent,${post.accent}25,transparent)` }} />
      <div className="absolute inset-x-8 bottom-8 h-px"
        style={{ background: `linear-gradient(90deg,transparent,${post.accent}25,transparent)` }} />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <div style={{ fontSize: c.emojiSize, lineHeight: 1,
          filter: `drop-shadow(0 0 24px ${post.accent}60) drop-shadow(0 4px 12px rgba(0,0,0,0.8))` }}>
          {c.emoji}
        </div>
        <div className="flex flex-col items-center gap-2">
          {/* Game label pill — V4: bigger, more readable */}
          <div className="art-label"
            style={{ color: post.accent, background: `${post.accent}18`, border: `1px solid ${post.accent}40` }}>
            {c.label}
          </div>
          {/* Category tags — V4: up from 9px to 10px */}
          <div className="flex items-center gap-2">
            {[c.tag1, c.tag2].map((tag: string) => (
              <span key={tag} className="art-tag">{tag}</span>
            ))}
          </div>
          {/* Sub-label — V4: up from 10px to 11px, lighter color */}
          <div className="art-sub">{c.sub}</div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-[2px]"
        style={{ background:`linear-gradient(90deg,transparent 0%,${post.accent}70 35%,${post.accent}70 65%,transparent 100%)` }} />
    </div>
  )
}

function CommentRow({ comment, last }:
  { comment: { id: string; user: User; text: string; likes: number; time: string }; last: boolean }) {
  const [liked, setLiked] = useState(false)
  const isVer = comment.user.badges?.some((b: string) => b === 'Verified Creator' || b === 'News Insider')
  return (
    <div className={`flex gap-3 py-3.5 ${last ? '' : 'border-b'}`} style={{ borderColor: 'var(--border)' }}>
      <Avatar user={comment.user} size={7} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="text-[14px] font-bold" style={{ color: 'var(--text-primary)' }}>{comment.user.username}</span>
          {isVer && <Verified />}
          <span className="text-[11px] font-mono ml-1" style={{ color: 'var(--text-muted)' }}>{comment.time}</span>
        </div>
        <p className="text-[14px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{comment.text}</p>
        <button onClick={() => setLiked(l => !l)}
          className="flex items-center gap-1.5 mt-2 text-[12px] font-mono transition-colors"
          style={{ color: liked ? 'var(--pink)' : 'var(--text-muted)' }}>
          <Heart size={12} fill={liked ? 'currentColor' : 'none'} />
          {fmt(comment.likes + (liked ? 1 : 0))}
        </button>
      </div>
    </div>
  )
}

function PostCard({ post }: { post: Post }) {
  const [liked,    setLiked]    = useState(false)
  const [saved,    setSaved]    = useState(false)
  const [reposted, setReposted] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [commentText,  setCommentText]  = useState('')
  const [localComments, setLocalComments] = useState<Array<{id:string;user:User;text:string;likes:number;time:string}>>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const allComments = [...(mockComments[post.id]??[]), ...localComments]
  const preview = showComments ? allComments : allComments.slice(0,2)

  const submit = () => {
    const t = commentText.trim()
    if (!t) return
    setLocalComments(prev => [{id:`lc-${Date.now()}`,user:currentUser,text:t,likes:0,time:'just now'}, ...prev])
    setCommentText('')
  }

  const isVer = post.user.badges.some((b:string) => b==='Verified Creator'||b==='News Insider')

  return (
    <article className="overflow-hidden" style={{
      background: 'linear-gradient(165deg, var(--card) 0%, var(--surface) 100%)',
      border: '1px solid var(--border)',
      borderRadius: 20,
    }}>
      {/* Trending ribbon — V4: clearer, larger text */}
      {post.trending && (
        <div className="flex items-center gap-2.5 px-4 py-2.5"
          style={{ background:`linear-gradient(90deg,${post.accent}16,transparent 80%)`, borderBottom:`1px solid ${post.accent}1C` }}>
          <Flame size={12} fill={post.accent} style={{ color:post.accent }} />
          <span className="trending-ribbon-label" style={{ color:post.accent }}>TRENDING</span>
          <span className="text-[11px] font-mono font-semibold" style={{ color:`${post.accent}CC` }}>· {post.tag}</span>
          <div className="ml-auto flex items-center gap-1.5">
            <Eye size={11} style={{ color:'var(--text-muted)' }} />
            <span className="text-[12px] font-mono font-semibold" style={{ color:'var(--text-muted)' }}>{fmt(post.views)}</span>
          </div>
        </div>
      )}

      {/* Header — V4: more breathing room, larger text */}
      <div className="flex items-center justify-between px-4 pt-4 pb-3">
        <div className="flex items-center gap-3.5">
          <Avatar user={post.user} size={11} ring ringColor={post.accent} online />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[17px] font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>{post.user.username}</span>
              {isVer && <Verified />}
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-[13px] font-mono" style={{ color: 'var(--text-muted)' }}>{post.timestamp}</span>
              <span style={{ color: 'var(--border-2)' }}>·</span>
              <span className="text-[13px] font-mono font-bold cursor-pointer hover:opacity-70 transition-opacity"
                style={{ color: post.tagColor }}>#{post.tag}</span>
            </div>
          </div>
        </div>
        <button className="btn-icon"><MoreHorizontal size={16} /></button>
      </div>

      {/* Body text — V4: 17px, relaxed line height, more padding */}
      <div className="px-4 pb-4">
        <p className="text-[17px] leading-[1.70]" style={{ color: 'var(--text-primary)', fontWeight: 400 }}>{post.content}</p>
      </div>

      {/* Art card — V4: slightly taller */}
      <div className="px-4 pb-4"><ArtCard post={post} /></div>

      {/* Stats row — V4: 13px font, bigger icons */}
      <div className="flex items-center gap-5 px-4 pb-3" style={{ borderBottom: '1px solid var(--border)' }}>
        {[
          { Icon: Eye,           val: fmt(post.views)                           },
          { Icon: Repeat2,       val: fmt(post.shares + (reposted ? 1 : 0))    },
          { Icon: MessageCircle, val: fmt(post.comments + localComments.length) },
        ].map(({ Icon, val }) => (
          <div key={val} className="flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
            <Icon size={13} />
            <span className="text-[13px] font-mono font-semibold">{val}</span>
          </div>
        ))}
      </div>

      {/* Action bar */}
      <div className="flex items-center px-1 py-1">
        <button className={`post-action like ${liked?'active':''}`} onClick={()=>setLiked(l=>!l)}>
          <Heart size={16} fill={liked?'currentColor':'none'} strokeWidth={liked?0:1.8} />
          <span>{fmt(post.likes+(liked?1:0))}</span>
        </button>
        <button className={`post-action comment ${showComments?'active':''}`}
          onClick={()=>{setShowComments(c=>!c); setTimeout(()=>inputRef.current?.focus(),60)}}>
          <MessageCircle size={16} strokeWidth={1.8} />
          <span>{fmt(post.comments+localComments.length)}</span>
        </button>
        <button className={`post-action repost ${reposted?'active':''}`} onClick={()=>setReposted(r=>!r)}>
          <Repeat2 size={16} strokeWidth={1.8} />
          <span>{fmt(post.shares+(reposted?1:0))}</span>
        </button>
        <button className="post-action share"><Share2 size={16} strokeWidth={1.8} /></button>
        <div className="w-px h-4 mx-1 flex-shrink-0" style={{ background:'var(--border)' }} />
        <button className={`post-action save ${saved?'active':''}`}
          style={{ flex:'none', padding:'7px 14px' }} onClick={()=>setSaved(s=>!s)}>
          <Bookmark size={16} fill={saved?'currentColor':'none'} strokeWidth={saved?0:1.8} />
        </button>
      </div>

      {/* Comments */}
      {allComments.length > 0 && (
        <div className="px-4" style={{ borderTop:'1px solid var(--border)' }}>
          {preview.map((c,i) => (
            <CommentRow key={c.id} comment={c} last={i===preview.length-1&&!showComments} />
          ))}
          {!showComments && allComments.length > 2 && (
            <button className="flex items-center gap-1.5 pb-3.5 text-[13px] font-semibold transition-colors"
              style={{ color:'var(--text-muted)', fontFamily:'var(--font-body)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              onClick={() => setShowComments(true)}>
              View all {allComments.length} comments <ChevronRight size={14} />
            </button>
          )}
          {showComments && (
            <button className="flex items-center gap-1.5 pb-3.5 text-[13px] font-semibold transition-colors"
              style={{ color:'var(--text-muted)', fontFamily:'var(--font-body)' }}
              onClick={() => setShowComments(false)}>
              <X size={13} /> Collapse comments
            </button>
          )}
        </div>
      )}

      {/* Comment input */}
      <div className="flex items-center gap-3 px-4 py-3.5" style={{ borderTop: '1px solid var(--border)' }}>
        <Avatar user={currentUser} size={7} />
        <div className="flex-1 flex items-center gap-2 px-3.5 py-2.5 rounded-xl transition-all"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <input ref={inputRef} value={commentText} onChange={e => setCommentText(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && submit()}
            placeholder={`Reply to ${post.user.username}…`}
            className="flex-1 bg-transparent text-[14px] outline-none"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}
          />
          {commentText.trim() && (
            <button onClick={submit} className="flex-shrink-0 transition-opacity hover:opacity-70"
              style={{ color: 'var(--cyan)' }}>
              <Send size={14} />
            </button>
          )}
        </div>
      </div>
    </article>
  )
}

function StoriesRow() {
  const [viewed, setViewed] = useState<Set<string>>(
    new Set(mockStories.filter(s => s.viewed).map(s => s.id))
  )
  return (
    <div className="rounded-[20px] py-4 overflow-hidden"
      style={{ background:'var(--card)', border:'1px solid var(--border)' }}>
      <div className="flex items-center justify-between px-4 mb-3">
        <span className="panel-header tracking-[0.14em]">GAMING STORIES</span>
        <span className="text-[12px] font-mono font-semibold" style={{ color: 'var(--text-muted)' }}>
          {mockStories.filter((s: Story) => !s.isAdd && !viewed.has(s.id)).length} new
        </span>
      </div>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4">
        {mockStories.map((story:Story) => {
          const isViewed = viewed.has(story.id)
          const isAdd    = story.isAdd
          return (
            <button key={story.id}
              onClick={() => { if (!isAdd) { setViewed(prev => { const n = new Set(prev); n.add(story.id); return n }) } }}
              className="flex flex-col items-center gap-2 flex-shrink-0 group" style={{ width:68 }}>
              <div className="relative" style={{ width:64, height:64 }}>
                {!isViewed && !isAdd && (
                  <div className="absolute inset-0 rounded-[18px]" style={{
                    boxShadow:`0 0 0 2px var(--bg), 0 0 0 3.5px ${story.color}, 0 0 12px ${story.color}50`
                  }} />
                )}
                {isViewed && !isAdd && (
                  <div className="absolute inset-0 rounded-[18px]"
                    style={{ boxShadow:'0 0 0 2px var(--border-2)' }} />
                )}
                <div className="absolute inset-0 rounded-[18px] overflow-hidden flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
                  style={{
                    background: isAdd ? 'var(--surface)'
                      : `linear-gradient(145deg, ${story.colors[0]}, ${story.colors[1]})`,
                    border: isAdd ? '2px dashed var(--border-2)' : 'none',
                  }}>
                  {!isAdd && <div className="absolute inset-0 art-card-grid opacity-60" />}
                  {!isAdd && <div className="absolute inset-0 pointer-events-none"
                    style={{ background:`radial-gradient(circle at 35% 40%, ${story.color}30, transparent 65%)` }} />}
                  <span className="relative z-10"
                    style={{ fontSize:isAdd?20:28, lineHeight:1,
                      filter:isAdd?'none':`drop-shadow(0 0 6px ${story.color}80)` }}>
                    {isAdd ? <Plus size={20} style={{ color:'#475569' }} /> : story.emoji}
                  </span>
                  {story.hot && !isAdd && (
                    <div className="absolute bottom-1.5 right-1.5 w-4 h-4 rounded-full flex items-center justify-center"
                      style={{ background:'#FF2D78', border:'1.5px solid var(--bg)' }}>
                      <Flame size={8} fill="white" style={{ color:'white' }} />
                    </div>
                  )}
                  {isViewed && !isAdd && (
                    <div className="absolute inset-0 rounded-[18px]"
                      style={{ background:'rgba(0,0,0,0.45)' }} />
                  )}
                </div>
              </div>
              <span className="text-center leading-tight truncate w-full text-[11px] font-semibold"
                style={{ color: isViewed || isAdd ? 'var(--text-faint)' : 'var(--text-secondary)' }}>
                {story.label}
              </span>            </button>
          )
        })}
      </div>
    </div>
  )
}

function TrendingPanel() {
  return (
    <div className="rounded-[18px] overflow-hidden" style={{ background:'var(--card)', border:'1px solid var(--border)' }}>
      <div className="flex items-center justify-between px-4 py-3.5" style={{ borderBottom:'1px solid var(--border)' }}>
        <div className="flex items-center gap-2.5">
          <TrendingUp size={14} style={{ color:'var(--cyan)' }} />
          <span className="panel-header">TRENDING</span>
        </div>
        <div className="flex items-center gap-1.5" style={{ color:'var(--green)' }}>
          <div className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background:'var(--green)' }} />
          <span className="text-[11px] font-mono font-bold tracking-wider">LIVE</span>
        </div>
      </div>
      <div className="py-1">
        {trendingTopics.slice(0, 10).map((topic, i) => (
          <Link key={topic.id} href="/trending"
            className="flex items-center gap-3 px-3 py-2.5 mx-1 rounded-xl transition-all"
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.035)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
            <span className="w-5 text-center text-[11px] font-black flex-shrink-0"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--border-2)' }}>{i + 1}</span>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-bold truncate" style={{ color: 'var(--text-primary)' }}>{topic.title}</div>
              <div className="text-[11px] font-mono mt-0.5" style={{ color: 'var(--text-muted)' }}>{topic.posts} · {topic.category}</div>
            </div>
            <div className="flex flex-col items-end gap-1 flex-shrink-0">
              <span className="text-[12px] font-black"
                style={{ fontFamily: 'var(--font-display)', color: topic.color }}>{topic.score}</span>
              <div className="w-10 h-[2px] rounded-full overflow-hidden" style={{ background: 'var(--border-2)' }}>
                <div className="h-full rounded-full" style={{ width: `${topic.score}%`, background: topic.color }} />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="px-3 pb-3 pt-1">
        <Link href="/trending" className="btn-ghost w-full justify-center text-[10px] tracking-wider"
          style={{ fontFamily:'var(--font-display)' }}>
          ALL TRENDS <ChevronRight size={11} />
        </Link>
      </div>
    </div>
  )
}

function LivePanel() {
  return (
    <div className="rounded-[18px] overflow-hidden" style={{ background:'var(--card)', border:'1px solid var(--border)' }}>
      <div className="flex items-center gap-2.5 px-4 py-3.5" style={{ borderBottom:'1px solid var(--border)' }}>
        <Radio size={14} style={{ color:'var(--pink)' }} />
        <span className="panel-header">LIVE NOW</span>
        <div className="ml-auto live-badge">
          <div className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background:'var(--pink)' }} />
          {mockLiveStreams.length} live
        </div>
      </div>
      <div className="py-1">
        {mockLiveStreams.map(stream => (
          <button key={stream.id}
            className="w-full flex items-center gap-3 px-3 py-3 mx-1 rounded-xl text-left transition-all"
            style={{ width:'calc(100% - 8px)' }}
            onMouseEnter={e=>(e.currentTarget.style.background='rgba(255,255,255,0.035)')}
            onMouseLeave={e=>(e.currentTarget.style.background='transparent')}>
            <div className="relative flex-shrink-0">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs text-black"
                style={{ background:`linear-gradient(135deg,${stream.color},${stream.color}88)` }}>
                {stream.initials}
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full flex items-center justify-center"
                style={{ background:'var(--pink)', border:'1.5px solid var(--bg)' }}>
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-bold truncate" style={{ color: 'var(--text-primary)' }}>{stream.title}</div>
              <div className="flex items-center gap-1.5 mt-0.5" style={{ color: 'var(--text-muted)' }}>
                <Users size={11} />
                <span className="text-[12px] font-mono">{fmt(stream.viewers)} watching</span>
              </div>
            </div>
            <span className="text-[10px] font-mono font-bold px-2 py-1 rounded flex-shrink-0"
              style={{ background:'rgba(255,51,133,0.1)', color:'var(--pink)', border:'1px solid rgba(255,51,133,0.18)' }}>
              {stream.category}
            </span>
          </button>
        ))}
      </div>
      <div className="px-3 pb-3 pt-1">
        <button className="btn-ghost w-full justify-center text-[10px] tracking-wider"
          style={{ fontFamily:'var(--font-display)', borderColor:'rgba(255,45,120,0.15)', color:'#FF2D78' }}>
          <Volume2 size={11} /> BROWSE STREAMS
        </button>
      </div>
    </div>
  )
}

function FollowPanel() {
  const [followed, setFollowed] = useState<Set<string>>(new Set())
  const toggle = (id:string) => setFollowed(prev => { const n=new Set(prev); n.has(id)?n.delete(id):n.add(id); return n })
  return (
    <div className="rounded-[18px] overflow-hidden" style={{ background:'var(--card)', border:'1px solid var(--border)' }}>
      <div className="flex items-center gap-2.5 px-4 py-3.5" style={{ borderBottom:'1px solid var(--border)' }}>
        <Zap size={14} style={{ color:'var(--purple)' }} />
        <span className="panel-header">WHO TO FOLLOW</span>
      </div>
      <div className="py-1">
        {suggestedCreators.map(creator => {
          const on = followed.has(creator.id)
          const isVer = creator.badges.some((b:string) => b==='Verified Creator'||b==='News Insider')
          return (
            <div key={creator.id}
              className="flex items-center gap-3 px-3 py-3 mx-1 rounded-xl transition-all"
              onMouseEnter={e=>(e.currentTarget.style.background='rgba(255,255,255,0.035)')}
              onMouseLeave={e=>(e.currentTarget.style.background='transparent')}>
              <Avatar user={creator} size={9} ring />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-[13px] font-bold truncate" style={{ color: 'var(--text-primary)' }}>{creator.username}</span>
                  {isVer && <Verified />}
                </div>
                <div className="text-[12px] font-mono mt-0.5" style={{ color: 'var(--text-muted)' }}>
                  {(creator.followers / 1000).toFixed(1)}K followers
                </div>
              </div>
              <button onClick={()=>toggle(creator.id)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[11px] font-bold flex-shrink-0 transition-all"
                style={{ fontFamily:'var(--font-display)', letterSpacing:'0.04em',
                  background:on?'rgba(0,238,255,0.1)':'transparent',
                  color:on?'var(--cyan)':'var(--text-muted)',
                  border:on?'1px solid rgba(0,238,255,0.28)':'1px solid var(--border-2)' }}>
                {on ? <><CheckCircle2 size={10}/> ON</> : <><UserPlus size={10}/> FOLLOW</>}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function AIPanel() {
  return (
    <div className="relative overflow-hidden rounded-[18px] p-4"
      style={{ background:'linear-gradient(135deg,rgba(139,92,246,0.12),rgba(0,245,255,0.05))',
        border:'1px solid rgba(139,92,246,0.22)' }}>
      <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full pointer-events-none"
        style={{ background:'radial-gradient(circle,rgba(139,92,246,0.25) 0%,transparent 70%)' }} />
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2.5">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background:'rgba(157,111,247,0.2)' }}>
            <Cpu size={14} style={{ color:'var(--purple)' }} />
          </div>
          <span className="panel-header" style={{ color:'var(--purple)' }}>AI CONTENT</span>
        </div>
        <p className="text-[13px] leading-relaxed mb-3.5" style={{ color: 'var(--text-secondary)' }}>
          Generate scripts, hooks, captions & hashtags for your gaming content instantly.
        </p>
        <Link href="/ai-generator" className="btn-primary w-full justify-center"
          style={{ background:'linear-gradient(135deg,#8B5CF6,#EC4899)' }}>
          <Zap size={11} /> GENERATE NOW
        </Link>
      </div>
    </div>
  )
}

function MarketplacePanel() {
  const items = [
    { Icon:Gamepad2,    label:'PS5 Consoles',    color:'#00F5FF' },
    { Icon:Monitor,     label:'Gaming Monitors', color:'#8B5CF6' },
    { Icon:Cpu,         label:'GPUs & PC Parts', color:'#00FF87' },
    { Icon:Gamepad2,    label:'Controllers',     color:'#FF2D78' },
    { Icon:ShoppingBag, label:'Digital Deals',   color:'#FFB800' },
  ]
  return (
    <div className="relative overflow-hidden rounded-[18px] p-4"
      style={{ background:'linear-gradient(135deg,rgba(0,255,135,0.07),rgba(0,128,255,0.05))',
        border:'1px solid rgba(0,255,135,0.14)' }}>
      <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full pointer-events-none"
        style={{ background:'radial-gradient(circle,rgba(0,255,135,0.18) 0%,transparent 70%)' }} />
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <ShoppingBag size={14} style={{ color:'var(--green)' }} />
          <span className="panel-header" style={{ color:'var(--green)' }}>MARKETPLACE</span>
          <span className="ml-auto text-[9px] px-2 py-1 rounded font-mono font-bold"
            style={{ background:'rgba(255,190,0,0.1)', color:'var(--amber)', border:'1px solid rgba(255,190,0,0.2)' }}>
            COMING SOON
          </span>
        </div>
        <p className="text-[13px] mb-3.5" style={{ color: 'var(--text-secondary)' }}>Buy & sell gaming gear directly on Lobby.</p>
        <div className="space-y-1.5 mb-3.5">
          {items.map(({ Icon, label, color }) => (
            <div key={label} className="flex items-center gap-2.5 px-2 py-2 rounded-lg cursor-pointer transition-all"
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
              <div className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0"
                style={{ background: `${color}12` }}>
                <Icon size={13} style={{ color }} />
              </div>
              <span className="text-[13px] font-semibold" style={{ color: 'var(--text-secondary)' }}>{label}</span>
              <div className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: color }} />
            </div>
          ))}
        </div>
        <button className="btn-ghost w-full justify-center text-[10px] tracking-wider"
          style={{ fontFamily:'var(--font-display)', borderColor:'rgba(0,255,138,0.18)', color:'var(--green)' }}>
          <ShoppingBag size={12} /> NOTIFY ME AT LAUNCH
        </button>
      </div>
    </div>
  )
}

function InlineTrendingStrip() {
  return (
    <div className="xl:hidden rounded-[18px] p-4" style={{ background:'var(--card)', border:'1px solid var(--border)' }}>
      <div className="flex items-center justify-between mb-3.5">
        <div className="flex items-center gap-2">
          <TrendingUp size={13} style={{ color: 'var(--cyan)' }} />
          <span className="panel-header">TRENDING NOW</span>
        </div>
        <Link href="/trending" className="text-[12px] font-mono font-semibold flex items-center gap-0.5"
          style={{ color: 'var(--cyan)' }}>
          All <ChevronRight size={12} />
        </Link>
      </div>
      <div className="flex gap-2.5 overflow-x-auto scrollbar-hide">
        {trendingTopics.slice(0, 7).map(t => (
          <div key={t.id}
            className="flex-shrink-0 flex flex-col items-center gap-1.5 px-3 py-2.5 rounded-xl"
            style={{ background: `${t.color}0D`, border: `1px solid ${t.color}22`, minWidth: 86 }}>
            <span className="text-[19px] font-black" style={{ fontFamily: 'var(--font-display)', color: t.color }}>{t.score}</span>
            <span className="text-[11px] font-bold text-center leading-tight"
              style={{ color: 'var(--text-primary)' }}>{t.title}</span>
            <span className="text-[10px] font-mono" style={{ color: 'var(--text-muted)' }}>{t.posts}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function InlineLiveStrip() {
  return (
    <div className="xl:hidden rounded-[18px] p-4" style={{ background:'var(--card)', border:'1px solid var(--border)' }}>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full pulse-dot" style={{ background:'#FF2D78' }} />
        <span className="text-[10px] font-black tracking-wider"
          style={{ fontFamily:'var(--font-display)', color:'#F1F5F9' }}>LIVE NOW</span>
      </div>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide">
        {mockLiveStreams.map(s => (
          <div key={s.id} className="flex-shrink-0 flex flex-col items-center gap-1.5" style={{ width:72 }}>
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-black text-black"
                style={{ background:`linear-gradient(135deg,${s.color},${s.color}88)` }}>{s.initials}</div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full flex items-center justify-center"
                style={{ background:'#FF2D78', border:'2px solid var(--bg)' }}>
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
            </div>
            <span className="text-[10px] font-bold text-center truncate w-full"
              style={{ color:'#CBD5E1' }}>{s.streamer}</span>
            <span className="text-[9px] font-mono" style={{ color:'#475569' }}>{fmt(s.viewers)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function InlineCreatorsStrip() {
  const [followed, setFollowed] = useState<Set<string>>(new Set())
  const toggle = (id:string) => setFollowed(prev => { const n=new Set(prev); n.has(id)?n.delete(id):n.add(id); return n })
  return (
    <div className="xl:hidden rounded-[18px] p-4" style={{ background:'var(--card)', border:'1px solid var(--border)' }}>
      <div className="text-[10px] font-black tracking-wider mb-3"
        style={{ fontFamily:'var(--font-display)', color:'#475569' }}>SUGGESTED CREATORS</div>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {suggestedCreators.map(c => (
          <div key={c.id} className="flex-shrink-0 flex flex-col items-center gap-1.5" style={{ width:68 }}>
            <Avatar user={c} size={12} ring />
            <span className="text-[10px] font-bold text-center truncate w-full"
              style={{ color:'#CBD5E1' }}>{c.username}</span>
            <button onClick={()=>toggle(c.id)}
              className="text-[9px] font-bold px-2 py-0.5 rounded-full transition-all"
              style={{ background:followed.has(c.id)?'rgba(0,245,255,0.1)':'var(--border)',
                color:followed.has(c.id)?'var(--cyan)':'#64748B' }}>
              {followed.has(c.id) ? '✓ On' : '+ Follow'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

const FILTERS = [
  { id:'all',       label:'For You'    },
  { id:'trending',  label:'🔥 Trending' },
  { id:'following', label:'Following'  },
  { id:'new',       label:'New'        },
]

export default function FeedPage() {
  const [filter, setFilter] = useState('all')
  const posts = filter==='trending' ? mockPosts.filter(p=>p.trending) : mockPosts

  return (
    <AppLayout>
      <div className="min-h-screen">

        {/* Top bar — V4: filter-pill classes, cleaner design */}
        <div className="sticky top-0 z-20 backdrop-blur-xl"
          style={{ background:'rgba(4,6,11,0.92)', borderBottom:'1px solid var(--border)' }}>
          <div className="flex items-center justify-between px-4 py-2 max-w-7xl mx-auto gap-3">
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
              {FILTERS.map(f => (
                <button key={f.id} onClick={()=>setFilter(f.id)}
                  className={`filter-pill ${filter===f.id ? 'active' : 'inactive'}`}>
                  {f.label}
                </button>
              ))}
            </div>
            <Link href="/create" className="btn-primary flex-shrink-0">
              <PenSquare size={13} /> POST
            </Link>
          </div>
        </div>

        {/* Layout */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-5 pt-5 pb-6 flex gap-6 items-start">

          {/* Feed column */}
          <div className="flex-1 min-w-0 max-w-[680px] mx-auto xl:mx-0 flex flex-col gap-5">
            <StoriesRow />
            <InlineTrendingStrip />

            {posts.length===0 && (
              <div className="rounded-[20px] p-16 text-center"
                style={{ background:'var(--card)', border:'1px solid var(--border)' }}>
                <div className="text-4xl mb-3">🎮</div>
                <p className="text-sm" style={{ color:'#64748B' }}>No posts yet.</p>
              </div>
            )}

            {posts.map((post,idx) => (
              <div key={post.id} className="flex flex-col gap-4">
                <PostCard post={post} />
                {idx===2 && <InlineLiveStrip />}
                {idx===4 && <InlineCreatorsStrip />}
                {idx===5 && (
                  <div className="xl:hidden rounded-[18px] p-4"
                    style={{ background:'linear-gradient(135deg,rgba(0,255,135,0.06),rgba(0,128,255,0.04))',
                      border:'1px solid rgba(0,255,135,0.12)' }}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <ShoppingBag size={13} style={{ color:'var(--green)' }} />
                      <span className="text-[11px] font-black tracking-widest"
                        style={{ fontFamily:'var(--font-display)', color:'var(--green)' }}>
                        MARKETPLACE COMING SOON
                      </span>
                    </div>
                    <p className="text-[12px]" style={{ color:'#475569' }}>
                      Buy & sell PS5s, GPUs, monitors, controllers & digital deals directly on Lobby.
                    </p>
                  </div>
                )}
              </div>
            ))}

            {/* Skeleton loaders */}
            <div className="flex flex-col gap-4 pb-10">
              {[0,1].map(i => (
                <div key={i} className="rounded-[20px] p-4"
                  style={{ background:'var(--card)', border:'1px solid var(--border)' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-full shimmer" />
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="h-3 rounded-full shimmer" style={{ width:'40%' }} />
                      <div className="h-2.5 rounded-full shimmer" style={{ width:'28%' }} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="h-3 rounded-full shimmer w-full" />
                    <div className="h-3 rounded-full shimmer" style={{ width:'85%' }} />
                    <div className="h-3 rounded-full shimmer" style={{ width:'60%' }} />
                  </div>
                  <div className="rounded-2xl shimmer" style={{ height:160 }} />
                </div>
              ))}
              <p className="text-center text-[11px] font-mono" style={{ color:'#334155' }}>Loading more posts…</p>
            </div>
          </div>

          {/* Right sidebar — xl only */}
          <aside className="hidden xl:flex flex-col gap-4 w-[276px] flex-shrink-0">
            <div className="sticky flex flex-col gap-4 max-h-[calc(100vh-72px)] overflow-y-auto scrollbar-hide pb-4"
              style={{ top:64 }}>
              <TrendingPanel />
              <LivePanel />
              <FollowPanel />
              <AIPanel />
              <MarketplacePanel />
            </div>
          </aside>
        </div>
      </div>
    </AppLayout>
  )
}
