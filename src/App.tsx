import React from 'react';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { SocialProof } from './components/SocialProof';
import { UrgencyBanner } from './components/UrgencyBanner';
import { LivePurchaseNotification } from './components/LivePurchaseNotification';
import { products } from './data/products';
import { Truck, ShieldCheck, Clock2 as Clock24, CreditCard } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SocialProof />
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Produtos Inovadores para Seu Dia a Dia
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Descubra produtos que vão transformar sua rotina. Qualidade garantida, 
            entrega expressa e os melhores preços do mercado!
          </p>
          
          <UrgencyBanner />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Por que Escolher a Achadinhos Express?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Frete Grátis</h3>
              <p className="text-gray-600">Entregamos em todo o Brasil sem custo adicional</p>
            </div>
            
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <Clock24 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Entrega Rápida</h3>
              <p className="text-gray-600">Receba em até 24 horas após a confirmação</p>
            </div>
            
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Garantia Total</h3>
              <p className="text-gray-600">Produtos originais com garantia de satisfação</p>
            </div>
            
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Pagamento Seguro</h3>
              <p className="text-gray-600">Pague apenas quando receber seu produto</p>
            </div>
          </div>
        </section>
      </main>

      <LivePurchaseNotification />
    </div>
  );
}

export default App;