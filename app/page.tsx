import { Navbar } from "@/components/landing/Navbar"
import { Hero } from "@/components/landing/Hero"
import { Features } from "@/components/landing/Features"
import { Fleet } from "@/components/landing/Fleet"
import { Testimonials } from "@/components/landing/Testimonials"
import { FAQ } from "@/components/landing/FAQ"
import { Footer } from "@/components/landing/Footer"

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Speedboat Tours',
    image: 'https://speedboatour.in/images/hero1.jpeg',
    description: 'Speedboat tours tailored for speed, comfort, and unforgettable memories on the open water.',
    url: 'https://speedboatour.in',
    telephone: '+91 62389 51178',
    priceRange: '₹1000 - ₹5000',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN'
    }
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-primary/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <Features />
      <Fleet />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
