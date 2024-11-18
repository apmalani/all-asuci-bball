import Link from 'next/link'
import { Home } from 'lucide-react'

const timelineEvents = [
  { week: "Week 8, Fall", event: "Submission opens for participating teams." },
  { week: "Week 10, Fall", event: "Submission deadline for participating teams." },
  { week: "Week 1 - 2, Winter", event: "Practice games for participating teams (optional)." },
  { week: "Week 3 - 9, Winter", event: "League games are played." },
  { week: "To be continued...", event: "" }
]

export default function Timeline() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <Link href="/" className="text-blue-800 hover:text-blue-600 transition-colors">
          <Home size={24} />
        </Link>
        <h1 className="text-4xl font-extrabold tracking-tight text-blue-800 flex-grow text-center">League Timeline</h1>
        <div className="w-6"></div>
      </div>
      <div className="relative">
        <div className="absolute left-9 top-0 h-full w-0.5 bg-blue-300"></div>
        {timelineEvents.map((event, index) => (
          <div key={index} className="mb-8 flex items-center">
            <div className="bg-blue-500 rounded-full h-4 w-4 flex items-center justify-center">
              <div className="bg-white rounded-full h-2 w-2"></div>
            </div>
            <div className="ml-6 bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex-grow">
              <h2 className="text-xl font-semibold text-blue-700 mb-2">{event.week}</h2>
              <p className="text-gray-800">{event.event}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}