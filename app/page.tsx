import Image from "next/image";
import { BorderBeam } from "@/components/ui/border-beam";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { FocusCards } from "@/components/ui/focus-cards";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  MessageCircle,
  Clock,
  Users,
  MapPin,
  Star,
  Shield,
  CheckCircle,
  Zap,
  Anchor,
  Waves,
} from "lucide-react";

const PHONE = "+916238951178";
const WHATSAPP = "916238951178";

const galleryCards = [
  { title: "Speed Boat in Alleppey", src: "/images/gallery-1.jpeg" },
  { title: "Punnamada Lake Backwaters", src: "/images/gallery-2.jpeg" },
  { title: "Alleppey Speed Boat Ride", src: "/images/gallery-3.jpeg" },
  { title: "Adrenaline on the Water", src: "/images/gallery-4.jpeg" },
  { title: "Alleppey Speedboat Tour", src: "/images/gallery-5.jpeg" },
  { title: "High-Speed Backwater Ride", src: "/images/gallery-6.jpeg" },
  { title: "Kerala Backwater Views", src: "/images/gallery-7.jpeg" },
  { title: "Speedboat Tours Alleppey", src: "/images/gallery-8.jpeg" },
  { title: "Thrilling Speed Boat Experience", src: "/images/gallery-9.jpeg" },
  { title: "Kerala Backwaters at Speed", src: "/images/gallery-10.jpeg" },
  { title: "Morning Ride Punnamada Lake", src: "/images/gallery-11.jpeg" },
  { title: "Sunset Speed Boat Alleppey", src: "/images/gallery-12.jpeg" },
  { title: "Water Splash Alleppey", src: "/images/gallery-13.jpeg" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["TouristAttraction", "LocalBusiness"],
  name: "Speedboat Tours Alleppey",
  image: [
    "https://speedboatour.in/images/hero1.jpeg",
    "https://speedboatour.in/images/hero2.jpeg",
    "https://speedboatour.in/images/gallery-1.jpeg",
  ],
  description:
    "Book a speed boat in Alleppey at Punnamada Lake. Private high-speed backwater rides from ₹1,000. 1,200+ happy guests, 4.9★ rated. Licensed & experienced operators.",
  url: "https://speedboatour.in",
  telephone: "+91 62389 51178",
  priceRange: "₹1000 – ₹6000",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI",
  openingHours: ["Mo-Su 06:00-18:00"],
  hasMap: "https://www.google.com/maps?q=Punnamada+Lake,+Alleppey,+Kerala",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Punnamada Lake Jetty",
    addressLocality: "Alleppey",
    addressRegion: "Kerala",
    postalCode: "688006",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "9.4940",
    longitude: "76.3282",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1200",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Arjun Menon" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Absolutely incredible. The 1-hour package is worth every rupee. The boat was fast, the views were stunning.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Thomas George" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Best experience in Alleppey by far. Way better than the typical houseboat tour. Pure adrenaline.",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best time for a speed boat ride in Alleppey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Early morning (6–9 AM) and late afternoon (4–6 PM) are ideal. The light is beautiful, the water is calm, and it's not too hot. Sunrise and sunset rides are especially popular.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a speed boat ride cost in Alleppey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Speed boat rides in Alleppey start from ₹1,000 for a 10-minute Quick Thrill (up to 3 people). The Full Rush (30 min, up to 7 people) is ₹3,000, and a Private Charter (1 hour, up to 7 people) is ₹6,000. All prices are fixed with no hidden charges.",
      },
    },
    {
      "@type": "Question",
      name: "Where is the speed boat jetty in Alleppey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our speed boat jetty is located at Punnamada Lake, Alleppey (Alappuzha), Kerala – approximately 3 km from Alleppey town centre. Easily reachable by auto-rickshaw or cab.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book a speed boat ride in Alleppey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The easiest way to book a speed boat ride in Alleppey is via WhatsApp — message us your date, time, and chosen package. You can also call directly. Confirmation is instant.",
      },
    },
    {
      "@type": "Question",
      name: "Is the speed boat ride in Alleppey safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. All rides are operated by licensed, experienced professionals. We provide coast guard approved life jackets for every passenger and follow all Kerala water transport safety regulations.",
      },
    },
    {
      "@type": "Question",
      name: "Can I bring children on the speed boat in Alleppey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, children are welcome with appropriately sized life jackets. For very young children (under 5), we recommend the 30-min package and adjust speed accordingly.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cancellation policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Free cancellation up to 24 hours before your ride. Within 24 hours, a 50% charge applies. Bad weather? We reschedule at no cost.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Boat image — moody, cinematic */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero4.jpeg"
            alt="Speed boat cutting through Punnamada Lake at high speed"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Multi-layer overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-24 pb-32">

          {/* Hook headline */}
          <BlurFade delay={0.1} duration={0.7}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-6">
              <span className="block text-white">Speed Boat</span>
              <span className="block bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent">
                in Alleppey.
              </span>
              <span className="block text-white/90 text-4xl sm:text-5xl md:text-6xl font-bold mt-2">
                60 km/h across Punnamada Lake.
              </span>
            </h1>
          </BlurFade>

          {/* Subtext */}
          <BlurFade delay={0.25} duration={0.6}>
            <p className="text-white/70 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
              The most thrilling speed boat ride in Alleppey — private, high-speed,
              and entirely yours. No crowds. No slow pace. Just the backwaters at full throttle.
            </p>
          </BlurFade>

          {/* CTAs */}
          <BlurFade delay={0.4} duration={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%20want%20to%20book%20a%20speed%20boat%20ride%20in%20Alleppey`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 text-base shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)]"
              >
                <MessageCircle size={20} />
                Book on WhatsApp
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2.5 border border-white/40 hover:border-white/70 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base backdrop-blur-sm"
              >
                <Phone size={20} />
                Call to Book
              </a>
            </div>
          </BlurFade>

          {/* Social proof */}
          <BlurFade delay={0.5} duration={0.6}>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-1.5 text-white/60">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-1 text-white/80">4.9 / 5</span>
              </div>
              <div className="w-px h-4 bg-white/30" />
              <span className="text-white/60">
                <NumberTicker value={1200} className="text-green-400 font-bold text-base" />
                <span className="ml-1">+ rides completed</span>
              </span>
            </div>
          </BlurFade>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 text-xs">
          <span className="tracking-widest uppercase text-[10px]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ─── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="border-y border-gray-200 bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Clock, label: "Ride Duration", value: "30–60 min" },
            { icon: Users, label: "Max Capacity", value: "7 persons" },
            { icon: MapPin, label: "Location", value: "Punnamada" },
            { icon: Zap, label: "Starting At", value: "₹1,000" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col items-center gap-1.5">
              <Icon size={20} className="text-green-600 opacity-80" />
              <span className="text-[11px] uppercase tracking-widest text-gray-400 font-medium">
                {label}
              </span>
              <span className="font-bold text-xl text-gray-900">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ABOUT / INTRO ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white" id="about">
        <div className="max-w-4xl mx-auto">
          <BlurFade inView duration={0.7}>
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-green-600 uppercase tracking-[0.2em]">
                About
              </span>
              <h2 className="text-3xl sm:text-4xl font-black mt-3 text-gray-900">
                The #1 Speed Boat in Alleppey
              </h2>
            </div>
            <div className="prose prose-gray max-w-none text-gray-500 leading-relaxed space-y-4 text-base sm:text-lg text-center">
              <p>
                Looking for the best <strong className="text-gray-700">speed boat in Alleppey</strong>? You&apos;ve found it.
                We operate private, high-speed boat rides on Punnamada Lake, Alappuzha — the iconic backwater stretch
                made famous by the Nehru Trophy Boat Race. Our speed boats reach up to 60 km/h, giving you a rush
                that no houseboat or shikara can come close to.
              </p>
              <p>
                Whether you&apos;re a solo traveller, a couple on a honeymoon trip, or a group of friends looking for
                an adrenaline-charged experience in Kerala, our <strong className="text-gray-700">speed boat ride in Alleppey</strong> is
                the perfect add-on to your itinerary. Packages start from just ₹1,000 for a 10-minute loop and go
                up to ₹6,000 for a 1-hour private charter.
              </p>
              <p>
                We are a <strong className="text-gray-700">direct, licensed speed boat operator in Alleppey</strong> — not a middleman or
                travel agency reseller. Every boat is owned and operated by us, departing from our jetty at
                Punnamada Lake, just 3 km from Alleppey town. Safety is non-negotiable: every passenger gets a
                coast guard approved life jacket, and our operators are fully certified by Kerala water transport
                authorities.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ─── EXPERIENCE ───────────────────────────────────────────────────── */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <BlurFade inView delay={0} duration={0.7}>
            <div>
              <span className="text-xs font-bold text-green-600 uppercase tracking-[0.2em]">
                The Experience
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3 mb-6 leading-tight text-gray-900">
                Not a Cruise.
                <br />
                <span className="text-gray-400">The Best Speed Boat Ride in Alleppey.</span>
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed text-lg">
                Punnamada Lake looks calm — until you&apos;re on a speed boat in Alleppey slicing
                through it at full throttle. The backwaters blur. The wind hits.
                For a few minutes, there&apos;s nothing else.
              </p>
              <ul className="space-y-4">
                {[
                  "High-speed private ride — just your group",
                  "Scenic Kerala backwaters & open water",
                  "Morning & evening slots available",
                  "Life jackets + full safety gear",
                  "Licensed & experienced local operators",
                  "Book in under 2 minutes via WhatsApp",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600">
                    <span className="mt-1 w-4 h-4 rounded-full border border-green-500/50 bg-green-500/10 flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </BlurFade>

          <BlurFade inView delay={0.15} duration={0.7}>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] ring-1 ring-gray-200 shadow-[0_0_60px_rgba(34,197,94,0.1)]">
                <Image
                  src="/images/hero2.jpeg"
                  alt="Speed boat at Punnamada Lake backwaters Alleppey"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-green-500/5 rounded-3xl blur-2xl -z-10" />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ─── PRICING ──────────────────────────────────────────────────────── */}
      <section
        className="py-24 px-4 bg-gray-50"
        id="pricing"
      >
        <div className="max-w-5xl mx-auto">
          <BlurFade inView duration={0.6}>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-green-600 uppercase tracking-[0.2em]">
                Pricing
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3 text-gray-900">
                Speed Boat Ride Prices in Alleppey
              </h2>
              <p className="text-gray-400 mt-3 text-base">
                What you see is what you pay. No hidden charges, ever.
              </p>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                name: "Quick Thrill",
                duration: "10 minutes",
                price: "₹1,000",
                sub: "up to 3 people",
                features: [
                  "High-speed lake loop",
                  "Life jackets included",
                  "Great for first-timers",
                ],
                popular: false,
              },
              {
                name: "Full Rush",
                duration: "30 minutes",
                price: "₹3,000",
                sub: "up to 7 people",
                features: [
                  "Extended backwater route",
                  "Photo stops at scenic spots",
                  "Sunrise / sunset option",
                  "Full safety equipment",
                ],
                popular: true,
              },
              {
                name: "Private Charter",
                duration: "1 hour",
                price: "₹6,000",
                sub: "up to 7 people",
                features: [
                  "Custom route & timing",
                  "Up to 7 passengers",
                  "Ideal for groups & couples",
                  "Full safety equipment",
                ],
                popular: false,
              },
            ].map((pkg) => (
              <BlurFade key={pkg.name} inView duration={0.6} delay={0.05}>
                <div
                  className={`relative rounded-2xl p-7 flex flex-col h-full transition-all duration-300 ${
                    pkg.popular
                      ? "bg-gradient-to-b from-green-500/15 to-green-900/5 border border-green-500/40 shadow-[0_0_40px_rgba(34,197,94,0.15)]"
                      : "bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md"
                  }`}
                >
                  {pkg.popular && (
                    <>
                      <BorderBeam colorFrom="#22c55e" colorTo="#16a34a" duration={4} />
                      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                        Most Popular
                      </span>
                    </>
                  )}

                  <div className="mb-5">
                    <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                    <p className="text-sm text-gray-400 mt-0.5">{pkg.duration}</p>
                  </div>

                  <div className="mb-6">
                    <span className="text-5xl font-black text-gray-900">{pkg.price}</span>
                    <span className="text-sm text-gray-400 ml-2">{pkg.sub}</span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-gray-500">
                        <CheckCircle
                          size={14}
                          className={`mt-0.5 shrink-0 ${pkg.popular ? "text-green-500" : "text-gray-300"}`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%20want%20to%20book%20the%20${encodeURIComponent(pkg.name)}%20package`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto text-center font-bold py-3.5 rounded-xl text-sm transition-all duration-200 ${
                      pkg.popular
                        ? "bg-green-500 text-white hover:bg-green-600 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                        : "border border-gray-300 text-gray-600 hover:border-green-500 hover:text-green-600 hover:bg-green-50"
                    }`}
                  >
                    Book This Package
                  </a>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <BlurFade inView duration={0.6}>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-green-600 uppercase tracking-[0.2em]">
                Gallery
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3 text-gray-900">
                Speed Boat in Alleppey – Real Footage
              </h2>
            </div>
          </BlurFade>
          <FocusCards cards={galleryCards} />
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <BlurFade inView duration={0.6}>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-green-600 uppercase tracking-[0.2em]">
                Why Us
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3 text-gray-900">
                Why We&apos;re Alleppey&apos;s #1 Speed Boat Operator
              </h2>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Anchor,
                title: "Direct Local Operator",
                desc: "We own every speed boat in Alleppey. No resellers, no middlemen. Book direct from our Punnamada Lake jetty.",
              },
              {
                icon: Shield,
                title: "Safety First",
                desc: "All Alleppey speed boat rides are by licensed, certified operators with coast guard approved life jackets. Zero compromise.",
              },
              {
                icon: CheckCircle,
                title: "No Hidden Fees",
                desc: "Speed boat ride prices in Alleppey are exactly what you see. No commissions, no add-ons. Always.",
              },
              {
                icon: Zap,
                title: "Book in 2 min",
                desc: "One WhatsApp message and your Alleppey speed boat is confirmed. No forms, no waiting, no middlemen.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <BlurFade key={title} inView duration={0.6} delay={0.05}>
                <div className="bg-white border border-gray-200 hover:border-green-500/30 hover:shadow-md rounded-2xl p-6 h-full transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-5 group-hover:bg-green-500/15 transition-colors">
                    <Icon size={22} className="text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <BlurFade inView duration={0.6}>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-green-600 uppercase tracking-[0.2em]">
                Reviews
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3 text-gray-900">
                What Guests Say About Our Alleppey Speed Boat
              </h2>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                name: "Arjun Menon",
                location: "Bangalore",
                text: "Absolutely incredible. The 1-hour package is worth every rupee. The boat was fast, the views were stunning. Already planning a return trip.",
                rating: 5,
              },
              {
                name: "Priya & Rahul",
                location: "Mumbai",
                text: "Booked via WhatsApp at 7am and were on the water by 9am. Super responsive team. The sunset ride was magical. Must-do for couples.",
                rating: 5,
              },
              {
                name: "Thomas George",
                location: "Dubai",
                text: "Best experience in Alleppey by far. Way better than the typical houseboat tour. Pure adrenaline. Do the 2-hour charter — totally worth it.",
                rating: 5,
              },
            ].map((review) => (
              <BlurFade key={review.name} inView duration={0.6} delay={0.05}>
                <div className="relative bg-white border border-gray-200 rounded-2xl p-6 h-full flex flex-col hover:border-gray-300 hover:shadow-md transition-all duration-300">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                    <p className="text-gray-400 text-xs">{review.location}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOCATION ─────────────────────────────────────────────────────── */}
      <section
        className="py-24 px-4 bg-gray-50"
        id="location"
      >
        <div className="max-w-5xl mx-auto">
          <BlurFade inView duration={0.6}>
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-green-600 uppercase tracking-[0.2em]">
                Location
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3 text-gray-900">
                Speed Boat Jetty – Punnamada Lake, Alleppey
              </h2>
              <p className="text-gray-400 mt-3 max-w-md mx-auto">
                Find our speed boat jetty at Punnamada Lake, Alleppey (Alappuzha), Kerala — 3 km from town.
                Easy to reach by auto-rickshaw or cab.
              </p>
            </div>
          </BlurFade>

          <div className="rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.7!2d76.3282!3d9.4940!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08906978a52ca7%3A0x3a26c2cf10abf65b!2sPunnamada%20Lake!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Punnamada Lake Alleppey map"
            />
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4" id="faq">
        <div className="max-w-2xl mx-auto">
          <BlurFade inView duration={0.6}>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-green-600 uppercase tracking-[0.2em]">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-black mt-3 text-gray-900">
                Speed Boat in Alleppey – FAQs
              </h2>
            </div>
          </BlurFade>

          <Accordion type="single" collapsible className="space-y-3">
            {[
              {
                q: "What is the best time for a speed boat ride in Alleppey?",
                a: "Early morning (6–9 AM) and late afternoon (4–6 PM) are ideal. The light is beautiful, the water is calm, and it's not too hot. Sunrise and sunset rides at Punnamada Lake are especially popular.",
              },
              {
                q: "How much does a speed boat ride cost in Alleppey?",
                a: "Speed boat rides in Alleppey start from ₹1,000 for a 10-minute Quick Thrill (up to 3 people). The Full Rush (30 min, up to 7 people) is ₹3,000, and a Private Charter (1 hour, up to 7 people) is ₹6,000. All prices are fixed — no hidden charges.",
              },
              {
                q: "Where is the speed boat jetty in Alleppey?",
                a: "Our speed boat jetty is at Punnamada Lake, Alleppey (Alappuzha), Kerala — about 3 km from town. Easily reachable by auto-rickshaw or cab from Alleppey town or your houseboat jetty.",
              },
              {
                q: "How do I book a speed boat ride in Alleppey?",
                a: "The easiest way is via WhatsApp — message us your preferred date, time, and package. You can also call directly. Confirmation is instant with no forms or waiting.",
              },
              {
                q: "Is the speed boat ride in Alleppey safe?",
                a: "Absolutely. All rides are operated by licensed, experienced professionals. We provide coast guard approved life jackets for every passenger and follow all Kerala water transport safety regulations.",
              },
              {
                q: "Can I bring children on the speed boat in Alleppey?",
                a: "Yes, children are welcome with appropriately sized life jackets. For very young children (under 5), we recommend the 30-min package and adjust speed accordingly.",
              },
              {
                q: "What is the cancellation policy?",
                a: "Free cancellation up to 24 hours before your ride. Within 24 hours, a 50% charge applies. Bad weather? We reschedule at no cost.",
              },
              {
                q: "How many people can ride at once?",
                a: "Quick Thrill fits up to 3. Full Rush and Private Charter fit up to 7. No overloading — safety is non-negotiable.",
              },
            ].map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-gray-200 rounded-xl px-5 bg-white hover:bg-gray-50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-700 hover:text-gray-900 hover:no-underline py-4 text-sm">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-sm leading-relaxed pb-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="relative py-32 px-4 overflow-hidden bg-gray-50">
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <BlurFade inView duration={0.6}>
            <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-8">
              <Waves size={32} className="text-green-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight text-gray-900">
              Don&apos;t Leave Alleppey
              <br />
              <span className="text-gray-400">Without This Rush.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Punnamada Lake is waiting. WhatsApp us and you&apos;ll be on the
              water in hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%20want%20to%20book%20a%20speed%20boat%20ride%20in%20Alleppey`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-4 rounded-xl transition-all duration-200 text-base shadow-[0_0_40px_rgba(34,197,94,0.3)] hover:shadow-[0_0_60px_rgba(34,197,94,0.5)]"
              >
                <MessageCircle size={22} />
                WhatsApp Us Now
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-3 border border-gray-300 hover:border-green-500 hover:text-green-600 hover:bg-green-50 text-gray-600 font-semibold px-10 py-4 rounded-xl transition-all duration-200 text-base"
              >
                <Phone size={22} />
                +91 62389 51178
              </a>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-gray-200 py-10 px-4 text-center bg-white space-y-2">
        <p className="text-gray-700 text-sm font-semibold">
          Speed Boat in Alleppey · Punnamada Lake Jetty · Alappuzha, Kerala 688006
        </p>
        <p className="text-gray-400 text-xs">
          © {new Date().getFullYear()} Speedboat Tours Alleppey · Licensed & Certified Speed Boat Operator in Alleppey ·{" "}
          <a href={`tel:${PHONE}`} className="hover:text-green-600 transition-colors">+91 62389 51178</a>
        </p>
      </footer>

      {/* ─── STICKY MOBILE CTA ────────────────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
        <div className="grid grid-cols-2">
          <a
            href={`tel:${PHONE}`}
            className="flex items-center justify-center gap-2 py-4 text-gray-600 hover:text-gray-900 font-semibold text-sm transition-colors border-r border-gray-200"
          >
            <Phone size={18} className="text-green-600" />
            Call Now
          </a>
          <a
            href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%20want%20to%20book%20a%20speed%20boat%20ride%20in%20Alleppey`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-4 bg-green-500 hover:bg-green-600 text-white font-bold text-sm transition-colors"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
