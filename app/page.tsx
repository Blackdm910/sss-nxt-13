import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp, Clock } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="relative rounded-lg overflow-hidden h-[400px] mb-8">
          <img
            src="https://images.unsplash.com/photo-1588497859490-85d1c17db96d?w=1200&h=400&fit=crop"
            alt="Featured Comic"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 flex items-end p-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Featured: The Epic Journey</h1>
              <p className="text-lg mb-4">Experience the adventure that captivated millions</p>
              <Button>Start Reading</Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="latest" className="space-y-4">
          <TabsList>
            <TabsTrigger value="latest">
              <Clock className="w-4 h-4 mr-2" />
              Latest Updates
            </TabsTrigger>
            <TabsTrigger value="popular">
              <TrendingUp className="w-4 h-4 mr-2" />
              Popular
            </TabsTrigger>
            <TabsTrigger value="top-rated">
              <Star className="w-4 h-4 mr-2" />
              Top Rated
            </TabsTrigger>
          </TabsList>

          <TabsContent value="latest" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i}>
                  <CardHeader className="p-0">
                    <img
                      src={`https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&h=400&fit=crop`}
                      alt={`Comic ${i}`}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg">Comic Title {i}</CardTitle>
                    <CardDescription>Latest: Chapter {Math.floor(Math.random() * 100)}</CardDescription>
                    <div className="flex gap-2 mt-2">
                      <Badge>Action</Badge>
                      <Badge>Adventure</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button variant="secondary" className="w-full">Read Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="popular">
            <ScrollArea className="h-[400px] rounded-md border p-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="flex items-center gap-4 mb-4">
                  <span className="text-2xl font-bold w-8">{i}</span>
                  <img
                    src={`https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=100&h=100&fit=crop`}
                    alt={`Popular Comic ${i}`}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">Popular Comic {i}</h3>
                    <p className="text-sm text-muted-foreground">Views: {Math.floor(Math.random() * 1000000)}</p>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </TabsContent>

          <TabsContent value="top-rated">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="flex overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=200&h=200&fit=crop`}
                    alt={`Top Rated Comic ${i}`}
                    className="w-32 h-auto object-cover"
                  />
                  <div className="p-4">
                    <CardTitle>Top Rated Comic {i}</CardTitle>
                    <div className="flex items-center mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${star <= 4 ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="ml-2 text-sm">4.5/5</span>
                    </div>
                    <Button variant="link" className="mt-2 p-0">Read Now</Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}