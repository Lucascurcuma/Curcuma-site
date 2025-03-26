import React from 'react';
import { Shield, Clock, Package, CreditCard } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Produtos Premium com{' '}
            <span className="text-green-600">Entrega em 24h</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Descubra produtos inovadores com{' '}
            <span className="font-semibold">Frete Grátis</span> para todo Brasil e{' '}
            <span className="font-semibold">Garantia de 30 dias</span>
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-green-100 p-3 rounded-xl">
                <Package className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Frete Grátis</h3>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-green-100 p-3 rounded-xl">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Entrega 24h</h3>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-green-100 p-3 rounded-xl">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Garantia 30 Dias</h3>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-green-100 p-3 rounded-xl">
                <CreditCard className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Pague na Entrega</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};