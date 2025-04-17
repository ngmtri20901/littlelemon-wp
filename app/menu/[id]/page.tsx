import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getMenuItemById } from "@/lib/menu-data"
import { AddToCartButton } from "./add-to-cart-button"
import { ReviewList } from "./review-list"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Star } from "lucide-react"

interface MenuItemPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: MenuItemPageProps): Promise<Metadata> {
  const menuItem = getMenuItemById(params.id)

  if (!menuItem) {
    return {
      title: "Dish Not Found | Little Lemon",
    }
  }

  return {
    title: `${menuItem.name} | Little Lemon Menu`,
    description: menuItem.description,
  }
}

export default function MenuItemPage({ params }: MenuItemPageProps) {
  const menuItem = getMenuItemById(params.id)

  if (!menuItem) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/menu" className="inline-flex items-center text-lemon-600 hover:text-lemon-700 mb-8">
        <ArrowLeft size={16} className="mr-2" />
        Back to menu
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="relative h-80 md:h-full rounded-lg overflow-hidden">
          <Image src={menuItem.image || "/placeholder.svg"} alt={menuItem.name} fill className="object-cover" />
          {menuItem.tags.includes("new") && <Badge className="absolute top-4 left-4 bg-blue-500">New</Badge>}
          {menuItem.tags.includes("best-seller") && (
            <Badge className="absolute top-4 left-4 bg-lemon-600">Best Seller</Badge>
          )}
          {menuItem.tags.includes("discount") && <Badge className="absolute top-4 left-4 bg-red-500">Sale</Badge>}
        </div>

        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {menuItem.dietaryOptions.map((option) => (
              <Badge key={option} variant="outline">
                {option}
              </Badge>
            ))}
            <Badge variant="secondary">{menuItem.cuisine}</Badge>
          </div>

          <h1 className="text-3xl font-bold mb-2">{menuItem.name}</h1>

          <div className="flex items-center mb-4">
            <div className="flex items-center mr-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(menuItem.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-600">({menuItem.reviews.length} reviews)</span>
          </div>

          <p className="text-xl font-bold text-lemon-600 mb-4">${menuItem.price.toFixed(2)}</p>

          <p className="text-gray-700 mb-6">{menuItem.description}</p>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Ingredients:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {menuItem.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <AddToCartButton menuItem={menuItem} />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Reviews</h2>
        <ReviewList reviews={menuItem.reviews} />
      </div>
    </div>
  )
}
