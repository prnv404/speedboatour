import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://speedboatour.in"),
  title: "Speed Boat in Alleppey – Fast Rides at Punnamada Lake | Book Now",
  description:
    "Book a speed boat in Alleppey at Punnamada Lake. Private high-speed rides from ₹1,000. 1,200+ happy guests, 4.9★ rated. Book instantly via WhatsApp or call now.",
  keywords: [
    "speed boat in alleppey",
    "speed boat alleppey",
    "alleppey speed boat ride",
    "speedboat alleppey price",
    "punnamada lake boat ride",
    "alleppey speedboat tour",
    "speed boat punnamada lake",
    "alappuzha speed boat",
    "alappuzha speedboat",
    "backwater speed boat",
    "boat ride alleppey",
    "alleppey boating price",
    "kerala speedboat tour",
    "water sports alleppey",
    "alleppey water sports",
    "boat ride near alleppey",
  ],
  authors: [{ name: "Speedboat Tours Alleppey" }],
  creator: "Speedboat Tours Alleppey",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://speedboatour.in",
    title: "Speed Boat in Alleppey – Fast Rides at Punnamada Lake",
    description:
      "Book a speed boat in Alleppey at Punnamada Lake. Private high-speed rides from ₹1,000. 1,200+ happy guests. Book via WhatsApp in minutes.",
    siteName: "Speedboat Tours Alleppey",
    images: [
      {
        url: "/images/hero1.jpeg",
        width: 1200,
        height: 630,
        alt: "Speed boat ride at Punnamada Lake, Alleppey, Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Speed Boat in Alleppey – Fast Rides at Punnamada Lake",
    description:
      "Book a speed boat in Alleppey at Punnamada Lake. Private high-speed rides from ₹1,000. 1,200+ happy guests, 4.9★ rated.",
    images: ["/images/hero1.jpeg"],
  },
  alternates: {
    canonical: "https://speedboatour.in",
  },
  verification: {
    google: "jbRdR527pFaJnw3iMbuuMWHurGQjhH5brnDmg_C5yn0",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
