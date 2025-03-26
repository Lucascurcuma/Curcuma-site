export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  prices: {
    [key: string]: {
      price: number;
      affiliateLink: string;
    };
  };
  stock: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  image?: string;
  date: string;
  product: string;
  verified: boolean;
}