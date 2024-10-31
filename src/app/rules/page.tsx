import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Rules() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">League Rules</h1>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Games are played 5-on-5</li>
        <li>Each game consists of four 10-minute quarters</li>
        <li>Shot clock is 24 seconds</li>
        <li>Teams are allowed 2 timeouts per half</li>
        <li>Fouls result in free throws after the 5th team foul in a quarter</li>
        <li>Players foul out after 5 personal fouls</li>
        <li>Tiebreakers are decided by head-to-head record, then point differential</li>
      </ul>
      <Link href="/">
        <Button variant="outline">Back to Home</Button>
      </Link>
    </div>
  )
}