"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
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
  MapPin,
  Star,
  Shield,
  CheckCircle,
  Zap,
  Anchor,
  Waves,
  Users,
  Menu,
  X,
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

const packages = [
  {
    name: "Quick Thrill",
    duration: "10 minutes",
    basePrice: "₹1,000",
    baseSub: "up to 3 persons",
    extraPrice: "+₹300",
    extraSub: "per extra person (4–7)",
    maxCapacity: "7",
    badge: null as string | null,
    features: ["High-speed lake loop", "Life jackets included", "Great for first-timers"],
  },
  {
    name: "Full Rush",
    duration: "30 minutes",
    basePrice: "₹2,500",
    baseSub: "up to 4 persons",
    extraPrice: "₹3,000",
    extraSub: "flat rate for 5–7 persons",
    maxCapacity: "7",
    badge: null as string | null,
    features: [
      "Extended backwater route",
      "Photo stops at scenic spots",
      "Sunrise / sunset option",
      "Full safety equipment",
    ],
  },
  {
    name: "Private Charter",
    duration: "1 hour",
    basePrice: "₹5,000",
    baseSub: "up to 4 persons",
    extraPrice: "₹6,000",
    extraSub: "flat rate for 5–7 persons",
    maxCapacity: "7",
    badge: null as string | null,
    features: [
      "Custom route & timing",
      "Ideal for groups & couples",
      "Sunrise / sunset option",
      "Full safety equipment",
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["TouristAttraction", "LocalBusiness"],
  name: "Alleppey Speed Boat Tours",
  sameAs: [
    "https://share.google/yuSHFGPIllIIMpXJa",
    "https://share.google/w8uocoHZNqc3ywXyg",
  ],
  image: [
    "https://speedboatour.in/images/hero1.jpeg",
    "https://speedboatour.in/images/hero2.jpeg",
    "https://speedboatour.in/images/gallery-1.jpeg",
  ],
  description:
    "Book a speed boat in Alleppey at Punnamada Lake. Private high-speed backwater rides from ₹1,000. 1,200+ happy guests, 5★ rated. Licensed & experienced operators.",
  url: "https://speedboatour.in",
  telephone: "+91 62389 51178",
  priceRange: "₹1000 – ₹6000",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI",
  openingHours: ["Mo-Su 06:00-18:00"],
  hasMap: "https://share.google/yuSHFGPIllIIMpXJa",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Punnamada Lake Jetty",
    addressLocality: "Alleppey",
    addressRegion: "Kerala",
    postalCode: "688006",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: "9.4940", longitude: "76.3282" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "1200",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Arjun Menon" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Absolutely incredible. The 1-hour package is worth every rupee. The boat was fast, the views were stunning.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Thomas George" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Best experience in Alleppey by far. Way better than the typical houseboat tour. Pure adrenaline.",
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
        text: "Speed boat rides in Alleppey start from ₹1,000 for a 10-minute Quick Thrill (up to 3 persons); ₹300 per extra person for groups of 4–7. The Full Rush (30 min) is ₹2,500 for up to 4 persons, or ₹3,000 flat for 5–7 persons. The Private Charter (1 hour) is ₹5,000 for up to 4 persons, or ₹6,000 flat for 5–7 persons. All prices are fixed with no hidden charges.",
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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [justScrolled, setJustScrolled] = useState(false);

  useEffect(() => {
    let prev = false;
    const onScroll = () => {
      const now = window.scrollY > 60;
      if (now && !prev) setJustScrolled(true);
      if (!now) setJustScrolled(false);
      prev = now;
      setScrolled(now);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on scroll
  useEffect(() => {
    if (scrolled) setMobileOpen(false);
  }, [scrolled]);

  const navLinks = [
    { label: "Experience", href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location", href: "#location" },
  ];

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

      {/* ─── PREMIUM FLOATING NAVBAR ──────────────────────────────────────── */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled ? "px-3 sm:px-5 pt-3" : "px-4 sm:px-8 pt-4"
      }`}>
        <header
          className={`relative overflow-hidden transition-all duration-500 ease-out ${
            scrolled
              ? [
                  // Entrance animation
                  justScrolled ? "navbar-enter" : "",
                  // Glass sweep shimmer
                  "glass-sweep",
                  // Premium layered glass background
                  "bg-gradient-to-b from-white/[0.08] to-white/[0.04]",
                  // Strong blur
                  "backdrop-blur-2xl",
                  // Subtle border
                  "border-b border-white/10",
                  // Deep shadow
                  "shadow-[0_4px_60px_rgba(0,0,0,0.6),0_1px_0_rgba(255,255,255,0.06)_inset]",
                  "rounded-xl",
                  // Dark base via ::before (done via inline style below)
                ].join(" ")
              : "bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          }`}
          style={scrolled ? { backgroundColor: "rgba(8,8,12,0.75)" } : {}}
        >
          <nav
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled
                ? "max-w-none px-5 sm:px-8 h-[52px]"
                : "px-5 sm:px-6 h-[52px]"
            }`}
            aria-label="Main navigation"
          >
            {/* — Brand lockup — */}
            <a
              href="/"
              className="flex items-center gap-2.5 group shrink-0"
              aria-label="Alleppey Speed Boat Tours home"
            >
              <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-green-400/30 to-emerald-600/20 border border-green-400/40 flex items-center justify-center group-hover:border-green-400/70 transition-all duration-200 shadow-[0_0_12px_rgba(34,197,94,0.2)]">
                <Waves size={15} className="text-green-400" />
              </div>
              <div className="hidden sm:flex flex-col leading-none">
                <span className="text-white font-black text-[13px] tracking-tight">
                  Alleppey <span className="text-green-400">SpeedBoat</span>
                </span>
                <span className="text-white/35 text-[9px] font-semibold tracking-[0.15em] uppercase">Punnamada Lake</span>
              </div>
            </a>

            {/* — Desktop nav links — */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="relative group px-3.5 py-1.5 text-white/55 hover:text-white text-[13px] font-medium transition-colors duration-150 rounded-lg hover:bg-white/8"
                >
                  {label}
                  <span className="absolute bottom-0.5 left-3.5 right-3.5 h-px bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
                </a>
              ))}
            </div>

            {/* — Right side: phone + CTA + hamburger — */}
            <div className="flex items-center gap-2.5">
              {/* Phone — desktop only */}
              <a
                href={`tel:${PHONE}`}
                className="hidden lg:flex items-center gap-1.5 text-white/45 hover:text-white/80 text-[12px] font-medium transition-colors duration-150 pr-2.5 border-r border-white/10"
              >
                <Phone size={12} className="shrink-0" />
                +91 62389 51178
              </a>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%20want%20to%20book%20a%20speed%20boat%20ride%20in%20Alleppey`}
                target="_blank"
                rel="noopener noreferrer"
                id="nav-whatsapp-cta"
                className="inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-400 text-white font-bold text-[13px] px-4 py-2 rounded-xl transition-all duration-200 shadow-[0_0_18px_rgba(34,197,94,0.45)] hover:shadow-[0_0_28px_rgba(34,197,94,0.7)] hover:scale-[1.05] active:scale-[0.96]"
              >
                <MessageCircle size={14} className="shrink-0" />
                <span className="hidden sm:inline">Book Now</span>
                <span className="sm:hidden">Book</span>
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/10 text-white transition-all duration-200"
              >
                {mobileOpen ? <X size={17} /> : <Menu size={17} />}
              </button>
            </div>
          </nav>

          {/* ── Animated green bottom border glow ── */}
          {scrolled && (
            <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
              <div className="navbar-border-glow absolute inset-0 bg-gradient-to-r from-transparent via-green-400/70 to-transparent" />
            </div>
          )}

          {/* — Mobile dropdown — */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 pb-4 pt-1 flex flex-col gap-1 border-t border-white/10">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-white/70 hover:text-white hover:bg-white/8 text-sm font-medium rounded-xl transition-all duration-150"
                >
                  {label}
                </a>
              ))}
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 px-3 py-2.5 text-white/50 hover:text-white/80 text-sm font-medium rounded-xl transition-all duration-150"
              >
                <Phone size={13} className="shrink-0" />
                +91 62389 51178
              </a>
            </div>
          </div>
        </header>
      </div>

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden" aria-label="Hero">
        {/* ── Background image + layered gradients ── */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero1.jpeg"
            alt="Speed boat cutting through Punnamada Lake at high speed, Alleppey Kerala"
            fill
            priority
            className="object-cover object-center scale-105"
            sizes="100vw"
          />
          {/* Cinematic gradient stack */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-radial-[ellipse_80%_60%_at_50%_50%] from-transparent to-black/40" />
        </div>

        {/* ── Animated SVG speed-lines overlay ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg
            className="absolute right-0 top-0 w-1/2 h-full opacity-20"
            viewBox="0 0 400 800"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {[
              { y: 120, w: 180, delay: "0s" },
              { y: 200, w: 240, delay: "0.4s" },
              { y: 310, w: 130, delay: "0.8s" },
              { y: 420, w: 200, delay: "1.2s" },
              { y: 540, w: 160, delay: "1.6s" },
              { y: 650, w: 220, delay: "2.0s" },
            ].map(({ y, w, delay }, i) => (
              <line
                key={i}
                x1={400 - w}
                y1={y}
                x2="400"
                y2={y}
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="speed-line"
                style={{ animationDelay: delay }}
              />
            ))}
          </svg>
        </div>

        {/* ── Floating glassmorphic stat chips ── */}
        <div className="absolute top-1/4 right-4 md:right-12 lg:right-20 flex flex-col gap-3 md:gap-4 z-20 hidden sm:flex">
          <a
            href="https://share.google/w8uocoHZNqc3ywXyg"
            target="_blank"
            rel="noopener noreferrer"
            title="See our Google reviews"
            className="stat-chip-float backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-4 py-3 md:px-5 md:py-3.5 text-white shadow-xl hover:bg-white/15 hover:border-yellow-400/40 transition-all duration-200 cursor-pointer block"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-yellow-400/20 border border-yellow-400/30 flex items-center justify-center">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">Google Rating</p>
                <p className="text-lg font-black leading-none">5.0★</p>
              </div>
            </div>
          </a>
          <div className="stat-chip-float-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-4 py-3 md:px-5 md:py-3.5 text-white shadow-xl">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-green-400/20 border border-green-400/30 flex items-center justify-center">
                <Users size={14} className="text-green-400" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">Happy Riders</p>
                <p className="text-lg font-black leading-none">1,200+</p>
              </div>
            </div>
          </div>
          <div className="stat-chip-float-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-4 py-3 md:px-5 md:py-3.5 text-white shadow-xl">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-400/20 border border-emerald-400/30 flex items-center justify-center">
                <Zap size={14} className="text-emerald-400" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">Starts From</p>
                <p className="text-lg font-black leading-none">₹1,000</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Hero content — left-aligned editorial layout ── */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-10 pb-28 sm:pb-24 pt-32 sm:pt-40">
          <BlurFade delay={0} duration={0.5}>
            {/* Rating pill */}
            <div className="inline-flex items-center gap-2.5 badge-glow bg-green-500/15 backdrop-blur-sm border border-green-500/35 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white text-xs font-bold tracking-wide">
                Alleppey&apos;s #1 Speed Boat · 5.0★ on Google
              </span>
            </div>
          </BlurFade>

          <BlurFade delay={0.1} duration={0.7}>
            <h1 className="font-black leading-[0.88] tracking-tight mb-6 max-w-3xl">
              {/* Eyebrow line */}
              <span className="block text-white/50 text-sm sm:text-xl md:text-2xl font-semibold tracking-[0.12em] uppercase mb-2 sm:mb-3">
                Punnamada Lake · Alleppey
              </span>
              {/* Main headline */}
              <span className="block text-white text-[clamp(2.6rem,10vw,6.5rem)]">
                Speed Boat
              </span>
              <span className="block text-[clamp(2.6rem,10vw,6.5rem)] bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent">
                in Alleppey.
              </span>
              {/* Sub-line */}
              <span className="block text-white/80 text-[clamp(1.1rem,4vw,2.5rem)] font-bold mt-2 sm:mt-3">
                60 km/h across the backwaters.
              </span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.25} duration={0.6}>
            <p className="text-white/60 text-sm sm:text-lg max-w-lg mb-7 sm:mb-10 leading-relaxed">
              Private, high-speed rides on Kerala&apos;s iconic Punnamada Lake.
              From ₹1,000. No crowds. No slow pace. Pure adrenaline.
            </p>
          </BlurFade>

          {/* CTA row */}
          <BlurFade delay={0.38} duration={0.6}>
            <div className="flex flex-col sm:flex-row gap-3 mb-7 sm:mb-10">
              {/* Primary — shimmer CTA */}
              <a
                href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%20want%20to%20book%20a%20speed%20boat%20ride%20in%20Alleppey`}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-cta"
                className="btn-shimmer relative overflow-hidden group inline-flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-black px-6 sm:px-8 py-4 rounded-2xl transition-all duration-200 text-sm sm:text-base shadow-[0_4px_40px_rgba(34,197,94,0.55)] hover:shadow-[0_4px_60px_rgba(34,197,94,0.8)] hover:scale-[1.04] active:scale-[0.98]"
              >
                <MessageCircle size={18} className="shrink-0" />
                <span className="hidden sm:inline">Book on WhatsApp — Instant Confirm</span>
                <span className="sm:hidden">Book on WhatsApp</span>
                <span className="absolute right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-1 transition-all duration-200 text-lg">→</span>
              </a>
              {/* Secondary — ghost */}
              <a
                href={`tel:${PHONE}`}
                id="hero-call-cta"
                className="inline-flex items-center justify-center gap-2.5 border border-white/30 hover:border-white/60 hover:bg-white/8 text-white font-semibold px-6 sm:px-8 py-4 rounded-2xl transition-all duration-200 text-sm sm:text-base backdrop-blur-sm"
              >
                <Phone size={20} className="shrink-0" />
                Call to Book
              </a>
            </div>
          </BlurFade>

          {/* Trust badges */}
          <BlurFade delay={0.5} duration={0.6}>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-white/45">
              {[
                { icon: Shield, label: "Licensed & certified" },
                { icon: Anchor, label: "Life jackets for all" },
                { icon: CheckCircle, label: "No hidden charges" },
                { icon: Zap, label: "Instant confirmation" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-1.5 font-semibold">
                  <Icon size={10} className="text-green-400 shrink-0" />
                  {label}
                </span>
              ))}
            </div>
          </BlurFade>
        </div>

        {/* ── Scroll indicator — sits above the wave ── */}
        <div className="absolute bottom-20 left-1/2 scroll-caret flex flex-col items-center gap-2 text-white/35 text-[10px] tracking-[0.25em] uppercase z-10">
          <span>Scroll</span>
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true">
            <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* ── Wave SVG divider ── */}
        <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none leading-none">
          <svg
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-16 sm:h-20"
            aria-hidden="true"
          >
            <path
              d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ─── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="border-y border-gray-100 bg-white py-6 sm:py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8 text-center">
          {[
            { icon: Star, label: "Google Rating", value: "5.0★" },
            { icon: Users, label: "Rides Done", value: "1,200+" },
            { icon: MapPin, label: "Location", value: "Punnamada" },
            { icon: Zap, label: "Starts From", value: "₹1,000" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col items-center gap-1.5">
              <Icon size={20} className="text-green-600 opacity-80" />
              <span className="text-[11px] uppercase tracking-widest text-gray-400 font-medium">
                {label}
              </span>
              <span className="font-black text-xl text-gray-900">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ABOUT / INTRO ──────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 bg-white" id="about">
        <div className="max-w-4xl mx-auto">
          <BlurFade inView duration={0.7}>
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-green-600 uppercase tracking-[0.2em]">
                About
              </span>
              <h2 className="text-2xl sm:text-4xl font-black mt-3 text-gray-900">
                The #1 Speed Boat in Alleppey
              </h2>
            </div>
            <div className="prose prose-gray max-w-none text-gray-500 leading-relaxed space-y-4 text-sm sm:text-base md:text-lg text-center">
              <p>
                Looking for the best{" "}
                <strong className="text-gray-700">speed boat in Alleppey</strong>? You&apos;ve
                found it. We operate private, high-speed boat rides on Punnamada Lake, Alappuzha —
                the iconic backwater stretch made famous by the Nehru Trophy Boat Race. Our speed
                boats reach up to 60 km/h, giving you a rush that no houseboat or shikara can come
                close to.
              </p>
              <p>
                Whether you&apos;re a solo traveller, a couple on a honeymoon trip, or a group of
                friends looking for an adrenaline-charged experience in Kerala, our{" "}
                <strong className="text-gray-700">speed boat ride in Alleppey</strong> is the
                perfect add-on to your itinerary. Packages start from just ₹1,000 for a 10-minute
                loop and go up to ₹6,000 for a 1-hour private charter.
              </p>
              <p>
                We are a{" "}
                <strong className="text-gray-700">
                  direct, licensed speed boat operator in Alleppey
                </strong>{" "}
                — not a middleman or travel agency reseller. Every boat is owned and operated by us,
                departing from our jetty at Punnamada Lake, just 3 km from Alleppey town. Safety is
                non-negotiable: every passenger gets a coast guard approved life jacket, and our
                operators are fully certified by Kerala water transport authorities.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ─── EXPERIENCE ───────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-24 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <BlurFade inView delay={0} duration={0.7}>
            <div>
              <span className="text-xs font-bold text-green-600 uppercase tracking-[0.2em]">
                The Experience
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mt-3 mb-4 sm:mb-6 leading-tight text-gray-900">
                Not a Cruise.
                <br />
                <span className="text-gray-400">
                  The Best Speed Boat Ride in Alleppey.
                </span>
              </h2>
              <p className="text-gray-500 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-lg">
                Punnamada Lake looks calm — until you&apos;re on a speed boat in Alleppey slicing
                through it at full throttle. The backwaters blur. The wind hits. For a few minutes,
                there&apos;s nothing else.
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
              <div className="absolute -inset-4 bg-green-500/5 rounded-3xl blur-2xl -z-10" />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ─── PRICING ──────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-24 px-4 bg-gray-50" id="pricing">
        <div className="max-w-5xl mx-auto">
          <BlurFade inView duration={0.6}>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-green-600 uppercase tracking-[0.2em]">
                Pricing
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mt-3 text-gray-900">
                Speed Boat Ride Prices in Alleppey
              </h2>
              <p className="text-gray-500 mt-3 text-base">
                What you see is what you pay. No hidden charges, ever.
              </p>
              <div className="inline-flex items-center gap-2 mt-5 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse shrink-0" />
                Limited daily slots — book in advance to secure your ride
              </div>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {packages.map((pkg) => (
              <BlurFade key={pkg.name} inView duration={0.6} delay={0.05}>
                <div className="relative rounded-2xl bg-white border border-gray-200 p-5 sm:p-7 flex flex-col h-full hover:border-green-500/50 hover:shadow-lg transition-all duration-300 group">
                  {pkg.badge && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                      {pkg.badge}
                    </span>
                  )}
                  <div className="mb-5">
                    <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                    <p className="text-sm text-gray-400 mt-0.5">
                      {pkg.duration} · Max {pkg.maxCapacity} persons
                    </p>
                  </div>
                  <div className="mb-6 rounded-xl overflow-hidden border border-gray-100 divide-y divide-gray-100">
                    <div className="flex items-center justify-between px-4 py-3 bg-gray-50">
                      <span className="text-xs text-gray-500">{pkg.baseSub}</span>
                      <span className="text-xl font-black text-gray-900">{pkg.basePrice}</span>
                    </div>
                    <div className="flex items-center justify-between px-4 py-3 bg-white">
                      <span className="text-xs text-gray-400">{pkg.extraSub}</span>
                      <span className="text-lg font-bold text-green-600">{pkg.extraPrice}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-gray-500">
                        <CheckCircle size={14} className="mt-0.5 shrink-0 text-green-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%20want%20to%20book%20the%20${encodeURIComponent(pkg.name)}%20package%20(${encodeURIComponent(pkg.duration)}).%20Please%20confirm%20availability.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl text-sm transition-all duration-200 bg-green-500 text-white hover:bg-green-400 shadow-[0_0_20px_rgba(34,197,94,0.15)] hover:shadow-[0_0_35px_rgba(34,197,94,0.4)]"
                  >
                    <MessageCircle size={16} />
                    Book on WhatsApp
                  </a>
                </div>
              </BlurFade>
            ))}
          </div>

          <p className="text-center text-gray-600 text-sm mt-8 flex items-center justify-center gap-2">
            <Shield size={14} className="text-green-500" />
            Secure booking · Life jackets provided · Licensed operators · Instant confirmation
          </p>
        </div>
      </section>

      {/* ─── GALLERY ──────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-24 px-4" id="gallery">
        <div className="max-w-6xl mx-auto">
          <BlurFade inView duration={0.6}>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-green-600 uppercase tracking-[0.2em]">
                Gallery
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mt-3 text-gray-900">
                Speed Boat in Alleppey – Real Footage
              </h2>
            </div>
          </BlurFade>
          <FocusCards cards={galleryCards} />
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <BlurFade inView duration={0.6}>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-green-600 uppercase tracking-[0.2em]">
                Why Us
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mt-3 text-gray-900">
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
      <section className="py-14 sm:py-24 px-4 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <BlurFade inView duration={0.6}>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-green-400 uppercase tracking-[0.2em]">
                Reviews
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mt-3 text-white">
                What Guests Say About Our Alleppey Speed Boat
              </h2>
              <div className="flex items-center justify-center gap-3 mt-5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <a
                  href="https://share.google/w8uocoHZNqc3ywXyg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-black text-2xl hover:text-yellow-400 transition-colors"
                  title="View our Google reviews"
                >5.0</a>
                <span className="text-gray-500 text-sm">from 1,200+ verified rides</span>
              </div>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                name: "Arjun Menon",
                location: "Bangalore",
                initial: "A",
                text: "Absolutely incredible. The 1-hour package is worth every rupee. The boat was fast, the views were stunning. Already planning a return trip.",
                rating: 5,
              },
              {
                name: "Priya & Rahul",
                location: "Mumbai",
                initial: "P",
                text: "Booked via WhatsApp at 7am and were on the water by 9am. Super responsive team. The sunset ride was magical. Must-do for couples.",
                rating: 5,
              },
              {
                name: "Thomas George",
                location: "Dubai",
                initial: "T",
                text: "Best experience in Alleppey by far. Way better than the typical houseboat tour. Pure adrenaline. Do the 2-hour charter — totally worth it.",
                rating: 5,
              },
            ].map((review) => (
              <BlurFade key={review.name} inView duration={0.6} delay={0.05}>
                <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 h-full flex flex-col hover:border-green-500/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center text-green-400 font-black text-sm shrink-0">
                      {review.initial}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{review.name}</p>
                      <p className="text-gray-500 text-xs">{review.location} · Verified Guest</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed flex-1">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>

          <BlurFade inView duration={0.6} delay={0.1}>
            <div className="mt-10 text-center">
              <a
                href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%20want%20to%20book%20a%20speed%20boat%20ride%20in%20Alleppey`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 text-base shadow-[0_0_30px_rgba(34,197,94,0.25)] hover:shadow-[0_0_50px_rgba(34,197,94,0.45)] hover:scale-[1.03]"
              >
                <MessageCircle size={18} />
                Book Your Ride Now
              </a>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ─── LOCATION ─────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-24 px-4 bg-gray-50" id="location">
        <div className="max-w-5xl mx-auto">
          <BlurFade inView duration={0.6}>
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-green-600 uppercase tracking-[0.2em]">
                Location
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mt-3 text-gray-900">
                Speed Boat Jetty – Punnamada Lake, Alleppey
              </h2>
              <p className="text-gray-400 mt-3 max-w-md mx-auto">
                Find our speed boat jetty at Punnamada Lake, Alleppey (Alappuzha), Kerala — 3 km
                from town. Easy to reach by auto-rickshaw or cab.
              </p>
            </div>
          </BlurFade>
          <div className="rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7804.3375796548635!2d76.35300370060168!3d9.499471220289266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1789444690109!5m2!1sen!2sin"
              width="100%"
              className="h-[260px] sm:h-[380px] md:h-[420px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Alleppey Speed Boat Tours – Punnamada Lake location"
            />
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-24 px-4" id="faq">
        <div className="max-w-2xl mx-auto">
          <BlurFade inView duration={0.6}>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-green-600 uppercase tracking-[0.2em]">
                FAQ
              </span>
              <h2 className="text-2xl sm:text-4xl font-black mt-3 text-gray-900">
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
                a: "Speed boat rides in Alleppey start from ₹1,000 for a 10-minute Quick Thrill (up to 3 persons); ₹300/person for groups of 4–7. The Full Rush (30 min) is ₹2,500 for up to 4 persons, or ₹3,000 flat for 5–7 persons. The Private Charter (1 hour) is ₹5,000 for up to 4 persons, or ₹6,000 flat for 5–7 persons. All prices are fixed — no hidden charges.",
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
                a: "All packages fit up to 7 persons. Quick Thrill: ₹1,000 for 3 persons, then ₹300 per extra person (4–7). Full Rush & Private Charter: flat rate for groups above 4. No overloading — safety is non-negotiable.",
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
      <section className="relative py-20 sm:py-32 px-4 overflow-hidden bg-gray-950">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[350px] bg-green-500/8 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <BlurFade inView duration={0.6}>
            <div className="w-16 h-16 rounded-2xl bg-green-500/15 border border-green-500/25 flex items-center justify-center mx-auto mb-8">
              <Waves size={32} className="text-green-400" />
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight text-white">
              Don&apos;t Leave Alleppey
              <br />
              <span className="text-gray-600">Without This Rush.</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-lg mb-7 sm:mb-10">
              Punnamada Lake is waiting. WhatsApp us and you&apos;ll be on the water in hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%20want%20to%20book%20a%20speed%20boat%20ride%20in%20Alleppey`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-4 rounded-xl transition-all duration-200 text-base shadow-[0_0_40px_rgba(34,197,94,0.3)] hover:shadow-[0_0_60px_rgba(34,197,94,0.5)] hover:scale-[1.03]"
              >
                <MessageCircle size={22} />
                WhatsApp Us Now
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-3 border border-gray-700 hover:border-green-500/40 hover:text-green-400 text-gray-300 font-semibold px-10 py-4 rounded-xl transition-all duration-200 text-base"
              >
                <Phone size={22} />
                +91 62389 51178
              </a>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-gray-800 py-10 px-4 pb-[calc(2.5rem+env(safe-area-inset-bottom))] text-center bg-gray-950 space-y-2 md:pb-10">
        <p className="text-gray-400 text-sm font-semibold">
          Speed Boat in Alleppey · Punnamada Lake Jetty · Alappuzha, Kerala 688006
        </p>
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} Alleppey Speed Boat Tours · Licensed & Certified Speed Boat
          Operator in Alleppey ·{" "}
          <a href={`tel:${PHONE}`} className="hover:text-green-400 transition-colors">
            +91 62389 51178
          </a>
        </p>
      </footer>

      {/* ─── STICKY MOBILE CTA ────────────────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
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
