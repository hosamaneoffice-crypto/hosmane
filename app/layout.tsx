import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Hosamane Properties | Luxury Real Estate in Bangalore',
  description: 'Experience premium real estate services in Gottigere, Bengaluru. Trusted agency for buying, selling & rental properties with 4.2 star Google rating.',
  keywords: ['real estate', 'bangalore', 'gottigere', 'luxury properties', 'apartments', 'homes', 'rental'],
  openGraph: {
    title: 'Hosamane Properties | Luxury Real Estate in Bangalore',
    description: 'Experience premium real estate services in Gottigere, Bengaluru.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
