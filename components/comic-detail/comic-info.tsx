import { Comic } from "@/types"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface ComicInfoProps {
  comic: Comic
}

export function ComicInfo({ comic }: ComicInfoProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="text-muted-foreground whitespace-pre-line">
          {comic.description}
        </p>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Genres</h2>
        <div className="flex flex-wrap gap-2">
          {comic.genres.map((genre) => (
            <Link key={genre} href={`/comics?genre=${genre}`}>
              <Badge variant="secondary" className="hover:bg-secondary/80">
                {genre}
              </Badge>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}