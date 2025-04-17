import type { Metadata } from "next"
import { CartContents } from "./cart-contents"

export const metadata: Metadata = {
  title: "Your Cart | Little Lemon",
  description: "Review and checkout your order",
}

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
      <CartContents />
    </div>
  )
}
