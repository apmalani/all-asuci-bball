import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-blue-800">Intra-ASUCI Basketball</h1>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/rules">
            <Button variant="outline">Rules</Button>
          </Link>
          <Link href="/teams">
            <Button variant="outline">Teams</Button>
          </Link>
          <a href="https://forms.google.com/your-form-url" target="_blank" rel="noopener noreferrer">
            <Button>Sign Up</Button>
          </a>
        </div>
      </div>
    </div>
  )
}