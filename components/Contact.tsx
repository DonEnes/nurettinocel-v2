'use client';

import { motion } from 'framer-motion';
/* import { useState } from 'react'; */
import { Mail, User, MessageSquare } from 'lucide-react';

export const Contact = () => {
    /*     const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    }); */

    /*     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to your server or a third-party service
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({ name: '', email: '', message: '' });
    };

    const inputVariants = {
        focus: { scale: 1.02, transition: { duration: 0.2 } },
    }; */

    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-white to-orange-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Kontaktieren Sie mich</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Lassen Sie uns gemeinsam Ihr nächstes Projekt realisieren. Ich freue mich darauf, von Ihnen zu hören!
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:w-1/3">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4">Kontaktinformationen</h3>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Mail className="w-6 h-6 text-orange-500 mr-3" />
                                    <span>kontakt@nurettinocel.de</span>
                                </div>
                                <div className="flex items-center">
                                    <User className="w-6 h-6 text-orange-500 mr-3" />
                                    <span>Nurettin Öcel</span>
                                </div>
                                <div className="flex items-center">
                                    <MessageSquare className="w-6 h-6 text-orange-500 mr-3" />
                                    <span>Montag - Freitag, 9:00 - 19:00 Uhr</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="lg:w-2/3 bg-white p-8 rounded-lg shadow-lg">
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                Name
                            </label>
                            <motion.input
                                variants={inputVariants}
                                whileFocus="focus"
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                E-Mail
                            </label>
                            <motion.input
                                variants={inputVariants}
                                whileFocus="focus"
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                                Nachricht
                            </label>
                            <motion.textarea
                                variants={inputVariants}
                                whileFocus="focus"
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-orange-500 transition-colors h-32 resize-none"
                                required></motion.textarea>
                        </div>
                        <div className="flex justify-end">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline flex items-center transition-colors">
                                Senden
                                <Send className="ml-2 h-5 w-5" />
                            </motion.button>
                        </div>
                    </motion.form> */}
                </div>
            </div>
        </section>
    );
};
