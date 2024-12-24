type Testament = 'old' | 'new';

export function getReadingProgress(testament: Testament): { [book: string]: number[] } {
  if (typeof window !== 'undefined') {
    const storageKey = `${testament}TestamentProgress`;
    const storedProgress = localStorage.getItem(storageKey);
    return storedProgress ? JSON.parse(storedProgress) : {};
  }
  return {};
}

export function setReadingProgress(testament: Testament, book: string, chapter: number, isRead: boolean) {
  if (typeof window !== 'undefined') {
    const progress = getReadingProgress(testament);
    if (!progress[book]) {
      progress[book] = [];
    }
    if (isRead) {
      if (!progress[book].includes(chapter)) {
        progress[book].push(chapter);
      }
    } else {
      progress[book] = progress[book].filter((ch: number) => ch !== chapter);
    }
    localStorage.setItem(`${testament}TestamentProgress`, JSON.stringify(progress));
  }
}

export function calculateTestamentProgress(testament: Testament, totalChapters: number): number {
  const progress = getReadingProgress(testament);
  const readChapters = Object.values(progress).flat().length;
  return (readChapters / totalChapters) * 100;
}

export function calculateTotalProgress(oldTestamentChapters: number, newTestamentChapters: number): number {
  const oldProgress = calculateTestamentProgress('old', oldTestamentChapters);
  const newProgress = calculateTestamentProgress('new', newTestamentChapters);
  return (oldProgress + newProgress) / 2;
}

export function getCompletedChapters(testament: Testament): number {
  const progress = getReadingProgress(testament);
  return Object.values(progress).flat().length;
}

export function getCompletedBooks(testament: Testament, books: { name: string; chapters: number }[]): number {
  const progress = getReadingProgress(testament);
  return books.filter(book => progress[book.name]?.length === book.chapters).length;
}

