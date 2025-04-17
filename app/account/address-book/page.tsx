import type { Metadata } from "next"
import { AddressBook } from "./address-book"

export const metadata: Metadata = {
  title: "Address Book | Little Lemon",
  description: "Manage your Little Lemon addresses",
}

export default function AddressBookPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Address Book</h3>
        <p className="text-sm text-muted-foreground">Manage your delivery and billing addresses.</p>
      </div>
      <AddressBook />
    </div>
  )
}
