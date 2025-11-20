import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center mr-3 shadow-lg shadow-brand-500/20">
              <Rocket className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              Agent<span className="text-brand-400">Mastery</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['核心命题', '实战验证', '深度对比', '实战教学', '互动共建'].map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(['hero', 'why', 'compare', 'tutorial', 'community'][index])}
                className="text-slate-300 hover:text-brand-400 transition-colors text-sm font-medium"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('community')}
              className="bg-brand-500 hover:bg-brand-400 text-black font-bold py-2 px-6 rounded-full transition-transform transform hover:scale-105 shadow-lg shadow-brand-500/20"
            >
              立即加入
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel absolute top-full left-0 w-full border-t border-slate-700">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {['核心命题', '实战验证', '深度对比', '实战教学', '互动共建'].map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(['hero', 'why', 'compare', 'tutorial', 'community'][index])}
                className="block w-full text-left px-3 py-3 text-slate-300 hover:text-brand-400 hover:bg-slate-800/50 rounded-md"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;