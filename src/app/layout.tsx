import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

const inter = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Splice',
  description: 'coding by radthpon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
        <main>
            {children}
        </main>
        </body>
    </html>
  )
}
