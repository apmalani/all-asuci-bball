import Link from 'next/link'
import { Home } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const teams = [
  { 
    id: 1, 
    name: 'filler', 
    captain: 'filler', 
    wins: 0, 
    losses: 0,
    players: ['filler', 'filler', 'filler', 'filler', 'filler']
  },
  { 
    id: 2, 
    name: 'filler', 
    captain: 'filler', 
    wins: 0, 
    losses: 0,
    players: ['filler', 'filler', 'filler', 'filler', 'filler']
  },
  { 
    id: 3, 
    name: 'filler', 
    captain: 'filler', 
    wins: 0, 
    losses: 0,
    players: ['filler', 'filler', 'filler', 'filler', 'filler']
  },
  { 
    id: 4, 
    name: 'filler', 
    captain: 'filler', 
    wins: 0, 
    losses: 0,
    players: ['filler', 'filler', 'filler', 'filler', 'filler']
  },
  { 
    id: 5, 
    name: 'filler', 
    captain: 'filler', 
    wins: 0, 
    losses: 0,
    players: ['filler', 'filler', 'filler', 'filler', 'filler']
  },
  { 
    id: 6, 
    name: 'filler', 
    captain: 'filler', 
    wins: 0, 
    losses: 0,
    players: ['filler', 'filler', 'filler', 'filler', 'filler']
  },
]

export default function Teams() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="flex items-center justify-between mb-8">
        <Link href="/" className="text-blue-800 hover:text-blue-600 transition-colors">
          <Home size={24} />
        </Link>
        <h1 className="text-4xl font-extrabold tracking-tight text-blue-800 flex-grow text-center">Participating Teams</h1>
        <div className="w-6"></div> {/* This empty div balances the layout */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map(team => (
          <Card key={team.id} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="bg-blue-100">
              <CardTitle className="text-xl font-bold text-blue-800">{team.name}</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-2">
                <p><span className="font-semibold text-blue-700">Captain:</span> {team.captain}</p>
                <p><span className="font-semibold text-blue-700">Record:</span> {team.wins}W - {team.losses}L</p>
                <div>
                  <p className="font-semibold text-blue-700 mb-1">Players:</p>
                  <ul className="list-disc list-inside">
                    {team.players.map((player, index) => (
                      <li key={index} className="text-sm">{player}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}