import { ComicHeader } from "@/components/comic-detail/comic-header"
import { ComicInfo } from "@/components/comic-detail/comic-info"
import { ChapterList } from "@/components/comic-detail/chapter-list"
import { RelatedComics } from "@/components/comic-detail/related-comics"
import { Separator } from "@/components/ui/separator"
import { getMockComicById } from "@/lib/mock-data"

interface ComicPageProps {
  params: {
    id: string
  }
}

// Generate static paths for all comics at build time
export function generateStaticParams() {
  // In a real application, you would fetch all comic IDs from your data source
  // For now, we'll generate paths for mock comics
  return Array.from({ length: 50 }, (_, i) => ({
    id: `comic-${i + 1}`,
  }))
}

export default function ComicPage({ params }: ComicPageProps) {
  const comic = getMockComicById(params.id)

  if (!comic) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Comic not found</h1>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ComicHeader comic={comic} />
      <Separator className="my-8" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <ComicInfo comic={comic} />
          <ChapterList comic={comic} />
        </div>
        <div className="space-y-8">
          <RelatedComics currentComicId={comic.id} />
        </div>
      </div>
    </div>
  )
}