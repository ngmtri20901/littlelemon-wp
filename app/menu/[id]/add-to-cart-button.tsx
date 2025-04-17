"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Plus, Minus } from "lucide-react"
import { useCart } from "@/context/cart-context"
import type { MenuItem } from "@/lib/menu-data"
import { toast } from "@/components/ui/use-toast"

interface AddToCartButtonProps {
  menuItem: MenuItem
}

export function AddToCartButton({ menuItem }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const router = useRouter()

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value) && value > 0) {
      setQuantity(value)
    }
  }

  const handleAddToCart = () => {
    addToCart(menuItem, quantity)
    toast({
      title: "Added to cart",
      description: `${quantity} × ${menuItem.name} added to your cart.`,
    })
  }

  const handleBuyNow = () => {
    addToCart(menuItem, quantity)
    router.push("/cart")
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <Button
          variant="outline"
          size="icon"
          onClick={decreaseQuantity}
          disabled={quantity <= 1}
          className="rounded-r-none"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
          className="w-16 text-center rounded-none"
        />
        <Button variant="outline" size="icon" onClick={increaseQuantity} className="rounded-l-none">
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button onClick={handleAddToCart} className="flex-1 bg-lemon-600 hover:bg-lemon-700">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
        <Button onClick={handleBuyNow} variant="outline" className="flex-1">
          Buy Now
        </Button>
      </div>
    </div>
  )
}
