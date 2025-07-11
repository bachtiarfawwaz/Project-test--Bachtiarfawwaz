"use client"

import { useState } from "react"
import Image from "next/image"

interface Post {
  id: number
  title: string
  content: string
  published_at: string
  slug: string
  small_image: Array<{
    id: number
    mime: string
    file_name: string
    url: string
  }>
  medium_image: Array<{
    id: number
    mime: string
    file_name: string
    url: string
  }>
}

interface PostGridProps {
  posts: Post[]
  loading: boolean
}

function PostCard({ post }: { post: Post }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const imageUrl = post.small_image?.[0]?.url || "/placeholder.svg?height=200&width=300"

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image with consistent aspect ratio */}
      <div className="relative aspect-[4/3] bg-gray-200">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={post.title}
          fill
          className={`object-cover transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-orange-500 rounded-full animate-spin" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-2">{formatDate(post.published_at)}</div>

        {/* Title with 3-line limit and ellipsis */}
        <h3 className="font-semibold text-gray-900 leading-tight">
          <span className="line-clamp-3 block">{post.title}</span>
        </h3>
      </div>
    </div>
  )
}

function LoadingSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-[4/3] bg-gray-200 animate-pulse" />
      <div className="p-4">
        <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-24" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
        </div>
      </div>
    </div>
  )
}

export default function PostGrid({ posts, loading }: PostGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <LoadingSkeleton key={index} />
        ))}
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No posts found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
