import Link from "next/link"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#3A5A40] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="mb-4">
              <Logo className="text-white" />
            </div>
            <p className="mb-6 text-gray-200">
              Bringing the fresh and vibrant flavors of the Mediterranean to your table since 2010.
            </p>
            <div className="flex space-x-4 mb-6">
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="hover:text-lemon-300 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="hover:text-lemon-300 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" aria-label="Twitter" className="hover:text-lemon-300 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>

            {/* Newsletter Signup - Moved here */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 rounded-r-none focus-visible:ring-lemon-300"
                />
                <Button className="bg-lemon-600 hover:bg-lemon-700 rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-lemon-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-lemon-300 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="hover:text-lemon-300 transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link href="/check-status" className="hover:text-lemon-300 transition-colors">
                  Order Status
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-lemon-300 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-lemon-300 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact-us" className="hover:text-lemon-300 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-lemon-300 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/payment-policy" className="hover:text-lemon-300 transition-colors">
                  Payment Policy
                </Link>
              </li>
              <li>
                <Link href="/delivery-pickup" className="hover:text-lemon-300 transition-colors">
                  Delivery & Pickup
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-lemon-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-lemon-300 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-lemon-300" />
                <span>
                  123 Main Street
                  <br />
                  Chicago, IL 60607
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-lemon-300" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-lemon-300" />
                <span>info@littlelemon.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">© 2025 Little Lemon Restaurant. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-sm text-gray-300 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-gray-300 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
