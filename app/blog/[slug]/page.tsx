'use client'

import { useQuery } from '@apollo/client'
import { GET_POST_BY_SLUG } from '@/api/graphql/post-by-slug'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { data, loading, error } = useQuery(GET_POST_BY_SLUG, {
    variables: { slug: params.slug }, // Sử dụng đúng slug từ params
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  const post = data?.post

  if (!post) notFound() // Nếu không có post, chuyển đến trang không tìm thấy

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/blog"
        className="inline-flex items-center text-lemon-600 hover:text-lemon-700 mb-8"
      >
        <ArrowLeft size={16} className="mr-2" />
        Back to all articles
      </Link>

      <article className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-sm text-gray-500 flex gap-4">
            <span>📅 {new Date(post.date).toLocaleDateString()}</span>
            {post.categories?.nodes?.[0]?.name && (
              <span>📂 {post.categories.nodes[0].name}</span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <Image
            src={post.author?.node?.avatar?.url || '/placeholder.svg'}
            alt={post.author?.node?.name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <p className="font-medium">{post.author?.node?.name}</p>
            <p className="text-sm text-gray-500">Author</p>
          </div>
        </div>

        {post.featuredImage?.node?.sourceUrl && (
          <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  )
}
