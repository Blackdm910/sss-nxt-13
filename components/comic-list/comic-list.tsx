"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { ComicGrid } from "./comic-grid"
import { Pagination } from "./pagination"
import { ComicSkeletonGrid } from "./comic-skeleton-grid"
import { useComics } from "@/hooks/use-comics"

export function ComicList() {
  const searchParams = useSearchParams()
  const page = Number(searchParams.get("page")) || 1
  const query = searchParams.get("q") || ""
  const { comics, isLoading, totalPages } = useComics({ page, query })

  if (isLoading) {
    return <ComicSkeletonGrid />
  }

  if (comics.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">No comics found</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <ComicGrid comics={comics} />
      <Pagination currentPage={page} totalPages={totalPages} />
    </div>
  )
}