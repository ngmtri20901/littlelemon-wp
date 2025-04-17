"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Clock, CheckCircle, XCircle } from "lucide-react"

interface Order {
  id: string
  date: string
  status: "processing" | "delivered" | "cancelled"
  total: number
  items: {
    name: string
    quantity: number
    price: number
  }[]
}

export function OrdersList() {
  const [orders] = useState<Order[]>([
    {
      id: "ORD-1234",
      date: "2023-04-10T14:30:00Z",
      status: "delivered",
      total: 42.5,
      items: [
        { name: "Lemon Pasta", quantity: 1, price: 15.99 },
        { name: "Greek Salad", quantity: 1, price: 12.99 },
        { name: "Garlic Bread", quantity: 1, price: 5.99 },
        { name: "Tiramisu", quantity: 1, price: 7.53 },
      ],
    },
    {
      id: "ORD-5678",
      date: "2023-04-15T18:45:00Z",
      status: "processing",
      total: 31.98,
      items: [
        { name: "Margherita Pizza", quantity: 1, price: 14.99 },
        { name: "Caesar Salad", quantity: 1, price: 10.99 },
        { name: "Sparkling Water", quantity: 1, price: 6.0 },
      ],
    },
    {
      id: "ORD-9012",
      date: "2023-03-28T12:15:00Z",
      status: "cancelled",
      total: 27.98,
      items: [
        { name: "Chicken Alfredo", quantity: 1, price: 16.99 },
        { name: "Bruschetta", quantity: 1, price: 8.99 },
        { name: "Iced Tea", quantity: 1, price: 2.0 },
      ],
    },
  ])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date)
  }

  const getStatusBadge = (status: Order["status"]) => {
    switch (status) {
      case "processing":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            <Clock className="mr-1 h-3 w-3" />
            Processing
          </Badge>
        )
      case "delivered":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <CheckCircle className="mr-1 h-3 w-3" />
            Delivered
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

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <Tabs defaultValue="all" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="delivered">Delivered</TabsTrigger>
          </TabsList>
        </Tabs>
        <Select defaultValue="recent">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Most Recent</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
            <SelectItem value="highest">Highest Amount</SelectItem>
            <SelectItem value="lowest">Lowest Amount</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-12">
          <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium">No orders yet</h3>
          <p className="mt-1 text-sm text-muted-foreground">When you place your first order, it will appear here.</p>
          <Button className="mt-4 bg-lemon-600 hover:bg-lemon-700">
            <Link href="/">Browse Menu</Link>
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <div>
                    <CardTitle className="text-base">Order #{order.id}</CardTitle>
                    <CardDescription>{formatDate(order.date)}</CardDescription>
                  </div>
                  {getStatusBadge(order.status)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>
                        {item.quantity}x {item.name}
                      </span>
                      <span>${item.price.toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="flex justify-between font-medium pt-2 border-t">
                    <span>Total</span>
                    <span>${order.total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Order Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
