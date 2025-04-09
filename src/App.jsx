import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#fdfaf4] text-gray-900 font-sans min-h-screen">
      <Header />
      <main className="pt-24 max-w-6xl mx-auto px-4">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
