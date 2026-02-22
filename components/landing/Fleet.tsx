import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Gauge, Clock } from "lucide-react"

const packages = [
    {
        name: "Quick Thrill",
        image: "/images/hero1.jpeg",
        description: "A quick pulse-pounding ride to get your adrenaline fix. Perfect for a taste of speed.",
        duration: "10 Minutes",
        price: "₹1,000",
        badges: ["Popular", "Speed"],
    },
    {
        name: "Coastline Cruiser",
        image: "/images/hero2.jpeg",
        description: "Explore the scenic route with a balanced mix of speed and sightseeing time.",
        duration: "30 Minutes",
        price: "₹2,500",
        badges: ["Best Value"],
    },
    {
        name: "The Grand Tour",
        image: "/images/hero3.jpeg",
        description: "The complete experience. Cruise to distant spots and enjoy the open water freedom.",
        duration: "1 Hour",
        price: "₹5,000",
        badges: ["Premium", "Full Experience"],
    },
]

export function Fleet() {
    return (
        <section className="py-12 md:py-24 bg-zinc-50 dark:bg-zinc-900" id="packages">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10 md:mb-16">
                    <Badge variant="outline" className="mb-4 text-primary border-primary/40 uppercase tracking-widest font-bold">Packages</Badge>
                    <h2 className="text-4xl md:text-5xl font-black italic uppercase mb-4 text-gray-900 dark:text-white">Choose Your <span className="text-primary">Package</span></h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Select the perfect duration for your adventure on the water.
                    </p>
                </div>

                <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                    {packages.map((pkg, index) => (
                        <Card key={index} className="flex-none w-[85vw] md:w-auto snap-center overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 bg-white dark:bg-zinc-800 group transform hover:-translate-y-2">
                            <div className="h-64 md:h-72 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                <img
                                    src={pkg.image}
                                    alt={pkg.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
                                    {pkg.badges.map(b => (
                                        <Badge key={b} className="font-bold uppercase tracking-wider">{b}</Badge>
                                    ))}
                                </div>
                                <div className="absolute bottom-4 left-4 z-20">
                                    <span className="text-3xl font-black italic text-white drop-shadow-md">{pkg.price}</span>
                                </div>
                            </div>
                            <CardHeader className="relative pt-6">
                                <CardTitle className="text-2xl font-black uppercase italic tracking-tight">{pkg.name}</CardTitle>
                                <CardDescription className="text-base line-clamp-2">{pkg.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex justify-between text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-5 w-5 text-primary" />
                                        {pkg.duration}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Gauge className="h-5 w-5 text-primary" />
                                        High Speed
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="pb-6">
                                <Button className="w-full text-lg font-bold uppercase py-6 shadow-lg shadow-primary/20 hover:scale-105 transition-transform" asChild>
                                    <a href={`https://wa.me/916238951178?text=Hello!%20I%20would%20like%20to%20book%20the%20${pkg.name}%20package.`} target="_blank" rel="noopener noreferrer">
                                        Book This Package
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section >
    )
}
