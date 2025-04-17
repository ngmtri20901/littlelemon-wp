"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect, useCallback } from "react"
import type { MenuItem } from "@/lib/menu-data"
import { toast } from "@/components/ui/use-toast"

interface CompareContextType {
  compareItems: MenuItem[]
  addToCompare: (item: MenuItem) => void
  removeFromCompare: (itemId: string) => void
  isInCompare: (itemId: string) => boolean
  clearCompare: () => void
}

const CompareContext = createContext<CompareContextType | undefined>(undefined)

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const [compareItems, setCompareItems] = useState<MenuItem[]>([])
  const [isInitialized, setIsInitialized] = useState(false)

  // Load compare items from localStorage on initial render
  useEffect(() => {
    const savedCompare = localStorage.getItem("compare")
    if (savedCompare) {
      try {
        setCompareItems(JSON.parse(savedCompare))
      } catch (error) {
        console.error("Failed to parse compare items from localStorage:", error)
      }
    }
    setIsInitialized(true)
  }, [])

  // Save compare items to localStorage whenever it changes
  useEffect(() => {
    if (!isInitialized) return
    localStorage.setItem("compare", JSON.stringify(compareItems))
  }, [compareItems, isInitialized])

  const addToCompare = useCallback((item: MenuItem) => {
    setCompareItems((prevItems) => {
      // Check if item already exists in compare list
      if (prevItems.some((compareItem) => compareItem.id === item.id)) {
        return prevItems
      }

      // Check if we already have 3 items
      if (prevItems.length >= 3) {
        toast({
          title: "Compare limit reached",
          description: "You can only compare up to 3 items. Remove an item to add a new one.",
          variant: "destructive",
        })
        return prevItems
      }

      return [...prevItems, item]
    })
  }, [])

  const removeFromCompare = useCallback((itemId: string) => {
    setCompareItems((prevItems) => prevItems.filter((item) => item.id !== itemId))
  }, [])

  const isInCompare = useCallback(
    (itemId: string) => {
      return compareItems.some((item) => item.id === itemId)
    },
    [compareItems],
  )

  const clearCompare = useCallback(() => {
    setCompareItems([])
  }, [])

  return (
    <CompareContext.Provider
      value={{
        compareItems,
        addToCompare,
        removeFromCompare,
        isInCompare,
        clearCompare,
      }}
    >
      {children}
    </CompareContext.Provider>
  )
}

export function useCompare() {
  const context = useContext(CompareContext)
  if (context === undefined) {
    throw new Error("useCompare must be used within a CompareProvider")
  }
  return context
}
