import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Us | Little Lemon",
  description: "Learn about Little Lemon restaurant, our story, values, and culinary philosophy",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Little Lemon</h1>

        <div className="relative w-full h-80 mb-8 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Little Lemon Restaurant"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <h2>Our Story</h2>
          <p>
            Little Lemon was founded in 2010 by two friends, Mario and Adrian, who shared a passion for Mediterranean
            cuisine and a dream of creating a welcoming space where people could enjoy authentic, flavorful dishes in a
            relaxed atmosphere.
          </p>
          <p>
            What began as a small café with just a few tables has grown into one of the city's most beloved dining
            destinations, known for our commitment to quality ingredients, traditional recipes with modern twists, and
            exceptional service.
          </p>

          <h2>Our Philosophy</h2>
          <p>
            At Little Lemon, we believe that food is more than just sustenance—it's a way to bring people together, to
            celebrate traditions, and to create memorable experiences. Our culinary philosophy is guided by three core
            principles:
          </p>
          <ul>
            <li>
              <strong>Authenticity:</strong> We honor traditional Mediterranean cooking techniques and recipes passed
              down through generations.
            </li>
            <li>
              <strong>Quality:</strong> We source the freshest, highest-quality ingredients, with a focus on local and
              seasonal produce whenever possible.
            </li>
            <li>
              <strong>Innovation:</strong> While respecting tradition, we're not afraid to experiment and add our own
              creative touches to classic dishes.
            </li>
          </ul>

          <h2>Our Team</h2>
          <p>
            The heart of Little Lemon is our dedicated team of culinary professionals and service staff who work
            tirelessly to ensure every guest has an exceptional dining experience. Led by our head chef, David Chen, our
            kitchen team brings together diverse culinary backgrounds and a shared passion for Mediterranean flavors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt="Mario Rossi"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Mario Rossi</h3>
                  <p className="text-gray-500">Co-Founder & Owner</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt="Adrian Gallo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Adrian Gallo</h3>
                  <p className="text-gray-500">Co-Founder & Owner</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                    <Image src="/placeholder.svg?height=128&width=128" alt="David Chen" fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">David Chen</h3>
                  <p className="text-gray-500">Head Chef</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2>Our Commitment to Sustainability</h2>
          <p>
            We're committed to operating our restaurant in an environmentally responsible way. This includes reducing
            food waste, using eco-friendly packaging for takeout orders, and partnering with suppliers who share our
            values of sustainability and ethical practices.
          </p>

          <h2>Visit Us</h2>
          <p>
            We invite you to experience the warm hospitality and delicious cuisine that have made Little Lemon a
            neighborhood favorite. Whether you're joining us for a quick lunch, a celebratory dinner, or ordering
            takeout for a cozy night at home, we look forward to serving you.
          </p>
        </div>
      </div>
    </div>
  )
}
