import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sparkie Neon Junkyard',
  description: 'Cyberpunk neon junkyard WebGL scene by Sparkie Studio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}