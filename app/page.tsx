import HeroSection from "@/components/landing/HeroSection"
import AboutSection from "@/components/landing/AboutSection"
import InfoSection from "@/components/landing/InfoSection"
import ProductList from "@/components/landing/ProductList"
import SeasonalDishSection from "@/components/landing/SeasonalDish"
import Gallery from "@/components/landing/Gallery"
import BlogSection from "@/components/landing/BlogSection"
import { LandingReservationForm } from "@/components/landing/LandingReservationForm"
import LandingFAQs from "@/components/landing/LandingFAQs"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Info Section */}
      <section id="info">
        <InfoSection />
      </section>

      {/* Menu Highlights Section */}
      <section id="menu">
        <ProductList />
      </section>

      {/* Seasonal Dish Section */}
      <section id="seasonal">
        <SeasonalDishSection />
      </section>

      {/* Reservation Section */}
      <section id="reservation" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-light text-gray-500 font-sacramento">Experience Culinary Excellence</h2>
            <h1 className="text-4xl font-bold text-yellow-400">Book Your Table</h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Reserve your spot at Little Lemon and enjoy an unforgettable Mediterranean dining experience.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <LandingReservationForm />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* Blog Section */}
      <section id="blog">
        <BlogSection />
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-light text-gray-500 font-sacramento">Got Questions?</h2>
            <h1 className="text-4xl font-bold text-yellow-400">Frequently Asked Questions</h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our restaurant, reservations, and dining experience.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <LandingFAQs />
          </div>
        </div>
      </section>
    </main>
  )
}
