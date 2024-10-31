import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const teams = [
  { 
    id: 1, 
    name: 'Slam Dunkers', 
    captain: 'John Doe', 
    wins: 5, 
    losses: 2,
    players: ['John Doe', 'Jane Smith', 'Mike Johnson', 'Emily Brown', 'Chris Lee']
  },
  { 
    id: 2, 
    name: 'Three-Point Masters', 
    captain: 'Jane Smith', 
    wins: 4, 
    losses: 3,
    players: ['Jane Smith', 'Tom Wilson', 'Sarah Davis', 'Alex Turner', 'Olivia White']
  },
  { 
    id: 3, 
    name: 'Rebound Kings', 
    captain: 'Mike Johnson', 
    wins: 6, 
    losses: 1,
    players: ['Mike Johnson', 'Lisa Chen', 'David Park', 'Emma Taylor', 'Ryan Nelson']
  },
  { 
    id: 4, 
    name: 'Fast Break Fury', 
    captain: 'Sarah Williams', 
    wins: 3, 
    losses: 4,
    players: ['Sarah Williams', 'Kevin Brown', 'Rachel Kim', 'Jason Lee', 'Sophia Rodriguez']
  },
]

export default function Teams() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl mb-8 text-center">Participating Teams</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map(team => (
          <Card key={team.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardTitle className="text-xl font-bold">{team.name}</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-2">
                <p><span className="font-semibold">Captain:</span> {team.captain}</p>
                <p><span className="font-semibold">Record:</span> {team.wins}W - {team.losses}L</p>
                <div>
                  <p className="font-semibold mb-1">Players:</p>
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
      <div className="mt-8 text-center">
        <Link href="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </div>
    </div>
  )
}