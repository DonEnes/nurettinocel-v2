'use client';

import { motion } from 'framer-motion';
import { Monitor, BarChart, ShoppingCart, Rocket } from 'lucide-react';

const services = [
    {
        icon: <BarChart className="w-12 h-12 text-white" />,
        title: 'Website Analyse',
    },
    {
        icon: <ShoppingCart className="w-12 h-12 text-white" />,
        title: 'Marketing Strategie',
    },
    {
        icon: <Monitor className="w-12 h-12 text-white" />,
        title: 'Website Strategie',
    },
    {
        icon: <Rocket className="w-12 h-12 text-white" />,
        title: 'SEO Optimierung',
    },
];

export const Seperable = () => {
    return (
        <section id="seperable" className="py-1 bg-gradient-to-r from-orange-600 to-orange-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 text-white"></motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="flex flex-col items-center justify-center rounded-lg transition-shadow duration-300">
                            <div className="mb-4">{service.icon}</div>
                            <h3 className="text-xl text-white mb-8">{service.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
