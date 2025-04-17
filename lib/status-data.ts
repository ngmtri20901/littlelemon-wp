export interface Order {
  id: string
  customerName: string
  customerPhone: string
  items: {
    name: string
    quantity: number
    price: number
  }[]
  total: number
  status: "pending" | "preparing" | "ready" | "delivered" | "cancelled"
  createdAt: string
  estimatedDelivery?: string
}

export interface Reservation {
  id: string
  customerName: string
  customerPhone: string
  date: string
  time: string
  partySize: number
  status: "confirmed" | "pending" | "cancelled" | "completed"
  tableNumber?: string
  specialRequests?: string
}

export const orders: Order[] = [
  {
    id: "ORD-1234",
    customerName: "John Doe",
    customerPhone: "555-123-4567",
    items: [
      { name: "Greek Salad", quantity: 1, price: 12.99 },
      { name: "Grilled Fish", quantity: 2, price: 24.99 },
      { name: "Lemon Dessert", quantity: 1, price: 6.99 },
    ],
    total: 69.96,
    status: "delivered",
    createdAt: "2023-06-15T14:30:00Z",
    estimatedDelivery: "2023-06-15T15:30:00Z",
  },
  {
    id: "ORD-5678",
    customerName: "Jane Smith",
    customerPhone: "555-987-6543",
    items: [
      { name: "Margherita Pizza", quantity: 1, price: 14.99 },
      { name: "Bruschetta", quantity: 1, price: 8.99 },
    ],
    total: 23.98,
    status: "preparing",
    createdAt: "2023-06-16T18:45:00Z",
    estimatedDelivery: "2023-06-16T19:30:00Z",
  },
  {
    id: "ORD-9012",
    customerName: "Michael Johnson",
    customerPhone: "555-456-7890",
    items: [
      { name: "Falafel Plate", quantity: 1, price: 13.99 },
      { name: "Hummus with Pita", quantity: 1, price: 7.99 },
      { name: "Baklava", quantity: 2, price: 5.99 },
    ],
    total: 33.96,
    status: "pending",
    createdAt: "2023-06-16T19:15:00Z",
    estimatedDelivery: "2023-06-16T20:00:00Z",
  },
]

export const reservations: Reservation[] = [
  {
    id: "RES-1234",
    customerName: "Emily Wilson",
    customerPhone: "555-234-5678",
    date: "2023-06-20",
    time: "19:00",
    partySize: 4,
    status: "confirmed",
    tableNumber: "12",
    specialRequests: "Window seat if possible",
  },
  {
    id: "RES-5678",
    customerName: "Robert Davis",
    customerPhone: "555-876-5432",
    date: "2023-06-18",
    time: "20:30",
    partySize: 2,
    status: "confirmed",
    tableNumber: "8",
  },
  {
    id: "RES-9012",
    customerName: "Sarah Thompson",
    customerPhone: "555-345-6789",
    date: "2023-06-19",
    time: "18:00",
    partySize: 6,
    status: "pending",
    specialRequests: "Birthday celebration",
  },
]

// Helper functions
export function getOrderById(id: string): Order | undefined {
  return orders.find((order) => order.id === id)
}

export function getOrderByPhone(phone: string): Order[] {
  return orders.filter((order) => order.customerPhone === phone)
}

export function getReservationById(id: string): Reservation | undefined {
  return reservations.find((reservation) => reservation.id === id)
}

export function getReservationByPhone(phone: string): Reservation[] {
  return reservations.filter((reservation) => reservation.customerPhone === phone)
}
