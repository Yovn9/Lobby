'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Zap, LayoutDashboard, Rss, TrendingUp, PlusSquare,
  Cpu, User, BookmarkCheck, LogOut, Bell, ShoppingBag,
} from 'lucide-react'
import { currentUser } from '@/data/mockData'

const NAV = [
  { href: '/dashboard',    icon: LayoutDashboard, label: 'Dashboard'                   },
  { href: '/feed',         icon: Rss,             label: 'Feed',        dot: true      },
  { href: '/trending',     icon: TrendingUp,      label: 'Trending'                    },
  { href: '/create',       icon: PlusSquare,      label: 'Create Post'                 },
  { href: '/ai-generator', icon: Cpu,             label: 'AI Generator', badge: 'AI'  },
  { href: '/profile',      icon: User,            label: 'Profile'                     },
  { href: '/saved',        icon: BookmarkCheck,   label: 'Saved'                       },
]

export default function Sidebar() {
  const pathname = usePathname()
  return (
    <aside
      className="fixed top-0 left-0 h-screen sidebar-width z-30 flex-col hidden lg:flex"
      style={{ background: 'var(--bg)', borderRight: '1px solid var(--border)' }}>

      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-4" style={{ borderBottom: '1px solid var(--border)' }}>
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, var(--cyan), var(--purple))' }}>
            <Zap size={17} fill="white" className="text-white" />
          </div>
          <span className="text-[18px] font-black tracking-wider" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>LOBBY</span>
        </Link>
        <span className="ml-auto text-[10px] px-2 py-0.5 rounded font-mono font-bold"
          style={{ background: 'rgba(0,238,255,0.08)', color: 'var(--cyan)', border: '1px solid rgba(0,238,255,0.18)' }}>
          BETA
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-3 space-y-0.5 overflow-y-auto">
        {NAV.map(item => {
          const active = pathname === item.href
          return (
            <Link key={item.href} href={item.href}
              className={`relative flex items-center gap-3 px-3 py-3 rounded-xl text-[14px] font-semibold transition-all duration-150 group ${
                active ? '' : 'hover:bg-white/[0.04]'
              }`}
              style={{
                color:       active ? 'var(--cyan)' : 'var(--text-secondary)',
                background:  active ? 'rgba(0,238,255,0.09)' : 'transparent',
                borderLeft:  active ? '2px solid var(--cyan)' : '2px solid transparent',
                paddingLeft: active ? '10px' : '12px',
              }}>
              <item.icon
                size={18}
                style={{ color: active ? 'var(--cyan)' : 'var(--text-faint)', flexShrink: 0 }}
                className="transition-colors group-hover:!text-[var(--text-secondary)]"
              />
              <span className="flex-1 leading-none">{item.label}</span>
              {item.badge && (
                <span className="text-[9px] px-1.5 py-0.5 rounded font-mono font-bold"
                  style={{ background: 'rgba(157,111,247,0.14)', color: 'var(--purple)', border: '1px solid rgba(157,111,247,0.22)' }}>
                  {item.badge}
                </span>
              )}
              {item.dot && !active && (
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'var(--pink)' }} />
              )}
            </Link>
          )
        })}

        {/* Divider */}
        <div className="mx-3 my-3 h-px" style={{ background: 'var(--border)' }} />

        {/* Marketplace soon */}
        <div className="flex items-center gap-3 px-3 py-3 rounded-xl text-[14px] cursor-default"
          style={{ color: 'var(--text-faint)' }}>
          <ShoppingBag size={18} style={{ color: 'var(--text-faint)', flexShrink: 0 }} />
          <span className="flex-1">Marketplace</span>
          <span className="text-[9px] px-1.5 py-0.5 rounded font-mono font-bold"
            style={{ background: 'rgba(255,190,0,0.08)', color: 'var(--amber)', border: '1px solid rgba(255,190,0,0.16)' }}>
            SOON
          </span>
        </div>
      </nav>

      {/* Notifications */}
      <div className="px-3 pb-2">
        <button className="flex items-center gap-3 px-3 py-3 w-full rounded-xl text-[14px] transition-all hover:bg-white/[0.04]"
          style={{ color: 'var(--text-secondary)' }}>
          <Bell size={18} style={{ color: 'var(--text-faint)', flexShrink: 0 }} />
          <span className="flex-1 text-left">Notifications</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold"
            style={{ background: 'rgba(255,51,133,0.12)', color: 'var(--pink)', border: '1px solid rgba(255,51,133,0.2)' }}>
            4
          </span>
        </button>
      </div>

      {/* User footer */}
      <div className="p-3" style={{ borderTop: '1px solid var(--border)' }}>
        <Link href="/profile"
          className="flex items-center gap-3 p-3 rounded-xl transition-all hover:bg-white/[0.04] group mb-1">
          <div className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-black text-black flex-shrink-0"
            style={{ background: `linear-gradient(135deg, ${currentUser.color}, ${currentUser.color}88)` }}>
            {currentUser.initials}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-bold truncate transition-colors"
              style={{ color: 'var(--text-primary)' }}
              onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--cyan)')}
              onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--text-primary)')}>
              {currentUser.username}
            </div>
            <div className="text-[11px] font-mono mt-0.5" style={{ color: 'var(--text-muted)' }}>
              {(currentUser.followers / 1000).toFixed(1)}K followers
            </div>
          </div>
        </Link>
        <button className="flex items-center gap-2.5 px-3 py-2 w-full rounded-lg text-[13px] transition-colors"
          style={{ color: 'var(--text-muted)' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
          <LogOut size={15} /> Sign Out
        </button>
      </div>
    </aside>
  )
}
