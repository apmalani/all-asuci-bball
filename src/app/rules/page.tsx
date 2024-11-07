import Link from 'next/link'
import { Home } from 'lucide-react'

export default function Rules() {
  const rules = [
    { title: "Team Composition", description: "Teams may consist of no less than six players and no more than 8 players." },
    { title: "Game Attendance", description: "At least five players must show up to each game or be subject to forfeiture." },
    { title: "Gender Balance", description: "Teams may have at most three players of the same gender on the court at any one time." },
    { title: "Team Eligibility", description: "Teams must consist of individuals employed entirely in one AS office." },
    { title: "Multiple Teams", description: "The same office may field multiple teams." },
    { title: "Player Exclusivity", description: "Players may not play on multiple teams." },
    { title: "Game Duration", description: "Games will consist of two fifteen minute halves with a halftime of five minutes." },
    { title: "Stoppages", description: "Substitutions may take place at any dead ball. Teams will have two timeouts per half." },
    { title: "Fouls", description: "Call your own fouls – don't be a dick!" },
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="flex items-center justify-between mb-8">
        <Link href="/" className="text-blue-800 hover:text-blue-600 transition-colors">
          <Home size={24} />
        </Link>
        <h1 className="text-4xl font-extrabold tracking-tight text-blue-800 flex-grow text-center">League Rules</h1>
        <div className="w-6"></div> {/* This empty div balances the layout */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rules.map((rule, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{rule.title}</h2>
            <p className="text-gray-800">{rule.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}