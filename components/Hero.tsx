'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';
import Image from 'next/image';

export const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <Image src="/coden.jpg" alt="Hero Background" layout="fill" objectFit="cover" quality={100} />
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-60" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 text-sm text-white backdrop-blur-sm border border-white/20">
                        <Rocket className="w-4 h-4 mr-2" />
                        FULL-SERVICE WEBDESIGN
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-4xl md:text-7xl font-bold text-white">
                        Nurettin Öcel
                        <br />
                        <span className="bg-gradient-to-r from-orange-500 to-white text-transparent bg-clip-text">Webdesigner & Entwickler</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="max-w-2xl mx-auto text-xl text-gray-300">
                        Individuelle Webdesign-Lösungen mit modernsten Technologien für kleine und mittelständische Unternehmen in Deutschland
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg md:text-lg font-medium inline-flex items-center justify-center group">
                            Projekt starten
                            <motion.span initial={{ x: 0 }} animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </motion.span>
                        </motion.a>

                        <motion.a
                            href="#about"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg md:text-lg font-medium border border-white/20 hover:bg-white/20 transition-colors">
                            Mehr erfahren
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
                    <motion.div
                        animate={{ height: ['20%', '80%', '20%'] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1 bg-white/50 rounded-full"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};
