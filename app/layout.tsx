import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://speedboatour.in"),
  title: "Speed Boat Ride in Alleppey – Punnamada Lake | Book Now",
  description:
    "speed boat ride in Alleppey at Punnamada Lake. High-speed backwater experience, transparent pricing, private rides. 1000+ happy guests. Book now or call directly.",
  keywords: [
    "speed boat alleppey",
    "alleppey speed boat ride",
    "punnamada speed boat",
    "boat ride alleppey",
    "backwater speed boat",
    "alleppey boating price",
    "speed boat punnamada lake",
    "alappuzha speed boat",
  ],
  authors: [{ name: "Speedboat Tours Alleppey" }],
  creator: "Speedboat Tours Alleppey",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://speedboatour.in",
    title: "Speed Boat Ride in Alleppey – Punnamada Lake",
    description:
      "speed boat rides at Punnamada Lake, Alleppey. Private, high-speed, scenic backwater experience. Book online or WhatsApp us.",
    siteName: "Speedboat Tours Alleppey",
    images: [
      {
        url: "/images/hero1.jpeg",
        width: 1200,
        height: 630,
        alt: "Speed boat ride at Punnamada Lake, Alleppey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Speed Boat Ride in Alleppey – Punnamada Lake",
    description:
      "Premium speed boat rides at Punnamada Lake, Alleppey. Private, high-speed, scenic backwater experience.",
    images: ["/images/hero1.jpeg"],
  },
  alternates: {
    canonical: "https://speedboatour.in",
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
