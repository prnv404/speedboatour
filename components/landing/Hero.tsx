"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Star, Shield, MapPin } from "lucide-react"

const HERO_IMAGES = [
    '/images/hero1.jpeg',
    '/images/hero2.jpeg',
    '/images/hero3.jpeg',
    '/images/hero4.jpeg'
]

export function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Container */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-black">
                {/* Cross-fading Image Slider */}
                {HERO_IMAGES.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 z-10 bg-cover bg-center transition-all duration-[2000ms] ease-in-out ${index === currentImageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
                        style={{ backgroundImage: `url('${src}')` }}
                    />
                ))}

                {/* Clean Dark Overlay for readability */}
                <div className="absolute inset-0 z-20 bg-black/50" />
            </div>

            <div className="relative z-30 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
                <div className="max-w-3xl pt-10">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        Experience the <span className="text-primary">Thrill</span> of the Ocean
                    </h1>

                    <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
                        Speedboat tours tailored for speed, comfort, and unforgettable memories on the open water.
                    </p>

                    <div className="flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
                        <Button size="lg" className="h-14 px-10 text-lg font-semibold rounded-md bg-primary hover:bg-white text-black transition-colors" asChild>
                            <a href="https://wa.me/916238951178?text=Hello!%20I%20would%20like%20to%20book%20a%20speedboat%20ride." target="_blank" rel="noopener noreferrer">
                                Book Your Ride
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                        </Button>

                        <a href="https://wa.me/916238951178" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white font-medium text-lg transition-colors flex items-center justify-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                            +91 62389 51178
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
