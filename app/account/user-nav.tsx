"use client"

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

export function UserNav() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState<{ name: string; email: string } | null>(null);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
      if (token) {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      }
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  }

  if (!isLoggedIn) {
    // Logged out: show Sign Up button
    return (
      <Button
        variant="default"
        className="h-8 px-4 rounded-full text-white bg-lemon-600 hover:bg-lemon-700"
        onClick={() => router.push("/auth/signup")}
      >
        Sign Up
      </Button>
    );
  }

  // Logged in: show avatar dropdown as before
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>{
              user ? user.name.split(" ").map(n => n[0]).join("") : ""
            }</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user?.name}</p>
            <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => router.push("/account/profile")}>Profile</DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/account/address-book")}>Address Book</DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/account/orders")}>My Orders</DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/account/reservations")}>My Reservations</DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/account/notifications")}>
            Notification Settings
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/account/security")}>Security & Privacy</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
