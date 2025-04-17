import type { Metadata } from "next"
import { CheckStatusForm } from "./check-status-form"

export const metadata: Metadata = {
  title: "Check Status | Little Lemon",
  description: "Check your order or reservation status",
}

export default function CheckStatusPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Check Status</h1>
      <div className="max-w-md mx-auto">
        <CheckStatusForm />
      </div>
    </div>
  )
}
