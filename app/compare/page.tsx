import type { Metadata } from "next"
import { CompareContent } from "./compare-content"

export const metadata: Metadata = {
  title: "Compare Dishes | Little Lemon",
  description: "Compare different dishes side by side",
}

export default function ComparePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Compare Dishes</h1>
      <CompareContent />
    </div>
  )
}
