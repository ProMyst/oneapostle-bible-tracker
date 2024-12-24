import VerseOfTheDay from './components/VerseOfTheDay'
import MissionStatement from './components/MissionStatement'
import CommunityProgress from './components/CommunityProgress'
import UsageGuide from './components/UsageGuide'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-5xl font-extrabold text-[#244855] mb-6 tracking-tight">
          Welcome to OneApostle
        </h1>
        <UsageGuide />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VerseOfTheDay />
          <MissionStatement />
        </div>
        <div className="mt-8">
          <CommunityProgress />
        </div>
      </div>
    </div>
  )
}

