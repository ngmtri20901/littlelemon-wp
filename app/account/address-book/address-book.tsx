"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AddressForm } from "./address-form"
import { MapPin, Edit, Trash } from "lucide-react"

interface Address {
  id: string
  name: string
  street: string
  city: string
  state: string
  zip: string
  isDefault: boolean
}

export function AddressBook() {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "1",
      name: "Home",
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
      isDefault: true,
    },
    {
      id: "2",
      name: "Work",
      street: "456 Office Blvd",
      city: "Workville",
      state: "CA",
      zip: "67890",
      isDefault: false,
    },
  ])
  const [isAddingAddress, setIsAddingAddress] = useState(false)
  const [editingAddressId, setEditingAddressId] = useState<string | null>(null)

  const handleAddAddress = (address: Omit<Address, "id">) => {
    const newAddress = {
      ...address,
      id: Math.random().toString(36).substring(2, 9),
    }
    setAddresses([...addresses, newAddress])
    setIsAddingAddress(false)
  }

  const handleEditAddress = (id: string, updatedAddress: Omit<Address, "id">) => {
    setAddresses(addresses.map((address) => (address.id === id ? { ...updatedAddress, id } : address)))
    setEditingAddressId(null)
  }

  const handleDeleteAddress = (id: string) => {
    setAddresses(addresses.filter((address) => address.id !== id))
  }

  const handleSetDefault = (id: string) => {
    setAddresses(
      addresses.map((address) => ({
        ...address,
        isDefault: address.id === id,
      })),
    )
  }

  return (
    <div className="space-y-6">
      {addresses.map((address) => (
        <Card key={address.id}>
          <CardHeader className="flex flex-row items-start justify-between space-y-0">
            <div>
              <CardTitle className="flex items-center">
                {address.name}
                {address.isDefault && (
                  <span className="ml-2 text-xs bg-lemon-100 text-lemon-800 px-2 py-1 rounded-full">Default</span>
                )}
              </CardTitle>
              <CardDescription>Delivery Address</CardDescription>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" onClick={() => setEditingAddressId(address.id)}>
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => handleDeleteAddress(address.id)}>
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {editingAddressId === address.id ? (
              <AddressForm
                initialValues={address}
                onSubmit={(values) => handleEditAddress(address.id, values)}
                onCancel={() => setEditingAddressId(null)}
              />
            ) : (
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <div>
                  <p>{address.street}</p>
                  <p>
                    {address.city}, {address.state} {address.zip}
                  </p>
                </div>
              </div>
            )}
          </CardContent>
          {editingAddressId !== address.id && !address.isDefault && (
            <CardFooter>
              <Button variant="outline" onClick={() => handleSetDefault(address.id)}>
                Set as default
              </Button>
            </CardFooter>
          )}
        </Card>
      ))}

      {isAddingAddress ? (
        <Card>
          <CardHeader>
            <CardTitle>Add New Address</CardTitle>
          </CardHeader>
          <CardContent>
            <AddressForm onSubmit={handleAddAddress} onCancel={() => setIsAddingAddress(false)} />
          </CardContent>
        </Card>
      ) : (
        <Button className="bg-lemon-600 hover:bg-lemon-700" onClick={() => setIsAddingAddress(true)}>
          Add New Address
        </Button>
      )}
    </div>
  )
}
