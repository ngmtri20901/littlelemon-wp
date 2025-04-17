"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Heart, BarChart2, ShoppingCart } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { useCart } from "@/context/cart-context"
import { useWishlist } from "@/context/wishlist-context"
import { useCompare } from "@/context/compare-context"
import type { MenuItem } from "@/lib/menu-data"

interface MenuItemCardProps {
  item: MenuItem
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const { addToCompare, removeFromCompare, isInCompare } = useCompare()

  const inWishlist = isInWishlist(item.id)
  const inCompare = isInCompare(item.id)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setIsAddingToCart(true)

    // Add to cart
    addToCart(item, 1)

    // Show toast
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    })

    // Reset button state after animation
    setTimeout(() => {
      setIsAddingToCart(false)
    }, 500)
  }

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (inWishlist) {
      removeFromWishlist(item.id)
      toast({
        title: "Removed from wishlist",
        description: `${item.name} has been removed from your wishlist.`,
      })
    } else {
      addToWishlist(item)
      toast({
        title: "Added to wishlist",
        description: `${item.name} has been added to your wishlist.`,
      })
    }
  }

  const handleCompareToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (inCompare) {
      removeFromCompare(item.id)
      toast({
        title: "Removed from compare",
        description: `${item.name} has been removed from your comparison list.`,
      })
    } else {
      addToCompare(item)
      toast({
        title: "Added to compare",
        description: `${item.name} has been added to your comparison list.`,
      })
    }
  }

  return (
    <Link href={`/menu/${item.id}`}>
      <Card
        className="h-full hover:shadow-lg transition-shadow"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 w-full">
          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover rounded-t-lg" />

          {/* Wishlist and Compare buttons */}
          <div
            className={`absolute top-2 left-2 flex flex-col gap-2 transition-opacity duration-200 ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            <Button
              size="icon"
              variant={inWishlist ? "default" : "secondary"}
              className={`rounded-full ${inWishlist ? "bg-red-500 hover:bg-red-600" : "bg-white/80 hover:bg-white"}`}
              onClick={handleWishlistToggle}
            >
              <Heart className={`h-4 w-4 ${inWishlist ? "fill-white text-white" : "text-gray-700"}`} />
            </Button>

            <Button
              size="icon"
              variant={inCompare ? "default" : "secondary"}
              className={`rounded-full ${inCompare ? "bg-blue-500 hover:bg-blue-600" : "bg-white/80 hover:bg-white"}`}
              onClick={handleCompareToggle}
            >
              <BarChart2 className={`h-4 w-4 ${inCompare ? "text-white" : "text-gray-700"}`} />
            </Button>
          </div>

          {/* Tags */}
          {item.tags.includes("new") && <Badge className="absolute top-2 right-2 bg-blue-500">New</Badge>}
          {item.tags.includes("best-seller") && (
            <Badge className="absolute top-2 right-2 bg-lemon-600">Best Seller</Badge>
          )}
          {item.tags.includes("discount") && <Badge className="absolute top-2 right-2 bg-red-500">Sale</Badge>}
        </div>

        <CardContent className="pt-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-lg">{item.name}</h3>
            <span className="font-bold text-lemon-600">${item.price.toFixed(2)}</span>
          </div>
          <p className="text-gray-600 text-sm line-clamp-2 mb-2">{item.description}</p>
          <div className="flex items-center">
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
        </CardContent>

        <CardFooter className="pt-0 flex flex-col gap-3">
          <div className="flex flex-wrap gap-1 mb-2">
            {item.dietaryOptions.map((option) => (
              <Badge key={option} variant="outline" className="text-xs">
                {option}
              </Badge>
            ))}
          </div>

          <Button
            className={`w-full bg-lemon-600 hover:bg-lemon-700 transition-all ${isAddingToCart ? "scale-95" : "scale-100"}`}
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
