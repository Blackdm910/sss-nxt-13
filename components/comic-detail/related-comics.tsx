import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { getMockRelatedComics } from "@/lib/mock-data"

interface RelatedComicsProps {
  currentComicId: string
}

export function RelatedComics({ currentComicId }: RelatedComicsProps) {
  const relatedComics = getMockRelatedComics(currentComicId)

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">You May Also Like</h2>
      <div className="space-y-4">
        {relatedComics.map((comic) => (
          <Link key={comic.id} href={`/comics/${comic.id}`}>
            <Card className="hover:bg-muted/50 transition-colors">
              <CardHeader className="p-0">
                <div className="aspect-[16/9] relative">
                  <img
                    src={comic.coverImage}
                    alt={comic.title}
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                  <Badge className="absolute top-2 right-2">
                    {comic.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-semibold line-clamp-1">{comic.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                  {comic.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}