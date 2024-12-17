'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, Calendar, Phone } from 'lucide-react';
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

const contactOptions = [
    { icon: <Calendar className="w-6 h-6" />, text: 'Erstgespräch buchen', action: 'book' },
    { icon: <MessageCircle className="w-6 h-6" />, text: 'Kontaktanfrage senden', action: 'contact' },
    { icon: <Phone className="w-6 h-6" />, text: 'Direkt anrufen', action: 'call' },
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

    const handleContactAction = (action: string) => {
        switch (action) {
            case 'book':
                scrollToSection('contact');
                break;
            case 'contact':
                scrollToSection('contact');
                break;
            case 'call':
                window.location.href = 'tel:+4917622629431';
                break;
            default:
                break;
        }
    };

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="container mx-auto px-4 py-16">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold mb-8 text-center text-gray-900">
                    Frag einen Fullstack Entwickler
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
                    Die meistgestellten Fragen, die ich als Fullstack Entwickler bekomme. Falls du noch weitere Fragen hast, kannst du mich jederzeit
                    kontaktieren.
                </motion.p>
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
                            <button
                                className="flex justify-between items-center w-full text-left p-6 focus:outline-none"
                                onClick={() => toggleFaq(index.toString())}>
                                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                                <motion.div animate={{ rotate: openFaq === index.toString() ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                    <ChevronDown className="w-6 h-6 text-orange-500" />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openFaq === index.toString() && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}>
                                        <p className="px-6 pb-6 text-gray-600">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 flex flex-wrap justify-center gap-4">
                    {contactOptions.map((option, index) => (
                        <motion.button
                            key={index}
                            whileHover={{ scale: 1.05, boxShadow: '0px 5px 10px rgba(0,0,0,0.1)' }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleContactAction(option.action)}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-full text-lg font-semibold transition duration-300
                                ${
                                    index === 0
                                        ? 'bg-orange-500 text-white hover:bg-orange-600'
                                        : 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-50'
                                }`}>
                            {option.icon}
                            <span>{option.text}</span>
                        </motion.button>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
