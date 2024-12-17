'use client';

import { Hero } from '@/components/Hero';
import { Seperable } from '@/components/Seperable';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Quote } from '@/components/Quote';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Reviews } from '@/components/Reviews';
import { Navbar } from '@/components/Navbar';

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Navbar />
            <Hero />
            <Seperable />
            <Quote />
            <About />
            <Services />
            <FAQ />
            <Reviews />
            <Contact />
            <Footer />
        </main>
    );
}
