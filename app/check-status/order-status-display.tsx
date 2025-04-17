import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { Order } from "@/lib/status-data"
import { formatDate } from "@/lib/utils"
import { CheckCircle, Clock, Package, Truck, XCircle } from "lucide-react"

interface OrderStatusDisplayProps {
  order: Order
}

export function OrderStatusDisplay({ order }: OrderStatusDisplayProps) {
  const getStatusBadge = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            <Clock className="mr-1 h-3 w-3" />
            Pending
          </Badge>
        )
      case "preparing":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            <Package className="mr-1 h-3 w-3" />
            Preparing
          </Badge>
        )
      case "ready":
        return (
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
            <Truck className="mr-1 h-3 w-3" />
            Ready for Delivery
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
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">Order #{order.id}</CardTitle>
          {getStatusBadge(order.status)}
        </div>
        <p className="text-sm text-gray-500">Placed on {formatDate(order.createdAt)}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Items</h4>
            <div className="space-y-2">
              {order.items.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span>
                    {item.quantity} × {item.name}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>${order.total.toFixed(2)}</span>
          </div>

          {order.estimatedDelivery && order.status !== "delivered" && order.status !== "cancelled" && (
            <div className="mt-4 p-3 bg-blue-50 rounded-md">
              <p className="text-sm text-blue-700">
                <Clock className="inline-block mr-1 h-4 w-4" />
                Estimated delivery: {formatDate(order.estimatedDelivery)}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
