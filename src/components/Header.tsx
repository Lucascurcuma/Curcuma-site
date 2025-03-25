import React from 'react';
import { ShoppingBag, Truck, Clock2 as Clock24, ShieldCheck } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-8 h-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-800">
              Achadinhos Express Shop
            </h1>
          </div>
          
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-600">
            <span className="flex items-center gap-1">
              <Truck className="w-4 h-4" />
              Frete Grátis
            </span>
            <span className="flex items-center gap-1">
              <Clock24 className="w-4 h-4" />
              Entrega 24h
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" />
              Garantia
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}