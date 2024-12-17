import Link from 'next/link';

export default function Datenschutz() {
    return (
        <div className="min-h-screen text-black bg-gray-50 py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
                    <h3 className="text-lg font-semibold mt-4 mb-2">Allgemeine Hinweise</h3>
                    <p>
                        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                        Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                    </p>

                    <h3 className="text-lg font-semibold mt-4 mb-2">Datenerfassung auf dieser Website</h3>
                    <p>
                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
                        dieser Website entnehmen.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
                    <h3 className="text-lg font-semibold mt-4 mb-2">Datenschutz</h3>
                    <p>
                        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
                        vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                    </p>

                    <h3 className="text-lg font-semibold mt-4 mb-2">Hinweis zur verantwortlichen Stelle</h3>
                    <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                    <p>
                        Nurettin Öcel
                        <br />
                        Rilkestraße
                        <br />
                        33415 Verl
                    </p>
                    <p>
                        Telefon: +49 176 22629431
                        <br />
                        E-Mail: info@nurettinocel.de
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-4">3. Datenerfassung auf unserer Website</h2>
                    <h3 className="text-lg font-semibold mt-4 mb-2">Cookies</h3>
                    <p>
                        Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten
                        keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
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
