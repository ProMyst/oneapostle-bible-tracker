'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface BookListProps {
  book: {
    name: string
    chapters: number
  }
  testament: 'old' | 'new'
}

export default function BookList({ book, testament }: BookListProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [completedChapters, setCompletedChapters] = useState(() => {
    if (typeof window === 'undefined') return {}
    const saved = localStorage.getItem(`${testament}TestamentProgress`)
    const progress = saved ? JSON.parse(saved) : {}
    return progress[book.name] || {}
  })

  const toggleChapter = (chapter: number) => {
    const newCompletedChapters = {
      ...completedChapters,
      [chapter]: !completedChapters[chapter]
    }
    setCompletedChapters(newCompletedChapters)

    // Update localStorage
    const saved = localStorage.getItem(`${testament}TestamentProgress`)
    const progress = saved ? JSON.parse(saved) : {}
    progress[book.name] = newCompletedChapters
    localStorage.setItem(`${testament}TestamentProgress`, JSON.stringify(progress))
  }

  return (
    <div className="bg-[#EDE9FE] rounded-lg overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-[#E4E0FB] transition-colors"
      >
        <div>
          <h3 className="text-[#4338CA] font-semibold">{book.name}</h3>
          <p className="text-[#6B7280] text-sm">{book.chapters} chapters</p>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-[#4338CA]" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[#4338CA]" />
        )}
      </button>
      {isExpanded && (
        <div className="p-4 bg-white/50 grid grid-cols-5 gap-2">
          {Array.from({ length: book.chapters }, (_, i) => i + 1).map((chapter) => (
            <button
              key={chapter}
              onClick={() => toggleChapter(chapter)}
              className={`p-2 text-sm font-medium rounded ${
                completedChapters[chapter]
                  ? 'bg-[#4338CA] text-white'
                  : 'bg-white text-[#4338CA] hover:bg-[#EDE9FE]'
              }`}
            >
              {chapter}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

