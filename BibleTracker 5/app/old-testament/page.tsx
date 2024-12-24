'use client'

import { useState } from 'react'
import BibleBook from '../components/BibleBook'
import ChapterList from '../components/ChapterList'

const oldTestamentBooks = [
  { name: 'Genesis', chapters: 50 },
  { name: 'Exodus', chapters: 40 },
  { name: 'Leviticus', chapters: 27 },
  { name: 'Numbers', chapters: 36 },
  { name: 'Deuteronomy', chapters: 34 },
  { name: 'Joshua', chapters: 24 },
  { name: 'Judges', chapters: 21 },
  { name: 'Ruth', chapters: 4 },
  { name: '1 Samuel', chapters: 31 },
  { name: '2 Samuel', chapters: 24 },
  { name: '1 Kings', chapters: 22 },
  { name: '2 Kings', chapters: 25 },
  { name: '1 Chronicles', chapters: 29 },
  { name: '2 Chronicles', chapters: 36 },
  { name: 'Ezra', chapters: 10 },
  { name: 'Nehemiah', chapters: 13 },
  { name: 'Esther', chapters: 10 },
  { name: 'Job', chapters: 42 },
  { name: 'Psalms', chapters: 150 },
  { name: 'Proverbs', chapters: 31 },
  { name: 'Ecclesiastes', chapters: 12 },
  { name: 'Song of Solomon', chapters: 8 },
  { name: 'Isaiah', chapters: 66 },
  { name: 'Jeremiah', chapters: 52 },
  { name: 'Lamentations', chapters: 5 },
  { name: 'Ezekiel', chapters: 48 },
  { name: 'Daniel', chapters: 12 },
  { name: 'Hosea', chapters: 14 },
  { name: 'Joel', chapters: 3 },
  { name: 'Amos', chapters: 9 },
  { name: 'Obadiah', chapters: 1 },
  { name: 'Jonah', chapters: 4 },
  { name: 'Micah', chapters: 7 },
  { name: 'Nahum', chapters: 3 },
  { name: 'Habakkuk', chapters: 3 },
  { name: 'Zephaniah', chapters: 3 },
  { name: 'Haggai', chapters: 2 },
  { name: 'Zechariah', chapters: 14 },
  { name: 'Malachi', chapters: 4 },
]

export default function OldTestament() {
  const [selectedBook, setSelectedBook] = useState<typeof oldTestamentBooks[0] | null>(null)

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-[#244855] mb-8 text-center">Old Testament</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3 space-y-3 overflow-y-auto max-h-[calc(100vh-200px)]">
          {oldTestamentBooks.map((book) => (
            <BibleBook
              key={book.name}
              name={book.name}
              chapters={book.chapters}
              onSelect={() => setSelectedBook(book)}
              isSelected={selectedBook?.name === book.name}
            />
          ))}
        </div>
        <div className="w-full md:w-2/3">
          {selectedBook && (
            <ChapterList 
              bookName={selectedBook.name} 
              chapters={selectedBook.chapters} 
              testament="old"
            />
          )}
        </div>
      </div>
    </div>
  )
}

