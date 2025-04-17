"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LandingFAQs() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-gray-700">Do you take reservations?</AccordionTrigger>
        <AccordionContent className="text-gray-700">
          Yes, we accept reservations for lunch and dinner. You can make a reservation online through our website, by
          phone, or using our mobile app. We recommend booking in advance, especially for weekends and special
          occasions.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="text-gray-700">What are your hours of operation?</AccordionTrigger>
        <AccordionContent className="text-gray-700">
          We are open Monday through Thursday from 11:00 AM to 9:00 PM, Friday and Saturday from 11:00 AM to 10:00 PM,
          and Sunday from 12:00 PM to 8:00 PM. Our kitchen closes 30 minutes before closing time.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className="text-gray-700">Do you offer vegetarian and vegan options?</AccordionTrigger>
        <AccordionContent className="text-gray-700">
          We have a variety of vegetarian and vegan dishes on our menu. Many of our Mediterranean specialties are
          naturally plant-based, and we're happy to accommodate dietary preferences. Just inform your server about any
          dietary restrictions.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger className="text-gray-700">Is there a dress code?</AccordionTrigger>
        <AccordionContent className="text-gray-700">
          We maintain a casual to smart-casual dress code. While we don't have strict requirements, we appreciate guests
          dressing appropriately for a nice dining experience. We welcome guests in comfortable attire but request no
          beachwear or athletic wear.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger className="text-gray-700">Do you offer takeout and delivery?</AccordionTrigger>
        <AccordionContent className="text-gray-700">
          Yes, we offer both takeout and delivery services. You can place an order directly through our website, by
          phone, or through popular food delivery platforms. Our full menu is available for takeout, and most items are
          available for delivery.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <AccordionTrigger className="text-gray-700">Do you cater private events?</AccordionTrigger>
        <AccordionContent className="text-gray-700">
          Yes, we offer catering services for private events, corporate functions, and special occasions. We can create
          customized menus to suit your preferences and budget. Please contact our events coordinator for more
          information.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
