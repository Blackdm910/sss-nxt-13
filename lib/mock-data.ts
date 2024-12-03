import { Comic } from "@/types"

const MOCK_CHAPTERS = Array.from({ length: 10 }, (_, i) => ({
  id: `chapter-${i + 1}`,
  comicId: "comic-1",
  number: i + 1,
  title: `Chapter ${i + 1}: The Beginning`,
  pages: [],
  createdAt: new Date(Date.now() - i * 24 * 60 * 60 * 1000),
}))

export function getMockComicById(id: string): Comic | null {
  return {
    id,
    title: "The Epic Journey",
    description: `In a world where magic and technology collide, follow the extraordinary adventure of our heroes as they navigate through dangerous territories and face powerful adversaries.

Their journey will test not only their strength and courage but also their bonds of friendship and loyalty. As ancient prophecies unfold and dark forces emerge, the fate of their world hangs in the balance.

Will they rise to the challenge and fulfill their destiny? Only time will tell in this epic saga of courage, friendship, and determination.`,
    coverImage: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=600&h=800&fit=crop",
    author: "Sarah Johnson",
    artist: "Michael Chen",
    status: "ongoing",
    genres: ["Action", "Adventure", "Fantasy", "Drama", "Mystery"],
    chapters: MOCK_CHAPTERS,
    rating: 4.8,
    views: 1250000,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
}

export function getMockRelatedComics(currentId: string): Comic[] {
  return Array.from({ length: 3 }, (_, i) => ({
    id: `related-${i + 1}`,
    title: `Related Comic ${i + 1}`,
    description: "Another exciting adventure awaits in this thrilling series...",
    coverImage: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=300&fit=crop",
    author: "Author Name",
    artist: "Artist Name",
    status: i % 2 === 0 ? "ongoing" : "completed",
    genres: ["Action", "Adventure"],
    chapters: [],
    rating: 4.5,
    views: 1000,
    createdAt: new Date(),
    updatedAt: new Date(),
  }))
}