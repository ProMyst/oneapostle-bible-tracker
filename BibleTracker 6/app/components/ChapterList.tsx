'use client'

import { useState, useEffect } from 'react'
import { getReadingProgress, setReadingProgress } from '../utils/readingProgress'

interface ChapterListProps {
  bookName: string;
  chapters: number;
  testament: 'old' | 'new';
}

export default function ChapterList({ bookName, chapters, testament }: ChapterListProps) {
  const [readChapters, setReadChapters] = useState<number[]>([]);

  useEffect(() => {
    const progress = getReadingProgress(testament);
    setReadChapters(progress[bookName] || []);
  }, [bookName, testament]);

  const toggleChapter = (chapter: number) => {
    const isRead = readChapters.includes(chapter);
    setReadingProgress(testament, bookName, chapter, !isRead);
    setReadChapters(prev => 
      isRead ? prev.filter(ch => ch !== chapter) : [...prev, chapter]
    );
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold text-[#244855] mb-4">{bookName}</h2>
      <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-3">
        {Array.from({ length: chapters }, (_, i) => (
          <button
            key={i}
            onClick={() => toggleChapter(i + 1)}
            className={`py-2 px-3 rounded-lg transition-colors duration-200 ${
              readChapters.includes(i + 1)
                ? 'bg-[#E64833] text-white hover:bg-[#874F41]'
                : 'bg-[#90AEAD]/20 text-[#244855] hover:bg-[#90AEAD]/40'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

