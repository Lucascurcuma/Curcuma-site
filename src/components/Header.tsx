import React, { useState, useEffect } from 'react';
import { Truck, Star, ShoppingBag, Heart, Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50">
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Truck size={18} className="animate-bounce" />
              <span className="font-medium">Frete Grátis para Todo o Brasil</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Star size={18} className="text-yellow-300 fill-yellow-300" />
              <span className="font-medium">4.9/5 (2.547 avaliações)</span>
            </div>
          </div>
          <div className="hidden md:block text-sm">
            <span className="font-medium">Atendimento via WhatsApp: </span>
            <a href="https://wa.me/5511999999999" className="underline hover:text-white/80">
              (11) 99999-9999
            </a>
          </div>
        </div>
      </div>

      <nav className={`bg-white shadow-lg transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-green-100 p-2 rounded-xl group-hover:bg-green-200 transition-colors">
              <ShoppingBag className="w-6 h-6 text-green-600" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              ShopExpress
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6">
              <a 
                href="#products" 
                className="text-gray-600 hover:text-green-600 font-medium transition-colors relative group"
              >
                Produtos
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
              <a 
                href="#benefits" 
                className="text-gray-600 hover:text-green-600 font-medium transition-colors relative group"
              >
                Vantagens
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-600 hover:text-green-600 font-medium transition-colors relative group"
              >
                Depoimentos
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            </nav>
          </div>

          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg py-4">
            <nav className="flex flex-col gap-2">
              <a 
                href="#products" 
                className="px-4 py-2 text-gray-600 hover:bg-green-50 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </a>
              <a 
                href="#benefits" 
                className="px-4 py-2 text-gray-600 hover:bg-green-50 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Vantagens
              </a>
              <a 
                href="#testimonials" 
                className="px-4 py-2 text-gray-600 hover:bg-green-50 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </a>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
};