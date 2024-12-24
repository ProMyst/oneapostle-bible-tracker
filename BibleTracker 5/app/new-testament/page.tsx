'use client'

import { useState } from 'react'
import BibleBook from '../components/BibleBook'
import ChapterList from '../components/ChapterList'

const newTestamentBooks = [
  { name: 'Matthew', chapters: 28 },
  { name: 'Mark', chapters: 16 },
  { name: 'Luke', chapters: 24 },
  { name: 'John', chapters: 21 },
  { name: 'Acts', chapters: 28 },
  { name: 'Romans', chapters: 16 },
  { name: '1 Corinthians', chapters: 16 },
  { name: '2 Corinthians', chapters: 13 },
  { name: 'Galatians', chapters: 6 },
  { name: 'Ephesians', chapters: 6 },
  { name: 'Philippians', chapters: 4 },
  { name: 'Colossians', chapters: 4 },
  { name: '1 Thessalonians', chapters: 5 },
  { name: '2 Thessalonians', chapters: 3 },
  { name: '1 Timothy', chapters: 6 },
  { name: '2 Timothy', chapters: 4 },
  { name: 'Titus', chapters: 3 },
  { name: 'Philemon', chapters: 1 },
  { name: 'Hebrews', chapters: 13 },
  { name: 'James', chapters: 5 },
  { name: '1 Peter', chapters: 5 },
  { name: '2 Peter', chapters: 3 },
  { name: '1 John', chapters: 5 },
  { name: '2 John', chapters: 1 },
  { name: '3 John', chapters: 1 },
  { name: 'Jude', chapters: 1 },
  { name: 'Revelation', chapters: 22 },
]

export default function NewTestament() {
  const [selectedBook, setSelectedBook] = useState<typeof newTestamentBooks[0] | null>(null)

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-indigo-800 mb-8 text-center">New Testament</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3 space-y-3 overflow-y-auto max-h-[calc(100vh-200px)]">
          {newTestamentBooks.map((book) => (
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
              testament="new"
            />
          )}
        </div>
      </div>
    </div>
  )
}

