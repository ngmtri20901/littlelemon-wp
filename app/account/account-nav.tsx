"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CreditCard, MapPin, Bell, Calendar, Shield, User } from "lucide-react"

interface NavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

export function AccountNav() {
  const pathname = usePathname()

  const navItems: NavItem[] = [
    {
      title: "Profile",
      href: "/account/profile",
      icon: User,
    },
    {
      title: "Address Book",
      href: "/account/address-book",
      icon: MapPin,
    },
    {
      title: "My Orders",
      href: "/account/orders",
      icon: CreditCard,
    },
    {
      title: "My Reservations",
      href: "/account/reservations",
      icon: Calendar,
    },
    {
      title: "Notification Settings",
      href: "/account/notifications",
      icon: Bell,
    },
    {
      title: "Security & Privacy",
      href: "/account/security",
      icon: Shield,
    },
  ]

  return (
    <nav className="flex flex-col space-y-1">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start",
              pathname === item.href ? "bg-muted hover:bg-muted" : "hover:bg-transparent hover:underline",
            )}
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.title}
          </Button>
        </Link>
      ))}
    </nav>
  )
}
