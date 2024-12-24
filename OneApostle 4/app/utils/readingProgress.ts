export function calculateTestamentProgress(testament: 'old' | 'new', totalChapters: number): number {
  const completedChapters = getCompletedChapters(testament)
  return (completedChapters / totalChapters) * 100
}

export function calculateTotalProgress(oldTestamentChapters: number, newTestamentChapters: number): number {
  const oldCompleted = getCompletedChapters('old')
  const newCompleted = getCompletedChapters('new')
  const totalCompleted = oldCompleted + newCompleted
  const totalChapters = oldTestamentChapters + newTestamentChapters
  return (totalCompleted / totalChapters) * 100
}

export function getCompletedChapters(testament: 'old' | 'new'): number {
  if (typeof window === 'undefined') return 0
  
  const completedChapters = JSON.parse(localStorage.getItem(`${testament}TestamentProgress`) || '{}')
  return Object.values(completedChapters).reduce((acc: number, bookProgress: any) => 
    acc + Object.values(bookProgress).filter(isCompleted => isCompleted).length
  , 0)
}

export function getCompletedBooks(testament: 'old' | 'new'): number {
  if (typeof window === 'undefined') return 0
  
  const completedChapters = JSON.parse(localStorage.getItem(`${testament}TestamentProgress`) || '{}')
  return Object.values(completedChapters).filter((bookProgress: any) => 
    Object.values(bookProgress).every(isCompleted => isCompleted)
  ).length
}

