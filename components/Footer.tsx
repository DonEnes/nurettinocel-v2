'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <Image src="/nocel-black.png" alt="Nurettin Öcel Logo" width={150} height={40} />
                        <p className="mt-4 text-black">Professionelle Webentwicklung und Design für Ihr Unternehmen.</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                        <h3 className="text-xl font-semibold mb-6 text-black">Schnelllinks</h3>
                        <ul className="space-y-3">
                            {['Über Mich', 'Leistungen', 'Portfolio', 'Kontakt'].map((item, index) => (
                                <motion.li key={item} whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                                    <Link
                                        href={`/#${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-black hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                        <h3 className="text-xl font-semibold mb-6 text-black">Kontakt</h3>
                        <ul className="space-y-3 text-black">
                            <li className="flex items-center">
                                <MapPin className="w-5 h-5 mr-2 text-black" />
                                Rilkestraße, 33415 Verl
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 mr-2 text-black" />
                                nurettin.oecel@ocel-gruppe.com
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 mr-2 text-black" />
                                +49 176 22629431
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
                        <h3 className="text-xl font-semibold mb-6 text-black">Folgen Sie mir</h3>
                        <div className="flex space-x-4">
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                href="https://www.instagram.com/nurettinocel_/?locale=us&hl=am-et"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-orange-600 p-3 rounded-full text-black hover:bg-orange-700 transition-colors">
                                <Instagram className="w-6 h-6" />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-12 pt-8 border-t border-black text-center">
                    <p className="text-black">&copy; {currentYear} Nurettin Öcel. Alle Rechte vorbehalten.</p>
                    <div className="mt-4 space-x-4">
                        <Link href="/impressum" className="text-black hover:text-white transition-colors">
                            Impressum
                        </Link>
                        <Link href="/datenschutz" className="text-black hover:text-white transition-colors">
                            Datenschutz
                        </Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};
