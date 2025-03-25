import React, { useState } from 'react';
import { ProductCardProps } from '../types';
import { formatCurrency } from '../utils/format';
import { Truck, ShieldCheck, Clock2 as Clock24 } from 'lucide-react';

export function ProductCard({ product }: ProductCardProps) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const maxQuantity = Math.max(...product.prices.map(p => p.quantity));
  
  const selectedPrice = product.prices.find(p => p.quantity === selectedQuantity);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-green-600">
              {formatCurrency(selectedPrice?.price || 0)}
            </span>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedQuantity(q => Math.max(1, q - 1))}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                disabled={selectedQuantity === 1}
              >
                -
              </button>
              <span className="w-8 text-center font-semibold">{selectedQuantity}</span>
              <button
                onClick={() => setSelectedQuantity(q => Math.min(maxQuantity, q + 1))}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                disabled={selectedQuantity === maxQuantity}
              >
                +
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="flex flex-col items-center text-center gap-1">
              <Truck className="w-5 h-5 text-green-600" />
              <span>Frete Grátis</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <Clock24 className="w-5 h-5 text-green-600" />
              <span>24h Entrega</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              <span>Garantia</span>
            </div>
          </div>

          <a
            href={selectedPrice?.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 px-6 text-center font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
          >
            Comprar Agora
          </a>
        </div>
      </div>
    </div>
  );
}