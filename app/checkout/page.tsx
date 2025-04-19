import type { Metadata } from "next"
import dynamic from "next/dynamic"

// Dynamically import CheckoutForm as client-only to avoid SSR window/location errors
const CheckoutForm = dynamic(
  () => import("./checkout-form").then((mod) => mod.CheckoutForm),
  {
    ssr: false,
    loading: () => <div>Loading checkout...</div>,
  }
)

export const metadata: Metadata = {
  title: "Checkout | Little Lemon",
  description: "Complete your order",
}

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
      <CheckoutForm />
    </div>
  )
}
