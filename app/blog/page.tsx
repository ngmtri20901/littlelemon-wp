'use client'

import { useQuery } from '@apollo/client'
import { useState } from 'react'
import client from '@/lib/apolloClient'
import { GET_ALL_POSTS } from '@/api/graphql/posts'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogPage() {
  const { data, loading } = useQuery(GET_ALL_POSTS, {
    client,
  })

  const allPosts = data?.posts?.nodes || []

  const [search, setSearch] = useState('')
  const [visibleCount, setVisibleCount] = useState(6)

  const filteredPosts = allPosts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  )

  const visiblePosts = filteredPosts.slice(0, visibleCount)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Little Lemon Blog</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Explore our Mediterranean journey, events, and culinary stories.
        </p>
      </div>

      {/* 🔍 Search */}
      <div className="mb-8 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search blog titles..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 💀 Skeleton Loading */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="animate-pulse bg-gray-100 h-80 rounded-md"></div>
          ))}
        </div>
      ) : (
        <>
          {/* 📦 Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visiblePosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          {/* 📥 Load More */}
          {visibleCount < filteredPosts.length && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="px-6 py-2 bg-yellow-500 text-yellow-600 hover:underline rounded-md hover:bg-yellow-600 transition"
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

function PostCard({ post }: { post: any }) {
  return (
    <div className="bg-white border rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
      <div className="relative h-56">
        <Image
          src={post.featuredImage?.node?.sourceUrl || '/placeholder.svg'}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <div className="text-xs text-gray-500 mb-1">
          {new Date(post.date).toLocaleDateString()}
        </div>
        <h2 className="text-lg font-bold mb-2">
          <Link href={post.uri} className="text-yellow-600 hover:underline transition">
            {post.title}
          </Link>
        </h2>
        <div
          className="text-gray-700 text-sm line-clamp-2"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        />
        <p className="mt-4 text-xs text-gray-500">
          By {post.author?.node?.name || 'Team Lemon'}
        </p>
      </div>
    </div>
  )
}
