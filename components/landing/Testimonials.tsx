import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Travel Blogger",
        image: "https://i.pravatar.cc/150?u=sarah",
        content: "The best speedboat experience I've ever had! The captain was knowledgeable and the sunset cruise was magical.",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "Adventure Enthusiast",
        image: "https://i.pravatar.cc/150?u=michael",
        content: "Incredible speed and power on The Titan. Highly recommended for anyone looking for an adrenaline rush.",
        rating: 5,
    },
    {
        name: "Emma Watson",
        role: "Family Vacation",
        image: "https://i.pravatar.cc/150?u=emma",
        content: "Safe, comfortable, and fun for the whole family. The kids loved every minute of it!",
        rating: 4,
    },
]

export function Testimonials() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">What Our Guests Say</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <Card key={index} className="border-none shadow-md bg-white dark:bg-black">
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <Avatar className="h-12 w-12 border-2 border-primary/10">
                                    <AvatarImage src={t.image} alt={t.name} />
                                    <AvatarFallback>{t.name[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h4 className="font-bold text-lg">{t.name}</h4>
                                    <p className="text-sm text-muted-foreground">{t.role}</p>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${i < t.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 italic">"{t.content}"</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
