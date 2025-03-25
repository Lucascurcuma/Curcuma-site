import React from 'react';
import { Star, Users, ShieldCheck, Truck } from 'lucide-react';

export function SocialProof() {
  return (
    <section className="bg-gradient-to-r from-green-50 to-green-100 py-8 mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1 mb-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
            </div>
            <p className="text-2xl font-bold text-gray-900">4.9/5</p>
            <p className="text-sm text-gray-600">Avaliação média</p>
            <p className="text-xs text-gray-500 mt-1">+10.000 avaliações</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Users className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-2xl font-bold text-gray-900">50.000+</p>
            <p className="text-sm text-gray-600">Clientes satisfeitos</p>
            <p className="text-xs text-gray-500 mt-1">Em todo o Brasil</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <ShieldCheck className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-2xl font-bold text-gray-900">100%</p>
            <p className="text-sm text-gray-600">Garantia de satisfação</p>
            <p className="text-xs text-gray-500 mt-1">7 dias para troca</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Truck className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-2xl font-bold text-gray-900">24h</p>
            <p className="text-sm text-gray-600">Entrega expressa</p>
            <p className="text-xs text-gray-500 mt-1">Frete grátis</p>
          </div>
        </div>
      </div>
    </section>
  );
}