import Sidebar from '@/components/layout/Sidebar'
import BottomNav from '@/components/layout/BottomNav'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#080B11]">
      <div className="bg-grid fixed inset-0 z-0 pointer-events-none opacity-60" />
      <Sidebar />
      <main className="main-with-sidebar pb-20 lg:pb-8 relative z-10">
        {children}
      </main>
      <BottomNav />
    </div>
  )
}
