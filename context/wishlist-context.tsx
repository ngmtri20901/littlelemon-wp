"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect, useCallback } from "react"
import type { MenuItem } from "@/lib/menu-data"

interface WishlistContextType {
  wishlistItems: MenuItem[]
  addToWishlist: (item: MenuItem) => void
  removeFromWishlist: (itemId: string) => void
  isInWishlist: (itemId: string) => boolean
  clearWishlist: () => void
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlistItems, setWishlistItems] = useState<MenuItem[]>([])
  const [isInitialized, setIsInitialized] = useState(false)

  // Load wishlist from localStorage on initial render
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist")
    if (savedWishlist) {
      try {
        setWishlistItems(JSON.parse(savedWishlist))
      } catch (error) {
        console.error("Failed to parse wishlist from localStorage:", error)
      }
    }
    setIsInitialized(true)
  }, [])

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (!isInitialized) return
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems))
  }, [wishlistItems, isInitialized])

  const addToWishlist = useCallback((item: MenuItem) => {
    setWishlistItems((prevItems) => {
      // Check if item already exists in wishlist
      if (prevItems.some((wishlistItem) => wishlistItem.id === item.id)) {
        return prevItems
      }
      return [...prevItems, item]
    })
  }, [])

  const removeFromWishlist = useCallback((itemId: string) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== itemId))
  }, [])

  const isInWishlist = useCallback(
    (itemId: string) => {
      return wishlistItems.some((item) => item.id === itemId)
    },
    [wishlistItems],
  )

  const clearWishlist = useCallback(() => {
    setWishlistItems([])
  }, [])

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}
