"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  getOrderById,
  getOrderByPhone,
  getReservationById,
  getReservationByPhone,
  type Order,
  type Reservation,
} from "@/lib/status-data"
import { OrderStatusDisplay } from "./order-status-display"
import { ReservationStatusDisplay } from "./reservation-status-display"

const orderFormSchema = z.object({
  searchType: z.enum(["id", "phone"]),
  searchValue: z.string().min(1, "Please enter a value to search"),
})

const reservationFormSchema = z.object({
  searchType: z.enum(["id", "phone"]),
  searchValue: z.string().min(1, "Please enter a value to search"),
})

type OrderFormValues = z.infer<typeof orderFormSchema>
type ReservationFormValues = z.infer<typeof reservationFormSchema>

export function CheckStatusForm() {
  const [orders, setOrders] = useState<Order[]>([])
  const [reservations, setReservations] = useState<Reservation[]>([])
  const [activeTab, setActiveTab] = useState<string>("order")
  const [searched, setSearched] = useState(false)

  const orderForm = useForm<OrderFormValues>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      searchType: "id",
      searchValue: "",
    },
  })

  const reservationForm = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationFormSchema),
    defaultValues: {
      searchType: "id",
      searchValue: "",
    },
  })

  function onOrderSubmit(values: OrderFormValues) {
    let foundOrders: Order[] = []

    if (values.searchType === "id") {
      const order = getOrderById(values.searchValue)
      if (order) foundOrders = [order]
    } else {
      foundOrders = getOrderByPhone(values.searchValue)
    }

    setOrders(foundOrders)
    setSearched(true)
  }

  function onReservationSubmit(values: ReservationFormValues) {
    let foundReservations: Reservation[] = []

    if (values.searchType === "id") {
      const reservation = getReservationById(values.searchValue)
      if (reservation) foundReservations = [reservation]
    } else {
      foundReservations = getReservationByPhone(values.searchValue)
    }

    setReservations(foundReservations)
    setSearched(true)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Check Your Status</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="order" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="order">Order Status</TabsTrigger>
            <TabsTrigger value="reservation">Reservation Status</TabsTrigger>
          </TabsList>

          <TabsContent value="order">
            <Form {...orderForm}>
              <form onSubmit={orderForm.handleSubmit(onOrderSubmit)} className="space-y-4 mt-4">
                <FormField
                  control={orderForm.control}
                  name="searchType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Search by</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="id" id="order-id" />
                            <FormLabel htmlFor="order-id" className="font-normal">
                              Order ID
                            </FormLabel>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="phone" id="order-phone" />
                            <FormLabel htmlFor="order-phone" className="font-normal">
                              Phone Number
                            </FormLabel>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={orderForm.control}
                  name="searchValue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{orderForm.watch("searchType") === "id" ? "Order ID" : "Phone Number"}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={
                            orderForm.watch("searchType") === "id"
                              ? "Enter order ID (e.g., ORD-1234)"
                              : "Enter phone number (e.g., 555-123-4567)"
                          }
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-lemon-600 hover:bg-lemon-700">
                  Check Status
                </Button>
              </form>
            </Form>

            {searched && (
              <div className="mt-6">
                {orders.length > 0 ? (
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <OrderStatusDisplay key={order.id} order={order} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-gray-500">No orders found with the provided information.</p>
                  </div>
                )}
              </div>
            )}
          </TabsContent>

          <TabsContent value="reservation">
            <Form {...reservationForm}>
              <form onSubmit={reservationForm.handleSubmit(onReservationSubmit)} className="space-y-4 mt-4">
                <FormField
                  control={reservationForm.control}
                  name="searchType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Search by</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="id" id="reservation-id" />
                            <FormLabel htmlFor="reservation-id" className="font-normal">
                              Reservation ID
                            </FormLabel>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="phone" id="reservation-phone" />
                            <FormLabel htmlFor="reservation-phone" className="font-normal">
                              Phone Number
                            </FormLabel>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={reservationForm.control}
                  name="searchValue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {reservationForm.watch("searchType") === "id" ? "Reservation ID" : "Phone Number"}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={
                            reservationForm.watch("searchType") === "id"
                              ? "Enter reservation ID (e.g., RES-1234)"
                              : "Enter phone number (e.g., 555-123-4567)"
                          }
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-lemon-600 hover:bg-lemon-700">
                  Check Status
                </Button>
              </form>
            </Form>

            {searched && (
              <div className="mt-6">
                {reservations.length > 0 ? (
                  <div className="space-y-4">
                    {reservations.map((reservation) => (
                      <ReservationStatusDisplay key={reservation.id} reservation={reservation} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-gray-500">No reservations found with the provided information.</p>
                  </div>
                )}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
