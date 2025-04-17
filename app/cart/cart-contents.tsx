"use client"

import { useCart } from "@/context/cart-context"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Trash, Plus, Minus, ArrowRight } from "lucide-react"

export function CartContents() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
          <ShoppingCart className="h-8 w-8 text-gray-400" />
        </div>
        <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-6">Looks like you haven't added any items to your cart yet.</p>
        <Button asChild className="bg-lemon-600 hover:bg-lemon-700">
          <Link href="/menu">Browse Menu</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="space-y-4">
          {cartItems.map((item) => (
            <Card key={item.menuItem.id}>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative h-24 w-24 rounded-md overflow-hidden mb-4 sm:mb-0 sm:mr-4">
                    <Image
                      src={item.menuItem.image || "/placeholder.svg"}
                      alt={item.menuItem.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-medium">{item.menuItem.name}</h3>
                      <p className="font-medium">${(item.menuItem.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-1">{item.menuItem.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.menuItem.id, item.quantity - 1)}
                          className="h-8 w-8 rounded-r-none"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.menuItem.id, Number.parseInt(e.target.value) || 1)}
                          className="w-12 h-8 text-center rounded-none"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.menuItem.id, item.quantity + 1)}
                          className="h-8 w-8 rounded-l-none"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(item.menuItem.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash className="h-4 w-4 mr-1" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-4 flex justify-end">
          <Button variant="ghost" onClick={clearCart} className="text-red-500 hover:text-red-700 hover:bg-red-50">
            <Trash className="h-4 w-4 mr-2" />
            Clear Cart
          </Button>
        </div>
      </div>

      <div className="lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>$3.99</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${(cartTotal * 0.08).toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${(cartTotal + 3.99 + cartTotal * 0.08).toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full bg-lemon-600 hover:bg-lemon-700">
              <Link href="/checkout">
                Proceed to Checkout
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
