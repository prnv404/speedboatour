import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Speedboat Tours | Experience the Thrill",
    template: "%s | Speedboat Tours",
  },
  description: "Speedboat tours tailored for speed, comfort, and unforgettable memories on the open water. Book your adrenaline-fueled adventure today.",
  keywords: ["speedboat tours", "boat rental", "ocean adventure", "high speed boats", "water activities", "boat tours"],
  authors: [{ name: "Speedboat Tours" }],
  creator: "Speedboat Tours",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://speedboatour.in", // Replace with actual domain when launching
    title: "Speedboat Tours | Experience the Thrill",
    description: "Speedboat tours tailored for speed, comfort, and unforgettable memories on the open water. Book your adrenaline-fueled adventure today.",
    siteName: "Speedboat Tours",
    images: [
      {
        url: "/images/hero1.jpeg", // Replace with valid full URL in production if needed
        width: 1200,
        height: 630,
        alt: "Speedboat Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Speedboat Tours | Experience the Thrill",
    description: "Experience raw acceleration and absolute precision on the open water.",
    images: ["/images/hero1.jpeg"],
  },
  alternates: {
    canonical: "https://speedboatour.in", // Replace with actual domain
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
