'use client';

import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';

export const Announce = () => {
    return (
        <section id="announcement" className="py-6 bg-gradient-to-r from-orange-600 to-orange-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 text-white"></motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex items-center justify-center bg-white/10 p-6 rounded-lg text-white">
                    <Bell className="md:w-8 md:h-8 w-14 h-14 text-white mr-4" />
                    <p className="md:text-lg text-sm">
                        Die Webseite wurde auf Version 2.0 aktualisiert und umfasst ein neues Design sowie eine verbesserte Performance.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
