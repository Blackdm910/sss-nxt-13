import { Comic } from "@/types"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ComicGridProps {
  comics: Comic[]
}

export function ComicGrid({ comics }: ComicGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {comics.map((comic) => (
        <Card key={comic.id} className="flex flex-col">
          <CardHeader className="p-0">
            <div className="aspect-[3/4] relative">
              <img
                src={comic.coverImage}
                alt={comic.title}
                className="object-cover w-full h-full rounded-t-lg"
              />
              <Badge className="absolute top-2 right-2">{comic.status}</Badge>
            </div>
          </CardHeader>
          <CardContent className="flex-1 p-4">
            <CardTitle className="line-clamp-1">{comic.title}</CardTitle>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
              {comic.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {comic.genres.slice(0, 2).map((genre) => (
                <Badge key={genre} variant="secondary">
                  {genre}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Link href={`/comics/${comic.id}`} className="w-full">
              <Button className="w-full">Read Now</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}