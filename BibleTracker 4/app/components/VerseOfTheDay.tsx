'use client'

import { useState, useEffect } from 'react'

const verses = [
  { text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", reference: "John 3:16" },
  { text: "I can do all this through him who gives me strength.", reference: "Philippians 4:13" },
  { text: "Trust in the LORD with all your heart and lean not on your own understanding.", reference: "Proverbs 3:5" },
]

export default function VerseOfTheDay() {
  const [verse, setVerse] = useState(verses[0])

  useEffect(() => {
    const today = new Date().toDateString()
    const storedDate = localStorage.getItem('verseDate')
    
    if (storedDate !== today) {
      const randomVerse = verses[Math.floor(Math.random() * verses.length)]
      setVerse(randomVerse)
      localStorage.setItem('verseDate', today)
      localStorage.setItem('verse', JSON.stringify(randomVerse))
    } else {
      const storedVerse = JSON.parse(localStorage.getItem('verse') || '{}')
      setVerse(storedVerse)
    }
  }, [])

  return (
    <div className="bg-[#244855] overflow-hidden shadow-lg rounded-lg text-white">
      <div className="px-6 py-5">
        <h2 className="text-2xl font-extrabold mb-4 tracking-tight">Verse of the Day</h2>
        <p className="text-lg font-medium mb-4 leading-relaxed">{verse.text}</p>
        <p className="text-sm font-bold text-[#90AEAD]">{verse.reference}</p>
      </div>
    </div>
  )
}

