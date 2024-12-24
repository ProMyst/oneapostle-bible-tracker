interface CompletionStatsProps {
  title: string;
  chaptersCompleted: number;
  totalChapters: number;
  booksCompleted: number;
  totalBooks: number;
}

export default function CompletionStats({
  title,
  chaptersCompleted,
  totalChapters,
  booksCompleted,
  totalBooks,
}: CompletionStatsProps) {
  return (
    <div className="space-y-4 mt-6">
      <div className="bg-[#EDE8F5] rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold text-[#3D52A0] mb-2">{title} Chapters</h3>
        <p className="text-3xl font-bold text-[#3D52A0]">
          {chaptersCompleted} <span className="text-[#8697C4] text-xl">/ {totalChapters}</span>
        </p>
      </div>
      <div className="bg-[#EDE8F5] rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold text-[#3D52A0] mb-2">{title} Books</h3>
        <p className="text-3xl font-bold text-[#3D52A0]">
          {booksCompleted} <span className="text-[#8697C4] text-xl">/ {totalBooks}</span>
        </p>
      </div>
    </div>
  )
}

