import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import type { Review } from "@/lib/menu-data"
import { formatDate } from "@/lib/utils"

interface ReviewListProps {
  reviews: Review[]
}

export function ReviewList({ reviews }: ReviewListProps) {
  if (reviews.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No reviews yet. Be the first to review this dish!</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <Card key={review.id}>
          <CardContent className="pt-6">
            <div className="flex items-start">
              <Image
                src={review.userAvatar || "/placeholder.svg"}
                alt={review.userName}
                width={40}
                height={40}
                className="rounded-full mr-4"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{review.userName}</h4>
                  <span className="text-sm text-gray-500">{formatDate(review.date)}</span>
                </div>
                <div className="flex items-center mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
