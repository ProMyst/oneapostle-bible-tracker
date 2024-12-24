'use client'

import { useEffect, useState } from 'react'
import ProgressChart from '../components/ProgressChart'
import CompletionStats from '../components/CompletionStats'
import { calculateTestamentProgress, calculateTotalProgress, getCompletedChapters, getCompletedBooks } from '../utils/readingProgress'

const OLD_TESTAMENT_CHAPTERS = 929
const NEW_TESTAMENT_CHAPTERS = 260
const TOTAL_CHAPTERS = OLD_TESTAMENT_CHAPTERS + NEW_TESTAMENT_CHAPTERS

const OLD_TESTAMENT_BOOKS = 39
const NEW_TESTAMENT_BOOKS = 27
const TOTAL_BOOKS = OLD_TESTAMENT_BOOKS + NEW_TESTAMENT_BOOKS

export default function Stats() {
  const [oldTestamentProgress, setOldTestamentProgress] = useState(0)
  const [newTestamentProgress, setNewTestamentProgress] = useState(0)
  const [totalProgress, setTotalProgress] = useState(0)
  const [oldTestamentChapters, setOldTestamentChapters] = useState(0)
  const [newTestamentChapters, setNewTestamentChapters] = useState(0)
  const [oldTestamentBooksCompleted, setOldTestamentBooksCompleted] = useState(0)
  const [newTestamentBooksCompleted, setNewTestamentBooksCompleted] = useState(0)

  useEffect(() => {
    setOldTestamentProgress(calculateTestamentProgress('old', OLD_TESTAMENT_CHAPTERS))
    setNewTestamentProgress(calculateTestamentProgress('new', NEW_TESTAMENT_CHAPTERS))
    setTotalProgress(calculateTotalProgress(OLD_TESTAMENT_CHAPTERS, NEW_TESTAMENT_CHAPTERS))
    setOldTestamentChapters(getCompletedChapters('old'))
    setNewTestamentChapters(getCompletedChapters('new'))
    setOldTestamentBooksCompleted(getCompletedBooks('old'))
    setNewTestamentBooksCompleted(getCompletedBooks('new'))
  }, [])

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-[#4338CA] mb-8 text-center">Reading Progress</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <ProgressChart progress={oldTestamentProgress} title="Old Testament" />
          <CompletionStats
            title="Old Testament"
            chaptersCompleted={oldTestamentChapters}
            totalChapters={OLD_TESTAMENT_CHAPTERS}
            booksCompleted={oldTestamentBooksCompleted}
            totalBooks={OLD_TESTAMENT_BOOKS}
          />
        </div>
        <div>
          <ProgressChart progress={newTestamentProgress} title="New Testament" />
          <CompletionStats
            title="New Testament"
            chaptersCompleted={newTestamentChapters}
            totalChapters={NEW_TESTAMENT_CHAPTERS}
            booksCompleted={newTestamentBooksCompleted}
            totalBooks={NEW_TESTAMENT_BOOKS}
          />
        </div>
        <div>
          <ProgressChart progress={totalProgress} title="Whole Bible" />
          <CompletionStats
            title="Whole Bible"
            chaptersCompleted={oldTestamentChapters + newTestamentChapters}
            totalChapters={TOTAL_CHAPTERS}
            booksCompleted={oldTestamentBooksCompleted + newTestamentBooksCompleted}
            totalBooks={TOTAL_BOOKS}
          />
        </div>
      </div>
    </div>
  )
}

