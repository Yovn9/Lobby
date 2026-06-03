import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lobby — The Social Platform for Gamers',
  description: 'The social platform built for gamers, creators, and gaming culture.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-lobby-bg text-lobby-text antialiased" style={{fontFamily: "var(--font-body)"}}>
        {children}
      </body>
    </html>
  )
}
