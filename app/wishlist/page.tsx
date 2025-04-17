import type { Metadata } from "next"
import { WishlistContent } from "./wishlist-content"

export const metadata: Metadata = {
  title: "Wishlist | Little Lemon",
  description: "Your saved favorite dishes",
}

export default function WishlistPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Wishlist</h1>
      <WishlistContent />
    </div>
  )
}
