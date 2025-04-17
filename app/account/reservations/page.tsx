import type { Metadata } from "next"
import { ReservationsList } from "./reservations-list"

export const metadata: Metadata = {
  title: "My Reservations | Little Lemon",
  description: "View your Little Lemon reservations",
}

export default function ReservationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">My Reservations</h3>
        <p className="text-sm text-muted-foreground">View and manage your restaurant reservations.</p>
      </div>
      <ReservationsList />
    </div>
  )
}
