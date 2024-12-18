'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const features = [
    {
        title: 'Direkte Kommunikation und flexible Lösungen',
        description: 'Kurze Wege und eine flexible Umsetzung durch mich als alleinigen persönlichen Ansprechpartner.',
    },
    {
        title: 'Langjährige Erfahrung',
        description: 'Seit 2017 arbeite ich erfolgreich mit Unternehmen unterschiedlichster Branchen und Größen zusammen.',
    },
    {
        title: 'Alles aus einer Hand',
        description: 'Dein Projekt wird komplett von mir realisiert, ohne Fremdvergabe.',
    },
    {
        title: 'Kosteneffizient',
        description: 'Faire Preisgestaltung dank geringem Verwaltungsapparat.',
    },
];

export const About = () => {
    const [projectsCount, setProjectsCount] = useState(0);
    const projectsRef = useRef(null);
    const isInView = useInView(projectsRef, { once: true });

    // Animation Control for Dashed Lines
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    // Hochzählen der Zahl
    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = 70;
            const duration = 2000; // in ms
            const increment = (end - start) / (duration / 10);

            const counter = setInterval(() => {
                setProjectsCount((prev) => {
                    if (prev < end) {
                        return Math.min(prev + increment, end);
                    }
                    clearInterval(counter);
                    return end;
                });
            }, 10);
        }
    }, [isInView]);

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative">
                        <div className="relative aspect-square overflow-hidden rounded-full border-8 border-gray-100 shadow-2xl">
                            <Image
                                src="/IMG_7534.png"
                                alt="Nurettin Öcel"
                                draggable="false"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        {/* Rating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="absolute top-0 -left-4 bg-white rounded-lg shadow-xl p-4 z-10">
                            <div className="text-4xl font-bold text-gray-800">4.81</div>
                            <div className="text-sm text-gray-600 mb-2">Rezensionen</div>
                            <div className="flex text-orange-500">{'★'.repeat(5)}</div>
                        </motion.div>

                        {/* Projects Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="absolute bottom-0 -right-4 bg-white rounded-lg shadow-xl p-4 z-10"
                            ref={projectsRef}>
                            <div className="flex items-center">
                                <span className="text-3xl font-bold text-gray-800">{Math.round(projectsCount)}</span>
                                <span className="text-4xl text-orange-500">+</span>
                            </div>
                            <div className="text-sm text-gray-600">Webseiten entwickelt</div>
                        </motion.div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
                        <div className="space-y-4">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Ich bin kein einfacher Webdesigner.
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-xl text-gray-600">
                                Ich bin die beste Investition für dein Unternehmen.
                            </motion.p>
                        </div>

                        <div className="relative pt-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                    className="relative pl-20 pb-12 last:pb-0">
                                    {/* Vertical dashed line */}
                                    {index !== features.length - 1 && (
                                        <div
                                            className="absolute left-8 top-12 w-0 h-[calc(100%-24px)] border-l-2 border-dashed border-orange-400/40"
                                            style={{ transform: 'translateX(-50%)' }}
                                        />
                                    )}

                                    {/* Circle with Check Icon */}
                                    <div
                                        className="absolute left-8 top-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center"
                                        style={{ transform: 'translateX(-50%)' }}>
                                        <Check className="w-6 h-6 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-lg text-gray-600">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
