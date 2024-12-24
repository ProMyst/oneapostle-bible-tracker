import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OneApostle',
  description: 'Track your Bible reading progress',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#FBE9D0]`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}

