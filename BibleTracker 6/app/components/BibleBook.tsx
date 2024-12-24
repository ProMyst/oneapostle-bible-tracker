interface BibleBookProps {
  name: string;
  chapters: number;
  onSelect: () => void;
  isSelected: boolean;
}

export default function BibleBook({ name, chapters, onSelect, isSelected }: BibleBookProps) {
  return (
    <button
      onClick={onSelect}
      className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
        isSelected
          ? 'bg-[#E64833] text-white'
          : 'bg-[#90AEAD]/20 text-[#244855] hover:bg-[#90AEAD]/40'
      }`}
    >
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className={`text-sm ${isSelected ? 'text-[#FBE9D0]' : 'text-[#244855]/70'}`}>
        {chapters} chapters
      </p>
    </button>
  )
}

