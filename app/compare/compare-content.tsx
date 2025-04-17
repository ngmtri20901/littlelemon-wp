"use client"

import { useCompare } from "@/context/compare-context"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { BarChart2, ShoppingCart, Star, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/use-toast"

export function CompareContent() {
  const { compareItems, removeFromCompare, clearCompare } = useCompare()
  const { addToCart } = useCart()

  const handleAddToCart = (itemId: string) => {
    const item = compareItems.find((item) => item.id === itemId)
    if (item) {
      addToCart(item, 1)
      toast({
        title: "Added to cart",
        description: `${item.name} has been added to your cart.`,
      })
    }
  }

  if (compareItems.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
          <BarChart2 className="h-8 w-8 text-gray-400" />
        </div>
        <h2 className="text-xl font-semibold mb-2">No items to compare</h2>
        <p className="text-gray-500 mb-6">Add items from the menu to compare them side by side.</p>
        <Button asChild className="bg-lemon-600 hover:bg-lemon-700">
          <Link href="/menu">Browse Menu</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-gray-600">{compareItems.length} item(s) being compared</p>
        <Button variant="outline" onClick={clearCompare} className="text-red-500 hover:text-red-700 hover:bg-red-50">
          Clear All
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-4 text-left font-medium text-gray-500 w-1/4">Feature</th>
              {compareItems.map((item) => (
                <th key={item.id} className="p-4 text-center">
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-gray-200 hover:bg-gray-300"
                      onClick={() => removeFromCompare(item.id)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Image Row */}
            <tr className="border-b">
              <td className="p-4 font-medium">Image</td>
              {compareItems.map((item) => (
                <td key={item.id} className="p-4 text-center">
                  <div className="relative h-40 w-full">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover rounded-md mx-auto"
                    />
                  </div>
                </td>
              ))}
            </tr>

            {/* Name Row */}
            <tr className="border-b">
              <td className="p-4 font-medium">Name</td>
              {compareItems.map((item) => (
                <td key={item.id} className="p-4 text-center font-bold">
                  <Link href={`/menu/${item.id}`} className="hover:text-lemon-600">
                    {item.name}
                  </Link>
                </td>
              ))}
            </tr>

            {/* Price Row */}
            <tr className="border-b">
              <td className="p-4 font-medium">Price</td>
              {compareItems.map((item) => (
                <td key={item.id} className="p-4 text-center font-bold text-lemon-600">
                  ${item.price.toFixed(2)}
                </td>
              ))}
            </tr>

            {/* Rating Row */}
            <tr className="border-b">
              <td className="p-4 font-medium">Rating</td>
              {compareItems.map((item) => (
                <td key={item.id} className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center mr-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(item.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({item.reviews.length})</span>
                  </div>
                </td>
              ))}
            </tr>

            {/* Diet Row */}
            <tr className="border-b">
              <td className="p-4 font-medium">Dietary Options</td>
              {compareItems.map((item) => (
                <td key={item.id} className="p-4 text-center">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {item.dietaryOptions.map((option) => (
                      <Badge key={option} variant="outline" className="text-xs">
                        {option}
                      </Badge>
                    ))}
                  </div>
                </td>
              ))}
            </tr>

            {/* Cuisine Row */}
            <tr className="border-b">
              <td className="p-4 font-medium">Cuisine</td>
              {compareItems.map((item) => (
                <td key={item.id} className="p-4 text-center">
                  <Badge variant="secondary">{item.cuisine}</Badge>
                </td>
              ))}
            </tr>

            {/* Description Row */}
            <tr className="border-b">
              <td className="p-4 font-medium">Description</td>
              {compareItems.map((item) => (
                <td key={item.id} className="p-4 text-center">
                  <p className="text-sm text-gray-600">{item.description}</p>
                </td>
              ))}
            </tr>

            {/* Ingredients Row */}
            <tr className="border-b">
              <td className="p-4 font-medium">Ingredients</td>
              {compareItems.map((item) => (
                <td key={item.id} className="p-4 text-center">
                  <ul className="text-sm text-gray-600 list-disc list-inside">
                    {item.ingredients.map((ingredient) => (
                      <li key={ingredient} className="text-left inline-block">
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>

            {/* Action Row */}
            <tr>
              <td className="p-4 font-medium">Actions</td>
              {compareItems.map((item) => (
                <td key={item.id} className="p-4 text-center">
                  <Button className="bg-lemon-600 hover:bg-lemon-700 w-full" onClick={() => handleAddToCart(item.id)}>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
