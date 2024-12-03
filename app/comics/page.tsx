import { ComicList } from "@/components/comic-list/comic-list"
import { SearchBar } from "@/components/comic-list/search-bar"

export default function ComicsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Browse Comics</h1>
      <SearchBar />
      <ComicList />
    </div>
  )
}