import type { Metadata } from 'next'
import { Cinzel, Crimson_Text } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel({ 
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const crimsonText = Crimson_Text({ 
  subsets: ['latin'],
  variable: '--font-crimson',
  display: 'swap',
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: "Oscar's - Klassisk Bar & Lounge",
  description: 'Opplev den fineste gamle skole bar-atmosfæren med premium drikker og klassisk stemning på Oscar\'s.',
  keywords: 'bar, pub, gammel skole, drikker, cocktails, atmosfære, oscars, norsk',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no">
      <body className={`${cinzel.variable} ${crimsonText.variable} font-serif`}>{children}</body>
    </html>
  )
} 