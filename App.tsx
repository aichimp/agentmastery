import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import Comparison from './components/Comparison';
import Tutorial from './components/Tutorial';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-brand-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <WhySection />
        <Comparison />
        <Tutorial />
      </main>
      <Footer />
    </div>
  );
};

export default App;