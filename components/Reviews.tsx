'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Star } from 'lucide-react';

type Testimonial = {
    name: string;
    company: string;
    text: string;
    rating: number;
};

const testimonials: Testimonial[] = [
    {
        name: 'Tugce Kurnaz',
        company: 'Autofit Kurnaz Ahlen',
        text: '„Nurettin hat unsere Erwartungen übertroffen. Seine Expertise und sein Engagement haben unser Projekt zum Erfolg geführt."',
        rating: 5,
    },
    {
        name: 'Fatih Ö.',
        company: 'Motor-Getriebe Instandsetzung Löhne',
        text: '„Keiner hätte es besser machen können, ich bin sehr zufrieden, meine Homepage ist einfach nur Perfekt geworden.. Danke!"',
        rating: 5,
    },
    {
        name: 'Malik B.',
        company: 'E-Commerce MB',
        text: '„Kann ich jedem weiterempfehlen. Ich starte seit kurzem mein eigenes Business und ich war an dem Punkt wo ich eine Webseite gebraucht habe und Nurettin Öcel hat mir eine Webseite erstellt genau nach meinen Wünschen."',
        rating: 5,
    },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-xl shadow-lg mb-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-orange-500" />
        <div className="mb-4 flex">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
            ))}
        </div>
        <p className="text-gray-700 mb-6 italic">{testimonial.text}</p>
        <div className="flex items-center">
            <div className="bg-orange-100 rounded-full p-2 mr-4">
                <User className="w-6 h-6 text-orange-500" />
            </div>
            <div>
                <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
            </div>
        </div>
    </motion.div>
);

const TestimonialCarousel = ({ testimonials }: { testimonials: Testimonial[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 8000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    /*     const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }; */

    return (
        <div className="relative">
            <AnimatePresence mode="wait">
                <TestimonialCard key={currentIndex} testimonial={testimonials[currentIndex]} />
            </AnimatePresence>
            {/*             <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-8">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevTestimonial}
                    className="bg-white rounded-full p-2 shadow-md focus:outline-none -translate-x-4">
                    <ChevronLeft className="w-6 h-6 text-orange-500" />
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextTestimonial}
                    className="bg-white rounded-full p-2 shadow-md focus:outline-none translate-x-4">
                    <ChevronRight className="w-6 h-6 text-orange-500" />
                </motion.button>
            </div> */}
        </div>
    );
};

export const Reviews = () => {
    return (
        <section id="reviews" className="py-20 bg-gradient-to-b from-white to-orange-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">Was meine Kunden sagen</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Erfahren Sie, wie ich Unternehmen dabei geholfen habe, ihre Online-Präsenz zu verbessern und ihre Ziele zu erreichen.
                    </p>
                </motion.div>
                <div className="max-w-3xl mx-auto">
                    <TestimonialCarousel testimonials={testimonials} />
                </div>
            </div>
        </section>
    );
};
