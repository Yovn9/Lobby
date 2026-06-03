'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Rss, TrendingUp, PlusSquare, User } from 'lucide-react'

const NAV = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Home'   },
  { href: '/feed',      icon: Rss,             label: 'Feed',   dot: true },
  { href: '/create',    icon: PlusSquare,      label: 'Post',   cta: true },
  { href: '/trending',  icon: TrendingUp,      label: 'Trends'  },
  { href: '/profile',   icon: User,            label: 'Profile' },
]

export default function BottomNav() {
  const pathname = usePathname()
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-30 backdrop-blur-xl"
      style={{ background: 'rgba(4,6,11,0.96)', borderTop: '1px solid var(--border)' }}>
      <div className="flex items-end justify-around px-1 pt-2 pb-[max(14px,env(safe-area-inset-bottom))]">
        {NAV.map(item => {
          const active = pathname === item.href

          if (item.cta) {
            return (
              <Link key={item.href} href={item.href} className="flex flex-col items-center gap-1.5 -mt-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-150 active:scale-90"
                  style={{
                    background: 'linear-gradient(135deg, var(--cyan), var(--blue))',
                    boxShadow: '0 0 24px rgba(0,238,255,0.38)',
                  }}>
                  <item.icon size={24} style={{ color: '#000' }} strokeWidth={2.5} />
                </div>
                <span className="text-[10px] font-mono tracking-wide" style={{ color: 'var(--text-faint)' }}>
                  {item.label}
                </span>
              </Link>
            )
          }

          return (
            <Link key={item.href} href={item.href}
              className="relative flex flex-col items-center gap-1.5 px-3 py-1 rounded-xl transition-all"
              style={{ color: active ? 'var(--cyan)' : 'var(--text-muted)' }}>
              {active && (
                <div className="absolute inset-0 rounded-xl"
                  style={{ background: 'rgba(0,238,255,0.07)', border: '1px solid rgba(0,238,255,0.14)' }} />
              )}
              <div className="relative">
                <item.icon size={22} strokeWidth={active ? 2.5 : 2} />
                {item.dot && !active && (
                  <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full"
                    style={{ background: 'var(--pink)', border: '1.5px solid var(--bg)' }} />
                )}
              </div>
              <span className="text-[10px] font-mono tracking-wide relative z-10">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
