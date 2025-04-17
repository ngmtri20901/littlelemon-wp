"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "@/components/ui/use-toast"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Define the form schema with Zod
const reservationFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  guests: z
    .number()
    .min(1, { message: "Number of guests must be at least 1" })
    .max(20, { message: "For parties larger than 20, please contact us directly" }),
  date: z.date({ required_error: "Please select a date" }),
  time: z.string().min(1, { message: "Please select a time" }),
  hasSpecialRequests: z.boolean().default(false),
  specialRequests: z.string().optional(),
})

type ReservationFormValues = z.infer<typeof reservationFormSchema>

export function ReservationForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [reservationDetails, setReservationDetails] = useState<ReservationFormValues | null>(null)

  // Initialize the form
  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      guests: 2,
      date: undefined,
      time: "",
      hasSpecialRequests: false,
      specialRequests: "",
    },
  })

  // Watch for special requests checkbox changes
  const hasSpecialRequests = form.watch("hasSpecialRequests")
  const guests = form.watch("guests")

  // Handle form submission
  function onSubmit(values: ReservationFormValues) {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setReservationDetails(values)

      toast({
        title: "Reservation Submitted",
        description: "Your reservation request has been received.",
      })
    }, 1500)
  }

  // Handle guest count increment/decrement
  const incrementGuests = () => {
    const currentGuests = form.getValues("guests")
    form.setValue("guests", currentGuests + 1)
  }

  const decrementGuests = () => {
    const currentGuests = form.getValues("guests")
    if (currentGuests > 1) {
      form.setValue("guests", currentGuests - 1)
    }
  }

  // If the form has been submitted, show the confirmation
  if (isSubmitted && reservationDetails) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Reservation Confirmed!</h2>
            <p className="text-gray-600">
              Thank you for your reservation. We've sent a confirmation email with all the details.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-medium mb-2">Reservation Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p>{reservationDetails.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p>{reservationDetails.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p>{reservationDetails.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Guests</p>
                <p>{reservationDetails.guests}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p>{format(reservationDetails.date, "MMMM d, yyyy")}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Time</p>
                <p>{reservationDetails.time}</p>
              </div>
              {reservationDetails.hasSpecialRequests && reservationDetails.specialRequests && (
                <div className="col-span-2">
                  <p className="text-sm text-gray-500">Special Requests</p>
                  <p>{reservationDetails.specialRequests}</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center">
            <Button onClick={() => router.push("/menu")} className="bg-lemon-600 hover:bg-lemon-700">
              Browse Our Menu
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6 pt-6">
            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Contact Information</h2>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john.doe@example.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="(123) 456-7890" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Reservation Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Reservation Details</h2>

              <FormField
                control={form.control}
                name="guests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Guests</FormLabel>
                    <div className="flex items-center">
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={decrementGuests}
                        disabled={field.value <= 1}
                        className="rounded-r-none"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <FormControl>
                        <Input
                          type="number"
                          min={1}
                          max={20}
                          className="rounded-none text-center w-20"
                          {...field}
                          onChange={(e) => field.onChange(Number.parseInt(e.target.value) || 1)}
                        />
                      </FormControl>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={incrementGuests}
                        disabled={field.value >= 20}
                        className="rounded-l-none"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Time</FormLabel>
                      <FormControl>
                        <select
                          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                          {...field}
                        >
                          <option value="">Select a time</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="11:30 AM">11:30 AM</option>
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="12:30 PM">12:30 PM</option>
                          <option value="1:00 PM">1:00 PM</option>
                          <option value="1:30 PM">1:30 PM</option>
                          <option value="5:00 PM">5:00 PM</option>
                          <option value="5:30 PM">5:30 PM</option>
                          <option value="6:00 PM">6:00 PM</option>
                          <option value="6:30 PM">6:30 PM</option>
                          <option value="7:00 PM">7:00 PM</option>
                          <option value="7:30 PM">7:30 PM</option>
                          <option value="8:00 PM">8:00 PM</option>
                          <option value="8:30 PM">8:30 PM</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Special Requests */}
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="hasSpecialRequests"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Any special requests?</FormLabel>
                      <FormDescription>
                        Let us know if you have any special requirements or preferences.
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              {hasSpecialRequests && (
                <FormField
                  control={form.control}
                  name="specialRequests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Special Requests</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="E.g., Window seat, dietary restrictions, celebration, etc."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </div>

            {/* Reservation Policy */}
            {guests > 8 && (
              <Alert className="bg-blue-50 border-blue-200">
                <AlertTitle>Large Party Notice</AlertTitle>
                <AlertDescription>
                  For parties of more than 8 people, we will contact you to confirm your reservation.
                </AlertDescription>
              </Alert>
            )}

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Reservation Policy</h3>
              <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                <li>Reservations are held for 15 minutes past the reservation time.</li>
                <li>
                  Cancellations must be made at least 24 hours in advance. Late cancellations may incur a fee for large
                  parties.
                </li>
                <li>For parties larger than 8, a credit card may be required to secure your reservation.</li>
                <li>Special requests are accommodated based on availability and are not guaranteed.</li>
              </ul>
            </div>
          </CardContent>

          <CardFooter>
            <Button type="submit" className="w-full bg-lemon-600 hover:bg-lemon-700" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Make Reservation"}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}
