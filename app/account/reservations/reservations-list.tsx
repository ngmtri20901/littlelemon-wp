"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, CalendarX, CalendarCheck } from "lucide-react"

interface Reservation {
  id: string
  date: string
  time: string
  guests: number
  status: "upcoming" | "completed" | "cancelled"
  tableNumber?: string
  specialRequests?: string
}

export function ReservationsList() {
  const [reservations, setReservations] = useState<Reservation[]>([
    {
      id: "RES-1234",
      date: "2023-04-20",
      time: "19:00",
      guests: 4,
      status: "upcoming",
      tableNumber: "12",
      specialRequests: "Window seat if possible",
    },
    {
      id: "RES-5678",
      date: "2023-04-10",
      time: "20:30",
      guests: 2,
      status: "completed",
      tableNumber: "8",
    },
    {
      id: "RES-9012",
      date: "2023-03-15",
      time: "18:00",
      guests: 6,
      status: "cancelled",
      specialRequests: "Birthday celebration",
    },
  ])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date)
  }

  const getStatusBadge = (status: Reservation["status"]) => {
    switch (status) {
      case "upcoming":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            <Calendar className="mr-1 h-3 w-3" />
            Upcoming
          </Badge>
        )
      case "completed":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <CalendarCheck className="mr-1 h-3 w-3" />
            Completed
          </Badge>
        )
      case "cancelled":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            <CalendarX className="mr-1 h-3 w-3" />
            Cancelled
          </Badge>
        )
    }
  }

  const handleCancelReservation = (id: string) => {
    setReservations(
      reservations.map((reservation) =>
        reservation.id === id ? { ...reservation, status: "cancelled" as const } : reservation,
      ),
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <Tabs defaultValue="all" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="all">All Reservations</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>
        </Tabs>
        <Button className="bg-lemon-600 hover:bg-lemon-700">
          <Link href="/reservations/new">New Reservation</Link>
        </Button>
      </div>

      {reservations.length === 0 ? (
        <div className="text-center py-12">
          <Calendar className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium">No reservations yet</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            When you make your first reservation, it will appear here.
          </p>
          <Button className="mt-4 bg-lemon-600 hover:bg-lemon-700">
            <Link href="/reservations/new">Make a Reservation</Link>
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {reservations.map((reservation) => (
            <Card key={reservation.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <div>
                    <CardTitle className="text-base">Reservation #{reservation.id}</CardTitle>
                    <CardDescription>{formatDate(reservation.date)}</CardDescription>
                  </div>
                  {getStatusBadge(reservation.status)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{reservation.time}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{reservation.guests} guests</span>
                  </div>
                  {reservation.tableNumber && (
                    <div className="col-span-2">
                      <span className="font-medium">Table:</span> {reservation.tableNumber}
                    </div>
                  )}
                  {reservation.specialRequests && (
                    <div className="col-span-2">
                      <span className="font-medium">Special Requests:</span> {reservation.specialRequests}
                    </div>
                  )}
                </div>
              </CardContent>
              {reservation.status === "upcoming" && (
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Modify Reservation</Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="text-red-500 border-red-200 hover:bg-red-50">
                        Cancel Reservation
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Cancel Reservation</DialogTitle>
                        <DialogDescription>
                          Are you sure you want to cancel this reservation? This action cannot be undone.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button variant="outline" className="mr-2">
                          Keep Reservation
                        </Button>
                        <Button variant="destructive" onClick={() => handleCancelReservation(reservation.id)}>
                          Yes, Cancel Reservation
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
