import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Reservation Confirmed | Little Lemon",
  description: "Your reservation at Little Lemon has been confirmed",
}

export default function ReservationConfirmationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Reservation Confirmed!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your reservation at Little Lemon. We've sent a confirmation email with all the details.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-lemon-600 hover:bg-lemon-700">
            <Link href="/menu">Browse Our Menu</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/check-status">Check Reservation Status</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
