import React, { useState, useEffect } from 'react';
import {
  Star,
  Check,
  Shield,
  Clock,
  Heart,
  Brain,
  Sparkles,
  ArrowRight,
  ShoppingCart,
  AlertCircle,
  Truck,
  CreditCard,
  Package,
  ThumbsUp,
  Medal,
  Gift
} from 'lucide-react';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2 justify-center text-3xl font-bold">
        <div className="bg-red-600 text-white px-4 py-3 rounded-lg shadow-lg">
          {String(minutes).padStart(2, '0')}
        </div>
        <span className="text-white text-4xl">:</span>
        <div className="bg-red-600 text-white px-4 py-3 rounded-lg shadow-lg">
          {String(seconds).padStart(2, '0')}
        </div>
      </div>
      <p className="text-white mt-2 animate-pulse">⚡ Oferta por tempo limitado! ⚡</p>
    </div>
  );
}

function BenefitBadge({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-yellow-200 shadow-md">
      <Icon className="text-green-600" size={24} />
      <span className="font-medium text-gray-800">{text}</span>
    </div>
  );
}

const PURCHASE_LINKS = {
  1: 'https://entrega.logzz.com.br/pay/memvylo8v/promocao-de-hj',
  2: 'https://entrega.logzz.com.br/pay/memvylo8v/promocao-de-relanpogo',
  3: 'https://entrega.logzz.com.br/pay/memvylo8v/promocao-de-hoje',
  5: 'https://entrega.logzz.com.br/pay/memvylo8v/tnvdx-promocao-relampago'
};

function ProductCard({ pack, price, originalPrice, savings, perUnit, isPopular }: {
  pack: number;
  price: number;
  originalPrice: number;
  savings: number;
  perUnit: number;
  isPopular?: boolean;
}) {
  return (
    <div className={`relative border-2 ${isPopular ? 'border-yellow-500 scale-105' : 'border-gray-200'} rounded-lg p-6 hover:shadow-xl transition-all duration-300 bg-white`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-bold">
          MAIS POPULAR
        </div>
      )}
      <div className="absolute -top-3 -right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
        -{Math.round((savings / originalPrice) * 100)}%
      </div>
      <h3 className="text-xl font-bold mb-4">Pacote com {pack} {pack === 1 ? 'Unidade' : 'Unidades'}</h3>
      <div className="mb-4">
        <span className="line-through text-gray-500">De R$ {originalPrice.toFixed(2)}</span>
        <div className="text-3xl font-bold text-green-600">
          R$ {price.toFixed(2)}
        </div>
        {pack > 1 && (
          <div className="text-sm text-gray-600">
            Cada unidade sai por R$ {perUnit.toFixed(2)}
          </div>
        )}
      </div>
      <div className="text-red-600 font-semibold mb-4">
        Economize R$ {savings.toFixed(2)}!
      </div>
      <ul className="mb-6 space-y-2">
        <li className="flex items-center gap-2 text-gray-700">
          <Check className="text-green-600" size={20} /> Frete Grátis
        </li>
        <li className="flex items-center gap-2 text-gray-700">
          <Check className="text-green-600" size={20} /> Entrega em 24h
        </li>
        <li className="flex items-center gap-2 text-gray-700">
          <Check className="text-green-600" size={20} /> Pague na Entrega
        </li>
      </ul>
      <a 
        href={PURCHASE_LINKS[pack as keyof typeof PURCHASE_LINKS]}
        className={`w-full ${isPopular ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-600 hover:bg-green-700'} text-white py-4 px-6 rounded-lg font-bold transition-colors flex items-center justify-center gap-2 text-lg`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ShoppingCart size={24} />
        COMPRAR AGORA
      </a>
    </div>
  );
}

function Testimonial({ name, age, city, text }: {
  name: string;
  age: number;
  city: string;
  text: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-lg">{name}, {age} anos</h4>
          <p className="text-gray-600">{city}</p>
        </div>
      </div>
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="fill-yellow-400 text-yellow-400" size={20} />
        ))}
      </div>
      <p className="text-gray-700 italic">&ldquo;{text}&rdquo;</p>
    </div>
  );
}

function BenefitCard({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <Icon className="text-yellow-500 mb-4" size={40} />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentVisitor, setCurrentVisitor] = useState(487);

  useEffect(() => {
    // Recent sales popup
    const interval = setInterval(() => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }, 10000);

    // Live visitor counter
    const visitorInterval = setInterval(() => {
      setCurrentVisitor(prev => {
        const change = Math.floor(Math.random() * 3) - 1;
        return Math.max(450, prev + change);
      });
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(visitorInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="text-3xl font-bold mb-3">⚡ MEGA PROMOÇÃO RELÂMPAGO! ⚡</div>
          <p className="text-xl mb-6">Corra! Você tem apenas 5 minutos para aproveitar o menor preço já visto!</p>
          <CountdownTimer />
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <BenefitBadge icon={Truck} text="Frete Grátis" />
            <BenefitBadge icon={CreditCard} text="Pague na Entrega" />
            <BenefitBadge icon={Package} text="Receba em 24h" />
          </div>
        </div>
      </div>

      {/* Live Visitor Counter */}
      <div className="bg-white border-b border-gray-200 py-2">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <span className="inline-flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            {currentVisitor} pessoas estão vendo esta página agora
          </span>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
          Descubra o Poder da Cúrcuma em Pó Encapsulada
        </h1>
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="relative">
            <img
              src="https://logzz-s3.s3.us-east-2.amazonaws.com/uploads/files/products/20241125-161135pron646p.png"
              alt="Cúrcuma em Pó"
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -top-4 -right-4 bg-red-600 text-white px-6 py-2 rounded-full text-lg font-bold transform rotate-12">
              -30% OFF
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-xl leading-relaxed">
              Imagine acordar todos os dias com mais energia, menos dores e uma saúde radiante.
              A cúrcuma, conhecida como o "ouro da natureza", agora em cápsulas para máxima praticidade e eficiência!
            </p>
            <div className="grid gap-4">
              <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
                <Check className="text-green-600" size={24} />
                <span className="font-medium">100% Natural e Puro</span>
              </div>
              <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
                <Medal className="text-green-600" size={24} />
                <span className="font-medium">Certificado de Qualidade</span>
              </div>
              <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
                <ThumbsUp className="text-green-600" size={24} />
                <span className="font-medium">+ de 50.000 Clientes Satisfeitos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por que a Cúrcuma é Essencial para Sua Saúde?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard
              icon={Heart}
              title="Ação Anti-inflamatória"
              description="Reduz inflamações e alivia dores articulares, devolvendo sua mobilidade e bem-estar."
            />
            <BenefitCard
              icon={Sparkles}
              title="Antioxidante Potente"
              description="Combate os radicais livres, retardando o envelhecimento e fortalecendo seu sistema imunológico."
            />
            <BenefitCard
              icon={Brain}
              title="Mente Equilibrada"
              description="Melhora a clareza mental e ajuda a reduzir sintomas de ansiedade e depressão."
            />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8">
            Por que Comprar Conosco?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Truck className="mx-auto text-green-600 mb-4" size={40} />
              <h3 className="font-semibold mb-2">Frete Grátis</h3>
              <p className="text-gray-600">Para todo o Brasil</p>
            </div>
            <div className="text-center">
              <CreditCard className="mx-auto text-green-600 mb-4" size={40} />
              <h3 className="font-semibold mb-2">Pague na Entrega</h3>
              <p className="text-gray-600">Sem risco, sem burocracia</p>
            </div>
            <div className="text-center">
              <Clock className="mx-auto text-green-600 mb-4" size={40} />
              <h3 className="font-semibold mb-2">Entrega Express</h3>
              <p className="text-gray-600">Receba em até 24h</p>
            </div>
            <div className="text-center">
              <Gift className="mx-auto text-green-600 mb-4" size={40} />
              <h3 className="font-semibold mb-2">Brindes Exclusivos</h3>
              <p className="text-gray-600">Em compras acima de R$ 197</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            O que Nossos Clientes Estão Dizendo?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Testimonial
              name="Ana S."
              age={35}
              city="São Paulo"
              text="Eu senti uma melhora enorme nas minhas articulações e a energia aumentou após começar a tomar a cúrcuma em cápsulas!"
            />
            <Testimonial
              name="Carlos R."
              age={42}
              city="Rio de Janeiro"
              text="Minha digestão melhorou muito, e me sinto mais disposto no dia a dia. Vale cada centavo!"
            />
            <Testimonial
              name="Mariana L."
              age={50}
              city="Belo Horizonte"
              text="Depois de um mês usando, minhas dores nas costas diminuíram significativamente. Estou muito satisfeita!"
            />
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            Escolha o Seu Pacote e Economize!
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Quanto maior o pacote, maior seu desconto!
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard
              pack={1}
              price={97}
              originalPrice={137}
              savings={40}
              perUnit={97}
            />
            <ProductCard
              pack={2}
              price={147}
              originalPrice={197}
              savings={50}
              perUnit={73.50}
            />
            <ProductCard
              pack={3}
              price={197}
              originalPrice={257}
              savings={60}
              perUnit={65.67}
              isPopular={true}
            />
            <ProductCard
              pack={5}
              price={397}
              originalPrice={497}
              savings={100}
              perUnit={79.40}
            />
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="bg-white rounded-2xl p-8 shadow-lg text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">
            Garantia de Satisfação ou Seu Dinheiro de Volta!
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Shield className="text-green-600 mb-4" size={48} />
              <h3 className="font-semibold text-lg mb-2">Compra 100% Segura</h3>
              <p className="text-gray-600">Pagamento somente na entrega</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="text-green-600 mb-4" size={48} />
              <h3 className="font-semibold text-lg mb-2">Entrega Expressa</h3>
              <p className="text-gray-600">Receba em até 24 horas</p>
            </div>
            <div className="flex flex-col items-center">
              <AlertCircle className="text-green-600 mb-4" size={48} />
              <h3 className="font-semibold text-lg mb-2">Garantia de 30 Dias</h3>
              <p className="text-gray-600">Satisfação garantida ou dinheiro de volta</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-12 shadow-xl">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Não perca esta chance de transformar sua saúde!
          </h2>
          <p className="text-xl mb-8 text-white">
            A oferta relâmpago está quase no fim, e o estoque é limitado.
          </p>
          <a
            href={PURCHASE_LINKS[3]}
            className="bg-green-600 text-white py-4 px-8 rounded-lg text-xl font-bold hover:bg-green-700 transition-colors flex items-center gap-2 mx-auto inline-flex"
            target="_blank"
            rel="noopener noreferrer"
          >
            COMPRE AGORA E SINTA A DIFERENÇA!
            <ArrowRight />
          </a>
        </section>
      </main>

      {/* Recent Sales Popup */}
      {showPopup && (
        <div className="fixed bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg animate-slide-up">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <ShoppingCart className="text-green-600" size={24} />
            </div>
            <div>
              <p className="font-semibold">João de SP</p>
              <p className="text-sm text-gray-600">acabou de comprar 3 unidades!</p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Benefits Badge */}
      <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg hidden md:block">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm">
            <Truck className="text-green-600" size={20} />
            <span>Frete Grátis</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CreditCard className="text-green-600" size={20} />
            <span>Pague na Entrega</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="text-green-600" size={20} />
            <span>Entrega em 24h</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;