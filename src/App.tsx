import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { ProductGrid } from './components/ProductGrid';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <ProductGrid />
        <Testimonials />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;