import { Logo } from "@/components/logo"
import { UserNav } from "./user-nav"
import { CartIcon } from "@/components/cart-icon"
import Link from "next/link"

export function AccountHeader() {
  return (
    <header className="border-b mb-8">
      <div className="flex h-16 items-center justify-between px-4">
        <Logo />
        <div className="flex items-center space-x-4">
          <Link href="/menu" className="text-sm font-medium hover:text-lemon-600">
            Menu
          </Link>
          <CartIcon />
          <UserNav />
        </div>
      </div>
    </header>
  )
}
