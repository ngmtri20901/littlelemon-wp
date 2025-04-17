"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart-context"

export function CartIcon() {
  const { cartCount } = useCart()

  return (
    <Button asChild variant="ghost" className="relative">
      <Link href="/cart">
        <ShoppingCart className="h-5 w-5 text-gray-700" />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-lemon-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </Link>
    </Button>
  )
}
