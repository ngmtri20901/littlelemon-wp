import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Reservation } from "@/lib/status-data"
import { Calendar, CheckCircle, Clock, Users, XCircle } from "lucide-react"

interface ReservationStatusDisplayProps {
  reservation: Reservation
}

export function ReservationStatusDisplay({ reservation }: ReservationStatusDisplayProps) {
  const getStatusBadge = (status: Reservation["status"]) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            <Clock className="mr-1 h-3 w-3" />
            Pending
          </Badge>
        )
      case "confirmed":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <CheckCircle className="mr-1 h-3 w-3" />
            Confirmed
          </Badge>
        )
      case "completed":
        return (
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
            <CheckCircle className="mr-1 h-3 w-3" />
            Completed
          </Badge>
        )
      case "cancelled":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            <XCircle className="mr-1 h-3 w-3" />
            Cancelled
          </Badge>
        )
    }
  }

  // Format date
  const formatReservationDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date)
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">Reservation #{reservation.id}</CardTitle>
          {getStatusBadge(reservation.status)}
        </div>
        <p className="text-sm text-gray-500">For {reservation.customerName}</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4 text-gray-500" />
            <span>{formatReservationDate(reservation.date)}</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4 text-gray-500" />
            <span>{reservation.time}</span>
          </div>
          <div className="flex items-center">
            <Users className="mr-2 h-4 w-4 text-gray-500" />
            <span>{reservation.partySize} guests</span>
          </div>
          {reservation.tableNumber && (
            <div className="flex items-center">
              <span className="font-medium mr-2">Table:</span>
              <span>{reservation.tableNumber}</span>
            </div>
          )}
        </div>

        {reservation.specialRequests && (
          <div className="mt-4">
            <p className="font-medium">Special Requests:</p>
            <p className="text-gray-600">{reservation.specialRequests}</p>
          </div>
        )}

        {reservation.status === "confirmed" && (
          <div className="mt-4 p-3 bg-green-50 rounded-md">
            <p className="text-sm text-green-700">
              <CheckCircle className="inline-block mr-1 h-4 w-4" />
              Your reservation is confirmed. We look forward to serving you!
            </p>
          </div>
        )}

        {reservation.status === "pending" && (
          <div className="mt-4 p-3 bg-blue-50 rounded-md">
            <p className="text-sm text-blue-700">
              <Clock className="inline-block mr-1 h-4 w-4" />
              Your reservation is pending confirmation. We'll contact you shortly.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
