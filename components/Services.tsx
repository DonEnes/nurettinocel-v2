'use client';

import { motion } from 'framer-motion';
import { Monitor, ShoppingCart, Search, Megaphone } from 'lucide-react';

const services = [
    {
        icon: <Monitor className="w-12 h-12 text-orange-500" />,
        title: 'Webdesign & Entwicklung',
        description: 'Maßgeschneiderte Websites, die auf allen Geräten perfekt funktionieren und Ihre Marke optimal repräsentieren.',
    },
    {
        icon: <ShoppingCart className="w-12 h-12 text-orange-500" />,
        title: 'E-Commerce Lösungen',
        description: 'Leistungsstarke Online-Shops mit benutzerfreundlichem Design und sicheren Zahlungssystemen.',
    },
    {
        icon: <Search className="w-12 h-12 text-orange-500" />,
        title: 'SEO Optimierung',
        description: 'Verbessern Sie Ihr Ranking in Suchmaschinen und erreichen Sie mehr potenzielle Kunden.',
    },
    {
        icon: <Megaphone className="w-12 h-12 text-orange-500" />,
        title: 'Digitales Marketing',
        description: 'Effektive Marketingstrategien, um Ihre Online-Präsenz zu stärken und Ihren Kundenstamm zu erweitern.',
    },
];

export const Services = () => {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Meine Leistungen</h2>
                    <p className="text-xl text-gray-600">Professionelle Lösungen für Ihren digitalen Erfolg</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
