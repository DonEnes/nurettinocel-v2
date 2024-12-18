'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const Quote = () => {
    return (
        <div className="relative h-96 flex items-center justify-center overflow-hidden">
            {' '}
            <div className="absolute inset-0">
                <Image src="/backgrounds/plan.jpg" alt="Zitat Background" draggable="false" layout="fill" objectFit="cover" quality={100} />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-60" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
                    <span className="text-gray-300 text-xs md:text-xs font-bold bg-clip-text">NURETTIN ÖCEL | WEBDESIGNER & ENTWICKLER</span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-2xl md:text-3xl text-white">
                        &quot;Mit mir setzt du auf ein Webdesigner mit Full-Service-Konzept, der kleine und mittelständische Unternehmen
                        voranbringt.&quot;
                        <br />
                    </motion.h1>
                </motion.div>
            </div>
        </div>
    );
};
