'use client'

import { useEffect, useState } from 'react'
import ProgressChart from '../components/ProgressChart'
import CompletionStats from '../components/CompletionStats'
import { calculateTestamentProgress, calculateTotalProgress, getCompletedChapters, getCompletedBooks } from '../utils/readingProgress'

const OLD_TESTAMENT_CHAPTERS = 929;
const NEW_TESTAMENT_CHAPTERS = 260;
const TOTAL_CHAPTERS = OLD_TESTAMENT_CHAPTERS + NEW_TESTAMENT_CHAPTERS;

const OLD_TESTAMENT_BOOKS = 39;
const NEW_TESTAMENT_BOOKS = 27;
const TOTAL_BOOKS = OLD_TESTAMENT_BOOKS + NEW_TESTAMENT_BOOKS;

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
];

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
];

export default function Stats() {
  const [oldTestamentProgress, setOldTestamentProgress] = useState(0);
  const [newTestamentProgress, setNewTestamentProgress] = useState(0);
  const [totalProgress, setTotalProgress] = useState(0);
  const [oldTestamentChapters, setOldTestamentChapters] = useState(0);
  const [newTestamentChapters, setNewTestamentChapters] = useState(0);
  const [oldTestamentBooksCompleted, setOldTestamentBooksCompleted] = useState(0);
  const [newTestamentBooksCompleted, setNewTestamentBooksCompleted] = useState(0);

  useEffect(() => {
    setOldTestamentProgress(calculateTestamentProgress('old', OLD_TESTAMENT_CHAPTERS));
    setNewTestamentProgress(calculateTestamentProgress('new', NEW_TESTAMENT_CHAPTERS));
    setTotalProgress(calculateTotalProgress(OLD_TESTAMENT_CHAPTERS, NEW_TESTAMENT_CHAPTERS));
    setOldTestamentChapters(getCompletedChapters('old'));
    setNewTestamentChapters(getCompletedChapters('new'));
    setOldTestamentBooksCompleted(getCompletedBooks('old', oldTestamentBooks));
    setNewTestamentBooksCompleted(getCompletedBooks('new', newTestamentBooks));
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-indigo-800 mb-8 text-center">Reading Progress</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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

