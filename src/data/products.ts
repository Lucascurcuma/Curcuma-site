import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'garrafa-termica',
    name: 'Garrafa Térmica',
    image: 'https://http2.mlstatic.com/D_NQ_NP_748445-MLB72741644824_112023-O-garrafa-termica-500ml-com-3-xicaras-inox-camping-viagem-cafe.webp',
    description: 'Garrafa térmica premium com 3 xícaras de inox, perfeita para camping e viagens.',
    prices: [
      { quantity: 1, price: 99.99, checkoutUrl: 'https://entrega.logzz.com.br/pay/mempynlpw/dkrhn-1-garrafa-termica' },
      { quantity: 2, price: 189.99, checkoutUrl: 'https://entrega.logzz.com.br/pay/mempynlpw/pvnmh-2-garrafas-termicas' },
      { quantity: 3, price: 239.99, checkoutUrl: 'https://entrega.logzz.com.br/pay/mempynlpw/cwdyh-3-garrafas-termicas' }
    ]
  },
  {
    id: 'pistola-massageadora',
    name: 'Pistola Massageadora',
    image: 'https://http2.mlstatic.com/D_NQ_NP_784027-MLA82605997694_032025-O.webp',
    description: 'Pistola de massagem profissional para alívio muscular e relaxamento.',
    prices: [
      { quantity: 1, price: 129.99, checkoutUrl: 'https://entrega.logzz.com.br/pay/memx0vy8x/pistola-de-massagem-12999' },
      { quantity: 2, price: 199.99, checkoutUrl: 'https://entrega.logzz.com.br/pay/memx0vy8x/pistola-de-massagem-2-unidades-descontao' },
      { quantity: 3, price: 309.99, checkoutUrl: 'https://entrega.logzz.com.br/pay/memx0vy8x/pistola-de-massagem-3-unidades-30999' }
    ]
  },
  {
    id: 'mini-ar-condicionado',
    name: 'Mini Ar Condicionado TurboFrio',
    image: 'https://http2.mlstatic.com/D_NQ_NP_755780-MLB82324915222_022025-O-mini-ar-condicionado-portatil-umidificador-e-ventilador-leds.webp',
    description: 'Mini ar condicionado portátil com função de umidificador e ventilador.',
    prices: [
      { quantity: 1, price: 149.99, checkoutUrl: 'https://entrega.logzz.com.br/pay/memdnogk0/1-unidade-mini-ar-turbo-frio' },
      { quantity: 2, price: 219.99, checkoutUrl: 'https://entrega.logzz.com.br/pay/memdnogk0/2-unidades-mini-ar-turbo' },
      { quantity: 3, price: 319.99, checkoutUrl: 'https://entrega.logzz.com.br/pay/memdnogk0/3-unidades-mini-ar-promo' }
    ]
  },
  {
    id: 'escova-alisadora',
    name: 'Escova Alisadora 3 em 1',
    image: 'https://http2.mlstatic.com/D_NQ_NP_657239-MLU77126355658_062024-O.webp',
    description: 'Escova alisadora profissional com 3 funções em 1 para resultados perfeitos.',
    prices: [
      { quantity: 1, price: 109.99, checkoutUrl: 'https://entrega.logzz.com.br/pay/memypx0d6/uazoe-1-unidade-escova-alisadora' },
      { quantity: 2, price: 199.99, checkoutUrl: 'https://entrega.logzz.com.br/pay/memypx0d6/gituu-2-unidades-escova-alisadora' },
      { quantity: 3, price: 249.99, checkoutUrl: 'https://entrega.logzz.com.br/pay/memypx0d6/uyjbq-3-unidades-escova-alisadora' }
    ]
  },
  {
    id: 'esfregao-magico',
    name: 'Esfregão Mágico 360°',
    image: 'https://http2.mlstatic.com/D_NQ_NP_645066-MLU70799095980_082023-O.webp',
    description: 'Esfregão giratório 360° para limpeza eficiente e prática.',
    prices: [
      { quantity: 1, price: 109.99, checkoutUrl: 'https://entrega.logzz.com.br/pay/memk7rdxm/fvomi-1-unidade-esfregao-magico-360' },
      { quantity: 2, price: 189.99, checkoutUrl: 'https://entrega.logzz.com.br/pay/memk7rdxm/jfulo-2-unidades-esfregao-magico-360' },
      { quantity: 3, price: 239.99, checkoutUrl: 'https://entrega.logzz.com.br/pay/memk7rdxm/vkobn-3-unidades-esfregao-magico-360' }
    ]
  },
  {
    id: 'barbeador-dragao',
    name: 'Barbeador Dragão',
    image: 'https://http2.mlstatic.com/D_NQ_NP_893554-MLA82162885465_012025-O.webp',
    description: 'Barbeador elétrico profissional para um barbear preciso e confortável.',
    prices: [
      { quantity: 1, price: 119.99, checkoutUrl: 'https://entrega.logzz.com.br/pay/memx0rv4m/cmsbd-oferta-4' },
      { quantity: 2, price: 219.98, checkoutUrl: 'https://entrega.logzz.com.br/pay/memx0rv4m/2-maquinhas' }
    ]
  }
];