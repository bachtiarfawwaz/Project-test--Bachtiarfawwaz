"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Header from "@/components/header"
import Banner from "@/components/banner"
import PostGrid from "@/components/post-grid"
import Pagination from "@/components/pagination"

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

interface ApiResponse {
  data: Post[]
  meta: {
    current_page: number
    last_page: number
    per_page: number
    total: number
  }
}

export default function IdeasPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const [sortBy, setSortBy] = useState("-published_at")
  const [totalPages, setTotalPages] = useState(1)
  const [totalItems, setTotalItems] = useState(0)

  // Initialize state from URL params
  useEffect(() => {
    const page = Number.parseInt(searchParams.get("page") || "1")
    const size = Number.parseInt(searchParams.get("size") || "10")
    const sort = searchParams.get("sort") || "-published_at"

    setCurrentPage(page)
    setPerPage(size)
    setSortBy(sort)
  }, [searchParams])

  // Update URL when state changes
  const updateURL = (page: number, size: number, sort: string) => {
    const params = new URLSearchParams()
    params.set("page", page.toString())
    params.set("size", size.toString())
    params.set("sort", sort)
    router.push(`/?${params.toString()}`, { scroll: false })
  }

  // Fetch posts from API
  const fetchPosts = async (page: number, size: number, sort: string) => {
    setLoading(true)
    try {
      const response = await fetch(
        `/api/ideas?page[number]=${page}&page[size]=${size}&append[]=small_image&append[]=medium_image&sort=${sort}`,
      )
      const data: ApiResponse = await response.json()

      setPosts(data.data)
      setTotalPages(data.meta.last_page)
      setTotalItems(data.meta.total)
    } catch (error) {
      console.error("Error fetching posts:", error)
    } finally {
      setLoading(false)
    }
  }

  // Fetch posts when parameters change
  useEffect(() => {
    fetchPosts(currentPage, perPage, sortBy)
  }, [currentPage, perPage, sortBy])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    updateURL(page, perPage, sortBy)
  }

  const handlePerPageChange = (size: number) => {
    setPerPage(size)
    setCurrentPage(1)
    updateURL(1, size, sortBy)
  }

  const handleSortChange = (sort: string) => {
    setSortBy(sort)
    setCurrentPage(1)
    updateURL(1, perPage, sort)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Banner />

      <main className="container mx-auto px-4 py-8">
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="text-sm text-gray-600">
            Showing {(currentPage - 1) * perPage + 1} - {Math.min(currentPage * perPage, totalItems)} of {totalItems}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Show per page:</span>
              <select
                value={perPage}
                onChange={(e) => handlePerPageChange(Number.parseInt(e.target.value))}
                className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="-published_at">Newest</option>
                <option value="published_at">Oldest</option>
              </select>
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <PostGrid posts={posts} loading={loading} />

        {/* Pagination */}
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </main>
    </div>
  )
}
