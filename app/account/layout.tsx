import type React from "react"
import type { Metadata } from "next"
import { AccountNav } from "./account-nav"
import { AccountHeader } from "./account-header"

export const metadata: Metadata = {
  title: "Account | Little Lemon",
  description: "Manage your Little Lemon account",
}

interface AccountLayoutProps {
  children: React.ReactNode
}

export default function AccountLayout({ children }: AccountLayoutProps) {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="lg:w-1/5 text-gray-800">
          <AccountNav />
        </aside>
        <div className="flex-1 lg:max-w-3xl">{children}</div>
      </div>
    </div>
  )
}
