import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-blue-800">Intra-ASUCI Basketball</h1>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/rules" className="px-4 py-2 bg-white text-blue-800 border border-blue-800 rounded hover:bg-blue-100">
            Rules
          </Link>
          <Link href="/teams" className="px-4 py-2 bg-white text-blue-800 border border-blue-800 rounded hover:bg-blue-100">
            Teams
          </Link>
          <Link href="/timeline" className="px-4 py-2 bg-white text-blue-800 border border-blue-800 rounded hover:bg-blue-100">
            Timeline
          </Link>
          <a href="https://forms.google.com/your-form-url" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-700">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  )
}