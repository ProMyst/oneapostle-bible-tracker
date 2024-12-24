'use client'

import { useState, useEffect } from 'react'

export default function CommunityProgress() {
  const [chaptersRead, setChaptersRead] = useState(0)

  useEffect(() => {
    const simulateChaptersRead = Math.floor(Math.random() * 1000) + 500
    setChaptersRead(simulateChaptersRead)
  }, [])

  return (
    <div className="bg-[#244855] overflow-hidden shadow-lg rounded-lg text-white">
      <div className="px-6 py-5">
        <h2 className="text-2xl font-extrabold mb-4 tracking-tight">Community Progress This Week</h2>
        <p className="text-4xl font-extrabold text-[#E64833]">{chaptersRead} chapters read</p>
        <p className="text-lg font-medium mt-2">Join our community in reading God's Word!</p>
      </div>
    </div>
  )
}

