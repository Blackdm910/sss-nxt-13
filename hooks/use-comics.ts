"use client"

import { useState, useEffect } from "react"
import { Comic } from "@/types"

interface UseComicsProps {
  page: number
  query: string
}

interface UseComicsReturn {
  comics: Comic[]
  isLoading: boolean
  totalPages: number
}

// Simulated comic data for demonstration
const MOCK_COMICS: Comic[] = Array.from({ length: 50 }, (_, i) => ({
  id: `comic-${i + 1}`,
  title: `Comic Title ${i + 1}`,
  description: "An epic adventure that will take you on a journey through time and space...",
  coverImage: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&h=400&fit=crop",
  author: "Author Name",
  artist: "Artist Name",
  status: i % 2 === 0 ? "ongoing" : "completed",
  genres: ["Action", "Adventure", "Fantasy"],
  chapters: [],
  rating: 4.5,
  views: 1000,
  createdAt: new Date(),
  updatedAt: new Date(),
}))

export function useComics({ page, query }: UseComicsProps): UseComicsReturn {
  const [isLoading, setIsLoading] = useState(true)
  const [comics, setComics] = useState<Comic[]>([])
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    async function fetchComics() {
      setIsLoading(true)
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Filter comics based on search query
      let filteredComics = MOCK_COMICS
      if (query) {
        filteredComics = MOCK_COMICS.filter(comic => 
          comic.title.toLowerCase().includes(query.toLowerCase())
        )
      }

      // Calculate pagination
      const ITEMS_PER_PAGE = 12
      const start = (page - 1) * ITEMS_PER_PAGE
      const end = start + ITEMS_PER_PAGE
      const paginatedComics = filteredComics.slice(start, end)

      setComics(paginatedComics)
      setTotalPages(Math.ceil(filteredComics.length / ITEMS_PER_PAGE))
      setIsLoading(false)
    }

    fetchComics()
  }, [page, query])

  return { comics, isLoading, totalPages }
}