interface CompletionStatsProps {
  title: string
  chaptersCompleted: number
  totalChapters: number
  booksCompleted: number
  totalBooks: number
}

export default function CompletionStats({
  title,
  chaptersCompleted,
  totalChapters,
  booksCompleted,
  totalBooks
}: CompletionStatsProps) {
  return (
    <div className="space-y-4">
      <div className="bg-[#EDE9FE] p-4 rounded-lg">
        <h3 className="text-[#4338CA] font-semibold mb-2">{title} Chapters</h3>
        <p className="text-[#4338CA] text-2xl font-bold">
          {chaptersCompleted} <span className="text-[#6B7280] text-lg">/ {totalChapters}</span>
        </p>
      </div>
      <div className="bg-[#EDE9FE] p-4 rounded-lg">
        <h3 className="text-[#4338CA] font-semibold mb-2">{title} Books</h3>
        <p className="text-[#4338CA] text-2xl font-bold">
          {booksCompleted} <span className="text-[#6B7280] text-lg">/ {totalBooks}</span>
        </p>
      </div>
    </div>
  )
}

