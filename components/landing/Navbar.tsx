"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { Ship, Phone, Menu, Sun } from "lucide-react"

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [weather, setWeather] = React.useState<{ temp: number; condition: string } | null>(null)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        // Simulate weather fetch
        const timer = setTimeout(() => {
            setWeather({ temp: 85, condition: "Sunny" })
        }, 2000)
        return () => {
            window.removeEventListener("scroll", handleScroll)
            clearTimeout(timer)
        }
    }, [])

    return (
        <div
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-primary p-2 rounded-xl transform group-hover:skew-x-[-12deg] transition-transform duration-300">
                        <Ship className="h-6 w-6 text-primary-foreground transform group-hover:rotate-[-10deg] transition-transform" />
                    </div>
                    <span className={cn("text-xl font-black italic tracking-tighter uppercase", isScrolled ? "text-gray-900" : "text-white")}>
                        Speed<span className="text-primary">Boats</span>
                    </span>
                </Link>

                {/* Mobile Menu Trigger */}
                <div className="md:hidden flex items-center gap-4">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className={cn(isScrolled ? "text-black" : "text-white")}>
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-black/95 border-l border-white/10 text-white">
                            <SheetHeader>
                                <SheetTitle className="text-left text-2xl font-black italic uppercase text-white">
                                    Speed<span className="text-primary">Boats</span>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-6 mt-12">
                                <Link href="#packages" className="text-xl font-bold hover:text-primary transition-colors uppercase tracking-wider">Packages</Link>
                                <Link href="#features" className="text-xl font-bold hover:text-primary transition-colors uppercase tracking-wider">Features</Link>
                                <Link href="#faq" className="text-xl font-bold hover:text-primary transition-colors uppercase tracking-wider">FAQ</Link>
                                <div className="h-px bg-white/10 my-4" />
                                <div className="flex flex-col gap-6">
                                    <a href="https://wa.me/916238951178" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors">
                                        <div className="bg-white/10 p-2 rounded-full">
                                            <Phone className="h-5 w-5 text-primary" />
                                        </div>
                                        <span className="text-lg font-mono tracking-widest">+91 62389 51178</span>
                                    </a>
                                    <Button className="w-full h-14 text-lg font-black uppercase tracking-widest rounded-full bg-primary text-black hover:bg-white transition-all shadow-lg" asChild>
                                        <a href="https://wa.me/916238951178?text=Hello!%20I%20would%20like%20to%20book%20a%20speedboat%20ride." target="_blank" rel="noopener noreferrer">
                                            Book Now
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                <div className="hidden md:block">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className={cn("bg-transparent uppercase font-bold tracking-wide transition-colors", !isScrolled ? "text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white" : "text-gray-900")}>Packages</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-zinc-950 p-6 no-underline outline-none focus:shadow-md border border-zinc-800"
                                                    href="/"
                                                >
                                                    <Ship className="h-8 w-8 text-primary mb-4" />
                                                    <div className="mb-2 text-xl font-black italic text-white uppercase">
                                                        Speedboat Tours
                                                    </div>
                                                    <p className="text-sm leading-tight text-zinc-400">
                                                        Choose from our exciting range of time-based packages.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <ListItem href="#" title="Quick Thrill">
                                            10 Minutes of pure adrenaline.
                                        </ListItem>
                                        <ListItem href="#" title="Coastline Cruiser">
                                            30 Minutes of scenic speed.
                                        </ListItem>
                                        <ListItem href="#" title="The Grand Tour">
                                            1 Hour ultimate experience.
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/about" legacyBehavior passHref>
                                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent uppercase font-bold tracking-wide transition-colors", !isScrolled ? "text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white" : "text-gray-900")}>
                                        About Us
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    {/* Weather Widget */}
                    <div className={cn("hidden lg:flex items-center gap-2 text-sm font-bold mr-4 uppercase tracking-wider", isScrolled ? "text-gray-900" : "text-white")}>
                        {weather ? (
                            <>
                                <Sun className="h-4 w-4 text-yellow-400" />
                                <span>{weather.temp}°F {weather.condition}</span>
                            </>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Skeleton className="h-4 w-4 rounded-full bg-white/20" />
                                <Skeleton className="h-4 w-16 bg-white/20" />
                            </div>
                        )}
                    </div>

                    <a href="https://wa.me/916238951178" target="_blank" rel="noopener noreferrer" className={cn("hidden md:flex items-center gap-2 text-sm font-bold tracking-widest font-mono group transition-colors", isScrolled ? "text-gray-900 hover:text-primary" : "text-white hover:text-primary")}>
                        <Phone className="h-4 w-4" />
                        <span>+91 62389 51178</span>
                    </a>
                    <Button variant={isScrolled ? "default" : "secondary"} className="h-11 font-black uppercase tracking-widest px-8 rounded-full shadow-lg hover:scale-105 transition-transform active:scale-95" asChild>
                        <a href="https://wa.me/916238951178?text=Hello!%20I%20would%20like%20to%20book%20a%20speedboat%20ride." target="_blank" rel="noopener noreferrer">
                            Book Now
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
