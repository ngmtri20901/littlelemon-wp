import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQs | Little Lemon",
  description: "Frequently asked questions about Little Lemon restaurant",
}

export default function FAQsPage() {
  return (
    <div className="container mx-auto px-4 py-12 text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

        <div className="mb-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-gray-700">Do you take reservations?</AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Yes, we accept reservations for lunch and dinner. You can make a reservation online through our website,
                by phone, or using our mobile app. We recommend booking in advance, especially for weekends and special
                occasions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-gray-700">What are your hours of operation?</AccordionTrigger>
              <AccordionContent className="text-gray-700">
                We are open Monday through Thursday from 11:00 AM to 9:00 PM, Friday and Saturday from 11:00 AM to 10:00
                PM, and Sunday from 12:00 PM to 8:00 PM. Our kitchen closes 30 minutes before closing time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-gray-700" >Do you offer vegetarian and vegan options?</AccordionTrigger>
              <AccordionContent className="text-gray-700">
                We have a variety of vegetarian and vegan dishes on our menu. Many of our Mediterranean specialties are
                naturally plant-based, and we're happy to accommodate dietary preferences. Just inform your server about
                any dietary restrictions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Is there a dress code?</AccordionTrigger>
              <AccordionContent>
                We maintain a casual to smart-casual dress code. While we don't have strict requirements, we appreciate
                guests dressing appropriately for a nice dining experience. We welcome guests in comfortable attire but
                request no beachwear or athletic wear.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Do you offer takeout and delivery?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer both takeout and delivery services. You can place an order directly through our website,
                by phone, or through popular food delivery platforms. Our full menu is available for takeout, and most
                items are available for delivery.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Do you cater private events?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer catering services for private events, corporate functions, and special occasions. We can
                create customized menus to suit your preferences and budget. Please contact our events coordinator at
                events@littlelemon.com for more information.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>Is there parking available?</AccordionTrigger>
              <AccordionContent>
                We have a small parking lot behind our restaurant available for customers on a first-come, first-served
                basis. There is also street parking available in the neighborhood and a public parking garage two blocks
                away.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>Do you accommodate large groups?</AccordionTrigger>
              <AccordionContent>
                Yes, we can accommodate large groups and offer a semi-private dining area for parties of 8-20 people.
                For groups larger than 8, we recommend making a reservation at least a week in advance. For very large
                groups or private events, please contact our events coordinator.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>Do you have a children's menu?</AccordionTrigger>
              <AccordionContent>
                Yes, we have a special menu for our younger guests featuring kid-friendly versions of Mediterranean
                classics as well as familiar favorites. High chairs and booster seats are available upon request.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>Do you offer gift cards?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer gift cards in any denomination. They can be purchased in-person at the restaurant or
                online through our website. Gift cards make perfect presents for food lovers and can be used for both
                dine-in and takeout orders.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11">
              <AccordionTrigger>What is your cancellation policy for reservations?</AccordionTrigger>
              <AccordionContent>
                We appreciate at least 24 hours' notice for cancellations or changes to your reservation. For parties of
                6 or more, we may require a credit card to hold the reservation, and late cancellations (less than 24
                hours) may incur a fee of $25 per person.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12">
              <AccordionTrigger>Are you wheelchair accessible?</AccordionTrigger>
              <AccordionContent>
                Yes, our restaurant is wheelchair accessible. We have a ramp at the entrance, accessible restrooms, and
                adequate space between tables to accommodate wheelchairs. If you need any special assistance, please let
                us know when making your reservation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Still have questions?</h2>
          <p className="mb-4">
            If you couldn't find the answer to your question, please don't hesitate to contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <p className="font-medium">Call us:</p>
              <p className="text-gray-600">(312) 555-8745</p>
            </div>
            <div className="flex-1">
              <p className="font-medium">Email us:</p>
              <p className="text-gray-600">info@littlelemon.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
