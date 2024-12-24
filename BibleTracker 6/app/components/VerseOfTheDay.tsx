export default function VerseOfTheDay() {
  const verse = {
    text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    reference: "John 3:16"
  }

  return (
    <div className="bg-[#244855] overflow-hidden shadow-lg rounded-lg text-white">
      <div className="px-6 py-5">
        <h2 className="text-2xl font-extrabold mb-4 tracking-tight">Verse of the Day</h2>
        <p className="text-lg font-medium mb-4 leading-relaxed">{verse.text}</p>
        <p className="text-sm font-bold text-[#90AEAD]">{verse.reference}</p>
      </div>
    </div>
  )
}

