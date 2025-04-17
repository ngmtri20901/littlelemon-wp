import type { Metadata } from "next"
import { ReservationForm } from "./reservation-form"

export const metadata: Metadata = {
  title: "Make a Reservation | Little Lemon",
  description: "Reserve a table at Little Lemon restaurant",
}

export default function ReservationsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Make a Reservation</h1>
        <p className="text-center text-gray-600 mb-8">
          Reserve your table at Little Lemon and enjoy an unforgettable Mediterranean dining experience.
        </p>
        <ReservationForm />
      </div>
    </div>
  )
}
