"use client"

import { useWishlist } from "@/context/wishlist-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart } from "lucide-react"
import { MenuItemCard } from "../menu/menu-item-card"

export function WishlistContent() {
  const { wishlistItems, clearWishlist } = useWishlist()

  if (wishlistItems.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
          <Heart className="h-8 w-8 text-gray-400" />
        </div>
        <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
        <p className="text-gray-500 mb-6">Save your favorite dishes to find them easily later.</p>
        <Button asChild className="bg-lemon-600 hover:bg-lemon-700">
          <Link href="/menu">Browse Menu</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-gray-600">{wishlistItems.length} item(s) in your wishlist</p>
        <Button variant="outline" onClick={clearWishlist} className="text-red-500 hover:text-red-700 hover:bg-red-50">
          Clear Wishlist
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
