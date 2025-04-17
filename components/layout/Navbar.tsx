"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/logo"
import { CartIcon } from "@/components/cart-icon"
import { UserNav } from "@/app/account/user-nav"
import { Menu, X, ChevronDown, Heart, BarChart2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useWishlist } from "@/context/wishlist-context"
import { useCompare } from "@/context/compare-context"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { wishlistItems } = useWishlist()
  const { compareItems } = useCompare()

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Reservations", href: "/reservations" },
    { name: "Blog", href: "/blog" },
    {
      name: "Support",
      href: "#",
      dropdown: [
        { name: "FAQs", href: "/faqs" },
        { name: "Contact Us", href: "/contact-us" },
        { name: "Check Status", href: "/check-status" },
      ],
    },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-sm",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative group">
                  <button
                    className={cn(
                      "flex items-center text-base font-medium hover:text-lemon-600 focus:bg-transparent focus:outline-none py-2",
                      pathname.startsWith("/faqs") ||
                        pathname.startsWith("/contact-us") ||
                        pathname.startsWith("/check-status")
                        ? "text-lemon-600"
                        : "text-gray-700",
                    )}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={cn(
                            "block px-4 py-2 text-sm hover:bg-gray-100",
                            pathname === item.href ? "text-lemon-600 font-medium" : "text-gray-700",
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-base font-medium hover:text-lemon-600 transition-colors relative py-2",
                    pathname === link.href
                      ? "text-lemon-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-lemon-600"
                      : "text-gray-700",
                  )}
                >
                  {link.name}
                </Link>
              ),
            )}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Wishlist Icon */}
            <Button asChild variant="ghost" className="relative text-gray-700">
              <Link href="/wishlist">
                <Heart className="h-5 w-5" />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-lemon-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>
            </Button>

            {/* Compare Icon */}
            <Button asChild variant="ghost" className="relative text-gray-700">
              <Link href="/compare">
                <BarChart2 className="h-5 w-5" />
                {compareItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-lemon-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {compareItems.length}
                  </span>
                )}
              </Link>
            </Button>

            {/* Cart Icon */}
            <CartIcon />

            {/* User Avatar */}
            <UserNav />

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name} className="space-y-2">
                    <div className="font-medium text-gray-900 px-2">{link.name}</div>
                    <div className="pl-4 border-l-2 border-gray-200 space-y-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={cn(
                            "block px-2 py-1 text-sm",
                            pathname === item.href ? "text-lemon-600 font-medium" : "text-gray-600",
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "block px-2 py-1",
                      pathname === link.href ? "text-lemon-600 font-medium" : "text-gray-700",
                    )}
                  >
                    {link.name}
                  </Link>
                ),
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
