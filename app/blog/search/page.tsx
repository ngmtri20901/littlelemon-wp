import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { searchPosts, categories } from "@/lib/blog-data"
import { SearchBar } from "../search-bar"
import { formatDate } from "@/lib/utils"
import { ArrowLeft } from "lucide-react"

interface SearchPageProps {
  searchParams: {
    q: string
  }
}

export function generateMetadata({ searchParams }: SearchPageProps): Metadata {
  return {
    title: `Search: ${searchParams.q || "All Articles"} | Little Lemon Blog`,
    description: `Search results for "${searchParams.q || ""}" on Little Lemon Blog.`,
  }
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || ""
  const posts = query ? searchPosts(query) : []

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/blog" className="inline-flex items-center text-lemon-600 hover:text-lemon-700 mb-8">
        <ArrowLeft size={16} className="mr-2" />
        Back to all articles
      </Link>

      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Search Results</h1>
        {query && <p className="text-lg text-gray-600 max-w-2xl mx-auto">Showing results for "{query}"</p>}
      </div>

      <div className="mb-8">
        <SearchBar />
      </div>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-xs font-medium bg-lemon-100 text-lemon-800 px-2 py-1 rounded-full">
                    {categories.find((c) => c.id === post.category)?.name}
                  </span>
                  <span className="text-sm text-gray-500 ml-2">{formatDate(post.publishedAt)}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-lemon-600 transition">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-lemon-600 font-medium hover:underline">
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">
            {query
              ? `No articles found matching "${query}". Try a different search term.`
              : "Enter a search term to find articles."}
          </p>
        </div>
      )}
    </div>
  )
}
