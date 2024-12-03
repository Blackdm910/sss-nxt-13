export interface Comic {
  id: string
  title: string
  description: string
  coverImage: string
  author: string
  artist: string
  status: 'ongoing' | 'completed'
  genres: string[]
  chapters: Chapter[]
  rating: number
  views: number
  createdAt: Date
  updatedAt: Date
}

export interface Chapter {
  id: string
  comicId: string
  number: number
  title: string
  pages: Page[]
  createdAt: Date
}

export interface Page {
  id: string
  chapterId: string
  number: number
  imageUrl: string
}

export interface User {
  id: string
  name: string
  email: string
  bookmarks: string[] // Comic IDs
  readingHistory: ReadingHistory[]
}

export interface ReadingHistory {
  comicId: string
  chapterId: string
  pageNumber: number
  timestamp: Date
}