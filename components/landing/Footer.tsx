"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Ship, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        toast.success("Subscribed!", {
            description: "You've successfully joined our newsletter.",
        })
    }

    return (
        <footer className="bg-white dark:bg-black border-t border-gray-100 dark:border-zinc-800">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-primary p-2 rounded-xl">
                                <Ship className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                SpeedBoats
                            </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm">
                            Experience the thrill of the open sea with our premium fleet of speedboats. Unmatched luxury and performance.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-gray-900 dark:text-white">Quick Links</h4>
                        <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                            <li><a href="#" className="hover:text-primary transition-colors">Fleets</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Packages</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-gray-900 dark:text-white">Newsletter</h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Subscribe to get special offers and updates.
                        </p>
                        <form onSubmit={handleSubscribe} className="flex gap-2">
                            <Input type="email" placeholder="Enter your email" required className="bg-gray-50 dark:bg-zinc-900" />
                            <Button type="submit">Subscribe</Button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-100 dark:border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© 2024 SpeedBoats Inc. All rights reserved.</p>
                    <p>Designed for Luxury.</p>
                </div>
            </div>
        </footer>
    )
}
