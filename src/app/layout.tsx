import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/providers'
import { ThemeScript } from '@/components/theme-script' // New script component

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nirvisha Portfolio',
  description: 'Portfolio showcasing backend development and AI projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}