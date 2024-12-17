'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react'; // Icons importieren

type Testimonial = {
    name: string;
    company: string;
    text: string;
    icon: React.ReactNode; // Jetzt ein Icon anstelle eines Bildes
};

// Beispielhafte Testimonials-Daten mit Icons
const testimonials: Testimonial[] = [
    {
        name: 'Tugce Kurnaz',
        company: 'Autofit Kurnaz Ahlen',
        text: '„Nurettin hat unsere Erwartungen übertroffen. Seine Expertise und sein Engagement haben unser Projekt zum Erfolg geführt.“',
        icon: <User className="w-8 h-8 text-orange-500" />, // Beispiel-Icon
    },
    {
        name: 'Fatih Ö.',
        company: 'Motor-Getriebe Instandsetzung Löhne',
        text: '„Keiner hätte es besser machen können, ich bin sehr zufrieden, meine Homepage ist einfach nur Perfekt geworden.. Danke!“',
        icon: <User className="w-8 h-8 text-orange-500" />, // Beispiel-Icon
    },
    {
        name: 'Malik B.',
        company: 'E-Commerce MB',
        text: '„Kann ich jedem weiterempfehlen. Ich starte seit kurzem mein eigenes Business und ich war an dem Punkt wo ich eine Webseite gebraucht habe und Nurettin Öcel hat mir eine Webseite erstellt genau nach meinen Wünschen.“',
        icon: <User className="w-8 h-8 text-orange-500" />, // Beispiel-Icon
    },
];

const TestimonialCarousel = ({ testimonials = [] }: { testimonials: Testimonial[] }) => {
    if (!testimonials || testimonials.length === 0) {
        return <div>Keine Testimonials verfügbar.</div>;
    }
    return (
        <div>
            {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg mb-4">
                    <p className="text-gray-600 mb-4">{testimonial.text}</p>
                    <div className="flex items-center">
                        <div className="mr-4">{testimonial.icon}</div> {/* Icon statt Bild */}
                        <div>
                            <h3 className="font-semibold">{testimonial.name}</h3>
                            <p className="text-sm text-gray-600">{testimonial.company}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const faqs = [
    {
        question: 'Was kostet eine Website?',
        answer: 'In der Regel informiere ich dich während unseres ersten persönlichen Gesprächs über eine Preisspanne, um sicherzustellen, dass sie deinen Vorstellungen entspricht. Meine Abrechnung erfolgt nicht stundenweise, sondern basiert auf einer festen Projektgebühr. Dadurch weiß jeder Kunde im Voraus genau, welche Investition auf ihn zukommt, unabhängig von der Projektlaufzeit. Du zahlst weder mehr noch weniger, egal wie lange es dauert. Der Preis wird individuell festgelegt, je nach den Zielen, dem Umfang der Arbeit, den geplanten Aktivitäten, den erbrachten Leistungen und dem Zeitplan des Projekts. Aktuell fangen die Preise ab ca. 1500€ an.',
    },
    {
        question: 'Wie kann ich zahlen?',
        answer: 'In der Regel arbeite ich mit einer 40% Anzahlung und einer 60% Schlusszahlung bei Projektabgabe. Es gibt allerdings auch die Möglichkeit direkt zu zahlen. Der Vorteil ist, dass du dadurch einen 5% Rabatt bekommst. Außerdem biete ich einen Ratenplan an mit 0% Zinsen. Es wird lediglich eine pauschale Aufwandsgebühr für die Monatlichen Rechnungen von 100€ fällig - unabhängig von der Dauer des Ratenplans',
    },
    {
        question: 'Wie lange dauert die Umsetzung?',
        answer: 'Das ist sehr individuell und wird im Erstgespräch vereinbart. Pauschal kann man mit 2 Wochen (einfache Projekte) bis zu 8 Wochen (komplexe Projekte) rechnen.',
    },
];

export const Reviews = () => {
    return (
        <section id="reviews" className="py-20 bg-white">
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl font-bold mb-12 text-center text-gray-900">
                        Was meine Kunden sagen
                    </motion.h2>
                    <TestimonialCarousel testimonials={testimonials} />
                </div>
            </div>
        </section>
    );
};
