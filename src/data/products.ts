import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'thermal-bottle',
    name: 'Garrafa Térmica Premium 500ml',
    image: 'https://http2.mlstatic.com/D_NQ_NP_748445-MLB72741644824_112023-O-garrafa-termica-500ml-com-3-xicaras-inox-camping-viagem-cafe.webp',
    description: '🔥 Kit Completo com 3 Xícaras! Mantenha seu café quente por até 12h e bebidas geladas por 24h. Design premium em aço inox, ideal para casa, escritório ou viagens. BÔNUS: 3 xícaras de inox inclusas!',
    prices: {
      '1': { 
        price: 99.99, 
        affiliateLink: 'https://entrega.logzz.com.br/pay/mempynlpw/dkrhn-1-garrafa-termica'
      },
      '2': { 
        price: 189.99, 
        affiliateLink: 'https://entrega.logzz.com.br/pay/mempynlpw/pvnmh-2-garrafas-termicas'
      },
      '3': { 
        price: 239.99, 
        affiliateLink: 'https://entrega.logzz.com.br/pay/mempynlpw/cwdyh-3-garrafas-termicas'
      }
    },
    stock: 5,
  },
  {
    id: 'massage-gun',
    name: 'Pistola Massageadora Profissional',
    image: 'https://http2.mlstatic.com/D_NQ_NP_784027-MLA82605997694_032025-O.webp',
    description: '💪 Tecnologia Profissional de Fisioterapeutas! 30 velocidades, ultra silenciosa, bateria de longa duração. Alivia dores musculares instantaneamente. Ideal para atletas e praticantes de atividade física. BÔNUS: 6 ponteiras diferentes!',
    prices: {
      '1': { 
        price: 129.99, 
        affiliateLink: 'https://entrega.logzz.com.br/pay/memx0vy8x/pistola-de-massagem-12999'
      },
      '2': { 
        price: 199.99, 
        affiliateLink: 'https://entrega.logzz.com.br/pay/memx0vy8x/pistola-de-massagem-2-unidades-descontao'
      },
      '3': { 
        price: 309.99, 
        affiliateLink: 'https://entrega.logzz.com.br/pay/memx0vy8x/pistola-de-massagem-3-unidades-30999'
      }
    },
    stock: 8,
  },
  {
    id: 'mini-ac',
    name: 'Mini Ar Condicionado TurboFrio',
    image: 'https://http2.mlstatic.com/D_NQ_NP_755780-MLB82324915222_022025-O-mini-ar-condicionado-portatil-umidificador-e-ventilador-leds.webp',
    description: '❄️ 3 em 1: Climatiza, Umidifica e Ventila! Tecnologia TurboFrio com LEDs relaxantes. Portátil, econômico e super silencioso. Refresque seu ambiente gastando 10x menos energia! BÔNUS: Filtro extra + Essência relaxante.',
    prices: {
      '1': { 
        price: 149.99, 
        affiliateLink: 'https://entrega.logzz.com.br/pay/memdnogk0/1-unidade-mini-ar-turbo-frio'
      },
      '2': { 
        price: 219.99, 
        affiliateLink: 'https://entrega.logzz.com.br/pay/memdnogk0/2-unidades-mini-ar-turbo'
      },
      '3': { 
        price: 319.99, 
        affiliateLink: 'https://entrega.logzz.com.br/pay/memdnogk0/3-unidades-mini-ar-promo'
      }
    },
    stock: 10,
  },
  {
    id: 'hair-brush',
    name: 'Escova Alisadora 3 em 1',
    image: 'https://http2.mlstatic.com/D_NQ_NP_657239-MLU77126355658_062024-O.webp',
    description: '💇‍♀️ Tecnologia Profissional de Salão! Alisa, modela e dá volume em minutos. Controle digital de temperatura, ions negativos para cabelos mais saudáveis. BÔNUS: Nécessaire térmica + Óleo de argan!',
    prices: {
      '1': { 
        price: 109.99, 
        affiliateLink: 'https://entrega.logzz.com.br/pay/memypx0d6/uazoe-1-unidade-escova-alisadora'
      },
      '2': { 
        price: 199.99, 
        affiliateLink: 'https://entrega.logzz.com.br/pay/memypx0d6/gituu-2-unidades-escova-alisadora'
      },
      '3': { 
        price: 249.99, 
        affiliateLink: 'https://entrega.logzz.com.br/pay/memypx0d6/uyjbq-3-unidades-escova-alisadora'
      }
    },
    stock: 15,
  },
  {
    id: 'magic-mop',
    name: 'Esfregão Mágico 360°',
    image: 'https://http2.mlstatic.com/D_NQ_NP_645066-MLU70799095980_082023-O.webp',
    description: '✨ Revolução na Limpeza! Sistema profissional com rotação 360° e centrifuga de alta potência. Limpa, seca e higieniza em um único movimento. BÔNUS: Refil extra + Desinfetante concentrado!',
    prices: {
      '1': { 
        price: 109.99, 
        affiliateLink: 'https://entrega.logzz.com.br/pay/memk7rdxm/fvomi-1-unidade-esfregao-magico-360'
      },
      '2': { 
        price: 189.99, 
        affiliateLink: 'https://entrega.logzz.com.br/pay/memk7rdxm/jfulo-2-unidades-esfregao-magico-360'
      },
      '3': { 
        price: 239.99, 
        affiliateLink: 'https://entrega.logzz.com.br/pay/memk7rdxm/vkobn-3-unidades-esfregao-magico-360'
      }
    },
    stock: 12,
  },
  {
    id: 'dragon-shaver',
    name: 'Barbeador Dragão',
    image: 'https://http2.mlstatic.com/D_NQ_NP_893554-MLA82162885465_012025-O.webp',
    description: '🐉 O Barbeador Mais Vendido do Brasil! Lâminas de titânio, design ergonômico, totalmente à prova d\'água. Faça seu barbear como um profissional! BÔNUS: Óleo para barba + Nécessaire exclusiva.',
    prices: {
      '1': { 
        price: 119.99, 
        affiliateLink: 'https://entrega.logzz.com.br/pay/memx0rv4m/cmsbd-oferta-4'
      },
      '2': { 
        price: 219.98, 
        affiliateLink: 'https://entrega.logzz.com.br/pay/memx0rv4m/2-maquinhas'
      }
    },
    stock: 7,
  }
];