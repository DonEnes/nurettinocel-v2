'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

export const AboutEnd = () => {
    return (
        <section className="min-h-screen bg-white flex items-center py-12 md:py-20">
            <div className="container mx-auto px-4 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
                    {/* Left Side with Image and Vertical Text */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-[2/2.5] w-full">
                            <Image src="/IMG_7534.png" alt="Nurettin Öcel" fill className="object-cover rounded-lg" priority />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute left-[-240px] sm:left-[-330px] top-1/2 -translate-y-1/2 transform -rotate-90 origin-center">
                            <span className="text-7xl sm:text-7xl lg:text-8xl tracking-wider text-black whitespace-nowrap">Webdesigner</span>
                        </motion.div>
                    </div>

                    {/* Right Side Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8 sm:space-y-10">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                            Du hast deinen <span className="text-orange-400">Webdesigner</span> gefunden.
                        </h1>

                        {/* Reviews Section */}
                        <div className="flex items-center gap-5">
                            <div className="flex -space-x-5">
                                <Image src="/reviewer.png" alt="Reviewer" width={80} height={80} className="rounded-full border-2 border-white" />
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                <span className="font-semibold text-sm">5.0 (34 Bewertungen)</span>
                            </div>
                        </div>

                        {/* Welcome Text */}
                        <div className="space-y-4 text-gray-600 text-base sm:text-lg">
                            <p>Ich freue mich auf deine Anfrage und dein Projekt umzusetzen.</p>
                            <p>Ich bin optimistisch, dass wir die Designsprache deines Unternehmens auf ein neues Level bringen!</p>
                        </div>

                        {/* Quote */}
                        <div className="space-y-4">
                            <p className="text-base sm:text-lg italic">
                                &quot;Ich bin kein einfacher Webdesigner. Ich bin die beste Investition für dein Unternehmen.&quot;
                            </p>
                            <Image src="/signature.png" alt="Signature" width={250} height={50} className="mt-2" />
                        </div>

                        {/* Name and Title */}
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold">Nurettin Öcel</h2>
                            <div className="flex items-center gap-2 text-gray-600">
                                <span className="w-6 sm:w-8 h-px bg-gray-300" />
                                <span className="text-sm sm:text-base">Webdesigner & Entwickler</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-orange-500 to-orange-300 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold flex items-center gap-2 hover:bg-orange-500 transition-colors">
                            Erstgespräch buchen
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
