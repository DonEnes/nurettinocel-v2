'use client';

import { motion } from 'framer-motion';
import { Code, Briefcase, GraduationCap } from 'lucide-react';
import Image from 'next/image';

export const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"></motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                        <Image src="/IMG_7534.png" alt="Nurettin Öcel" width={400} height={400} className="rounded-lg shadow-lg" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-6">
                        <h2 className="text-4xl font-bold mb-4 text-gray-900">Ich bin kein einfacher Fullstack Entwickler.</h2>
                        <p className="text-xl text-gray-600 mb-8">Ich bin die beste Investition für dein Unternehmen.</p>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3">
                                <Code className="w-6 h-6 text-orange-500" />
                                <span>Experte in modernen Webtechnologien</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Briefcase className="w-6 h-6 text-orange-500" />
                                <span>Erfahrung in der Zusammenarbeit mit diversen Unternehmen</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <GraduationCap className="w-6 h-6 text-orange-500" />
                                <span>Kontinuierliche Weiterbildung in neuesten Technologien</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
