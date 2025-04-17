import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Little Lemon",
  description: "Get in touch with Little Lemon restaurant. Find our location, hours, and contact information.",
}

export default function ContactUsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Visit Us</CardTitle>
              <CardDescription>Our restaurant location and hours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-lemon-600 mt-0.5 mr-3" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600">123 Mediterranean Avenue</p>
                  <p className="text-gray-600">Chicago, IL 60007</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-lemon-600 mt-0.5 mr-3" />
                <div>
                  <p className="font-medium">Hours</p>
                  <p className="text-gray-600">Monday - Thursday: 11:00 AM - 9:00 PM</p>
                  <p className="text-gray-600">Friday - Saturday: 11:00 AM - 10:00 PM</p>
                  <p className="text-gray-600">Sunday: 12:00 PM - 8:00 PM</p>
                </div>
              </div>

              <div className="pt-4">
                <Button className="w-full bg-lemon-600 hover:bg-lemon-700">Get Directions</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach out to us</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-lemon-600 mr-3" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">(312) 555-8745</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="h-5 w-5 text-lemon-600 mr-3" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">info@littlelemon.com</p>
                </div>
              </div>

              <div className="pt-2">
                <p className="font-medium mb-2">Follow Us</p>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
            <CardDescription>We'd love to hear from you</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input id="name" type="text" className="w-full p-2 border rounded-md" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input id="email" type="email" className="w-full p-2 border rounded-md" placeholder="Your email" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="Subject of your message"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-2 border rounded-md"
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button type="submit" className="w-full bg-lemon-600 hover:bg-lemon-700">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="rounded-lg overflow-hidden h-96 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.2073927665905!2d-87.63114648456403!3d41.89021237922149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cb1c63b029f%3A0x3ef9184b83d0ebfe!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1625234157650!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
