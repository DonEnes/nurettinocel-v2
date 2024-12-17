import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-8">Oops! Die Seite wurde nicht gefunden.</p>
                <Link
                    href="/"
                    className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-orange-600 transition duration-300">
                    Zurück zur Startseite
                </Link>
            </div>
        </div>
    );
}
