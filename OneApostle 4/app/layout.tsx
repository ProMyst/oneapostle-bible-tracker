import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

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
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <div className="flex-1 bg-gradient-to-b from-[#FBE9D0] to-white">
          <Navigation />
          <main className="flex-grow p-4">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}

