'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    {
        question: 'Was ist Fullstack Webentwicklung?',
        answer: 'Fullstack Webentwicklung bedeutet, dass ich sowohl die Frontend- als auch die Backend-Entwicklung einer Website übernehme.',
    },
    {
        question: 'Wie lange dauert ein Projekt?',
        answer: 'Die Dauer eines Projekts hängt von der Komplexität ab, normalerweise zwischen einigen Wochen bis zu mehreren Monaten.',
    },
    {
        question: 'Bieten Sie Wartungsservices an?',
        answer: 'Ja, ich biete auch Wartungs- und Update-Services für Websites und Webanwendungen an.',
    },
];

export const FAQ = () => {
    const [openFaq, setOpenFaq] = useState<string | null>(null);

    const toggleFaq = (index: string) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="faq" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Frag einen Fullstack Entwickler</h2>
                <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
                    Die meistgestellten Fragen, die ich als Fullstack Entwickler bekomme. Falls du noch weitere Fragen hast, kannst du mich jederzeit
                    kontaktieren.
                </p>
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-4 border-b border-gray-200 pb-4">
                            <button className="flex justify-between items-center w-full text-left" onClick={() => toggleFaq(index.toString())}>
                                <span className="text-lg font-semibold">{faq.question}</span>
                                {openFaq === index.toString() ? (
                                    <ChevronUp className="w-6 h-6 text-orange-500" />
                                ) : (
                                    <ChevronDown className="w-6 h-6 text-orange-500" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openFaq === index.toString() && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}>
                                        <p className="mt-2 text-gray-600">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            scrollToSection('contact');
                        }}
                        className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300 mr-4">
                        Jetzt Erstgespräch buchen
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection('contact')}
                        className="bg-white text-orange-500 px-6 py-3 rounded-full text-lg font-semibold border border-orange-500 hover:bg-orange-50 transition duration-300">
                        Kontaktanfrage senden
                    </motion.button>
                </div>
            </div>
        </section>
    );
};
