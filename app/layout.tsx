import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Nurettin Öcel - Webdesigner & Entwickler',
    description: 'Professionelle Webentwicklung und Design für Ihr Unternehmen',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="de" className="scroll-smooth">
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
