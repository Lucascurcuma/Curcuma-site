import React, { useState } from 'react';
import { Product } from '../types';
import { ShoppingCart, Package, Timer, Shield } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState('1');
  const [showModal, setShowModal] = useState(false);

  const handlePurchase = () => {
    setShowModal(true);
  };

  const confirmPurchase = () => {
    window.location.href = product.prices[quantity].affiliateLink;
  };

  const calculateDiscount = () => {
    if (quantity === '1') return 0;
    const singlePrice = product.prices['1'].price;
    const currentTotal = product.prices[quantity].price;
    const normalTotal = singlePrice * parseInt(quantity);
    return ((normalTotal - currentTotal) / normalTotal * 100).toFixed(0);
  };

  const discount = calculateDiscount();

  return (
    <>
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] relative">
        <div className="relative group">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {product.stock <= 5 && (
            <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
              Últimas {product.stock} unidades!
            </div>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 text-gray-800">{product.name}</h3>
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3 text-sm">
              <div className="flex items-center gap-1 text-green-600">
                <Timer size={18} />
                <span>Entrega 24h</span>
              </div>
              <div className="flex items-center gap-1 text-green-600">
                <Package size={18} />
                <span>Frete Grátis</span>
              </div>
              <div className="flex items-center gap-1 text-green-600">
                <Shield size={18} />
                <span>Garantia 30 dias</span>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full p-3 border-2 border-gray-200 rounded-xl text-lg font-medium focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
              >
                {Object.keys(product.prices).map((qty) => (
                  <option key={qty} value={qty}>
                    {qty} {parseInt(qty) > 1 ? 'unidades' : 'unidade'} - R$ {product.prices[qty].price.toFixed(2)}
                    {discount > 0 && qty !== '1' ? ` (-${discount}%)` : ''}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handlePurchase}
              className="w-full bg-green-600 text-white py-4 rounded-xl flex items-center justify-center gap-3 text-lg font-semibold hover:bg-green-700 transform transition-all duration-300 hover:scale-105"
            >
              <ShoppingCart size={24} />
              Comprar Agora →
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all">
            <h4 className="text-2xl font-bold mb-6 text-gray-800">Confirmar Compra</h4>
            <div className="flex items-center gap-6 mb-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 object-cover rounded-xl"
              />
              <div>
                <p className="font-bold text-lg">{product.name}</p>
                <p className="text-green-600 font-semibold">
                  {quantity}x - R$ {product.prices[quantity].price.toFixed(2)}
                  {discount > 0 ? ` (-${discount}% OFF)` : ''}
                </p>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-xl mb-6">
              <div className="flex items-center gap-3 text-green-700 font-medium">
                <Package size={24} />
                <div>
                  <p className="font-semibold">Frete Grátis + Pagamento na Entrega</p>
                  <p className="text-sm">Receba em até 24h úteis</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 font-medium transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={confirmPurchase}
                className="py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-all hover:scale-105"
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};