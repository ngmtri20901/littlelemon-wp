import React, { Suspense } from "react"
import type { Metadata } from "next"
import { MenuList } from "./menu-list"
import { FilterSidebar } from "./filter-sidebar"

export const metadata: Metadata = {
  title: "Menu | Little Lemon",
  description: "Explore our delicious Mediterranean dishes",
}

export default function MenuPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Menu</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <Suspense fallback={<div>Loading filters...</div>}>
            <FilterSidebar />
          </Suspense>
        </div>

        <div className="w-full md:w-3/4">
          <Suspense fallback={<div>Loading menu...</div>}>
            <MenuList />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
