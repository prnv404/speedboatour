import { ShieldCheck, Clock, Map, Star, ArrowUpRight } from "lucide-react"

const features = [
    {
        icon: Clock,
        title: "On Your Time",
        description: "Flexible hourly bookings tailored to your schedule.",
    },
    {
        icon: ShieldCheck,
        title: "Safety First",
        description: "Certified captains & top-tier safety equipment.",
    },
    {
        icon: Star,
        title: "VIP Luxury",
        description: "Premium seating, service, and complimentary drinks.",
    },
    {
        icon: Map,
        title: "Freedom",
        description: "Custom routes. Hidden beaches. Your adventure.",
    },
]

export function Features() {
    return (
        <section className="py-24 bg-white text-black">
            <div className="container mx-auto px-4">
                <div className="mb-16">
                    <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-[0.8]">
                        Why <br /> <span className="text-gray-400">Choose Us?</span>
                    </h2>
                    <div className="w-full h-px bg-black/10 mt-8" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-white p-12 hover:bg-black hover:text-white transition-all duration-500 flex flex-col justify-between min-h-[300px]"
                        >
                            <div className="flex justify-between items-start">
                                <feature.icon className="h-12 w-12 stroke-[1.5] group-hover:stroke-white transition-colors duration-500" />
                                <ArrowUpRight className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold uppercase mb-3 tracking-wide">{feature.title}</h3>
                                <p className="text-gray-500 text-lg group-hover:text-gray-300 transition-colors duration-300 max-w-xs">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
