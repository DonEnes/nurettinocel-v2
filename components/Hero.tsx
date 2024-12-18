'use client';

import { motion } from 'framer-motion';
import { /* ArrowRight, */ Rocket } from 'lucide-react';
import Image from 'next/image';

export const Hero = () => {
    return (
        <div className="relative min-h-[80vh] flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <Image src="/backgrounds/coden3.jpeg" alt="Hero Background" draggable="false" fill className="object-cover" quality={100} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />

                {/* Vertical lines overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            'repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 40px)',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="inline-flex items-center bg-white/5 rounded-full px-4 py-2 text-sm text-white backdrop-blur-sm border border-white/10">
                        <Rocket className="w-4 h-4 mr-2" />
                        FULL-SERVICE WEBDESIGN
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-5xl md:text-6xl font-bold text-white leading-tight">
                        Nurettin Öcel
                        <br />
                        <span className="bg-gradient-to-r from-orange-500 to-orange-300 text-transparent bg-clip-text">Webdesigner & Entwickler</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg text-gray-300 max-w-2xl">
                        Individuelle Webdesign-Lösungen mit modernsten Technologien für kleine und mittelständische Unternehmen in Deutschland
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
                        <motion.a
                            href="#services"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center bg-gradient-to-r from-[#FF7051] to-[#FFC371] text-white px-8 py-3 rounded-full text-base font-medium group">
                            Was ich anbiete
                            <motion.span initial={{ x: 0 }} animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                                <Rocket className="ml-2 w-5 h-5" />
                            </motion.span>
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
                    className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
                    <motion.div
                        animate={{ height: ['20%', '80%', '20%'] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1 bg-white/30 rounded-full"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};
