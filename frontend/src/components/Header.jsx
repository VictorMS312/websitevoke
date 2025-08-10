import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-[10%] left-[10%] w-[80%] flex justify-between items-center px-6 md:px-8 py-3 bg-black/15 backdrop-blur-md rounded-xl border border-white/10 transition-all duration-300 z-50 shadow-lg ${
        isScrolled ? 'bg-black/30 py-2 px-5' : ''
      }`}
    >
      <div className="text-xl md:text-2xl font-bold text-white tracking-wider">
        Agência Voke
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center space-x-8">
        <button 
          onClick={() => scrollToSection('servicos')}
          className="text-white hover:text-orange-500 transition-colors duration-300 font-medium"
        >
          Serviços
        </button>
        <button 
          onClick={() => scrollToSection('portfolio')}
          className="text-white hover:text-orange-500 transition-colors duration-300 font-medium"
        >
          Portfólio
        </button>
        <button 
          onClick={() => scrollToSection('sobre')}
          className="text-white hover:text-orange-500 transition-colors duration-300 font-medium"
        >
          Sobre
        </button>
        <button 
          onClick={() => scrollToSection('contato')}
          className="text-white hover:text-orange-500 transition-colors duration-300 font-medium"
        >
          Contato
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden flex flex-col w-6 h-6 cursor-pointer"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="absolute top-full right-0 mt-2 bg-black/90 backdrop-blur-md rounded-xl p-4 flex flex-col space-y-4 min-w-[200px] border border-white/10">
          <button 
            onClick={() => scrollToSection('servicos')}
            className="text-white hover:text-orange-500 transition-colors duration-300 font-medium text-left"
          >
            Serviços
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="text-white hover:text-orange-500 transition-colors duration-300 font-medium text-left"
          >
            Portfólio
          </button>
          <button 
            onClick={() => scrollToSection('sobre')}
            className="text-white hover:text-orange-500 transition-colors duration-300 font-medium text-left"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('contato')}
            className="text-white hover:text-orange-500 transition-colors duration-300 font-medium text-left"
          >
            Contato
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;