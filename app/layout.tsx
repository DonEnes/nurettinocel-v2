import './globals.css';
import type { Metadata } from 'next';
import { CookieConsent } from '../components/CookieConsent';

export const metadata: Metadata = {
    title: 'Nurettin Öcel - Webdesigner & Entwickler',
    description: 'Professionelle Webentwicklung und Design für Ihr Unternehmen',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="de">
            <body>
                {children}
                <CookieConsent />
            </body>
        </html>
    );
}
