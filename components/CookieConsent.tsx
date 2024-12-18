'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';

export const CookieConsent = () => {
    const [showConsent, setShowConsent] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setShowConsent(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'true');
        setShowConsent(false);
    };

    return (
        <AnimatePresence>
            {showConsent && (
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto">
                    <motion.div
                        className="bg-white rounded-lg shadow-lg overflow-hidden border border-orange-300"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
                        <div className="p-4 bg-gradient-to-r from-orange-400 to-orange-500">
                            <div className="flex items-center justify-between">
                                <motion.div
                                    className="flex items-center"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}>
                                    <Cookie className="w-6 h-6 text-white mr-2" />
                                    <h2 className="text-lg font-semibold text-white">Cookie-Hinweis</h2>
                                </motion.div>
                                <motion.button
                                    whileHover={{ rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setShowConsent(false)}
                                    className="text-white hover:text-orange-200 transition-colors">
                                    <X className="w-5 h-5" />
                                </motion.button>
                            </div>
                        </div>
                        <motion.div className="p-4" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                            <p className="text-sm text-gray-600 mb-4">
                                Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Mit der Nutzung unserer Website stimmen Sie unserer
                                Cookie-Richtlinie zu.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={acceptCookies}
                                className="w-full bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition-colors">
                                Akzeptieren
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
