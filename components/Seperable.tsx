'use client';

import { motion } from 'framer-motion';
import { Monitor, BarChart, ShoppingCart, Rocket } from 'lucide-react';

const services = [
    {
        icon: <BarChart className="w-8 h-8 text-white" />,
        title: 'Website Analyse',
    },
    {
        icon: <ShoppingCart className="w-8 h-8 text-white" />,
        title: 'Marketing Strategie',
    },
    {
        icon: <Monitor className="w-8 h-8 text-white" />,
        title: 'Website Strategie',
    },
    {
        icon: <Rocket className="w-8 h-8 text-white" />,
        title: 'SEO Optimierung',
    },
];

export const Seperable = () => {
    return (
        <section className="bg-gradient-to-r from-[#FF7051] to-[#FFC371]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                type: 'spring',
                                stiffness: 100,
                            }}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 },
                            }}
                            className="flex flex-col items-center justify-center py-8 px-4">
                            <motion.div
                                whileHover={{
                                    rotate: 360,
                                    scale: 1.2,
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 260,
                                    damping: 20,
                                }}
                                className="mb-3">
                                {service.icon}
                            </motion.div>
                            <h3 className="text-white text-lg font-medium">{service.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
