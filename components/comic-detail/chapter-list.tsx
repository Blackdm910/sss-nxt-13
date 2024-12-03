"use client"

import { Comic } from "@/types"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Eye, Calendar } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import Link from "next/link"

interface ChapterListProps {
  comic: Comic
}

export function ChapterList({ comic }: ChapterListProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Chapters</h2>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Chapter</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="text-right">Views</TableHead>
              <TableHead className="text-right">Released</TableHead>
              <TableHead className="w-[100px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comic.chapters.map((chapter) => (
              <TableRow key={chapter.id}>
                <TableCell className="font-medium">
                  Chapter {chapter.number}
                </TableCell>
                <TableCell>{chapter.title}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Eye className="h-4 w-4 text-muted-foreground" />
                    <span>1.2K</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {formatDistanceToNow(chapter.createdAt, { addSuffix: true })}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Link href={`/reader/${comic.id}/${chapter.id}`}>
                    <Button variant="ghost" size="sm">
                      Read
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}