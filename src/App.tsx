import React, { useState, useEffect } from 'react';
import { ShoppingCart, Star, Truck, Battery, PenTool as Tool, Package, Zap, Lightbulb, Shield, Clock, ChevronDown, CreditCard, Lock, Phone, Mail, X, MapPin, User, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 59,
    seconds: 59
  });

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const productImages = [
    "https://i.pinimg.com/736x/2d/e5/33/2de53358bd0ba28e771ee43f4d5625b2.jpg",
    "https://i.pinimg.com/736x/14/14/59/1414597df4d01877bb3ea963bcd4763d.jpg",
    "https://i.pinimg.com/736x/d1/b3/5b/d1b35b2d3e49e6859b8dc51b5518310b.jpg",
    "https://i.pinimg.com/736x/0d/36/88/0d3688a7e58a6fca99395b14c5ef8fb3.jpg",
    "https://i.pinimg.com/736x/41/a9/83/41a98360307ec683d7c228105ea1ec0a.jpg"
  ];

  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    phone: '',
    address: '',
    neighborhood: '',
    reference: '',
    state: '',
    city: '',
    zipCode: ''
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const newSeconds = prevTime.seconds - 1;
        const newMinutes = newSeconds < 0 ? prevTime.minutes - 1 : prevTime.minutes;
        const newHours = newMinutes < 0 ? prevTime.hours - 1 : prevTime.hours;
        
        return {
          hours: newHours < 0 ? 0 : newHours,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => {
    return value.toString().padStart(2, '0');
  };

  const [isOpen, setIsOpen] = useState<Record<string, boolean>>({});

  const toggleFAQ = (id: string) => {
    setIsOpen(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCheckoutForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://43de-2804-7f0-bec3-1649-217c-cecc-85af-35e0.ngrok-free.app/webhook/webhookMX', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...checkoutForm,
          product: 'TALADRO AMARILLO KIT COMPLETO',
          price: 997.00,
          timestamp: new Date().toISOString()
        })
      });

      // Always proceed with the order confirmation
      setIsCheckoutOpen(false);
      setIsConfirmationOpen(true);
      
      // Reset form
      setCheckoutForm({
        name: '',
        phone: '',
        address: '',
        neighborhood: '',
        reference: '',
        state: '',
        city: '',
        zipCode: ''
      });

      // Prepare WhatsApp message
      const whatsappMessage = encodeURIComponent(
        "Hola, confirmo que he realizado mi pedido en *HogarPro*.\n\n" +
        "Compré: *KIT TALADRO INALÁMBRICO* por un total de *$997 MXN*.\n" +
        "Me comprometo a tener el medio de pago disponible al momento de la entrega.\n\n" +
        "Entiendo que mi pedido llegará aproximadamente en un plazo de *3 a 4 días hábiles*.\n" +
        "¡Gracias por la atención!"
      );
      
      // Open WhatsApp after a short delay
      setTimeout(() => {
        window.open(`https://wa.me/5511986908935?text=${whatsappMessage}`, '_blank');
      }, 2000);
      
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      // Continue with the order process even if there's an error
      setIsCheckoutOpen(false);
      setIsConfirmationOpen(true);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <Tool className="h-8 w-8 text-yellow-500 mr-2" />
            <span className="font-bold text-xl">HogarPro</span>
          </div>
          <div className="flex items-center">
            <ShoppingCart className="h-6 w-6" />
          </div>
        </div>
        <div className="bg-black text-white text-center py-2 text-sm">
          Envío gratis en pedidos superiores a $50 | Entrega rápida en todo el mundo
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-yellow-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-lg shadow-xl overflow-hidden bg-white">
                  <img 
                    src={productImages[currentImageIndex]} 
                    alt={`Taladro Amarillo Kit Completo ${currentImageIndex + 1}`} 
                    className="w-full h-auto max-h-[600px] object-contain mx-auto"
                  />
                  <button 
                    onClick={previousImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold transform rotate-12">
                    60% DESCUENTO
                  </div>
                </div>
                {/* Thumbnail Navigation */}
                <div className="flex justify-center mt-4 gap-2">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => selectImage(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all bg-white ${
                        currentImageIndex === index ? 'border-yellow-500 scale-110' : 'border-transparent opacity-70'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`Thumbnail ${index + 1}`} 
                        className="w-full h-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                PRODUCTO MÁS VENDIDO
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                EL KIT QUE TODO HOMBRE DE VERDAD NECESITA EN CASA
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6">
                KIT TALADRO INALÁMBRICO + 26 ACCESORIOS + 1 BATERÍA DE REGALO
              </h2>
              <p className="text-lg mb-6">
                TALADRO AMARILLO DOBLE BATERIA CUADRADA - KIT COMPLETO
              </p>
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
                <span className="ml-2 text-gray-600">(127 reseñas)</span>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg mb-6">
                <p className="text-sm">
                  <span className="font-bold">57 personas</span> están viendo este producto ahora
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                </div>
                <p className="text-sm mt-1">92% vendido</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-center mb-6">
              <span className="text-4xl font-bold text-red-600">$997.00</span>
              <span className="ml-3 text-xl text-gray-500 line-through">$2,497.00</span>
            </div>
            
            <button 
              onClick={() => setIsCheckoutOpen(true)}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg text-xl mb-4 transition duration-300 shadow-lg"
            >
              PIDE Y PAGA AL RECIBIR
            </button>
            
            <div className="flex items-center justify-center text-gray-600 mb-6">
              <Truck className="h-5 w-5 mr-2" />
              <span>Envío en 2 a 3 días</span>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center mb-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <p className="text-center">Pedido Realizado<br />(May 19th)</p>
              </div>
              
              <div className="flex-1 h-1 bg-yellow-300 mx-2"></div>
              
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center mb-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <p className="text-center">Pedido Listo<br />(May 20th)</p>
              </div>
              
              <div className="flex-1 h-1 bg-yellow-300 mx-2"></div>
              
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center mb-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <p className="text-center">Entregado<br />(May 22nd - 23rd)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            CARACTERÍSTICAS QUE HACEN DE ESTE TALADRO TU MEJOR INVERSIÓN
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-xl">Alto rendimiento</h3>
              </div>
              <p>Velocidad ajustable (0-1650 rpm y 0-450 rpm), par de torsión de 300 in-lb. Ideal para proyectos domésticos como construcción de cercas, reparación de muebles y más.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <Battery className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-xl">Doble batería</h3>
              </div>
              <p>Equipado con 2 baterías de litio y cargador incluido. Nunca detén tu trabajo por falta de energía.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <Tool className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-xl">Diseño ergonómico</h3>
              </div>
              <p>Compacto y ligero para reducir la fatiga del usuario y facilitar el acceso a áreas estrechas.</p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-xl">Kit completo</h3>
              </div>
              <p>Incluye las herramientas más útiles para diseño y reparación: brocas, puntas, dados, y un eje de extensión flexible.</p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <Tool className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-xl">Versátil</h3>
              </div>
              <p>Perfecto para trabajar en madera, metal y plástico. Ideal para colgar cuadros, montar muebles, apretar tornillos y proyectos DIY.</p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-xl">Luz LED integrada</h3>
              </div>
              <p>Aumenta la visibilidad en espacios oscuros o cerrados para un trabajo preciso.</p>
            </div>
            
            {/* Feature 7 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-xl">Calidad garantizada</h3>
              </div>
              <p>Materiales duraderos y construcción resistente para años de uso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kit Contents Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            KIT COMPLETO - TODO LO QUE NECESITAS EN UNA CAJA
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start">
              <div className="bg-yellow-500 p-2 rounded-full mr-4 mt-1">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Taladro inalámbrico profesional</h3>
                <p className="text-gray-600">Potente motor con dos velocidades para diferentes aplicaciones.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-yellow-500 p-2 rounded-full mr-4 mt-1">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">2 Baterías de Litio de larga duración</h3>
                <p className="text-gray-600">Incluye batería extra para trabajos prolongados sin interrupciones.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-yellow-500 p-2 rounded-full mr-4 mt-1">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Cargador rápido</h3>
                <p className="text-gray-600">Carga completa en menos de 1 hora para volver rápido al trabajo.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-yellow-500 p-2 rounded-full mr-4 mt-1">
                <span className="text-white font-bold">4</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Juego de Dados (12 piezas)</h3>
                <p className="text-gray-600">Diferentes tamaños para todo tipo de tuercas y tornillos.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-yellow-500 p-2 rounded-full mr-4 mt-1">
                <span className="text-white font-bold">5</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Juego de Brocas (8 piezas)</h3>
                <p className="text-gray-600">Para diferentes materiales: madera, metal, concreto y plástico.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-yellow-500 p-2 rounded-full mr-4 mt-1">
                <span className="text-white font-bold">6</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Juego de Puntas de Destornillador (6 piezas)</h3>
                <p className="text-gray-600">Incluye puntas Phillips, planas y Torx para cualquier necesidad.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-yellow-500 p-2 rounded-full mr-4 mt-1">
                <span className="text-white font-bold">7</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Eje de Extensión Flexible</h3>
                <p className="text-gray-600">Para llegar a lugares de difícil acceso con precisión.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-yellow-500 p-2 rounded-full mr-4 mt-1">
                <span className="text-white font-bold">8</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Estuche de Almacenamiento resistente</h3>
                <p className="text-gray-600">Mantén todo organizado y protegido en un maletín de alta durabilidad.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-yellow-100 p-6 rounded-lg max-w-2xl mx-auto">
            <p className="font-bold text-center">
              Nota importante: Cargue las baterías durante 7 a 8 horas para el primer uso.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            LO QUE DICEN NUESTROS CLIENTES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="mb-4 italic">"Transformó mis proyectos de bricolaje. La batería dura muchísimo y tiene potencia de sobra para todo lo que necesito hacer en casa."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-bold">Carlos Rodríguez</p>
                  <p className="text-sm text-gray-600">Cliente verificado</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="mb-4 italic">"Calidad profesional a precio accesible. Lo uso para mi trabajo de carpintería y no me ha fallado. El kit trae todo lo necesario."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-bold">Miguel Ángel Pérez</p>
                  <p className="text-sm text-gray-600">Cliente verificado</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="mb-4 italic">"La batería dura más de lo esperado. He montado todos los muebles de mi casa nueva con este taladro y todavía tenía carga. Muy recomendable."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-bold">Laura Martínez</p>
                  <p className="text-sm text-gray-600">Cliente verificado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-12 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">
              OFERTA ESPECIAL TERMINA EN:
            </h2>
            
            <div className="flex justify-center mb-8">
              <div className="bg-black text-white p-4 rounded-lg mx-1 w-20">
                <span className="text-3xl font-bold block">{formatTime(timeLeft.hours)}</span>
                <span className="text-xs">HORAS</span>
              </div>
              <div className="bg-black text-white p-4 rounded-lg mx-1 w-20">
                <span className="text-3xl font-bold block">{formatTime(timeLeft.minutes)}</span>
                <span className="text-xs">MINUTOS</span>
              </div>
              <div className="bg-black text-white p-4 rounded-lg mx-1 w-20">
                <span className="text-3xl font-bold block">{formatTime(timeLeft.seconds)}</span>
                <span className="text-xs">SEGUNDOS</span>
              </div>
            </div>
            
            <p className="text-xl font-bold mb-6 text-red-600">
              ¡Solo quedan 7 unidades disponibles a este precio!
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <div className="flex flex-col items-center">
                <Shield className="h-12 w-12 text-yellow-500 mb-2" />
                <p className="font-semibold">Garantía de devolución de 30 días</p>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="h-12 w-12 text-yellow-500 mb-2" />
                <p className="font-semibold">Garantía del fabricante de 1 año</p>
              </div>
            </div>
            
            <button 
              onClick={() => setIsCheckoutOpen(true)}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-xl shadow-lg transition duration-300 w-full md:w-auto md:px-12"
            >
              OBTÉN TU TALADRO AHORA - 60% DESCUENTO
            </button>
            <p className="mt-4 text-sm">Paga al recibir - Sin riesgos</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            PREGUNTAS FRECUENTES
          </h2>
          
          <div className="max-w-3xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="mb-4 border-b border-gray-200 pb-4">
              <button 
                className="flex justify-between items-center w-full text-left font-bold text-lg"
                onClick={() => toggleFAQ('faq1')}
              >
                ¿Cuánto tiempo dura la batería con una carga completa?
                <ChevronDown className={`h-5 w-5 transition-transform ${isOpen['faq1'] ? 'transform rotate-180' : ''}`} />
              </button>
              {isOpen['faq1'] && (
                <div className="mt-2 text-gray-600">
                  <p>Con una carga completa, cada batería dura aproximadamente 3-4 horas de uso continuo en trabajos ligeros y 1-2 horas en trabajos pesados. Al incluir dos baterías, puedes trabajar sin interrupciones simplemente cambiando de una a otra.</p>
                </div>
              )}
            </div>
            
            {/* FAQ Item 2 */}
            <div className="mb-4 border-b border-gray-200 pb-4">
              <button 
                className="flex justify-between items-center w-full text-left font-bold text-lg"
                onClick={() => toggleFAQ('faq2')}
              >
                ¿Cuál es la política de envío y entrega?
                <ChevronDown className={`h-5 w-5 transition-transform ${isOpen['faq2'] ? 'transform rotate-180' : ''}`} />
              </button>
              {isOpen['faq2'] && (
                <div className="mt-2 text-gray-600">
                  <p>Realizamos envíos a todo el país en 2-3 días hábiles. Para pedidos superiores a $50, el envío es gratuito. Puedes rastrear tu pedido con el número de seguimiento que recibirás por correo electrónico una vez que tu compra sea procesada.</p>
                </div>
              )}
            </div>
            
            {/* FAQ Item 3 */}
            <div className="mb-4 border-b border-gray-200 pb-4">
              <button 
                className="flex justify-between items-center w-full text-left font-bold text-lg"
                onClick={() => toggleFAQ('faq3')}
              >
                ¿Cómo funciona la garantía?
                <ChevronDown className={`h-5 w-5 transition-transform ${isOpen['faq3'] ? 'transform rotate-180' : ''}`} />
              </button>
              {isOpen['faq3'] && (
                <div className="mt-2 text-gray-600">
                  <p>El taladro cuenta con una garantía del fabricante de 1 año que cubre defectos de fabricación. Además, ofrecemos una garantía de devolución de 30 días si no estás satisfecho con el producto por cualquier motivo. Simplemente devuélvelo en su empaque original y te reembolsaremos el importe completo.</p>
                </div>
              )}
            </div>
            
            {/* FAQ Item 4 */}
            <div className="mb-4 border-b border-gray-200 pb-4">
              <button 
                className="flex justify-between items-center w-full text-left font-bold text-lg"
                onClick={() => toggleFAQ('faq4')}
              >
                ¿Es adecuado para uso profesional?
                <ChevronDown className={`h-5 w-5 transition-transform ${isOpen['faq4'] ? 'transform rotate-180' : ''}`} />
              </button>
              {isOpen['faq4'] && (
                <div className="mt-2 text-gray-600">
                  <p>Este taladro está diseñado principalmente para uso doméstico y proyectos de bricolaje, aunque muchos profesionales lo utilizan para trabajos ligeros y medianos. Para uso industrial intensivo o continuo, recomendamos modelos de gama profesional.</p>
                </div>
              )}
            </div>
            
            {/* FAQ Item 5 */}
            <div className="mb-4 border-b border-gray-200 pb-4">
              <button 
                className="flex justify-between items-center w-full text-left font-bold text-lg"
                onClick={() => toggleFAQ('faq5')}
              >
                ¿Qué materiales puede perforar?
                <ChevronDown className={`h-5 w-5 transition-transform ${isOpen['faq5'] ? 'transform rotate-180' : ''}`} />
              </button>
              {isOpen['faq5'] && (
                <div className="mt-2 text-gray-600">
                  <p>El taladro es versátil y puede trabajar con madera, metal, plástico y materiales compuestos. Con las brocas incluidas, podrás perforar la mayoría de superficies domésticas. Para concreto o mampostería, se recomienda usar brocas específicas para estos materiales (no incluidas).</p>
                </div>
              )}
            </div>
            
            {/* FAQ Item 6 */}
            <div className="mb-4">
              <button 
                className="flex justify-between items-center w-full text-left font-bold text-lg"
                onClick={() => toggleFAQ('faq6')}
              >
                ¿Puedo pagar al recibir el producto?
                <ChevronDown className={`h-5 w-5 transition-transform ${isOpen['faq6'] ? 'transform rotate-180' : ''}`} />
              </button>
              {isOpen['faq6'] && (
                <div className="mt-2 text-gray-600">
                  <p>Sí, ofrecemos la opción de pago contra entrega. Puedes examinar el producto antes de realizar el pago. Aceptamos efectivo y tarjetas de crédito/débito al momento de la entrega.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Popup Notification */}
      <div className="fixed bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs animate-bounce z-50">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
          <div>
            <p className="font-semibold">Juan acaba de comprar este producto</p>
            <p className="text-sm text-gray-500">hace 20 minutos</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Tool className="h-8 w-8 text-yellow-500 mr-2" />
                <span className="font-bold text-xl">HogarPro</span>
              </div>
              <p className="mb-4">Tu tienda de confianza para herramientas y productos para el hogar de alta calidad.</p>
              <div className="flex space-x-4">
                <Mail className="h-5 w-5" />
                <Phone className="h-5 w-5" />
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Medios de pago</h3>
              <div className="flex flex-wrap gap-2">
                <CreditCard className="h-8 w-8" />
                <CreditCard className="h-8 w-8" />
                <CreditCard className="h-8 w-8" />
                <CreditCard className="h-8 w-8" />
              </div>
              <div className="mt-6 flex items-center">
                <Lock className="h-5 w-5 mr-2" />
                <span>Pagos 100% seguros</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-yellow-500 transition duration-300">Política de privacidad</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition duration-300">Términos y condiciones</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition duration-300">Política de devoluciones</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition duration-300">Contacto</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 HogarPro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">PAGO CONTRA REEMBOLSO</h2>
                <button 
                  onClick={() => setIsCheckoutOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg mb-6">
                <img 
                  src={productImages[currentImageIndex]}
                  alt="Taladro Kit"
                  className="w-20 h-20 object-contain bg-white rounded"
                />
                <div>
                  <h3 className="font-semibold">TALADRO AMARILLO KIT COMPLETO</h3>
                  <p className="text-lg font-bold">$997.00</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Método de envío</h3>
                <div className="flex items-center gap-2 p-3 border rounded-lg">
                  <input type="radio" checked readOnly />
                  <Truck className="h-5 w-5 text-green-500" />
                  <span>Envío gratis</span>
                  <span className="ml-auto font-semibold">Gratis</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Nombre y apellido <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center border rounded-lg">
                    <div className="p-2 bg-gray-50 border-r">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={checkoutForm.name}
                      onChange={handleInputChange}
                      className="w-full p-2 outline-none"
                      placeholder="Nombre y apellido"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Celular (Whatsapp) <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center border rounded-lg">
                    <div className="p-2 bg-gray-50 border-r">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={checkoutForm.phone}
                      onChange={handleInputChange}
                      className="w-full p-2 outline-none"
                      placeholder="+52"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Dirección completa <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center border rounded-lg">
                    <div className="p-2 bg-gray-50 border-r">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="address"
                      value={checkoutForm.address}
                      onChange={handleInputChange}
                      className="w-full p-2 outline-none"
                      placeholder="(Calle y Número)"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Colonia <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center border rounded-lg">
                    <div className="p-2 bg-gray-50 border-r">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="neighborhood"
                      value={checkoutForm.neighborhood}
                      onChange={handleInputChange}
                      className="w-full p-2 outline-none"
                      placeholder="Ej: Nápoles"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Punto de Referencia
                  </label>
                  <div className="flex items-center border rounded-lg">
                    <div className="p-2 bg-gray-50 border-r">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="reference"
                      value={checkoutForm.reference}
                      onChange={handleInputChange}
                      className="w-full p-2 outline-none"
                      placeholder="Ej: Departamento 5B, Frente al OXXO"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Estado <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center border rounded-lg">
                    <div className="p-2 bg-gray-50 border-r">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="state"
                      value={checkoutForm.state}
                      onChange={handleInputChange}
                      className="w-full p-2 outline-none"
                      placeholder="Estado"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Ciudad <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center border rounded-lg">
                    <div className="p-2 bg-gray-50 border-r">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="city"
                      value={checkoutForm.city}
                      onChange={handleInputChange}
                      className="w-full p-2 outline-none"
                      placeholder="Ciudad"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Código postal <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center border rounded-lg">
                    <div className="p-2 bg-gray-50 border-r">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="zipCode"
                      value={checkoutForm.zipCode}
                      onChange={handleInputChange}
                      className="w-full p-2 outline-none"
                      placeholder="Código postal"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
                >
                  COMPRAR AHORA - $997.00
                </button>
                <p className="text-center text-sm text-gray-500">Sin cobros ocultos</p>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {isConfirmationOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 text-center">
            <div className="mb-4">
              <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
            </div>
            <h2 className="text-2xl font-bold mb-4">¡Pedido Confirmado!</h2>
            <p className="text-gray-600 mb-6">
              Tu pedido ha sido registrado con éxito y está siendo preparado. 
              Te redirigiremos a WhatsApp para confirmar los detalles de tu compra.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setIsConfirmationOpen(false)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;