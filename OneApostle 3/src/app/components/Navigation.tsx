'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Old Testament', href: '/old-testament' },
  { name: 'New Testament', href: '/new-testament' },
  { name: 'Stats', href: '/stats' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-[#244855] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center py-6">
          <div className="inline-flex p-1 space-x-3 bg-[#90AEAD]/20 rounded-full backdrop-blur-sm">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? 'bg-[#E64833] text-white'
                    : 'text-[#FBE9D0] hover:bg-[#90AEAD]/50'
                } px-6 py-2.5 rounded-full text-lg font-bold transition-all duration-200 transform hover:scale-105`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

