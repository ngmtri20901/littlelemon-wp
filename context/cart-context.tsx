"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useCallback } from "react"
import type { MenuItem, CartItem } from "@/lib/menu-data"

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: MenuItem, quantity?: number) => void
  removeFromCart: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  cartTotal: number
  cartCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [cartTotal, setCartTotal] = useState(0)
  const [cartCount, setCartCount] = useState(0)
  const [isInitialized, setIsInitialized] = useState(false)

  // Load cart from localStorage on initial render only
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart))
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error)
      }
    }
    setIsInitialized(true)
  }, [])

  // Calculate totals whenever cart items change
  useEffect(() => {
    if (!isInitialized) return

    // Calculate cart total and count
    const total = cartItems.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0)
    setCartTotal(total)

    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    setCartCount(count)

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }, [cartItems, isInitialized])

  const addToCart = useCallback((menuItem: MenuItem, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((item) => item.menuItem.id === menuItem.id)

      if (existingItemIndex >= 0) {
        // Item already exists in cart, update quantity
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity,
        }
        return updatedItems
      } else {
        // Item doesn't exist in cart, add it
        return [...prevItems, { menuItem, quantity }]
      }
    })
  }, [])

  const removeFromCart = useCallback((itemId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.menuItem.id !== itemId))
  }, [])

  const updateQuantity = useCallback(
    (itemId: string, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(itemId)
        return
      }

      setCartItems((prevItems) => prevItems.map((item) => (item.menuItem.id === itemId ? { ...item, quantity } : item)))
    },
    [removeFromCart],
  )

  const clearCart = useCallback(() => {
    setCartItems([])
  }, [])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
