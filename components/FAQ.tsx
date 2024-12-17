'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    {
        question: 'Was kostet eine Webseite?',
        answer: 'In der Regel informiere ich dich während unseres ersten persönlichen Gesprächs über eine Preisspanne, um sicherzustellen, dass sie deinen Vorstellungen entspricht. Meine Abrechnung erfolgt nicht stundenweise, sondern basiert auf einer festen Projektgebühr. Dadurch weiß jeder Kunde im Voraus genau, welche Investition auf ihn zukommt, unabhängig von der Projektlaufzeit. Du zahlst weder mehr noch weniger, egal wie lange es dauert. Der Preis wird individuell festgelegt, je nach den Zielen, dem Umfang der Arbeit, den geplanten Aktivitäten, den erbrachten Leistungen und dem Zeitplan des Projekts. Aktuell fangen die Preise ab ca. 1500€ an.',
    },
    {
        question: 'Wie kann ich zahlen?',
        answer: 'In der Regel arbeite ich mit einer 40% Anzahlung und einer 60% Schlusszahlung bei Projektabgabe. Es gibt allerdings auch die Möglichkeit direkt zu zahlen. Der Vorteil ist, dass du dadurch einen 5% Rabatt bekommst. Außerdem biete ich einen Ratenplan an mit 0% Zinsen. Es wird lediglich eine pauschale Aufwandsgebühr für die Monatlichen Rechnungen von 100€ fällig - unabhängig von der Dauer des Ratenplans',
    },
    {
        question: 'Wie lange dauert die Umsetzung?',
        answer: 'Das ist sehr individuell und wird im Erstgespräch vereinbart. Pauschal kann man mit 2 Wochen (einfache Projekte) bis zu 8 Wochen (komplexe Projekte) rechnen.',
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
                    {/*                     <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection('contact')}
                        className="bg-white text-orange-500 px-6 py-3 rounded-full text-lg font-semibold border border-orange-500 hover:bg-orange-50 transition duration-300">
                        Kontaktanfrage senden
                    </motion.button> */}
                </div>
            </div>
        </section>
    );
};
