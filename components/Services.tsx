'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, ShoppingCart, Search, Megaphone, ChevronRight } from 'lucide-react';

const services = [
    {
        icon: <Monitor className="w-12 h-12 text-orange-500" />,
        title: 'Webdesign & Entwicklung',
        description: 'Maßgeschneiderte Websites, die auf allen Geräten perfekt funktionieren und Ihre Marke optimal repräsentieren.',
        details: [
            'Responsive Design für alle Geräte',
            'Moderne Frameworks wie React und Next.js',
            'Optimierte Ladezeiten für beste Performance',
            'Barrierefreie Implementierung',
        ],
    },
    {
        icon: <ShoppingCart className="w-12 h-12 text-orange-500" />,
        title: 'E-Commerce Lösungen',
        description: 'Leistungsstarke Online-Shops mit benutzerfreundlichem Design und sicheren Zahlungssystemen.',
        details: [
            'Integration gängiger Zahlungsanbieter',
            'Produktkatalog-Management',
            'Benutzerfreundlicher Checkout-Prozess',
            'Inventar- und Bestellverwaltung',
        ],
    },
    {
        icon: <Search className="w-12 h-12 text-orange-500" />,
        title: 'SEO Optimierung',
        description: 'Verbessern Sie Ihr Ranking in Suchmaschinen und erreichen Sie mehr potenzielle Kunden.',
        details: [
            'On-Page SEO Optimierung',
            'Technische SEO-Analyse und Verbesserung',
            'Content-Strategie für besseres Ranking',
            'Lokale SEO für regionale Unternehmen',
        ],
    },
    {
        icon: <Megaphone className="w-12 h-12 text-orange-500" />,
        title: 'Digitales Marketing',
        description: 'Effektive Marketingstrategien, um Ihre Online-Präsenz zu stärken und Ihren Kundenstamm zu erweitern.',
        details: [
            'Social Media Marketing Kampagnen',
            'E-Mail-Marketing und Automation',
            'Content Marketing Strategien',
            'Analyse und Optimierung von Marketingkanälen',
        ],
    },
];

export const Services = () => {
    const [activeService, setActiveService] = useState<number | null>(null);

    return (
        <section id="services" className="py-20 bg-gradient-to-b from-white to-orange-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Meine Leistungen</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Entdecken Sie maßgeschneiderte Lösungen für Ihren digitalen Erfolg. Klicken Sie auf einen Service, um mehr zu erfahren.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden"
                            onClick={() => setActiveService(activeService === index ? null : index)}>
                            <motion.div
                                className="absolute top-0 left-0 w-full h-1 bg-orange-500"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: activeService === index ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.div className="mb-4" whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
                                {service.icon}
                            </motion.div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            <motion.div
                                animate={{ rotate: activeService === index ? 90 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute bottom-4 right-4 text-orange-500">
                                <ChevronRight />
                            </motion.div>
                            <AnimatePresence>
                                {activeService === index && (
                                    <motion.ul
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="mt-4 space-y-2">
                                        {service.details.map((detail, detailIndex) => (
                                            <motion.li
                                                key={detailIndex}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: detailIndex * 0.1 }}
                                                className="flex items-center text-gray-700">
                                                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                                                {detail}
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
