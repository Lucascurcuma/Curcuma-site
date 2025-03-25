import React, { useEffect, useState } from 'react';
import { ShoppingCart, CheckCircle } from 'lucide-react';
import { products } from '../data/products';

interface Purchase {
  productName: string;
  location: string;
  timeAgo: string;
}

const locations = [
  'São Paulo, SP',
  'Rio de Janeiro, RJ',
  'Belo Horizonte, MG',
  'Curitiba, PR',
  'Porto Alegre, RS',
  'Salvador, BA',
  'Recife, PE',
  'Fortaleza, CE'
];

const generateRandomPurchase = (): Purchase => {
  const product = products[Math.floor(Math.random() * products.length)];
  const location = locations[Math.floor(Math.random() * locations.length)];
  const minutes = Math.floor(Math.random() * 30) + 1;
  
  return {
    productName: product.name,
    location,
    timeAgo: `${minutes} minutos atrás`
  };
};

export function LivePurchaseNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [purchase, setPurchase] = useState<Purchase>(generateRandomPurchase());

  useEffect(() => {
    const showNotification = () => {
      setPurchase(generateRandomPurchase());
      setIsVisible(true);
      
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Show first notification after 5 seconds
    const initialTimeout = setTimeout(showNotification, 5000);

    // Show new notification every 20-40 seconds
    const interval = setInterval(() => {
      const delay = Math.random() * 20000 + 20000; // 20-40 seconds
      setTimeout(showNotification, delay);
    }, 40000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-sm animate-slide-in">
      <div className="flex items-start gap-3">
        <div className="bg-green-100 rounded-full p-2">
          <ShoppingCart className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <p className="text-sm font-medium text-gray-900">Nova compra realizada!</p>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Alguém em {purchase.location} acabou de comprar
          </p>
          <p className="text-sm font-medium text-gray-900 mt-1">
            {purchase.productName}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {purchase.timeAgo}
          </p>
        </div>
      </div>
    </div>
  );
}