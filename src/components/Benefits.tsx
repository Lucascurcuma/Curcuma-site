import React from 'react';
import { CreditCard, Truck, Shield, CheckCircle } from 'lucide-react';

export const Benefits = () => {
  const benefits = [
    {
      icon: <CreditCard className="w-12 h-12 text-green-600" />,
      title: 'Pagamento na Entrega',
      description: 'Pague apenas quando receber seu produto',
    },
    {
      icon: <Truck className="w-12 h-12 text-green-600" />,
      title: 'Entrega em 24h',
      description: 'Receba seu pedido no dia seguinte',
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: 'Garantia de Satisfação',
      description: '30 dias para trocar ou devolver',
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-green-600" />,
      title: 'Produtos Originais',
      description: '100% autênticos e com garantia',
    },
  ];

  return (
    <section id="benefits" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Por que escolher a ShopExpress?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};