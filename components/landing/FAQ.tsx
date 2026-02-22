import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "Do I need prior boating experience?",
        answer: "No, all our speedboats come with a certified captain. You just sit back and enjoy the ride.",
    },
    {
        question: "What should I bring?",
        answer: "Sunscreen, sunglasses, a hat, and a camera! We provide life jackets and water.",
    },
    {
        question: "Is it safe for children?",
        answer: "Absolutely. We have life jackets for all ages and our captains are trained to drive safely with families.",
    },
    {
        question: "Can I bring my own food and drinks?",
        answer: "Yes, you are welcome to bring snacks and beverages. However, red wine and glass bottles are discouraged to prevent staining and breakage.",
    },
    {
        question: " What acts as the cancellation policy?",
        answer: "Full refund if cancelled 24 hours before the trip. 50% refund if cancelled within 24 hours.",
    },
]

export function FAQ() {
    return (
        <section className="py-24 bg-white dark:bg-black">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">Frequently Asked Questions</h2>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg font-medium text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-gray-600 dark:text-gray-400 text-base">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
