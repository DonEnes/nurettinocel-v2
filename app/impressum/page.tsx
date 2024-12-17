import Link from 'next/link';

export default function Impressum() {
    return (
        <div className="min-h-screen text-black bg-gray-50 py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-8">Impressum</h1>
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
                    <p>
                        Nurettin Öcel
                        <br />
                        Rilkestraße
                        <br />
                        33415 Verl
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-4">Kontakt</h2>
                    <p>
                        Telefon: +49 176 22629431
                        <br />
                        E-Mail: nurettin.oecel@ocel-gruppe.com
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-4">Umsatzsteuer-ID</h2>
                    <p>
                        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                        <br />
                        DE920639518
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                    <p>
                        Nurettin Öcel
                        <br />
                        Rilkestraße
                        <br />
                        33415 Verl
                    </p>

                    <div className="mt-8">
                        <Link href="/" className="text-orange-500 hover:text-orange-600 transition-colors">
                            Zurück zur Startseite
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
