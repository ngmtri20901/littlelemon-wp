import type { Metadata } from "next"
import { OrdersList } from "./orders-list"

export const metadata: Metadata = {
  title: "My Orders | Little Lemon",
  description: "View your Little Lemon orders",
}

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">My Orders</h3>
        <p className="text-sm text-muted-foreground">View and track your orders.</p>
      </div>
      <OrdersList />
    </div>
  )
}
