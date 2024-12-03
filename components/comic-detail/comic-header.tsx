"use client"

import { Comic } from "@/types"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Bookmark, Star, Eye } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

interface ComicHeaderProps {
  comic: Comic
}

export function ComicHeader({ comic }: ComicHeaderProps) {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const { toast } = useToast()

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
    toast({
      title: isBookmarked ? "Removed from bookmarks" : "Added to bookmarks",
      description: isBookmarked ? "Comic has been removed from your bookmarks" : "Comic has been added to your bookmarks",
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] gap-8">
      <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
        <img
          src={comic.coverImage}
          alt={comic.title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between">
            <h1 className="text-4xl font-bold">{comic.title}</h1>
            <Button
              variant={isBookmarked ? "default" : "outline"}
              size="icon"
              onClick={handleBookmark}
            >
              <Bookmark className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <Badge variant="outline" className="text-sm">
              {comic.status}
            </Badge>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span>{comic.rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span>{comic.views.toLocaleString()} views</span>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="font-semibold mb-2">Created by</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Author</p>
                <p>{comic.author}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Artist</p>
                <p>{comic.artist}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mt-8">
          <Button className="flex-1 sm:flex-none">
            <BookOpen className="mr-2 h-4 w-4" />
            Start Reading
          </Button>
          <Button variant="outline" className="flex-1 sm:flex-none">
            Continue Chapter 5
          </Button>
        </div>
      </div>
    </div>
  )
}