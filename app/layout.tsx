import type { Metadata, Viewport } from 'next'
import { Inter, Cedarville_Cursive } from 'next/font/google'
import './globals.css'
import StarsCanvas from "@/components/main/StarBackground"
import Navbar from '@/components/main/Navbar'
import Footer from '@/components/main/Footer'

const inter = Inter({ subsets: ['latin'] })
const cedarville = Cedarville_Cursive({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-cursive',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'This is my portfolio',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#030014',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${cedarville.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
