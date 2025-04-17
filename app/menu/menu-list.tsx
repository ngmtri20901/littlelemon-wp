"use client"

import { useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { menuItems } from "@/lib/menu-data"
import { MenuItemCard } from "./menu-item-card"

export function MenuList() {
  const searchParams = useSearchParams()

  // Get filter parameters once
  const tag = searchParams.get("tag") || ""
  const minPrice = Number(searchParams.get("minPrice")) || 0
  const maxPrice = Number(searchParams.get("maxPrice")) || 30
  const diet = searchParams.get("diet") || "all"
  const cuisine = searchParams.get("cuisine") || "all"

  // Use useMemo to filter items only when dependencies change
  const filteredItems = useMemo(() => {
    // Start with all menu items
    let filtered = [...menuItems]

    // Apply tag filter
    if (tag) {
      filtered = filtered.filter((item) => item.tags.includes(tag))
    }

    // Apply price range filter
    filtered = filtered.filter((item) => item.price >= minPrice && item.price <= maxPrice)

    // Apply diet filter
    if (diet !== "all") {
      filtered = filtered.filter((item) => item.dietaryOptions.includes(diet))
    }

    // Apply cuisine filter
    if (cuisine !== "all") {
      filtered = filtered.filter((item) => item.cuisine === cuisine)
    }

    return filtered
  }, [tag, minPrice, maxPrice, diet, cuisine])

  if (filteredItems.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold mb-2">No items found</h2>
        <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredItems.map((item) => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  )
}
