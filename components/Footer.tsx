import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <Image src="/nocel.png" alt="Nurettin Öcel Logo" width={150} height={40} />
                        <p className="mt-4 text-gray-400">Professionelle Webentwicklung und Design für Ihr Unternehmen.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Schnelllinks</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/#about" className="hover:text-orange-500 transition-colors">
                                    Über Mich
                                </Link>
                            </li>
                            <li>
                                <Link href="/#services" className="hover:text-orange-500 transition-colors">
                                    Leistungen
                                </Link>
                            </li>
                            <li>
                                <Link href="/#portfolio" className="hover:text-orange-500 transition-colors">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contact" className="hover:text-orange-500 transition-colors">
                                    Kontakt
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
                        <p className="text-gray-400">
                            Rilkestraße
                            <br />
                            33415 Verl
                        </p>
                        <p className="text-gray-400 mt-2">
                            nurettin.oecel@ocel-gruppe.com
                            <br />
                            +49 176 22629431
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Folgen Sie mir</h3>
                        <div className="flex space-x-4">
                            {/*                             <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                                <Facebook />
                            </a> */}
                            {/*                             <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                                <Twitter />
                            </a> */}
                            <a
                                href="https://www.instagram.com/nurettinocel_/?locale=us&hl=am-et"
                                className="text-gray-400 hover:text-orange-500 transition-colors">
                                <Instagram />
                            </a>
                            {/*                             <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                                <Linkedin />
                            </a> */}
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} Nurettin Öcel. Alle Rechte vorbehalten.</p>
                    <div className="mt-2">
                        <Link href="/impressum" className="text-gray-400 hover:text-orange-500 transition-colors mr-4">
                            Impressum
                        </Link>
                        <Link href="/datenschutz" className="text-gray-400 hover:text-orange-500 transition-colors">
                            Datenschutz
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
