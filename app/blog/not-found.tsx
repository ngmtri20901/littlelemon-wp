import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogNotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">The article you're looking for doesn't exist or has been moved.</p>
      <Button asChild className="bg-lemon-600 hover:bg-lemon-700">
        <Link href="/blog">Return to Blog</Link>
      </Button>
    </div>
  )
}
