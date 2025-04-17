"use client"
import { Carousel } from "@/components/ui/carousel"
import Image from "next/image"
import { IoCall } from "react-icons/io5"

export default function Gallery() {
  const slides = [
    "/images/slide1.png",
    "/images/slide2.png",
    "/images/slide3.png",
    "/images/slide4.png",
    "/images/slide5.png",
  ]

  return (
    <div className="flex flex-col sm:flex-row bg-neutral-100">
      <div className="w-full md:w-2/3 p-4">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-[601px]">
          <Carousel>
            {slides.map((slide, index) => (
              <div key={index} className="relative w-full h-full">
                <Image
                  src={slide || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4 flex justify-center items-center">
        <div className="p-6 bg-white border-2 border-yellow-400 rounded-lg shadow-lg hover:scale-105 duration-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Opening hours</h2>
          <p className="text-gray-600 mb-4">
            Join us at Little Lemon and indulge in delightful dining experiences all week long.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 pl-9">
            <li>
              <span className="font-bold">Monday - Friday:</span> <br />
              <span>11:00 AM - 9:00 PM</span>
            </li>
            <li className="mt-1">
              <span className="font-bold">Saturday - Sunday:</span> <br />
              <span>10:00 AM - 11:00 PM</span>
            </li>
          </ul>
          <p className="text-gray-600">
            Whether it's a casual lunch or a cozy dinner, we're here to make every meal special.
          </p>
          <div className="flex items-center gap-3 mt-7">
            {/**Call */}
            <div className="text-yellow-400">
              <IoCall size={48} />
            </div>
            {/*Text */}
            <div>
              <p className="text-gray-800 font-bold gap-2 py-2 text-left border-b border-b-yellow-300">Call anytime</p>
              <p className="text-gray-600 py-2">+84 2368 6571</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
