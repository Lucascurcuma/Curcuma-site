export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  prices: {
    quantity: number;
    price: number;
    checkoutUrl: string;
  }[];
}

export interface ProductCardProps {
  product: Product;
}